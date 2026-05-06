import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FadeInSection, StaggerGrid, StaggerItem } from "@/components/motion/MotionPrimitives";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Vishal AI Academy | Learn Python & AI/ML",
  description:
    "Welcome to Vishal AI Academy — your destination to learn Artificial Intelligence, Machine Learning, Python, Deep Learning, Data Science, and future-ready tech skills in a simple, practical, and project-based way.",
  keywords: ["Vishal AI Academy", "AI", "Machine Learning", "Python", "Data Science", "Learn AI", "BTech CSE AIML"],
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <FadeInSection className="section-space bg-[linear-gradient(180deg,#f8fbff_0%,#f8fafc_100%)]">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-black tracking-tight leading-snug text-slate-950 sm:text-5xl lg:text-6xl">
              About Vishal AI Academy
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Breaking down complex AI concepts into easy, structured learning so you can build real skills, real projects, and real career growth.
            </p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-divider section-space bg-white">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          <StaggerItem className="lg:sticky top-24 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/vishal-profile.png"
                alt="Vishal - Founder of Vishal AI Academy"
                width={400}
                height={400}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Founder & Instructor</p>
              <h3 className="mt-2 text-2xl font-black text-slate-950">Vishal Kumar</h3>
              <p className="mt-2 text-sm text-slate-600">BTech CSE AIML Student</p>
            </div>
          </StaggerItem>

          <StaggerGrid className="grid gap-8">
            <StaggerItem>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">My Goal Is Simple</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Welcome to Vishal AI Academy — your destination to learn Artificial Intelligence, Machine Learning, Python, Deep Learning, Data Science, and future-ready tech skills in a simple, practical, and project-based way.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                This platform is built for students, beginners, and aspiring tech professionals who want to go from basics to advanced concepts without confusion. Whether you're a beginner starting from zero or a student aiming to master AI, I am here to help you learn.
              </p>
            </StaggerItem>

            <StaggerItem className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-300">
              <h3 className="text-xl font-bold text-slate-950">What You’ll Learn Here:</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Artificial Intelligence (AI)",
                  "Machine Learning (ML)",
                  "Deep Learning & Neural Networks",
                  "Python Programming",
                  "Data Science & Analytics",
                  "Projects, Roadmaps & Career Guidance",
                  "AI Tools, Automation & Future Tech"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-emerald-800">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>

            <StaggerItem className="mt-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">Company Description</h2>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <p className="text-base leading-relaxed text-slate-700">
                  <span className="font-bold text-slate-950">Vishal AI Academy</span> (V.M. AI Technologies Private Limited) is an education platform focused on delivering high-quality, actionable roadmaps and starter kits for aspiring AI Engineers. We believe in student-first learning, skipping the fluff, and focusing purely on the core skills that get you hired.
                </p>
              </div>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </FadeInSection>

      <Footer />
    </main>
  );
}
