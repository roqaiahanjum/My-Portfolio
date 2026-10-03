import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Info, Sparkles, CheckCircle } from "lucide-react";
import { SKILL_CATEGORIES } from "../../data/skills";
import type { SkillItem } from "../../data/skills";
import { PROJECTS } from "../../data/projects";

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("languages");
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const currentCategory = SKILL_CATEGORIES.find((c) => c.id === activeCategory) || SKILL_CATEGORIES[0];

  return (
    <section id="stack" className="py-16 border-t border-slate-800/80">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-400">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono-code text-cyan-400 tracking-wider">05 MODULE // TECH STACK DEPENDENCIES</div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-100">SYSTEM DEPENDENCIES</h2>
            </div>
          </div>
          <p className="text-xs font-mono-code text-slate-400 max-w-sm">
            Categorized technical stack. Hover or tap any dependency item to inspect specific usage context.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2 font-mono-code text-xs">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setHoveredSkill(null);
              }}
              className={`px-4 py-2 rounded-lg border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Main Stack Grid & Context Inspector Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Skills Badges Panel */}
          <div className="lg:col-span-8 os-card rounded-xl p-6 border border-cyan-500/20 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono-code border-b border-slate-800 pb-3">
              <span className="text-cyan-400 font-semibold">{currentCategory.category}</span>
              <span className="text-slate-400">{currentCategory.description}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentCategory.skills.map((skill) => {
                const isHovered = hoveredSkill?.name === skill.name;
                return (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => setHoveredSkill(skill)}
                    className={`p-3.5 rounded-lg border transition-all cursor-pointer space-y-1.5 ${
                      isHovered
                        ? "bg-cyan-500/15 border-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                        : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-semibold text-sm text-slate-100">{skill.name}</span>
                      <CheckCircle className={`w-4 h-4 ${isHovered ? "text-cyan-400" : "text-slate-600"}`} />
                    </div>
                    <p className="text-xs text-slate-400 font-sans line-clamp-2">{skill.contextNote}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Context Inspector Side Card */}
          <div className="lg:col-span-4 os-card rounded-xl p-6 border border-cyan-500/20 space-y-4 flex flex-col justify-between bg-slate-950/60">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400">
                <Info className="w-4 h-4" />
                <span>DEPENDENCY CONTEXT</span>
              </div>

              {hoveredSkill ? (
                <motion.div
                  key={hoveredSkill.name}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  <h4 className="font-display font-bold text-2xl text-slate-100">{hoveredSkill.name}</h4>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono-code text-cyan-300">
                    VERIFIED TECHNICAL DEPENDENCY
                  </div>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {hoveredSkill.contextNote}
                  </p>

                  {/* Associated Portfolio Projects */}
                  <div className="pt-2 space-y-1.5 font-mono-code">
                    <div className="text-[10px] text-slate-400">ASSOCIATED REPOSITORIES:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {PROJECTS.filter((p) =>
                        p.technologies.some(
                          (t) =>
                            t.toLowerCase().includes(hoveredSkill.name.toLowerCase()) ||
                            hoveredSkill.name.toLowerCase().includes(t.toLowerCase())
                        )
                      ).map((p) => (
                        <span
                          key={p.id}
                          className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-[11px] text-cyan-300 font-semibold"
                        >
                          {p.title}
                        </span>
                      ))}
                      {PROJECTS.filter((p) =>
                        p.technologies.some(
                          (t) =>
                            t.toLowerCase().includes(hoveredSkill.name.toLowerCase()) ||
                            hoveredSkill.name.toLowerCase().includes(t.toLowerCase())
                        )
                      ).length === 0 && (
                        <span className="text-[11px] text-slate-500 italic font-sans">
                          Core CS / DSA / Backend foundation
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-2 py-8 text-center text-slate-500 text-xs font-mono-code">
                  <Sparkles className="w-6 h-6 mx-auto text-slate-600 mb-2" />
                  <p>HOVER OR TAP ANY TECH ITEM TO VIEW DETAILED USAGE CONTEXT</p>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-800 text-[11px] font-mono-code text-slate-500">
              No arbitrary skill percentages. Verified against real repository implementations.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
