import { platformNavItems } from "@/lib/platform-content";
import { siteContent } from "@/lib/site-content";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section-divider border-t border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="section-shell flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
            Vishal AI Academy
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight leading-snug text-slate-950">
            Learn Python and AI/ML with a cleaner path.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            This platform combines free notes, tutorials, and beginner-friendly products into one
            structured learning experience.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-6">
          <div className="flex flex-wrap gap-3">
            {platformNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-950 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5 pr-2">
            <a href={siteContent.links.instagramLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:-translate-y-1 hover:text-pink-600 transition-all duration-300" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href={siteContent.links.telegramLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:-translate-y-1 hover:text-blue-500 transition-all duration-300" title="Telegram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </a>
            <a href={siteContent.links.youtubeLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:-translate-y-1 hover:text-red-600 transition-all duration-300" title="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
            <a href={`mailto:${siteContent.links.contactEmail}`} className="text-slate-400 hover:-translate-y-1 hover:text-slate-800 transition-all duration-300" title="Email Us">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
