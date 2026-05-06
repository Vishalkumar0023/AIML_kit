import type { Testimonial } from "@/types";
import { MotionCard } from "./motion/MotionPrimitives";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <MotionCard className="card-sheen rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
          {testimonial.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <p className="text-base font-semibold text-slate-950">{testimonial.name}</p>
          <p className="text-sm text-slate-500">{testimonial.role}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-slate-600">“{testimonial.feedback}”</p>
    </MotionCard>
  );
}
