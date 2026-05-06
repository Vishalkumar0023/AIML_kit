import { cn } from "@/lib/utils";
import type { LearningProduct } from "@/types";
import Link from "next/link";
import BuyNowButton from "./BuyNowButton";
import { MotionCard } from "./motion/MotionPrimitives";

type ProductCardProps = {
  product: LearningProduct;
  featured?: boolean;
};

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  const highlightPaid = featured && product.type === "paid";

  return (
    <MotionCard
      className={cn(
        "card-sheen rounded-2xl border bg-white p-6 shadow-md",
        highlightPaid
          ? "border-amber-400 bg-[linear-gradient(180deg,rgba(251,191,36,0.08),rgba(255,255,255,1))]"
          : featured
            ? "border-slate-950 bg-slate-950/[0.02]"
            : "border-slate-200"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
            {highlightPaid ? "Best Value" : product.badge ?? product.type}
          </span>
          {highlightPaid ? (
            <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950">
              Limited launch price ₹49
            </span>
          ) : null}
        </div>
        <span className="text-2xl font-bold text-slate-950">{product.priceLabel}</span>
      </div>

      <h3 className="mt-5 text-2xl font-bold tracking-tight leading-snug text-slate-950">
        {product.title}
      </h3>
      <p className="mt-2 text-sm font-medium text-slate-700">{product.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{product.description}</p>
      {highlightPaid ? (
        <p className="mt-4 text-sm font-medium text-slate-700">
          Best for students who want notes, practice, and a faster start without buying a big course.
        </p>
      ) : null}

      <div className="mt-6 grid gap-3">
        {product.features.map((feature) => (
          <div
            key={feature}
            className="rounded-2xl border border-slate-200 bg-slate-50/85 px-4 py-3 text-sm text-slate-700 shadow-sm"
          >
            {feature}
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/product/${product.id}`}
          className="glow-button rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:scale-105 hover:border-slate-400 hover:bg-slate-50"
        >
          View Details
        </Link>
        {product.type === "free" ? (
          <a
            href={product.href}
            target="_blank"
            rel="noreferrer"
            className="glow-button rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-slate-800"
          >
            {product.ctaLabel}
          </a>
        ) : (
          <BuyNowButton
            product={product}
            className="glow-button group rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-500"
          />
        )}
      </div>
    </MotionCard>
  );
}
