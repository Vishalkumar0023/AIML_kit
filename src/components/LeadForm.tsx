"use client";

import { siteContent } from "@/lib/site-content";
import { cn, isValidEmail, isValidWhatsapp } from "@/lib/utils";
import type { LeadFormPayload, LeadInterest, LeadLevel } from "@/types";
import { useEffect, useMemo, useState } from "react";

type LeadFormProps = {
  variant?: "roadmap" | "support";
  className?: string;
};

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  currentLevel: LeadLevel | "";
  interest: LeadInterest | "";
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  currentLevel: "",
  interest: "",
  message: "",
  website: ""
};

export default function LeadForm({ variant = "roadmap", className }: LeadFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentHint, setPaymentHint] = useState("");

  const isRoadmap = variant === "roadmap";
  const successMessage = isRoadmap
    ? siteContent.roadmapLead.successMessage
    : siteContent.support.successMessage;

  useEffect(() => {
    const handler = () => {
      if (isRoadmap) {
        setPaymentHint("Payment link coming soon. Join the waitlist below.");
      }
    };

    window.addEventListener("payment-link-missing", handler);
    return () => window.removeEventListener("payment-link-missing", handler);
  }, [isRoadmap]);

  const validationMessage = useMemo(() => {
    if (!form.name.trim()) return "Name is required.";
    if (!isValidEmail(form.email)) return "Please enter a valid email address.";
    if (!isValidWhatsapp(form.whatsapp)) return "Please enter a valid WhatsApp number.";
    if (isRoadmap && !form.currentLevel) return "Please select your current level.";
    if (isRoadmap && !form.interest) return "Please select your interest.";
    if (!isRoadmap && !form.message.trim()) return "Message is required.";
    return "";
  }, [form, isRoadmap]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validationMessage) {
      setErrorMessage(validationMessage);
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    setPaymentHint("");

    const payload: LeadFormPayload = {
      name: form.name.trim(),
      email: form.email.trim(),
      whatsapp: form.whatsapp.trim(),
      website: form.website,
      type: variant,
      ...(isRoadmap
        ? {
            currentLevel: form.currentLevel as LeadLevel,
            interest: form.interest as LeadInterest
          }
        : { message: form.message.trim() })
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again in a moment.");
    }
  };

  return (
    <div className={cn("rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7", className)}>
      {paymentHint ? (
        <div className="mb-5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {paymentHint}
        </div>
      ) : null}

      <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            name="name"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            placeholder="Enter your name"
            required
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            placeholder="Enter your email"
            required
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-slate-700">WhatsApp number</span>
          <input
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            name="whatsapp"
            value={form.whatsapp}
            onChange={(event) => setForm((current) => ({ ...current, whatsapp: event.target.value }))}
            placeholder="Enter your WhatsApp number"
            required
          />
        </label>

        {isRoadmap ? (
          <>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-700">Current level</span>
              <select
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                value={form.currentLevel}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    currentLevel: event.target.value as LeadLevel | ""
                  }))
                }
                required
              >
                <option value="">Select your level</option>
                {siteContent.roadmapLead.levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-700">Interest</span>
              <select
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                value={form.interest}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    interest: event.target.value as LeadInterest | ""
                  }))
                }
                required
              >
                <option value="">Select your interest</option>
                {siteContent.roadmapLead.interests.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
            </label>
          </>
        ) : (
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">Message</span>
            <textarea
              className="min-h-32 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              value={form.message}
              onChange={(event) =>
                setForm((current) => ({ ...current, message: event.target.value }))
              }
              placeholder="Tell us what you need help with"
              required
            />
          </label>
        )}

        <label className="hidden">
          <span>Website</span>
          <input
            autoComplete="off"
            tabIndex={-1}
            value={form.website}
            onChange={(event) => setForm((current) => ({ ...current, website: event.target.value }))}
          />
        </label>

        <button
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading"
            ? "Submitting..."
            : isRoadmap
              ? siteContent.roadmapLead.submitLabel
              : siteContent.support.submitLabel}
        </button>

        {status === "success" ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-900">
            <p className="text-sm font-medium">{successMessage}</p>
            {isRoadmap ? (
              <a
                href="https://drive.google.com/drive/folders/1p1smHbE9sRnyHF5nKscYFNtEQ7UkGF_n?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-700 sm:w-auto"
              >
                Access Free Bundle Now
              </a>
            ) : null}
          </div>
        ) : null}

        {status === "error" && errorMessage ? (
          <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
            {errorMessage}
          </p>
        ) : null}
      </form>
    </div>
  );
}
