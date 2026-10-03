import React from "react";
import { Terminal, GraduationCap, Briefcase, Award, CheckCircle, Sparkles, MapPin } from "lucide-react";
import { EXPERIENCE_LIST } from "../../data/experience";
import { EDUCATION_STAGES } from "../../data/education";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 border-t border-slate-800/80 space-y-16">
      {/* ------------------------------------------------------------- */}
      {/* 03 MODULE // EXPERIENCE — OMNI-IDE AI INTERNSHIP              */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono-code text-cyan-400 tracking-wider">03 MODULE // EXPERIENCE</div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-100 uppercase tracking-tight">
                WORK & INTERNSHIP
              </h2>
            </div>
          </div>
          <p className="text-xs font-mono-code text-slate-400 max-w-sm">
            Professional AI engineering internship log & developer experience.
          </p>
        </div>

        <div className="os-card rounded-xl p-6 border border-cyan-500/30 space-y-6 font-mono-code relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <Terminal className="w-32 h-32 text-cyan-400" />
          </div>

          {EXPERIENCE_LIST.map((exp) => (
            <div key={exp.id} className="space-y-4 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>{exp.year}</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-slate-200">{exp.company}</span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 font-semibold">
                  {exp.type}
                </span>
              </div>

              <div className="space-y-2">
                <div className="font-display font-bold text-lg md:text-xl text-slate-100">{exp.role}</div>
                <p className="text-xs md:text-sm text-slate-300 font-sans leading-relaxed">{exp.summary}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 04 MODULE // EDUCATION — CONNECTED 3-STAGE TIMELINE            */}
      {/* SSLC → II PUC → B.E.                                           */}
      {/* ------------------------------------------------------------- */}
      <div id="education" className="space-y-8 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-indigo-950/50 border border-indigo-500/30 text-indigo-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono-code text-indigo-400 tracking-wider">04 MODULE // EDUCATION</div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-100 uppercase tracking-tight">
                ACADEMIC JOURNEY
              </h2>
            </div>
          </div>
          <div className="text-xs font-mono-code text-indigo-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>SSLC → II PUC → B.E. CSE</span>
          </div>
        </div>

        {/* Connected Stage Flow Visualization */}
        <div className="relative">
          {/* Vertical Timeline Bar on Mobile / Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800 -translate-x-1/2 -z-0 pointer-events-none" />

          <div className="space-y-6 lg:space-y-8 relative z-10">
            {EDUCATION_STAGES.map((edu, idx) => (
              <div
                key={edu.id}
                className={`os-card rounded-2xl p-6 md:p-8 transition-all duration-300 relative ${
                  edu.isFeatured
                    ? "border-2 border-cyan-500/50 bg-gradient-to-br from-slate-950 via-[#0a101d] to-cyan-950/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                    : "border border-slate-800/80 bg-slate-950/80 hover:border-slate-700"
                }`}
              >
                {/* Header Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`px-2.5 py-1 rounded text-xs font-mono-code font-bold tracking-wider ${
                        edu.isFeatured
                          ? "bg-cyan-500 text-slate-950"
                          : "bg-indigo-950 text-indigo-300 border border-indigo-500/30"
                      }`}
                    >
                      STAGE 0{3 - idx} // {edu.level}
                    </span>

                    {edu.isFeatured && (
                      <span className="px-2.5 py-1 rounded text-xs font-mono-code bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        CURRENT / FEATURED DEGREE
                      </span>
                    )}
                  </div>

                  {/* Highlighted Score Badge */}
                  {edu.score && (
                    <div
                      className={`text-sm md:text-base font-mono-code font-extrabold px-3 py-1.5 rounded-lg ${
                        edu.isFeatured
                          ? "bg-cyan-950 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                          : "bg-slate-900 text-emerald-400 border border-slate-800"
                      }`}
                    >
                      {edu.score}
                    </div>
                  )}
                </div>

                {/* Main Content Body */}
                <div className="pt-4 space-y-3">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-slate-100">
                    {edu.degree}
                  </h3>

                  <div className="space-y-1 font-mono-code text-xs md:text-sm">
                    <div className="text-cyan-400 font-semibold flex items-center gap-2">
                      <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{edu.institution}</span>
                    </div>

                    {edu.fullInstitutionName && (
                      <div className="text-slate-400 text-xs pl-6">
                        {edu.fullInstitutionName}
                      </div>
                    )}

                    {edu.location && (
                      <div className="text-slate-400 text-xs pl-6 flex items-center gap-1 pt-0.5">
                        <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Metadata Spec Row */}
                  <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-mono-code text-slate-400 border-t border-slate-800/60">
                    <div>
                      STATUS: <span className="text-slate-200 font-medium">{edu.status}</span>
                    </div>
                    {edu.graduationYear && (
                      <div>
                        GRADUATION YEAR: <span className="text-cyan-300 font-semibold">{edu.graduationYear}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

