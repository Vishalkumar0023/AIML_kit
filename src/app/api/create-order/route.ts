import { getProductById } from "@/lib/platform-content";
import { createRazorpayOrder } from "@/lib/razorpay";

export const runtime = "nodejs";

type CreateOrderPayload = {
  productId?: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CreateOrderPayload;
    const product = getProductById(payload.productId ?? "");

    if (!product || product.type !== "paid" || !product.amountInPaise) {
      return Response.json({ error: "Invalid paid product." }, { status: 400 });
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

    const receipt = `ord_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    const order = await createRazorpayOrder({
      amount: product.amountInPaise,
      currency: "INR",
      receipt,
      notes: {
        product_id: product.id,
        product_title: product.title
      }
    });

    return Response.json({
      keyId: process.env.RAZORPAY_KEY_ID,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
      product: {
        id: product.id,
        title: product.title,
        priceLabel: product.priceLabel
      }
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to create Razorpay order right now.";

    return Response.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? message
            : "Unable to create Razorpay order right now."
      },
      { status: 500 }
    );
  }
}
