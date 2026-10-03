import React from "react";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../icons/SocialIcons";
import { RESEARCH_DATA } from "../../data/research";

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-12 space-y-6 border-t border-slate-800/80">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400 font-semibold">
          <BookOpen className="w-4 h-4" />
          <span>08 MODULE // RESEARCH & TECHNICAL WRITING</span>
        </div>
        <span className="px-2.5 py-0.5 rounded bg-amber-950/70 text-amber-400 border border-amber-500/30 text-[10px] font-mono-code font-semibold">
          RESEARCH IN PROGRESS
        </span>
      </div>

      <div className="os-card rounded-xl p-6 border border-cyan-500/20 space-y-5 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-950">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="text-xs font-mono-code text-cyan-400">PROJECT REF: {RESEARCH_DATA.projectRef}</div>
            <h3 className="font-display font-bold text-xl text-slate-100">{RESEARCH_DATA.title}</h3>
          </div>

          <a
            href={RESEARCH_DATA.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono-code text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-colors self-start sm:self-auto"
          >
            <GithubIcon className="w-4 h-4" />
            <span>OPENCLAW REPO</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <p className="text-sm text-slate-300 font-sans leading-relaxed">
          {RESEARCH_DATA.abstract}
        </p>

        <div className="space-y-2">
          <div className="text-[11px] font-mono-code text-slate-400">FOCUS AREAS & EXPERIMENTAL QUESTIONS</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-slate-300">
            {RESEARCH_DATA.focusAreas.map((area, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded bg-slate-950/60 border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
