"use client";

import { cn } from "@/lib/utils";
import { type MouseEvent, type ReactNode } from "react";

type CTAButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  scrollToId?: string;
  href?: string;
  paymentLink?: string;
  showPaymentFlow?: boolean;
  fallbackTargetId?: string;
};

export default function CTAButton({
  children,
  variant = "primary",
  className,
  scrollToId,
  href,
  paymentLink,
  showPaymentFlow,
  fallbackTargetId
}: CTAButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (showPaymentFlow) {
      window.dispatchEvent(new CustomEvent("purchase-flow"));
      return;
    }

    if (paymentLink !== undefined) {
      if (paymentLink.trim()) {
        window.open(paymentLink, "_blank", "noopener,noreferrer");

        return;
      }

      if (fallbackTargetId) {
        document.getElementById(fallbackTargetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

      window.dispatchEvent(new CustomEvent("payment-link-missing"));
      return;
    }

    if (scrollToId) {
      document.getElementById(scrollToId)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      return;
    }

    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      className={cn(
        "cta-shine inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:ring-offset-2 focus:ring-offset-white",
        variant === "primary" &&
          "bg-amber-400 text-slate-950 shadow-sm hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-[0_18px_34px_rgba(251,191,36,0.32)]",
        variant === "secondary" &&
          "border border-slate-300 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:shadow-[0_14px_28px_rgba(15,23,42,0.08)]",
        variant === "ghost" &&
          "border border-slate-200 bg-transparent text-slate-700 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50",
        className
      )}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
