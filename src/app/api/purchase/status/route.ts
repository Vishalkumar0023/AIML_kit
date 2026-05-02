import { getPurchaseByProviderOrderId, getPurchaseByReceipt } from "@/lib/order-store";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get("orderId");
  const receipt = searchParams.get("receipt");

  if (!orderId && !receipt) {
    return Response.json({ error: "orderId or receipt is required." }, { status: 400 });
  }

  const purchase = orderId
    ? await getPurchaseByProviderOrderId(orderId)
    : await getPurchaseByReceipt(receipt as string);

  if (!purchase) {
    return Response.json({ error: "Purchase not found." }, { status: 404 });
  }

  return Response.json({
    fullName: purchase.fullName,
    paymentEmail: purchase.paymentEmail,
    driveAccessEmail: purchase.driveAccessEmail,
    paymentStatus: purchase.paymentStatus,
    deliveryStatus: purchase.deliveryStatus,
    notes: purchase.notes,
    providerOrderId: purchase.providerOrderId,
    receipt: purchase.receipt
  });
}
