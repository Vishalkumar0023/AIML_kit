import { fulfillPurchase } from "@/lib/fulfillment";
import { getPurchaseByProviderOrderId, updatePurchase } from "@/lib/order-store";
import { fetchRazorpayOrder, fetchRazorpayPayment, verifyCheckoutSignature } from "@/lib/razorpay";
import { getDeliveryMode } from "@/lib/purchase-config";
import type { PurchaseRecord } from "@/types";

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

    const storedPurchase = await getPurchaseByProviderOrderId(payload.razorpay_order_id);
    const fallbackOrder = storedPurchase ? null : await fetchRazorpayOrder(payload.razorpay_order_id);
    const purchase =
      storedPurchase ??
      ({
        id: `transient_${payload.razorpay_order_id}`,
        fullName: fallbackOrder?.notes?.buyer_name ?? "Buyer",
        paymentEmail: fallbackOrder?.notes?.payment_email ?? "",
        driveAccessEmail:
          fallbackOrder?.notes?.delivery_email ?? fallbackOrder?.notes?.payment_email ?? "",
        phone: fallbackOrder?.notes?.buyer_phone || undefined,
        receipt: fallbackOrder?.receipt ?? "",
        providerOrderId: payload.razorpay_order_id,
        paymentStatus: "created",
        deliveryStatus: "not_started",
        notes: "Transient Razorpay-backed order",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        amount: 0,
        currency: "INR",
        productName: "Python for AI/ML Beginner Starter Kit"
      });

    const isValid = verifyCheckoutSignature({
      orderId: payload.razorpay_order_id,
      paymentId: payload.razorpay_payment_id,
      signature: payload.razorpay_signature
    });

    if (!isValid) {
      if (storedPurchase) {
        await updatePurchase(
          purchase.id,
          {
            paymentStatus: "failed",
            notes: "Razorpay signature verification failed."
          },
          "signature_verification_failed"
        );
      }

      return Response.json({ error: "Payment verification failed." }, { status: 400 });
    }

    const payment = await fetchRazorpayPayment(payload.razorpay_payment_id);
    const paymentStatus: PurchaseRecord["paymentStatus"] =
      payment.status === "captured"
        ? "captured"
        : payment.status === "authorized"
          ? "authorized"
          : "verification_pending";

    const deliveryStatus: PurchaseRecord["deliveryStatus"] =
      payment.status === "captured" ? "not_started" : "pending_capture";

    const updated = storedPurchase
      ? await updatePurchase(
          purchase.id,
          {
            providerPaymentId: payment.id,
            paymentStatus,
            deliveryStatus,
            notes: `Client verification completed. Razorpay payment status: ${payment.status}.`
          },
          "client_verification_completed"
        )
      : {
          ...purchase,
          providerPaymentId: payment.id,
          paymentStatus,
          deliveryStatus,
          notes: `Client verification completed. Razorpay payment status: ${payment.status}.`
        };

    const fulfilled =
      payment.status === "captured"
        ? storedPurchase && updated
          ? await fulfillPurchase(updated)
          : {
              ...updated,
              deliveryStatus: getDeliveryMode() === "manual" ? "manual_review" : deliveryStatus,
              notes:
                "Payment verified. Buyer should send the payment transaction ID or order details on Instagram, Telegram, or email to receive the Drive link manually."
            }
        : updated;

    return Response.json({
      success: true,
      paymentStatus: payment.status,
      deliveryStatus: fulfilled?.deliveryStatus ?? deliveryStatus,
      orderId: payload.razorpay_order_id,
      paymentId: payload.razorpay_payment_id,
      receipt: purchase.receipt,
      accessEmail: purchase.driveAccessEmail,
      fullName: purchase.fullName,
      paymentEmail: purchase.paymentEmail,
      phone: purchase.phone ?? "",
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
