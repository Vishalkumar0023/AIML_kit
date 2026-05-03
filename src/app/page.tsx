import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";
import Navbar from "@/components/Navbar";
import PricingCard from "@/components/PricingCard";
import SectionHeading from "@/components/SectionHeading";
import { siteContent } from "@/lib/site-content";

function OfferStrip({
  title,
  body,
  cta
}: {
  title: string;
  body: string;
  cta: string;
}) {
  return (
    <div className="marketing-card rounded-[2rem] border border-slate-200 bg-gradient-to-r from-slate-950 to-blue-950 p-6 text-white shadow-sm sm:p-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-200">{body}</p>
        </div>
        <CTAButton
          paymentLink={siteContent.links.paymentLink}
          showPaymentFlow
          fallbackTargetId="free-roadmap"
        >
          {cta}
        </CTAButton>
      </div>
    </div>
  );
}

function PreviewBox({
  card
}: {
  card: (typeof siteContent.previewSection.cards)[number];
}) {
  const isCode = card.tone === "code";

  return (
    <article
      className={`marketing-card rounded-[2rem] border p-5 shadow-sm ${
        isCode ? "border-slate-800 bg-slate-950 text-white" : "border-slate-200 bg-white"
      }`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.24em] ${
          isCode ? "text-slate-400" : "text-blue-700"
        }`}
      >
        {card.label}
      </p>
      <h3 className={`mt-3 text-xl font-semibold ${isCode ? "text-white" : "text-slate-950"}`}>
        {card.title}
      </h3>
      <p className={`mt-3 text-sm leading-7 ${isCode ? "text-slate-300" : "text-slate-600"}`}>
        {card.description}
      </p>

      {card.question && card.answer ? (
        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
          <p className="text-sm font-semibold text-slate-950">Q:</p>
          <p className="mt-2 text-sm">{card.question}</p>
          <p className="mt-4 text-sm font-semibold text-slate-950">A:</p>
          <p className="mt-2 text-sm">{card.answer}</p>
        </div>
      ) : null}

      {card.points ? (
        <div className="mt-5 grid gap-2">
          {card.points.map((point, index) => (
            <div
              key={`${card.title}-${point}-${index}`}
              className={`rounded-2xl px-4 py-3 text-sm ${
                isCode
                  ? "bg-slate-900 text-slate-200"
                  : "border border-slate-200 bg-slate-50 text-slate-700"
              }`}
            >
              {point}
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="pb-24 md:pb-0">
      <Navbar />
      <Hero />

      <section className="section-space bg-white">
        <div className="section-shell">
          <SectionHeading title={siteContent.problemSection.title} align="center" />
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {siteContent.problemSection.items.map((item) => (
              <div
                key={item}
                className="marketing-card flex gap-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                  ✓
                </span>
                <p className="text-sm font-medium leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-base font-medium leading-8 text-slate-700">
            {siteContent.problemSection.note}
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton
              paymentLink={siteContent.links.paymentLink}
              showPaymentFlow
              fallbackTargetId="free-roadmap"
            >
              {siteContent.problemSection.cta}
            </CTAButton>
          </div>
        </div>
      </section>

      <section id="what-you-get" className="section-space scroll-mt-28 bg-slate-50">
        <div className="section-shell">
          <SectionHeading title={siteContent.includedSection.title} align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.includedSection.items.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                eyebrow={item.eyebrow}
                className="h-full"
              />
            ))}
          </div>
          <div className="mt-10">
            <OfferStrip
              title="Everything you need before AI/ML starts feeling confusing"
              body="Notes, interview prep, practice problems, mini projects, roadmap clarity, and useful bonus files in one beginner bundle."
              cta={siteContent.includedSection.cta}
            />
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="section-shell">
          <SectionHeading
            title={siteContent.previewSection.title}
            description={siteContent.previewSection.description}
            align="center"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {siteContent.previewSection.cards.map((card) => (
              <PreviewBox key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section id="learning-path" className="section-space scroll-mt-28 bg-slate-950">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">Roadmap</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {siteContent.curriculumSection.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              {siteContent.curriculumSection.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {siteContent.curriculumSection.weeks.map((week) => (
              <div
                key={`${week.day}-${week.title}`}
                className="marketing-card rounded-[2rem] border border-slate-800 bg-slate-900 p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                  {week.day}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{week.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{week.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <CTAButton
              paymentLink={siteContent.links.paymentLink}
              showPaymentFlow
              fallbackTargetId="free-roadmap"
            >
              {siteContent.curriculumSection.cta}
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Instructor"
              title={siteContent.instructorSection.title}
              description={siteContent.instructorSection.copy}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {siteContent.instructorSection.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {chip}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-600">{siteContent.instructorSection.note}</p>
          </div>

          <div className="marketing-card rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-[2rem] border border-white bg-white shadow-md">
                <Image
                  src="/vishal-profile.png"
                  alt="Vishal, creator of the Python for AI/ML Beginner Starter Kit"
                  fill
                  className="object-cover"
                  sizes="112px"
                  priority
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                  Creator Profile
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">Vishal AI Academy</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Student-first beginner education brand under {siteContent.brand.companyShortName}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,#0f172a_0%,#172554_100%)]">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
              Strong Warning
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {siteContent.warningSection.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">{siteContent.warningSection.copy}</p>
            <div className="mt-8">
              <CTAButton
                paymentLink={siteContent.links.paymentLink}
                showPaymentFlow
                fallbackTargetId="free-roadmap"
              >
                {siteContent.warningSection.cta}
              </CTAButton>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {siteContent.warningSection.checklist.map((item) => (
              <div
                key={item.label}
                className="marketing-card flex gap-3 rounded-2xl border border-blue-900 bg-white/5 px-4 py-4 text-sm text-slate-100"
              >
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-xs font-bold text-emerald-300">
                  ✓
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bonuses" className="section-space scroll-mt-28 bg-slate-50">
        <div className="section-shell">
          <SectionHeading title={siteContent.bonusesSection.title} align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.bonusesSection.items.map((item, index) => (
              <FeatureCard
                key={item.title}
                eyebrow={`Bonus ${index + 1}`}
                title={item.title}
                description={item.description}
                className="h-full"
              />
            ))}
          </div>
          <div className="mt-10">
            <OfferStrip
              title="Get the starter kit and useful launch bonuses together"
              body="No fake bonus values, no fake urgency. Just practical extra files that help students use the kit properly."
              cta={siteContent.bonusesSection.cta}
            />
          </div>
        </div>
      </section>



      <section id="pricing" className="section-space scroll-mt-28 bg-slate-50">
        <div className="section-shell">
          <SectionHeading title={siteContent.pricingSection.title} align="center" />
          <div className="mx-auto mt-10 max-w-6xl">
            <PricingCard />
          </div>
        </div>
      </section>

      <section id="free-roadmap" className="section-space scroll-mt-28 bg-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Free Roadmap"
              title={siteContent.roadmapLead.title}
              description={siteContent.roadmapLead.copy}
            />
            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="marketing-card rounded-[1.5rem] border border-blue-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Roadmap PDF</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">{siteContent.roadmapLead.offer}</h3>
                <div className="mt-5 grid gap-2">
                  {siteContent.previewSection.cards[2]?.points?.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                    >
                      {point}
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <CTAButton href={siteContent.links.roadmapLink}>
                    Open Free Roadmap
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="section-shell">
          <div className="marketing-card rounded-[2rem] border border-slate-200 bg-gradient-to-r from-slate-950 to-blue-950 p-6 text-white shadow-sm sm:p-10 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Final CTA</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              {siteContent.finalCta.title}
            </h2>
            <div className="mt-6 grid gap-4 sm:mt-8 md:grid-cols-2">
              <div className="marketing-card rounded-[1.5rem] border border-slate-800 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
                  Option 1
                </p>
                <p className="mt-2 text-base font-medium text-white sm:text-lg">{siteContent.finalCta.optionOne}</p>
              </div>
              <div className="marketing-card rounded-[1.5rem] border border-amber-300/30 bg-amber-400/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
                  Option 2
                </p>
                <p className="mt-2 text-base font-medium text-white sm:text-lg">{siteContent.finalCta.optionTwo}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <CTAButton
                paymentLink={siteContent.links.paymentLink}
                showPaymentFlow
                fallbackTargetId="free-roadmap"
              >
                {siteContent.finalCta.primaryCta}
              </CTAButton>
              <CTAButton variant="secondary" href={siteContent.links.roadmapLink}>
                {siteContent.finalCta.secondaryCta}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section-space scroll-mt-28 bg-slate-50">
        <div className="section-shell">
          <SectionHeading title={siteContent.faqSection.title} align="center" />
          <div className="mx-auto mt-10 max-w-4xl">
            <FAQAccordion items={siteContent.faqSection.items} />
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Starter Kit</p>
            <p className="text-sm font-bold text-slate-950">{siteContent.stickyBar.text}</p>
          </div>
          <CTAButton
            className="shrink-0 px-4 py-3 text-xs font-bold uppercase tracking-[0.2em]"
            paymentLink={siteContent.links.paymentLink}
            showPaymentFlow
            fallbackTargetId="free-roadmap"
          >
            {siteContent.stickyBar.cta}
          </CTAButton>
        </div>
      </div>

      <Footer />
    </main>
  );
}
