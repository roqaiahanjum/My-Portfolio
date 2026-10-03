import React from "react";
import { Activity, ExternalLink, Calendar, Layers, Award, BookOpen, Briefcase, Sparkles } from "lucide-react";
import { UPDATES_DATA } from "../../data/updates";

export const UpdatesSection: React.FC = () => {
  const getTypeBadge = (type: string) => {
    switch (type) {
      case "PROJECT":
        return { label: "PROJECT RELEASE", color: "bg-cyan-950 text-cyan-300 border-cyan-500/40", icon: Layers };
      case "CERTIFICATION":
        return { label: "CERTIFICATION", color: "bg-emerald-950 text-emerald-300 border-emerald-500/40", icon: Award };
      case "INTERNSHIP":
        return { label: "INTERNSHIP UPDATE", color: "bg-indigo-950 text-indigo-300 border-indigo-500/40", icon: Briefcase };
      case "RESEARCH":
        return { label: "RESEARCH PROGRESS", color: "bg-amber-950 text-amber-300 border-amber-500/40", icon: BookOpen };
      default:
        return { label: "MILESTONE", color: "bg-violet-950 text-violet-300 border-violet-500/40", icon: Sparkles };
    }
  };

  return (
    <section id="updates" className="py-12 space-y-6 border-t border-slate-800/80">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-400">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono-code text-cyan-400 tracking-wider">10 MODULE // ACTIVITY FEED</div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-100">UPDATES & ANNOUNCEMENTS</h2>
          </div>
        </div>
        <p className="text-xs font-mono-code text-slate-400 max-w-sm">
          Chronological professional updates, project releases, and engineering milestones.
        </p>
      </div>

      {/* Activity Timeline Feed */}
      <div className="space-y-4 font-mono-code text-xs">
        {UPDATES_DATA.map((upd) => {
          const badge = getTypeBadge(upd.type);
          const IconComp = badge.icon;

          return (
            <div
              key={upd.id}
              className="os-card rounded-xl p-5 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/40"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                  <IconComp className="w-4 h-4" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded border font-semibold ${badge.color}`}>
                      {badge.label}
                    </span>
                    <span className="text-slate-500 text-[11px] flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{upd.date}</span>
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-100">{upd.title}</h3>
                  <p className="text-slate-300 font-sans text-xs md:text-sm leading-relaxed">{upd.description}</p>
                </div>
              </div>

              {upd.link && (
                <a
                  href={upd.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-slate-900 border border-slate-800 text-xs text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-colors shrink-0 self-start md:self-auto"
                >
                  <span>{upd.linkLabel || "VIEW DETAILS"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
