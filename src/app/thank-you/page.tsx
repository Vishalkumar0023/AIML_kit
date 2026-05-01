import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import { siteContent } from "@/lib/site-content";

export default function ThankYouPage() {
  return (
    <main>
      <Navbar />
      <section className="section-space bg-[linear-gradient(180deg,#f8fbff_0%,#f8fafc_100%)]">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-12">
            <p className="text-sm font-medium text-slate-600">{siteContent.brand.formalLine}</p>
            <div className="mx-auto mt-4 w-fit rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-amber-800">
              Confirmation
            </div>
            <div className="mt-4">
              <SectionHeading
                title={siteContent.thankYou.title}
                description={siteContent.thankYou.body}
                align="center"
              />
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-600">{siteContent.thankYou.reminder}</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {siteContent.thankYou.primaryCta}
              </a>
              <a
                href="/support"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                {siteContent.thankYou.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
