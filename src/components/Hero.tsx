"use client";

import { siteContent } from "@/lib/site-content";
import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";

export default function Hero() {
  const headlines = siteContent.hero.dynamicHeadlines;
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentHeadline = headlines[headlineIndex] ?? "";
    let timeout = 90;

    if (!isDeleting && displayedText === currentHeadline) {
      timeout = 1400;
      const timer = window.setTimeout(() => setIsDeleting(true), timeout);
      return () => window.clearTimeout(timer);
    }

    if (isDeleting && displayedText === "") {
      const timer = window.setTimeout(() => {
        setIsDeleting(false);
        setHeadlineIndex((current) => (current + 1) % headlines.length);
      }, 250);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setDisplayedText((current) =>
        isDeleting
          ? currentHeadline.slice(0, Math.max(0, current.length - 1))
          : currentHeadline.slice(0, current.length + 1)
      );
    }, isDeleting ? 42 : timeout);

    return () => window.clearTimeout(timer);
  }, [displayedText, headlineIndex, headlines, isDeleting]);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)]">
      <div className="ambient-orb absolute left-6 top-12 hidden h-40 w-40 rounded-full bg-blue-200/40 blur-3xl sm:block" />
      <div className="ambient-orb absolute right-12 top-20 hidden h-44 w-44 rounded-full bg-amber-200/40 blur-3xl sm:block" />
      <div className="section-shell grid gap-12 pb-16 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-20 lg:pt-16">
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm">
            {siteContent.hero.badge}
          </div>

          <div className="mt-6">
            <div className="min-h-[2.5rem] text-xl font-semibold tracking-tight text-slate-700 sm:min-h-[2.75rem] sm:text-2xl lg:text-3xl">
              <span className="inline-flex max-w-full items-end gap-1 whitespace-nowrap">
                <span className="whitespace-nowrap">{displayedText}</span>
                {displayedText ? <span aria-hidden="true" className="type-cursor" /> : null}
              </span>
            </div>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              <span className="block">Your Python Basics</span>
              <span className="block">Are Weak.</span>
            </h1>
          </div>

          <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
            {siteContent.hero.subheadline}
          </p>

          <div className="mt-7 grid gap-3">
            {siteContent.hero.benefits.map((item) => (
              <div
                key={item}
                className="group flex items-start gap-3 rounded-2xl border border-transparent px-2 py-2 text-sm text-slate-700 transition duration-200 hover:border-blue-100 hover:bg-white/70 hover:shadow-sm sm:text-base"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                  ✓
                </span>
                <span className="transition duration-200 group-hover:translate-x-1">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-end gap-3">
            <div className="rounded-[1.5rem] border border-amber-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Launch Price
              </p>
              <div className="mt-1 flex items-end gap-3">
                <span className="pulse-offer rounded-2xl px-1 text-4xl font-extrabold text-slate-950">
                  {siteContent.hero.launchPrice}
                </span>
                <span className="pb-1 text-lg text-slate-400 line-through">
                  {siteContent.hero.originalPrice}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <CTAButton
              paymentLink={siteContent.links.paymentLink}
              showPaymentFlow
              fallbackTargetId="free-roadmap"
            >
              {siteContent.hero.primaryCta}
            </CTAButton>
            <CTAButton variant="secondary" scrollToId="free-roadmap">
              {siteContent.hero.secondaryCta}
            </CTAButton>
          </div>

          <p className="mt-5 text-sm font-medium text-slate-600">{siteContent.hero.trustLine}</p>
        </div>

        <div className="relative mx-auto w-full max-w-2xl">
          <div className="pulse-offer float-soft absolute right-6 top-6 hidden rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg sm:block">
            {siteContent.hero.priceTag}
          </div>
          <div className="marketing-card rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.10)] sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Download Bundle
                </p>
                <h2 className="mt-2 text-xl font-semibold text-slate-950">
                  {siteContent.brand.productName}
                </h2>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-2 text-right">
                <p className="text-[11px] uppercase tracking-[0.24em] text-amber-700">Offer</p>
                <p className="text-lg font-bold text-slate-950">₹99</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {siteContent.hero.mockupCards.map((item, index) => (
                <div
                  key={item.title}
                  className={`marketing-card stagger-rise rounded-[1.5rem] border p-4 shadow-sm ${
                    index % 3 === 0
                      ? "border-blue-200 bg-blue-50"
                      : index % 3 === 1
                        ? "border-indigo-200 bg-indigo-50"
                        : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    {item.type}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
