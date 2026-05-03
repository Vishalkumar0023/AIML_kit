"use client";

import Image from "next/image";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { useState } from "react";
import CTAButton from "./CTAButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="section-shell flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="notice-marquee max-w-full flex-1">
            <div className="notice-marquee-track text-sm font-medium">
              <span className="inline-flex items-center gap-3">
                <span className="pulse-offer inline-flex h-2.5 w-2.5 rounded-full bg-amber-300" />
                {siteContent.announcementBar.text}
              </span>
              <span className="inline-flex items-center gap-3">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
                Beginner bundle for students who want Python clarity before AI/ML
              </span>
              <span className="inline-flex items-center gap-3">
                <span className="pulse-offer inline-flex h-2.5 w-2.5 rounded-full bg-amber-300" />
                {siteContent.announcementBar.text}
              </span>
              <span className="inline-flex items-center gap-3">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
                Beginner bundle for students who want Python clarity before AI/ML
              </span>
            </div>
          </div>
          <CTAButton
            className="self-start border-0 bg-amber-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-950 sm:self-auto"
            paymentLink={siteContent.links.paymentLink}
            showPaymentFlow
            fallbackTargetId="free-roadmap"
          >
            {siteContent.announcementBar.cta}
          </CTAButton>
        </div>
      </div>

      <div className="section-shell flex items-center justify-between py-4">
        <a href="/" className="group flex items-center gap-3">
          <div className="marketing-card relative overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white p-1.5 shadow-sm transition duration-200 group-hover:border-blue-300">
            <Image
              src="/vishal-ai-academy-logo.svg"
              alt="Vishal AI Academy logo"
              width={56}
              height={56}
              className="h-14 w-14"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="text-[1.05rem] font-bold text-slate-950">{siteContent.brand.name}</p>
            <p className="mt-1 text-xs font-medium text-slate-500">
              {siteContent.brand.productSubtitle}
            </p>
            <p className="mt-1 text-xs text-slate-500">by {siteContent.brand.companyName}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteContent.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <CTAButton variant="secondary" href={siteContent.links.roadmapLink}>
            Free Roadmap
          </CTAButton>
          <CTAButton
            paymentLink={siteContent.links.paymentLink}
            showPaymentFlow
            fallbackTargetId="free-roadmap"
          >
            Buy Now ₹99
          </CTAButton>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-800 lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      <div
        className={cn(
          "border-t border-slate-200 bg-white px-4 py-4 lg:hidden",
          menuOpen ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col gap-4">
          {siteContent.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <CTAButton className="w-full" variant="secondary" href={siteContent.links.roadmapLink}>
            Free Roadmap
          </CTAButton>
          <CTAButton
            className="w-full"
            paymentLink={siteContent.links.paymentLink}
            showPaymentFlow
            fallbackTargetId="free-roadmap"
          >
            Buy Now ₹99
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
