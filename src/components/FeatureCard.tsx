import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
};

export default function FeatureCard({
  title,
  description,
  eyebrow,
  className
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "marketing-card hover-glow rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
