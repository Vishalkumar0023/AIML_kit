import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import { siteContent } from "@/lib/site-content";

export default function SupportPage() {
  return (
    <main>
      <Navbar />
      <section className="section-space bg-[linear-gradient(180deg,#f8fbff_0%,#f8fafc_100%)]">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-medium text-slate-600">{siteContent.brand.formalLine}</p>
            <div className="mt-4">
              <SectionHeading title={siteContent.support.title} description={siteContent.support.body} />
            </div>
            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              For payment or access issues, keep your payment email, Google Drive access email, and
              order details ready before contacting support. If automatic delivery fails, support can
              use those details to recheck the order faster.
            </div>
          </div>
          <LeadForm variant="support" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
