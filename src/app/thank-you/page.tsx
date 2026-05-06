import CopyPurchaseDetailsButton from "@/components/CopyPurchaseDetailsButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import { getPurchaseByProviderOrderId } from "@/lib/order-store";
import { siteContent } from "@/lib/site-content";

export const dynamic = "force-dynamic";

type ThankYouPageProps = {
  searchParams?: {
    orderId?: string;
    deliveryStatus?: string;
    fullName?: string;
    paymentEmail?: string;
    phone?: string;
    paymentStatus?: string;
    paymentId?: string;
  };
};

function buildStatusCopy(input: {
  deliveryStatus?: string;
  accessEmail?: string;
  notes?: string;
}) {
  if (input.deliveryStatus === "granted") {
    return {
      badge: "Access Granted",
      description: `Drive access has been granted to ${input.accessEmail ?? "your Google email"}. Check that Google account for the shared folder notification.`,
      detail:
        input.notes ??
        "If you do not see the folder immediately, refresh Google Drive or check the Promotions/Updates tab of the same Google account."
    };
  }

  if (input.deliveryStatus === "pending_capture") {
    return {
      badge: "Payment Verified",
      description:
        "Your payment was verified, but we are still waiting for Razorpay capture confirmation before delivery is completed.",
      detail:
        input.notes ??
        "This usually resolves automatically when Razorpay sends the capture webhook. Please revisit this page in a minute."
    };
  }

  if (input.deliveryStatus === "manual_review") {
    return {
      badge: "Payment Verified",
      description:
        "Your payment has been successfully verified. You can now access your paid bundle.",
      detail:
        input.notes ??
        "Click the button below to open the secure Google Drive folder."
    };
  }

  if (input.deliveryStatus === "config_missing") {
    return {
      badge: "Setup Needed",
      description:
        "Payment was recorded, but Google Drive delivery is not configured on the server yet.",
      detail:
        input.notes ??
        "Please contact support so the access can be granted manually after the storage setup is completed."
    };
  }

  if (input.deliveryStatus === "failed") {
    return {
      badge: "Delivery Issue",
      description:
        "Payment was recorded, but there was a problem while granting Drive access automatically.",
      detail:
        input.notes ??
        "Please contact support with your payment email and Google access email so the issue can be resolved quickly."
    };
  }

  return {
    badge: "Order Received",
    description: siteContent.thankYou.body,
    detail: siteContent.thankYou.reminder
  };
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const orderId = searchParams?.orderId;
  const purchase = orderId ? await getPurchaseByProviderOrderId(orderId) : null;
  const fallbackPurchase = purchase
    ? null
    : {
        fullName: searchParams?.fullName ?? "Buyer",
        paymentEmail: searchParams?.paymentEmail ?? "",
        phone: searchParams?.phone ?? "",
        paymentStatus: searchParams?.paymentStatus ?? "captured",
        providerOrderId: orderId ?? "",
        providerPaymentId: searchParams?.paymentId ?? "",
      };

  const statusCopy = buildStatusCopy({
    deliveryStatus: purchase?.deliveryStatus ?? searchParams?.deliveryStatus,
    notes: purchase?.notes
  });
  const isManualReview =
    (purchase?.deliveryStatus ?? searchParams?.deliveryStatus) === "manual_review";
  const isPaidAndVerified = purchase && (purchase.paymentStatus === "captured" || purchase.paymentStatus === "paid");
  const shouldShowDriveAccessEmail =
    !!purchase &&
    !isManualReview &&
    purchase.driveAccessEmail &&
    purchase.driveAccessEmail !== purchase.paymentEmail;
  const messageSource = purchase ?? fallbackPurchase;
  const supportMessage = messageSource
    ? [
        "Hi Vishal AI Academy,",
        "",
        "I completed the payment for the Python for AI/ML Beginner Starter Kit.",
        `Buyer Name: ${messageSource.fullName}`,
        `Payment Email: ${messageSource.paymentEmail}`,
        messageSource.phone ? `Phone Number: ${messageSource.phone}` : "",
        `Payment Status: ${messageSource.paymentStatus}`,
        `Razorpay Order ID: ${messageSource.providerOrderId ?? "Pending"}`,
        `Razorpay Payment ID: ${messageSource.providerPaymentId ?? "Pending"}`,
        "",
        "Please share the Google Drive access link.",
        ""
      ]
        .filter(Boolean)
        .join("\n")
    : "";

  const supportEmailSubject = encodeURIComponent(
    `Paid Bundle Access Request - ${purchase?.providerOrderId ?? "Order"}`
  );
  const supportEmailBody = encodeURIComponent(supportMessage);

  return (
    <main>
      <Navbar />
      <section className="section-space bg-[linear-gradient(180deg,#f8fbff_0%,#f8fafc_100%)]">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-12">
            <p className="text-sm font-medium text-slate-600">{siteContent.brand.formalLine}</p>
            <div className="mx-auto mt-4 w-fit rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-amber-800">
              {statusCopy.badge}
            </div>
            <div className="mt-4">
              <SectionHeading
                title={siteContent.thankYou.title}
                description={statusCopy.description}
                align="center"
              />
            </div>

            {purchase || fallbackPurchase ? (
              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-left text-sm leading-7 text-slate-700">
                <p>
                  <span className="font-semibold text-slate-950">Buyer:</span>{" "}
                  {(purchase ?? fallbackPurchase)?.fullName}
                </p>
                <p>
                  <span className="font-semibold text-slate-950">Payment email:</span>{" "}
                  {(purchase ?? fallbackPurchase)?.paymentEmail}
                </p>
                {(purchase ?? fallbackPurchase)?.phone ? (
                  <p>
                    <span className="font-semibold text-slate-950">Phone number:</span>{" "}
                    {(purchase ?? fallbackPurchase)?.phone}
                  </p>
                ) : null}
                {shouldShowDriveAccessEmail ? (
                  <p>
                    <span className="font-semibold text-slate-950">Drive access email:</span>{" "}
                    {purchase.driveAccessEmail}
                  </p>
                ) : null}
                <p>
                  <span className="font-semibold text-slate-950">Payment status:</span>{" "}
                  {(purchase ?? fallbackPurchase)?.paymentStatus}
                </p>
                <p>
                  <span className="font-semibold text-slate-950">Razorpay order ID:</span>{" "}
                  {(purchase ?? fallbackPurchase)?.providerOrderId ?? "Pending"}
                </p>
                <p>
                  <span className="font-semibold text-slate-950">Razorpay payment ID:</span>{" "}
                  {(purchase ?? fallbackPurchase)?.providerPaymentId ?? "Pending"}
                </p>
              </div>
            ) : null}

            <p className="mt-6 text-sm leading-7 text-slate-600">{statusCopy.detail}</p>

            {isPaidAndVerified ? (
              <div className="mt-8 flex flex-col justify-center gap-4">
                <a
                  href="https://drive.google.com/drive/folders/1nQiWQowqmpBLuvzgGy82eZF6DIjZqcib"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-blue-700"
                >
                  Access AI Engineer Foundation System
                </a>
              </div>
            ) : isManualReview && purchase ? (
              <div className="mt-6 space-y-4">
                <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5 text-left text-sm leading-7 text-amber-950">
                  <p className="font-semibold text-amber-950">Send this message to claim access</p>
                  <p className="mt-2 whitespace-pre-line">{supportMessage}</p>
                </div>
                <div className="flex justify-center">
                  <CopyPurchaseDetailsButton text={supportMessage} />
                </div>
              </div>
            ) : null}

            {!isPaidAndVerified && isManualReview ? (
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <a
                  href={siteContent.links.instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Message on Instagram
                </a>
                <a
                  href={siteContent.links.telegramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Open Telegram
                </a>
                <a
                  href={`mailto:${siteContent.links.contactEmail}?subject=${supportEmailSubject}&body=${supportEmailBody}`}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Send by Email
                </a>
              </div>
            ) : null}

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {siteContent.thankYou.primaryCta}
              </a>
              <a
                href="/support"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                {siteContent.thankYou.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
