import { grantDriveFolderAccess } from "./google-drive";
import { updatePurchase } from "./order-store";
import {
  getDeliveryMode,
  getDirectBundleLink,
  isDriveConfigured,
  purchaseConfig
} from "./purchase-config";
import type { PurchaseRecord } from "@/types";

export async function fulfillPurchase(purchase: PurchaseRecord) {
  const directBundleLink = getDirectBundleLink();

  if (directBundleLink) {
    return updatePurchase(
      purchase.id,
      {
        deliveryStatus: "link_ready",
        notes: `Verified payment. Show direct bundle link to ${purchase.paymentEmail}.`
      },
      "delivery_link_ready"
    );
  }

  if (getDeliveryMode() === "manual") {
    return updatePurchase(
      purchase.id,
      {
        deliveryStatus: "manual_review",
        notes:
          "Payment verified. Buyer should send the payment transaction ID or order details on Instagram, Telegram, or email to receive the Drive link manually."
      },
      "delivery_manual_review"
    );
  }

  if (!isDriveConfigured()) {
    return updatePurchase(
      purchase.id,
      {
        deliveryStatus: "config_missing",
        notes:
          "Google Drive delivery is not configured yet. Add the Drive folder ID and service account credentials."
      },
      "delivery_config_missing"
    );
  }

  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID as string;

  try {
    await grantDriveFolderAccess({
      folderId,
      buyerEmail: purchase.driveAccessEmail,
      productName: purchaseConfig.productName
    });

    return updatePurchase(
      purchase.id,
      {
        deliveryStatus: "granted",
        notes: `Drive access granted to ${purchase.driveAccessEmail}.`
      },
      "delivery_granted"
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Drive delivery failed.";

    return updatePurchase(
      purchase.id,
      {
        deliveryStatus: "failed",
        notes: message
      },
      "delivery_failed"
    );
  }
}
