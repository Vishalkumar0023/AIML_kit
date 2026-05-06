import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { FadeInSection, StaggerGrid, StaggerItem } from "@/components/motion/MotionPrimitives";
import { homepageHighlights, homepageStats, products, testimonials } from "@/lib/platform-content";
import Link from "next/link";

const freeProduct = products[0];
const paidProduct = products[1];

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <FadeInSection className="section-space overflow-hidden">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <StaggerItem>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              Student-First Learning Platform
            </p>
            <h1 className="gradient-heading mt-4 max-w-4xl text-4xl font-black tracking-tight leading-snug sm:text-5xl lg:text-6xl">
              Learn Python and AI/ML from one structured, growing platform.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Explore free resources, practical tutorials, revision notes, and focused learning
              products built for students who want more clarity and less confusion.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="glow-button rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-amber-500"
              >
                Explore Products
              </Link>
              <a
                href={freeProduct.href}
                target="_blank"
                rel="noreferrer"
                className="glow-button rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:scale-105 hover:border-slate-400 hover:bg-white"
              >
                Free Download
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="rounded-full bg-white px-3 py-2 shadow-sm">No spam</span>
              <span className="rounded-full bg-white px-3 py-2 shadow-sm">Free + paid resources</span>
              <span className="rounded-full bg-white px-3 py-2 shadow-sm">Built for students</span>
            </div>
          </StaggerItem>

          <StaggerGrid className="hero-surface soft-panel grid gap-4 p-6 sm:grid-cols-2">
            {homepageHighlights.map((item) => (
              <StaggerItem key={item.title}>
                <Link
                  href={item.href}
                  className="card-sheen block rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-md transition duration-300 hover:scale-[1.03] hover:shadow-xl"
                >
                  <h2 className="text-xl font-bold tracking-tight leading-snug text-slate-950">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </Link>
              </StaggerItem>
            ))}
            <StaggerItem className="rounded-2xl bg-slate-950 p-6 text-white shadow-md sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                Start here
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight leading-snug">
                Begin with the free roadmap, then explore products when you want more depth.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                The website is designed as a platform first, with each paid product getting its own
                detail page and sales flow.
              </p>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </FadeInSection>

      <FadeInSection className="section-divider section-space bg-white">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Platform Overview"
            title="Everything is organized into clear learning sections."
            description="The homepage explains the platform and helps visitors decide where to go next without locking the whole site to one product."
            align="center"
          />

          <StaggerGrid className="mt-10 grid gap-5 md:grid-cols-3">
            {homepageStats.map((stat) => (
              <StaggerItem
                key={stat.id}
                className="card-sheen rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                  {stat.label}
                </p>
                <p className="mt-4 text-3xl font-black tracking-tight text-slate-950">{stat.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{stat.detail}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </FadeInSection>

      <FadeInSection className="section-divider section-space bg-slate-50/80">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Why This Platform"
              title="A simpler way for students to move from confusion to progress."
              description="Instead of one crowded landing page, the platform separates discovery, learning content, and product-specific sales pages."
            />
            <div className="mt-8 grid gap-4">
              {[
                "Homepage explains the platform, not just one paid offer.",
                "Products page works like a catalog for future free and paid products.",
                "Each product gets its own detailed page with its own conversion copy.",
                "Notes and tutorials still bring value even before a visitor buys anything."
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm leading-relaxed text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="soft-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
              Featured free resource
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight leading-snug text-slate-950">
              Start with the AI/ML Free Roadmap.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              This is the lowest-friction entry point for new visitors. It builds trust first, then
              gives them a reason to come back for paid products later.
            </p>
            <div className="mt-6">
              <ProductCard product={freeProduct} />
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-divider section-space bg-white">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Products"
            title="Browse the current learning products."
            description="The products section should scale as you add more free and paid offers in the future."
            align="center"
          />

          <StaggerGrid className="mt-10 grid gap-6 lg:grid-cols-2">
            <ProductCard product={freeProduct} />
            <ProductCard product={paidProduct} />
          </StaggerGrid>

          <div className="mt-8 flex justify-center">
            <Link
              href="/products"
              className="glow-button rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-slate-800"
            >
              View All Products
            </Link>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-divider section-space bg-slate-50/80">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Student Feedback"
            title="Light social proof for the platform."
            description="Testimonials here should stay broad and trust-building. Strong product-selling proof belongs on the product page itself."
            align="center"
          />

          <StaggerGrid className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </StaggerGrid>
        </div>
      </FadeInSection>

      <FadeInSection className="section-divider section-space bg-[linear-gradient(180deg,#0f172a_0%,#172554_100%)]">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-white/5 p-8 text-center backdrop-blur-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
              Explore Next
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight leading-snug text-white sm:text-5xl">
              Explore the platform, then choose the product that fits your stage.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
              Keep the homepage broad and useful. Move deeper persuasion, urgency, and product-specific
              conversion copy into individual product pages.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/products"
                className="glow-button rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-amber-500"
              >
                Explore Products
              </Link>
              <a
                href={freeProduct.href}
                target="_blank"
                rel="noreferrer"
                className="glow-button rounded-full border border-slate-500 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:border-slate-300 hover:bg-white/10"
              >
                Free Download
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>

      <Footer />
    </main>
  );
}
