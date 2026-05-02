"use client";

import { useState } from "react";

type CopyPurchaseDetailsButtonProps = {
  text: string;
  className?: string;
};

export default function CopyPurchaseDetailsButton({
  text,
  className
}: CopyPurchaseDetailsButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy purchase details:", error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={
        className ??
        "inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      }
    >
      {copied ? "Copied Payment Details" : "Copy Payment Details"}
    </button>
  );
}
