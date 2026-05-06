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
};

export default function SuccessSummary({
  productId,
  paymentId,
  orderId
}: SuccessSummaryProps) {
  const [payment, setPayment] = useState<StoredPayment | null>(null);

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

  return (
    <>
      <SuccessToast show={Boolean(paymentId || payment?.paymentId)} />

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
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
