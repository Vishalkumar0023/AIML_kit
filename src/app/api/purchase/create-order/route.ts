import { createPurchaseDraft, updatePurchase } from "@/lib/order-store";
import { purchaseConfig } from "@/lib/purchase-config";
import { createRazorpayOrder } from "@/lib/razorpay";
import { isValidEmail, isValidPhone } from "@/lib/utils";
import type { PurchaseFormPayload } from "@/types";

export const runtime = "nodejs";

function validatePayload(payload: PurchaseFormPayload) {
  if (!payload.fullName?.trim()) return "Full name is required.";
  if (!isValidEmail(payload.paymentEmail ?? "")) return "Valid payment email is required.";
  if (!isValidPhone(payload.phone ?? "")) return "Please enter a valid phone number.";
  return null;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as PurchaseFormPayload;
    const error = validatePayload(payload);

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return Response.json(
        {
          error:
            "Razorpay is not configured yet. Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET first."
        },
        { status: 503 }
      );
    }

    const draft = await createPurchaseDraft(payload);
    const order = await createRazorpayOrder({
      amount: purchaseConfig.amountInPaise,
      currency: purchaseConfig.currency,
      receipt: draft.receipt,
      notes: {
        buyer_name: draft.fullName,
        payment_email: draft.paymentEmail,
        delivery_email: draft.paymentEmail
      }
    });

    const updated = await updatePurchase(
      draft.id,
      {
        providerOrderId: order.id,
        paymentStatus: "checkout_opened",
        notes: `Razorpay order created with receipt ${draft.receipt}.`
      },
      "razorpay_order_created"
    );

    return Response.json({
      keyId: process.env.RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      orderId: order.id,
      receipt: order.receipt,
      purchaseId: updated?.id ?? draft.id,
      productName: purchaseConfig.productName,
      buyer: {
        fullName: draft.fullName,
        paymentEmail: draft.paymentEmail,
        phone: draft.phone
      }
    });
  } catch (error) {
    console.error("Create order error:", error);
    const message =
      error instanceof Error ? error.message : "Unable to start payment right now. Please try again.";

    return Response.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? message
            : "Unable to start payment right now. Please try again."
      },
      { status: 500 }
    );
  }
}
