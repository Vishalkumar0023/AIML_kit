"use client";

import { purchaseConfig } from "@/lib/purchase-config";
import { siteContent } from "@/lib/site-content";
import { isValidEmail, isValidPhone } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

type FormState = {
  fullName: string;
  paymentEmail: string;
  phone: string;
};

const initialState: FormState = {
  fullName: "",
  paymentEmail: "",
  phone: ""
};

export default function PaymentFollowupChooser() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "verifying" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handler = () => {
      setErrorMessage("");
      setStatus("idle");
      setOpen(true);
    };

    window.addEventListener("purchase-flow", handler);
    return () => window.removeEventListener("purchase-flow", handler);
  }, []);

  const validationMessage = useMemo(() => {
    if (!form.fullName.trim()) return "Full name is required.";
    if (!isValidEmail(form.paymentEmail)) return "Please enter a valid payment email.";
    if (!isValidPhone(form.phone)) return "Please enter a valid phone number.";
    return "";
  }, [form]);

  async function startCheckout() {
    if (validationMessage) {
      setStatus("error");
      setErrorMessage(validationMessage);
      return;
    }

    if (!window.Razorpay) {
      setStatus("error");
      setErrorMessage("Razorpay checkout did not load. Refresh the page and try again.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/purchase/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName: form.fullName,
          paymentEmail: form.paymentEmail,
          phone: form.phone
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to create order.");
      }

      const razorpay = new window.Razorpay({
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: siteContent.brand.name,
        description: purchaseConfig.productName,
        order_id: data.orderId,
        prefill: {
          name: form.fullName,
          email: form.paymentEmail,
          contact: form.phone
        },
        theme: {
          color: "#1D4ED8"
        },
        modal: {
          ondismiss: () => {
            setStatus("idle");
          }
        },
        notes: {
          buyer_email: form.paymentEmail
        },
        handler: async (result: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) => {
          setStatus("verifying");

          const verifyResponse = await fetch("/api/purchase/verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(result)
          });

          const verifyData = await verifyResponse.json();

          if (!verifyResponse.ok) {
            setStatus("error");
            setErrorMessage(verifyData.error || "Payment completed but verification failed.");
            return;
          }

          setOpen(false);
          setForm(initialState);
          setStatus("idle");
          router.push(
            `/thank-you?orderId=${encodeURIComponent(
              verifyData.orderId
            )}&deliveryStatus=${encodeURIComponent(
              verifyData.deliveryStatus
            )}`
          );
        }
      });

      razorpay.open();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to start payment right now."
      );
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/60 px-4 py-4 sm:py-6"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative mx-auto flex w-full max-w-2xl flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.24)] max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 z-10 text-slate-400 transition hover:text-slate-600"
          aria-label="Close"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
            Secure Checkout
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Pay ₹99 and send your payment details for access
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Enter your buyer details below and complete the Razorpay payment. After payment, the thank-you
            page will show your order details, which you can send on Instagram, Telegram, or email to get
            the Google Drive link manually.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-700">Full name</span>
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  value={form.fullName}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, fullName: event.target.value }))
                  }
                  placeholder="Enter buyer full name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-700">Payment email</span>
                <input
                  type="email"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  value={form.paymentEmail}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, paymentEmail: event.target.value }))
                  }
                  placeholder="Enter email used for purchase updates"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-700">Phone number (optional)</span>
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  value={form.phone}
                  onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                  placeholder="Enter phone number"
                />
              </label>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                What happens next
              </p>
              <div className="mt-4 grid gap-3">
                {[
                  "Razorpay creates a secure order for ₹99.",
                  "You pay using card, UPI, wallet, or netbanking inside Razorpay Checkout.",
                  "Our server verifies the payment signature.",
                  "After payment, send the order details from the thank-you page on Instagram, Telegram, or email to receive the Drive link manually."
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-300 font-bold text-slate-950">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-slate-700">
                Keep your payment email and transaction details safe. You will use them to claim manual
                access after payment.
              </div>
            </div>
          </div>

          {status === "error" && errorMessage ? (
            <p className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
              {errorMessage}
            </p>
          ) : null}
        </div>

        <div className="border-t border-slate-200 bg-white px-6 py-4 sm:px-8 sm:py-5">
          <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={startCheckout}
            disabled={status === "loading" || status === "verifying"}
            className="inline-flex flex-1 items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading"
              ? "Preparing checkout..."
              : status === "verifying"
                ? "Verifying payment..."
                : "Continue to Razorpay"}
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
