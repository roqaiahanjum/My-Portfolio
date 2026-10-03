import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ArrowRight, Sparkles, CheckCircle2, Layers } from "lucide-react";
import { GithubIcon } from "../icons/SocialIcons";
import type { Project } from "../../data/projects";

interface FeaturedProjectProps {
  project: Project;
  onOpenCaseStudy: () => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project, onOpenCaseStudy }) => {
  const steps = project.architectureSteps || [];
  const [selectedStepId, setSelectedStepId] = useState<string>(steps[0]?.id || "ingest");

  const currentStep = steps.find((s) => s.id === selectedStepId) || steps[0];

  return (
    <div className="os-card rounded-2xl p-6 md:p-8 border-2 border-cyan-500/30 bg-gradient-to-b from-[#0b101c] to-[#060a12] space-y-8 relative overflow-hidden shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Badges */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6 relative z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400 tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>PRIMARY FEATURED SYSTEM</span>
          </div>
          <h3 className="font-display font-extrabold text-3xl md:text-4xl text-slate-100 uppercase tracking-tight flex items-center gap-3">
            {project.title}
          </h3>
          <p className="text-slate-300 font-sans text-base md:text-lg">
            "{project.tagline}"
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 shrink-0 font-mono-code text-xs">
          <button
            onClick={onOpenCaseStudy}
            className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-500 text-slate-950 font-display font-semibold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
          >
            <FileText className="w-4 h-4 text-slate-950" />
            <span>VIEW CASE STUDY</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-slate-700 bg-slate-900/80 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GITHUB</span>
          </a>
        </div>
      </div>

      {/* Screenshot Visual Showcase Frame */}
      {project.image && (
        <div
          onClick={onOpenCaseStudy}
          className="relative w-full h-52 sm:h-72 rounded-xl overflow-hidden border border-cyan-500/40 bg-slate-950/80 shadow-[0_0_25px_rgba(6,182,212,0.15)] group cursor-pointer hover:border-cyan-400 transition-all duration-300 flex items-center justify-center"
        >
          <img
            src={project.image}
            alt={`${project.title} Screenshot — Autonomous AI Agent Framework`}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
              const fallback = (e.target as HTMLElement).nextElementSibling;
              if (fallback) (fallback as HTMLElement).style.display = "flex";
            }}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />

          {/* OS Cyberpunk Fallback Frame if PNG loading/pending */}
          <div
            style={{ display: "none" }}
            className="w-full h-full bg-gradient-to-br from-slate-900 via-[#0a1120] to-cyan-950/60 p-6 flex flex-col items-center justify-center text-center space-y-3"
          >
            <div className="p-3 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="font-display font-bold text-lg text-slate-100 uppercase tracking-wide">
              {project.title} SYSTEM SCREENSHOT
            </div>
            <div className="text-xs font-mono-code text-cyan-400">
              Click to view architecture case study
            </div>
          </div>

          {/* Hover Overlay Hint */}
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="px-4 py-2 rounded-lg bg-slate-950/90 border border-cyan-500/50 text-xs font-mono-code text-cyan-300 flex items-center gap-2 shadow-lg">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>EXPLORE {project.title} CASE STUDY</span>
            </div>
          </div>
        </div>
      )}

      {/* Architectural Flow Section */}
      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
          <span className="flex items-center gap-2 text-cyan-400 font-semibold">
            <Layers className="w-4 h-4" />
            <span>SYSTEM EXECUTION PIPELINE</span>
          </span>
          <span>CLICK PIPELINE STEP TO EXPLORE</span>
        </div>

        {/* Interactive Steps Pipeline Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {steps.map((step, idx) => {
            const isSelected = step.id === selectedStepId;
            return (
              <button
                key={step.id}
                onClick={() => setSelectedStepId(step.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                    : "bg-slate-900/60 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <div className="text-[10px] font-mono-code text-slate-400 mb-1">STEP 0{idx + 1}</div>
                <div className="font-display font-bold text-xs tracking-wider text-slate-100 uppercase">
                  {step.label}
                </div>
                <div className="text-[10px] font-sans text-slate-400 truncate mt-0.5">{step.sublabel}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Architecture Step Detail */}
        {currentStep && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5"
            >
              <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400 font-semibold">
                <span>{currentStep.label}</span>
                <span className="text-slate-600">—</span>
                <span className="text-slate-300">{currentStep.sublabel}</span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 font-sans leading-relaxed">
                {currentStep.description}
              </p>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Feature Bullet Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 relative z-10">
        {project.features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs text-slate-300 font-sans"
          >
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Technology Pills */}
      <div className="pt-4 border-t border-slate-800/80 space-y-2 relative z-10">
        <div className="text-[11px] font-mono-code text-slate-400">TECHNOLOGIES & CONCEPTS</div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono-code text-slate-300 hover:border-cyan-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
