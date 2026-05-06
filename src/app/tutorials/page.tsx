import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import TutorialCard from "@/components/TutorialCard";
import { FadeInSection, StaggerGrid, StaggerItem } from "@/components/motion/MotionPrimitives";
import { blogCards, tutorials } from "@/lib/platform-content";
import Link from "next/link";

export default function TutorialsPage() {
  return (
    <main>
      <Navbar />
      <FadeInSection className="section-space">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Tutorials"
            title="Embedded video tutorials with blog-style follow-up reading."
            description="Students can watch, skim, and continue learning without leaving the platform structure."
          />

          <StaggerGrid className="mt-10 grid gap-6 lg:grid-cols-3">
            {tutorials.map((tutorial) => (
              <TutorialCard key={tutorial.id} tutorial={tutorial} />
            ))}
          </StaggerGrid>

          <div className="section-divider mt-14 pt-14">
            <SectionHeading
              eyebrow="Blog Cards"
              title="Keep the learning flow moving after each video."
              description="These cards act like lightweight blog prompts that push students into notes, roadmap guidance, and product detail pages."
            />

            <StaggerGrid className="mt-8 grid gap-6 md:grid-cols-3">
              {blogCards.map((card) => (
                <StaggerItem key={card.id}>
                  <Link
                    href={card.href}
                    className="card-sheen block rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition duration-300 hover:scale-[1.03] hover:shadow-xl"
                  >
                    <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                      {card.category}
                    </span>
                    <h3 className="mt-5 text-xl font-bold tracking-tight leading-snug text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.excerpt}</p>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </FadeInSection>
      <Footer />
    </main>
  );
}
