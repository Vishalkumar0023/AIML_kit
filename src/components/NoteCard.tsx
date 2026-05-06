import { cn } from "@/lib/utils";
import type { LearningNote } from "@/types";
import { MotionCard } from "./motion/MotionPrimitives";

type NoteCardProps = {
  note: LearningNote;
};

export default function NoteCard({ note }: NoteCardProps) {
  const locked = note.access === "premium";

  return (
    <MotionCard
      className={cn(
        "card-sheen rounded-2xl border p-6 shadow-md",
        locked ? "border-amber-200 bg-amber-50/70" : "border-slate-200 bg-white"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
          {note.category}
        </span>
        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]",
            locked ? "bg-amber-200 text-amber-950" : "bg-emerald-100 text-emerald-800"
          )}
        >
          {locked ? "Locked" : "Free"}
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-bold tracking-tight leading-snug text-slate-950">
        {note.title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{note.description}</p>

      <div className="mt-6 grid gap-3">
        {note.bullets.map((bullet) => (
          <div
            key={bullet}
            className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm"
          >
            {bullet}
          </div>
        ))}
      </div>
    </MotionCard>
  );
}
