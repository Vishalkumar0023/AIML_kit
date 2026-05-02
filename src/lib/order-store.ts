import type { PurchaseFormPayload, PurchaseRecord } from "@/types";
import { promises as fs } from "fs";
import path from "path";
import { purchaseConfig } from "./purchase-config";

const PURCHASES_FILE = path.join(process.cwd(), "data", "purchases.json");

async function readPurchases() {
  try {
    const file = await fs.readFile(PURCHASES_FILE, "utf8");
    return JSON.parse(file) as PurchaseRecord[];
  } catch {
    return [];
  }
}

async function writePurchases(purchases: PurchaseRecord[]) {
  await fs.mkdir(path.dirname(PURCHASES_FILE), { recursive: true });
  await fs.writeFile(PURCHASES_FILE, JSON.stringify(purchases, null, 2), "utf8");
}

async function pushPurchaseEvent(eventName: string, record: PurchaseRecord) {
  const webhookUrl = process.env.GOOGLE_SHEET_PURCHASE_WEBHOOK_URL;

  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        eventName,
        ...record
      })
    });
  } catch (error) {
    console.error("Failed to push purchase event to Google Sheets:", error);
  }
}

export async function createPurchaseDraft(payload: PurchaseFormPayload) {
  const now = new Date().toISOString();
  const record: PurchaseRecord = {
    id: crypto.randomUUID(),
    fullName: payload.fullName.trim(),
    paymentEmail: payload.paymentEmail.trim(),
    driveAccessEmail: payload.driveAccessEmail?.trim() || payload.paymentEmail.trim(),
    phone: payload.phone?.trim() || undefined,
    amount: purchaseConfig.amountInPaise,
    currency: purchaseConfig.currency,
    productName: purchaseConfig.productName,
    receipt: `starterkit_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    paymentStatus: "created",
    deliveryStatus: "not_started",
    createdAt: now,
    updatedAt: now
  };

  const purchases = await readPurchases();
  try {
    await writePurchases([record, ...purchases]);
    await pushPurchaseEvent("draft_created", record);
  } catch (error) {
    console.warn("Unable to persist purchase draft locally. Continuing with transient draft.", error);
  }
  return record;
}

export async function getPurchaseByProviderOrderId(providerOrderId: string) {
  const purchases = await readPurchases();
  return purchases.find((purchase) => purchase.providerOrderId === providerOrderId) ?? null;
}

export async function getPurchaseByReceipt(receipt: string) {
  const purchases = await readPurchases();
  return purchases.find((purchase) => purchase.receipt === receipt) ?? null;
}

export async function updatePurchase(
  id: string,
  updates: Partial<Omit<PurchaseRecord, "id" | "createdAt">>,
  eventName = "purchase_updated"
) {
  const purchases = await readPurchases();
  const nextPurchases = purchases.map((purchase) =>
    purchase.id === id
      ? {
          ...purchase,
          ...updates,
          updatedAt: new Date().toISOString()
        }
      : purchase
  );

  const updated = nextPurchases.find((purchase) => purchase.id === id) ?? null;
  try {
    await writePurchases(nextPurchases);
  } catch (error) {
    console.warn("Unable to persist purchase update locally.", error);
    return updated;
  }

  if (updated) {
    await pushPurchaseEvent(eventName, updated);
  }

  return updated;
}
