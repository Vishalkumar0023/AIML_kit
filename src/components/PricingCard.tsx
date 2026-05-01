import { siteContent } from "@/lib/site-content";
import CTAButton from "./CTAButton";

export default function PricingCard() {
  return (
    <div className="rounded-[2rem] border-2 border-slate-950 bg-white p-6 shadow-[0_32px_80px_rgba(15,23,42,0.12)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="pulse-offer inline-flex rounded-full bg-amber-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-950">
            Launch Offer
          </div>
          <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950">
            {siteContent.pricingSection.product}
          </h3>

          <div className="mt-6 flex items-end gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Original Price
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-400 line-through">
                {siteContent.pricingSection.originalPrice}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Launch Price
              </p>
              <p className="mt-1 text-5xl font-extrabold text-slate-950">
                {siteContent.pricingSection.launchPrice}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {siteContent.pricingSection.included.map((item) => (
              <div
                key={item.label}
                className="marketing-card flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
              >
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                  ✓
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="marketing-card rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white">
          <h4 className="text-lg font-semibold">Payment + delivery process</h4>
          <div className="mt-5 grid gap-3">
            {siteContent.pricingSection.deliverySteps.map((step, index) => (
              <div
                key={step}
                className="marketing-card flex gap-4 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-4 text-sm text-slate-200"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 font-bold text-slate-950">
                  {index + 1}
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>

          <CTAButton
            className="mt-6 w-full"
            paymentLink={siteContent.links.paymentLink}
            showPaymentFlow
            fallbackTargetId="free-roadmap"
          >
            {siteContent.pricingSection.cta}
          </CTAButton>
          <p className="mt-4 text-sm leading-7 text-slate-300">{siteContent.pricingSection.note}</p>
        </div>
      </div>
    </div>
  );
}
