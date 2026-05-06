import { comparisonRows } from "@/lib/platform-content";
import { StaggerGrid, StaggerItem } from "./motion/MotionPrimitives";

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[680px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
        <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-slate-200 bg-slate-950 text-white">
          <div className="px-4 py-4 text-sm font-semibold uppercase tracking-[0.2em] sm:px-6">
            Compare
          </div>
          <div className="px-4 py-4 text-sm font-semibold uppercase tracking-[0.2em] sm:px-6">
            Free
          </div>
          <div className="bg-amber-400 px-4 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 sm:px-6">
            Paid
          </div>
        </div>

        <StaggerGrid className="grid gap-0">
          {comparisonRows.map((row, index) => (
            <StaggerItem
              key={row.label}
              className={`grid grid-cols-[1.2fr_1fr_1fr] ${index !== comparisonRows.length - 1 ? "border-b border-slate-200" : ""}`}
            >
              <div className="bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-950 sm:px-6">
                {row.label}
              </div>
              <div className="px-4 py-4 text-sm leading-relaxed text-slate-600 sm:px-6">
                {row.free}
              </div>
              <div className="bg-amber-50 px-4 py-4 text-sm leading-relaxed text-slate-700 sm:px-6">
                {row.paid}
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </div>
  );
}
