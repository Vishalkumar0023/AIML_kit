import { fulfillPurchase } from "@/lib/fulfillment";
import { getPurchaseByProviderOrderId, updatePurchase } from "@/lib/order-store";
import { fetchRazorpayPayment, verifyCheckoutSignature } from "@/lib/razorpay";

export const runtime = "nodejs";

type VerifyPayload = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as VerifyPayload;

    if (!payload.razorpay_order_id || !payload.razorpay_payment_id || !payload.razorpay_signature) {
      return Response.json({ error: "Missing Razorpay verification fields." }, { status: 400 });
    }

    const purchase = await getPurchaseByProviderOrderId(payload.razorpay_order_id);

    if (!purchase) {
      return Response.json({ error: "Purchase record not found for this order." }, { status: 404 });
    }

    const isValid = verifyCheckoutSignature({
      orderId: payload.razorpay_order_id,
      paymentId: payload.razorpay_payment_id,
      signature: payload.razorpay_signature
    });

    if (!isValid) {
      await updatePurchase(
        purchase.id,
        {
          paymentStatus: "failed",
          notes: "Razorpay signature verification failed."
        },
        "signature_verification_failed"
      );

      return Response.json({ error: "Payment verification failed." }, { status: 400 });
    }

    const payment = await fetchRazorpayPayment(payload.razorpay_payment_id);
    const paymentStatus =
      payment.status === "captured"
        ? "captured"
        : payment.status === "authorized"
          ? "authorized"
          : "verification_pending";

    const deliveryStatus = payment.status === "captured" ? "not_started" : "pending_capture";

    const updated = await updatePurchase(
      purchase.id,
      {
        providerPaymentId: payment.id,
        paymentStatus,
        deliveryStatus,
        notes: `Client verification completed. Razorpay payment status: ${payment.status}.`
      },
      "client_verification_completed"
    );

    const fulfilled =
      payment.status === "captured" && updated ? await fulfillPurchase(updated) : updated;

    return Response.json({
      success: true,
      paymentStatus: payment.status,
      deliveryStatus: fulfilled?.deliveryStatus ?? deliveryStatus,
      orderId: payload.razorpay_order_id,
      paymentId: payload.razorpay_payment_id,
      receipt: purchase.receipt,
      accessEmail: purchase.driveAccessEmail,
      message:
        payment.status === "captured"
          ? "Payment verified. Please send the payment/order details from the thank-you page to receive your Google Drive link manually."
          : "Payment verified. Delivery will be completed after Razorpay capture/webhook confirmation."
    });
  } catch (error) {
    console.error("Verify payment error:", error);
    return Response.json(
      { error: "Unable to verify payment right now. Please try again." },
      { status: 500 }
    );
  }
}
