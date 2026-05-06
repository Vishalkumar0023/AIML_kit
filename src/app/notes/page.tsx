import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NoteCard from "@/components/NoteCard";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { FadeInSection, StaggerGrid, StaggerItem } from "@/components/motion/MotionPrimitives";
import { notes, products } from "@/lib/platform-content";

export default function NotesPage() {
  return (
    <main>
      <Navbar />
      <FadeInSection className="section-space">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Notes Library"
            title="Categorized notes for free learning and premium progression."
            description="Use the free notes to start quickly, then unlock premium material when you want deeper ML foundations."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <StaggerGrid className="grid gap-6">
              {notes.map((note) => (
                <NoteCard key={note.id} note={note} />
              ))}
            </StaggerGrid>

            <StaggerItem className="soft-panel p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                Premium upgrade
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight leading-snug text-slate-950">
                Unlock paid notes inside the starter kit.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                The locked note cards make it clear what is free and what sits behind the paid bundle.
              </p>
              <div className="mt-6">
                <ProductCard product={products[1]} featured />
              </div>
            </StaggerItem>
          </div>
        </div>
      </FadeInSection>
      <Footer />
    </main>
  );
}
