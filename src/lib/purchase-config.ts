export const purchaseConfig = {
  productName: "AI Engineer Foundation System",
  amountInPaise: 4900,
  currency: "INR",
  successPath: "/thank-you"
} as const;

export function getRazorpayMode() {
  return process.env.RAZORPAY_MODE?.toLowerCase() === "live" ? "live" : "test";
}

export function getDeliveryMode() {
  return process.env.DELIVERY_MODE?.toLowerCase() === "manual" ? "manual" : "manual";
}

export function isRazorpayConfigured() {
  return Boolean(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET);
}

export function isDriveConfigured() {
  return Boolean(
    process.env.GOOGLE_DRIVE_FOLDER_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL &&
      process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
  );
}

export function getDirectBundleLink() {
  return process.env.GOOGLE_DRIVE_PUBLIC_LINK?.trim() || "";
}
