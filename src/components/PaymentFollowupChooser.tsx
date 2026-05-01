"use client";

import { siteContent } from "@/lib/site-content";
import { useEffect, useMemo, useState } from "react";

export default function PaymentFollowupChooser() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const paymentLink = siteContent.links.paymentLink;
  const { upiId, amount, payeeName, productLine, helperText } = siteContent.payment;

  const isUpiLink = useMemo(() => paymentLink.startsWith("upi://"), [paymentLink]);

  useEffect(() => {
    const handler = () => {
      setCopied(false);
      setOpen(true);
    };

    window.addEventListener("payment-followup", handler);
    return () => window.removeEventListener("payment-followup", handler);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const openUpiApp = () => {
    if (!paymentLink.trim()) return;
    window.open(paymentLink, "_blank", "noopener,noreferrer");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 px-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.24)] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 text-slate-400 transition hover:text-slate-600 sm:right-8 sm:top-8"
          aria-label="Close"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
          Payment Steps
        </p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Pay ₹99 and send your screenshot
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          Complete the payment first, then choose Instagram or Telegram to share your screenshot
          for access verification.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-blue-100 bg-blue-50/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Step 1
            </p>
            <p className="mt-3 text-sm font-medium text-slate-500">UPI ID</p>
            <div className="mt-2 rounded-2xl border border-blue-200 bg-white px-4 py-3">
              <p className="text-lg font-bold tracking-wide text-slate-950 sm:text-xl">{upiId}</p>
            </div>
            <p className="mt-4 text-sm font-medium text-slate-500">Amount</p>
            <p className="mt-1 text-3xl font-black tracking-tight text-slate-950">{amount}</p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Pay to <span className="font-semibold text-slate-900">{payeeName}</span> for{" "}
              <span className="font-semibold text-slate-900">{productLine}</span>.
            </p>

            <div className={`mt-5 grid gap-3 ${isUpiLink ? "sm:grid-cols-1" : "sm:grid-cols-2"}`}>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                {copied ? "UPI ID Copied" : "Copy UPI ID"}
              </button>
              <button
                type="button"
                onClick={openUpiApp}
                className={`inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 ${isUpiLink ? "sm:hidden" : ""}`}
              >
                {isUpiLink ? "Open UPI App" : "Open Payment Link"}
              </button>
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-500">{helperText}</p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Step 2
            </p>
            <p className="mt-3 text-lg font-bold text-slate-950">Send your screenshot</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              After payment, send the screenshot on the platform you prefer. Access is shared after
              manual verification.
            </p>

            <div className="mt-5 grid gap-3">
              <a
                href={siteContent.links.instagramLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Send on Instagram DM
              </a>
              <a
                href={siteContent.links.telegramLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Open Telegram
              </a>
              <a
                href={`mailto:${siteContent.links.contactEmail}?subject=Payment%20Screenshot%20-%20Python%20for%20AI%2FML%20Starter%20Kit`}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Send by Email
              </a>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Step 3
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Google Drive access is shared after payment verification. This is a manual v1
                delivery flow, not instant automatic delivery.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
