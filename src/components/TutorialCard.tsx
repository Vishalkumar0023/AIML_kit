import type { LearningTutorial } from "@/types";
import { MotionCard } from "./motion/MotionPrimitives";

type TutorialCardProps = {
  tutorial: LearningTutorial;
};

export default function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <MotionCard className="card-sheen overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
      <div className="aspect-video w-full bg-slate-950">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${tutorial.youtubeId}`}
          title={tutorial.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {tutorial.level}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            {tutorial.duration}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-bold tracking-tight leading-snug text-slate-950">
          {tutorial.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{tutorial.description}</p>
      </div>
    </MotionCard>
  );
}
