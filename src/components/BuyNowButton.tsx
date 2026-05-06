"use client";

import type { LearningProduct } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MotionButton } from "./motion/MotionPrimitives";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

type BuyNowButtonProps = {
  product: LearningProduct;
  className?: string;
};

export default function BuyNowButton({ product, className }: BuyNowButtonProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleCheckout() {
    if (!window.Razorpay) {
      setStatus("error");
      setMessage("Razorpay checkout did not load. Refresh the page and try again.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          productId: product.id
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to create payment order.");
      }

      const razorpay = new window.Razorpay({
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "Vishal AI Academy",
        description: product.title,
        order_id: data.orderId,
        theme: {
          color: "#2563eb"
        },
        modal: {
          ondismiss: () => {
            setStatus("idle");
          }
        },
        handler: (result: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) => {
          const paymentSummary = {
            productId: product.id,
            productTitle: product.title,
            amount: product.priceLabel,
            paymentStatus: "paid",
            paymentId: result.razorpay_payment_id,
            orderId: result.razorpay_order_id,
            paidAt: new Date().toISOString()
          };

          localStorage.setItem("last-payment", JSON.stringify(paymentSummary));
          router.push(
            `/success?productId=${encodeURIComponent(product.id)}&paymentId=${encodeURIComponent(
              result.razorpay_payment_id
            )}&orderId=${encodeURIComponent(result.razorpay_order_id)}`
          );
        }
      });

      razorpay.open();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to start payment right now.");
    }
  }

  return (
    <div>
      <MotionButton
        type="button"
        className={
          className ??
          "glow-button group rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-500"
        }
        onClick={handleCheckout}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Opening Checkout..." : product.ctaLabel}
      </MotionButton>
      {message ? <p className="mt-3 text-sm text-rose-600">{message}</p> : null}
    </div>
  );
}
