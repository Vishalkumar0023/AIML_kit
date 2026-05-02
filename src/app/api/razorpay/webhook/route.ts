import { fulfillPurchase } from "@/lib/fulfillment";
import { getPurchaseByProviderOrderId, updatePurchase } from "@/lib/order-store";
import { verifyWebhookSignature } from "@/lib/razorpay";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const signature = request.headers.get("x-razorpay-signature");

    if (!signature) {
      return new Response("Missing webhook signature.", { status: 400 });
    }

    const rawBody = await request.text();
    const isValid = verifyWebhookSignature(rawBody, signature);

    if (!isValid) {
      return new Response("Invalid webhook signature.", { status: 400 });
    }

    const event = JSON.parse(rawBody) as {
      event: string;
      payload?: {
        payment?: {
          entity?: {
            id: string;
            order_id: string;
            status: string;
          };
        };
      };
    };

    const paymentEntity = event.payload?.payment?.entity;

    if (!paymentEntity?.order_id) {
      return Response.json({ received: true, ignored: true });
    }

    const purchase = await getPurchaseByProviderOrderId(paymentEntity.order_id);

    if (!purchase) {
      return Response.json({ received: true, ignored: true });
    }

    if (event.event === "payment.captured" || event.event === "order.paid") {
      const updated = await updatePurchase(
        purchase.id,
        {
          providerPaymentId: paymentEntity.id,
          paymentStatus: "captured",
          deliveryStatus: "not_started",
          notes: `Webhook confirmed captured payment via ${event.event}.`
        },
        "webhook_payment_captured"
      );

      if (updated) {
        await fulfillPurchase(updated);
      }
    }

    if (event.event === "payment.authorized") {
      await updatePurchase(
        purchase.id,
        {
          providerPaymentId: paymentEntity.id,
          paymentStatus: "authorized",
          deliveryStatus: "pending_capture",
          notes: "Webhook confirmed authorized payment. Waiting for capture."
        },
        "webhook_payment_authorized"
      );
    }

    if (event.event === "payment.failed") {
      await updatePurchase(
        purchase.id,
        {
          providerPaymentId: paymentEntity.id,
          paymentStatus: "failed",
          deliveryStatus: "not_started",
          notes: "Webhook reported payment failure."
        },
        "webhook_payment_failed"
      );
    }

    return Response.json({ received: true });
  } catch (error) {
    console.error("Razorpay webhook error:", error);
    return new Response("Webhook handling failed.", { status: 500 });
  }
}
