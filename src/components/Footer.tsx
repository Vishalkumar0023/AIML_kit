import { siteContent } from "@/lib/site-content";

export default function Footer() {
  const { instagramLink, telegramLink, youtubeLink, contactEmail } = siteContent.links;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-shell grid gap-8 py-10 lg:grid-cols-[1fr_auto]">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{siteContent.brand.name}</h3>
          <p className="mt-2 text-sm font-medium text-slate-700">{siteContent.brand.formalLine}</p>
          <p className="mt-2 text-sm text-slate-500">{siteContent.brand.tagline}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            {siteContent.footer.disclaimer}
          </p>
        </div>

        <div className="grid gap-3 text-sm text-slate-600">
          {telegramLink ? (
            <a href={telegramLink} target="_blank" rel="noreferrer" className="hover:text-slate-950">
              Telegram
            </a>
          ) : null}
          <a href={instagramLink || "#"} target="_blank" rel="noreferrer" className="hover:text-slate-950">
            Instagram
          </a>
          <a href={youtubeLink || "#"} target="_blank" rel="noreferrer" className="hover:text-slate-950">
            YouTube
          </a>
          <a href={`mailto:${contactEmail}`} className="hover:text-slate-950">
            {contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
