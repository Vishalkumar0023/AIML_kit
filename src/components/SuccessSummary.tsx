"use client";

import { getProductById } from "@/lib/platform-content";
import Link from "next/link";
import { useEffect, useState } from "react";
import SuccessToast from "./SuccessToast";

type StoredPayment = {
  productId: string;
  productTitle: string;
  amount: string;
  paymentStatus: string;
  paymentId: string;
  orderId: string;
  paidAt: string;
};

type SuccessSummaryProps = {
  productId?: string;
  paymentId?: string;
  orderId?: string;
  accessLink?: string;
};

export default function SuccessSummary({
  productId,
  paymentId,
  orderId,
  accessLink
}: SuccessSummaryProps) {
  const [payment, setPayment] = useState<StoredPayment | null>(null);
  const [accessAttempted, setAccessAttempted] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("last-payment");

    if (!raw) return;

    try {
      setPayment(JSON.parse(raw) as StoredPayment);
    } catch {
      localStorage.removeItem("last-payment");
    }
  }, []);

  const resolvedProduct = getProductById(payment?.productId ?? productId ?? "");
  const resolvedPaymentId = payment?.paymentId ?? paymentId ?? "";
  const showAccessLink =
    Boolean(accessLink) && resolvedProduct?.type === "paid" && Boolean(resolvedPaymentId);

  useEffect(() => {
    if (!showAccessLink || !accessLink || !resolvedPaymentId) return;

    const openedKey = `bundle-access-opened:${resolvedPaymentId}`;

    if (localStorage.getItem(openedKey)) {
      setAccessAttempted(true);
      return;
    }

    window.open(accessLink, "_blank", "noopener,noreferrer");
    localStorage.setItem(openedKey, "true");
    setAccessAttempted(true);
  }, [accessLink, resolvedPaymentId, showAccessLink]);

  return (
    <>
      <SuccessToast show={Boolean(paymentId || payment?.paymentId)} />

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        {showAccessLink ? (
          <div className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-4 text-sm text-blue-950">
            <p className="font-semibold">Your paid bundle is ready.</p>
            <p className="mt-1">
              {accessAttempted
                ? "We tried to open the Drive link automatically. If it did not open, use the button below."
                : "Your Drive link is ready below."}
            </p>
          </div>
        ) : null}
        <h2 className="text-2xl font-bold text-slate-950">Payment summary</h2>
        <div className="mt-6 grid gap-4 text-sm text-slate-700">
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <span className="font-semibold text-slate-950">Product:</span>{" "}
            {payment?.productTitle ?? resolvedProduct?.title ?? "Python for AI/ML Starter Kit"}
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <span className="font-semibold text-slate-950">Amount:</span>{" "}
            {payment?.amount ?? resolvedProduct?.priceLabel ?? "₹49"}
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <span className="font-semibold text-slate-950">Payment ID:</span>{" "}
            {payment?.paymentId ?? paymentId ?? "Pending"}
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <span className="font-semibold text-slate-950">Order ID:</span>{" "}
            {payment?.orderId ?? orderId ?? "Pending"}
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <span className="font-semibold text-slate-950">Status:</span>{" "}
            {payment?.paymentStatus ?? "paid"}
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <span className="font-semibold text-slate-950">Saved at:</span>{" "}
            {payment?.paidAt ? new Date(payment.paidAt).toLocaleString() : "Just now"}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {showAccessLink ? (
            <a
              href={accessLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Open Paid Bundle Now
            </a>
          ) : null}
          {resolvedProduct ? (
            <Link
              href={`/product/${resolvedProduct.id}`}
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View Product
            </Link>
          ) : null}
          <Link
            href="/products"
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </>
  );
}
