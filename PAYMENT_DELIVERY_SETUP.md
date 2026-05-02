# Razorpay + Google Drive Setup

This project now uses:

- Razorpay Standard Checkout for payment
- Google Drive delivery, with two supported modes:
  - direct link reveal after payment
  - private email-based sharing through Google Drive API
- optional Google Sheets webhooks for lead and purchase logs

## 1. Razorpay setup

Add these environment variables:

```env
RAZORPAY_MODE=test
RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=xxxxxxxx
RAZORPAY_WEBHOOK_SECRET=xxxxxxxx
```

Recommended:

- start with Razorpay Test Mode first
- enable automatic capture in Razorpay Dashboard
- configure the webhook URL after deployment

Webhook route:

```text
https://your-domain.com/api/razorpay/webhook
```

Subscribe to:

- `payment.authorized`
- `payment.captured`
- `payment.failed`
- `order.paid`

## 2. Google Drive setup

### Option A: simplest setup, show Drive link after payment

If you do not want Google Cloud or Drive API right now, add:

```env
GOOGLE_DRIVE_PUBLIC_LINK=https://drive.google.com/drive/folders/your-folder-id?usp=sharing
```

Behavior:

- after verified payment, the thank-you page shows the Drive link button
- this is easy to launch
- this is not strong protection

Important:

- if the Drive link is public or "anyone with the link", buyers can forward it
- this mode is convenient, not secure

### Option B: private email-based sharing

Create one private Google Drive folder for the paid bundle.

Put the bundle files inside that folder.

Then create a Google service account and collect:

- service account client email
- service account private key

Add these environment variables:

```env
GOOGLE_DRIVE_FOLDER_ID=your_folder_id
GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL=service-account@project.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

Important:

- share the target Drive folder once with the service account email as `Editor`
- buyers must enter the exact Google email that should receive access

## 3. Optional Google Sheets logging

You can keep the existing lead webhook and add a separate purchase webhook:

```env
GOOGLE_SHEET_WEBHOOK_URL=https://your-leads-webhook-url
GOOGLE_SHEET_PURCHASE_WEBHOOK_URL=https://your-purchases-webhook-url
```

## 4. Local development

Run:

```bash
npm run dev
```

Key routes:

- `/api/purchase/create-order`
- `/api/purchase/verify`
- `/api/purchase/status`
- `/api/razorpay/webhook`

## 5. Deployment

Recommended:

- deploy on Vercel
- add all environment variables in Vercel Project Settings
- set `NEXT_PUBLIC_SITE_URL` to your production domain

## 6. Fulfillment behavior

Current behavior:

1. buyer opens checkout modal
2. server creates Razorpay order
3. Razorpay checkout completes
4. server verifies signature
5. if `GOOGLE_DRIVE_PUBLIC_LINK` is set, the thank-you page shows the bundle link
6. otherwise, if Drive API is configured and payment is captured, access is granted automatically
7. if payment is only authorized, webhook finishes delivery after capture

## 7. Important limitation

Google Drive email-based sharing is much safer than a public link, but it still does not stop a buyer from downloading the files and redistributing them manually later.

If you use direct link mode, protection is weaker because the link itself can be forwarded.
