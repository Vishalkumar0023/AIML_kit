import BuyNowButton from "@/components/BuyNowButton";
import ComparisonTable from "@/components/ComparisonTable";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { FadeInSection, StaggerGrid, StaggerItem } from "@/components/motion/MotionPrimitives";
import {
  getProductById,
  paidBundleAudience,
  paidBundleBenefits,
  paidBundleIncludes,
  paidBundleOutcomeAndAccess,
  paidBundleResources,
  paidBundleUsageSteps,
  paidProductProblems,
  paidProductSolutions,
  paidProductTrustPoints,
  products,
  testimonials
} from "@/lib/platform-content";
import { notFound } from "next/navigation";

type ProductDetailPageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id
  }));
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductById(params.id);
  const freeRoadmap = getProductById("ai-ml-free-roadmap");

  if (!product) {
    notFound();
  }

  const isPaidProduct = product.type === "paid";

  return (
    <main>
      <Navbar />

      <FadeInSection className="section-space">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow={isPaidProduct ? "Paid Product" : "Free Product"}
              title={product.title}
              description={product.description}
            />

            {isPaidProduct ? (
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
                {paidProductTrustPoints.map((point) => (
                  <span key={point} className="rounded-full bg-white px-3 py-2 shadow-sm">
                    {point}
                  </span>
                ))}
              </div>
            ) : null}

            <StaggerGrid className="mt-8 grid gap-3">
              {product.features.map((feature) => (
                <StaggerItem
                  key={feature}
                  className="card-sheen rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-md"
                >
                  {feature}
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>

          <StaggerItem className="hero-surface soft-panel p-6">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
              {isPaidProduct ? "Best Value" : product.badge}
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight leading-snug text-slate-950">
              {product.title}
            </h2>
            <p className="mt-3 text-sm font-medium text-slate-700">{product.tagline}</p>
            <p className="mt-6 text-5xl font-black text-slate-950">{product.priceLabel}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {isPaidProduct
                ? "Limited launch price ₹49 for students who want a structured Python foundation before going deeper into AI/ML."
                : "This product opens a direct Google Drive resource and works as the easiest entry point into the platform."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {isPaidProduct ? (
                <BuyNowButton
                  product={product}
                  className="glow-button group rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-500"
                />
              ) : (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-button inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-slate-800"
                >
                  {product.ctaLabel}
                </a>
              )}

              {freeRoadmap && isPaidProduct ? (
                <a
                  href={freeRoadmap.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-button inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:scale-105 hover:border-slate-400 hover:bg-white"
                >
                  Free Download
                </a>
              ) : null}
            </div>
          </StaggerItem>
        </div>
      </FadeInSection>

      {isPaidProduct ? (
        <>
          <FadeInSection className="section-divider section-space bg-white">
            <div className="section-shell">
              <SectionHeading
                eyebrow="What This Kit Helps You Achieve"
                title="A structured Python foundation before you move into AI/ML."
                description="Stop wasting time. Get the exact daily execution plan to build your portfolio and land interviews."
                align="center"
              />

              <StaggerGrid className="mt-10 grid gap-6 md:grid-cols-2">
                {paidBundleBenefits.map((benefit) => (
                  <StaggerItem
                    key={benefit.title}
                    className="card-sheen rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-amber-300"
                  >
                    <h3 className="text-xl font-bold tracking-tight leading-snug text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-4 text-base font-medium leading-relaxed text-slate-800">{benefit.english}</p>
                    <p className="mt-3 text-sm italic leading-relaxed text-slate-500">{benefit.hindi}</p>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </FadeInSection>

          <FadeInSection className="section-divider section-space bg-white">
            <div className="section-shell grid gap-8 lg:grid-cols-2">
              <div>
                <SectionHeading
                  eyebrow="Problem"
                  title="Why this product exists."
                  description="We surveyed thousands of beginners. If these sound familiar, this system was built for you."
                />
                <div className="mt-8 grid gap-4">
                  {paidProductProblems.map((problem) => (
                    <div
                      key={problem}
                      className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-base font-medium leading-relaxed text-rose-900 shadow-sm transition-all duration-300 hover:scale-[1.02]"
                    >
                      {problem}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading
                  eyebrow="Solution"
                  title="What the starter kit helps students do faster."
                  description="The Foundation System bypasses tutorial hell and gives you a single source of truth."
                />
                <div className="mt-8 grid gap-4">
                  {paidProductSolutions.map((solution) => (
                    <div
                      key={solution}
                      className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-base font-medium leading-relaxed text-emerald-900 shadow-sm transition-all duration-300 hover:scale-[1.02]"
                    >
                      {solution}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="section-divider section-space bg-slate-50/80">
            <div className="section-shell">
              <SectionHeading
                eyebrow="What’s Included"
                title="Everything inside the paid bundle."
                description="Everything you need in 41 high-quality, actionable PDFs."
                align="center"
              />

              <StaggerGrid className="mt-10 grid gap-6 lg:grid-cols-2">
                {paidBundleIncludes.map((item) => (
                  <StaggerItem
                    key={item.title}
                    className="card-sheen rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-300"
                  >
                    <h3 className="text-xl font-black tracking-tight leading-snug text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base font-medium leading-relaxed text-slate-800">{item.english}</p>
                    <p className="mt-3 text-sm italic leading-relaxed text-slate-500">{item.hindi}</p>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </FadeInSection>

          <FadeInSection className="section-divider section-space bg-white">
            <div className="section-shell">
              <SectionHeading
                eyebrow="Preview"
                title="Look Inside the Foundation System"
                description="Browse through the official AI Engineer Foundation System roadmap before you decide."
                align="center"
              />
              <div className="mt-10 mx-auto w-[90%] md:w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 shadow-xl h-[450px] md:h-[700px]">
                <iframe
                  src="/AI_Engineer_Foundation_System_Preview.pdf#toolbar=0"
                  className="w-full h-full border-0 bg-slate-100"
                  title="PDF Preview"
                />
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="section-divider section-space bg-slate-50/80">
            <div className="section-shell">
              <SectionHeading
                eyebrow="Comparison"
                title="Compare the Free Kit and the Paid System."
                description="See exactly why upgrading to the 41-PDF Foundation System is the best decision for your career."
                align="center"
              />
              <div className="mt-10">
                <ComparisonTable />
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="section-divider section-space bg-white">
            <div className="section-shell">
              <SectionHeading
                eyebrow="Recommended Resources"
                title="Trusted websites and videos to learn and practice alongside the kit."
                description="We curated the best free resources directly into your roadmap so you never have to search for tutorials again."
                align="center"
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight leading-snug text-slate-950">
                    Websites for practice and learning
                  </h3>
                  <StaggerGrid className="mt-6 grid gap-4">
                    {paidBundleResources.websites.map((resource) => (
                      <StaggerItem
                        key={resource.title}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
                      >
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-base font-semibold text-slate-950 underline-offset-4 hover:underline"
                        >
                          {resource.title}
                        </a>
                        {resource.english && (
                          <p className="mt-3 text-sm leading-relaxed text-slate-700">{resource.english}</p>
                        )}
                        {resource.hindi && (
                          <p className="mt-2 text-sm leading-relaxed text-slate-500">{resource.hindi}</p>
                        )}
                      </StaggerItem>
                    ))}
                  </StaggerGrid>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight leading-snug text-slate-950">
                    YouTube videos for learning
                  </h3>
                  <StaggerGrid className="mt-6 grid gap-4">
                    {paidBundleResources.videos.map((resource) => (
                      <StaggerItem
                        key={resource.title}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
                      >
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-base font-semibold text-slate-950 underline-offset-4 hover:underline"
                        >
                          {resource.title}
                        </a>
                        {resource.english && (
                          <p className="mt-3 text-sm leading-relaxed text-slate-700">{resource.english}</p>
                        )}
                        {resource.hindi && (
                          <p className="mt-2 text-sm leading-relaxed text-slate-500">{resource.hindi}</p>
                        )}
                      </StaggerItem>
                    ))}
                  </StaggerGrid>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="section-divider section-space bg-slate-50/80">
            <div className="section-shell grid gap-8 lg:grid-cols-2">
              <div>
                <SectionHeading
                  eyebrow="How To Use This Kit"
                  title="Use the bundle like a system, not just a download."
                  description="This helps students understand how to actually work through the material instead of collecting files and leaving them unused."
                />
                <StaggerGrid className="mt-8 grid gap-4">
                  {paidBundleUsageSteps.map((step, index) => (
                    <StaggerItem
                      key={step.english}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                        Step {index + 1}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-700">{step.english}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.hindi}</p>
                    </StaggerItem>
                  ))}
                </StaggerGrid>
              </div>

              <div>
                <SectionHeading
                  eyebrow="Who This Is For"
                  title="A better fit for some learners than others."
                  description="Clear audience-fit messaging reduces the wrong purchases and improves trust."
                />
                <div className="mt-8 grid gap-6">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
                    <h3 className="text-xl font-bold tracking-tight leading-snug text-slate-950">
                      Best for
                    </h3>
                    <div className="mt-4 grid gap-4">
                      {paidBundleAudience.for.map((item) => (
                        <div key={item.english}>
                          <p className="text-sm leading-relaxed text-slate-700">{item.english}</p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.hindi}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
                    <h3 className="text-xl font-bold tracking-tight leading-snug text-slate-950">
                      Not for
                    </h3>
                    <div className="mt-4 grid gap-4">
                      {paidBundleAudience.notFor.map((item) => (
                        <div key={item.english}>
                          <p className="text-sm leading-relaxed text-slate-700">{item.english}</p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.hindi}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="section-divider section-space bg-white">
            <div className="section-shell">
              <SectionHeading
                eyebrow="Testimonials"
                title="Trust signals belong with the product offer."
                description="These cards help the paid product page feel more believable without making the whole homepage about one offer."
                align="center"
              />

              <StaggerGrid className="mt-10 grid gap-6 lg:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </StaggerGrid>
            </div>
          </FadeInSection>

          <FadeInSection className="section-divider section-space bg-white">
            <div className="section-shell max-w-5xl">
              <SectionHeading
                eyebrow="Outcome & Access"
                title="What students can expect by the end, and how they receive it."
                description="This closes the loop by setting expectations around the result and the delivery format."
                align="center"
              />

              <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md">
                  <h3 className="text-2xl font-bold tracking-tight leading-snug text-slate-950">
                    Outcome
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700">
                    {paidBundleOutcomeAndAccess.outcome.english}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {paidBundleOutcomeAndAccess.outcome.hindi}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md">
                  <h3 className="text-2xl font-bold tracking-tight leading-snug text-slate-950">
                    Access
                  </h3>
                  <div className="mt-4 grid gap-4">
                    {paidBundleOutcomeAndAccess.access.map((item) => (
                      <div key={item.english}>
                        <p className="text-sm leading-relaxed text-slate-700">{item.english}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.hindi}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="section-divider section-space bg-[linear-gradient(180deg,#0f172a_0%,#172554_100%)]">
            <div className="section-shell">
              <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-white/5 p-8 text-center backdrop-blur-sm sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
                  Final CTA
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight leading-snug text-white sm:text-5xl">
                  Limited launch price ₹49 for the full foundation system.
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
                  If the free roadmap gave you clarity, this paid starter kit helps you move faster with
                  notes, practice, interview prep, and project support.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <div className="cta-pulse">
                    <BuyNowButton
                      product={product}
                      className="glow-button group rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-500"
                    />
                  </div>
                  {freeRoadmap ? (
                    <a
                      href={freeRoadmap.href}
                      target="_blank"
                      rel="noreferrer"
                      className="glow-button rounded-full border border-slate-500 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:border-slate-300 hover:bg-white/10"
                    >
                      Free Download
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </FadeInSection>
        </>
      ) : (
        <FadeInSection className="section-divider section-space bg-white">
          <div className="section-shell max-w-4xl">
            <SectionHeading
              eyebrow="Use This First"
              title="The free roadmap is the best starting point for new visitors."
              description="This page stays lightweight because free resources should be easy to access. Longer sales-focused persuasion belongs on paid product pages only."
              align="center"
            />
          </div>
        </FadeInSection>
      )}

      <Footer />
    </main>
  );
}
