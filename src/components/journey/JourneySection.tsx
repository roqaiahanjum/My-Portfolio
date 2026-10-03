import React from "react";
import { Clock, CheckCircle2, CircleDashed, Flame } from "lucide-react";
import { JOURNEY_MILESTONES } from "../../data/journey";

export const JourneySection: React.FC = () => {
  return (
    <div className="py-8 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400 font-semibold">
          <Clock className="w-4 h-4" />
          <span>DEVELOPER BUILD LOG // TIMELINE</span>
        </div>
        <span className="text-xs font-mono-code text-slate-500">CENTRAL DATA FILE DATASET</span>
      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        {JOURNEY_MILESTONES.map((item) => (
          <div
            key={item.id}
            className="os-card rounded-xl p-4 md:p-5 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/40"
          >
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center shrink-0">
                <span className="font-mono-code text-cyan-400 font-bold text-xs px-2 py-1 rounded bg-slate-950 border border-slate-800">
                  {item.year}
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-display font-semibold text-slate-100 text-base">{item.title}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono-code">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-slate-300 font-sans">{item.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 font-mono-code text-xs">
              {item.status === "Completed" && (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>COMPLETED</span>
                </span>
              )}
              {item.status === "In Progress" && (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-950/60 border border-amber-500/30 text-amber-400">
                  <CircleDashed className="w-3.5 h-3.5 animate-spin" />
                  <span>IN PROGRESS</span>
                </span>
              )}
              {item.status === "Ongoing" && (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                  <Flame className="w-3.5 h-3.5" />
                  <span>ONGOING</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
