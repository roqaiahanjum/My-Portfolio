import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bot, Cpu, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon } from "../icons/SocialIcons";
import type { Project } from "../../data/projects";

interface CaseStudyModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/85 backdrop-blur-lg overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-4xl os-card rounded-2xl border border-cyan-500/40 bg-[#090d16] overflow-hidden shadow-2xl my-8 text-slate-200"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-slate-800 p-6 bg-slate-900/60 sticky top-0 z-10 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono-code text-cyan-400 tracking-wider">SYSTEM CASE STUDY // FEATURED ARCHITECTURE</div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-100">{project.title}</h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-slate-100 hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close Case Study Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 md:p-8 space-y-8 max-h-[75vh] overflow-y-auto font-sans text-sm md:text-base leading-relaxed">
            {/* Tagline & Links Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div>
                <div className="font-display font-semibold text-lg text-slate-100">{project.tagline}</div>
                <div className="text-xs font-mono-code text-slate-400 mt-1">Autonomous Multi-Agent Framework</div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-mono-code text-xs font-semibold hover:bg-cyan-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
              </div>
            </div>

            {/* Grid Problem & Idea */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="os-card rounded-xl p-5 border border-red-500/20 bg-red-950/10 space-y-3">
                <div className="flex items-center gap-2 font-mono-code text-xs text-red-400 font-semibold">
                  <AlertCircle className="w-4 h-4" />
                  <span>PROBLEM STATEMENT</span>
                </div>
                <p className="text-slate-300 text-sm">{caseStudy.problem}</p>
              </div>

              <div className="os-card rounded-xl p-5 border border-cyan-500/20 bg-cyan-950/10 space-y-3">
                <div className="flex items-center gap-2 font-mono-code text-xs text-cyan-400 font-semibold">
                  <Cpu className="w-4 h-4" />
                  <span>CORE ARCHITECTURAL IDEA</span>
                </div>
                <p className="text-slate-300 text-sm">{caseStudy.idea}</p>
              </div>
            </div>

            {/* Major Capabilities */}
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-lg text-slate-100 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>MAJOR CAPABILITIES & FEATURES</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs md:text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="os-card rounded-xl p-6 border border-slate-800 space-y-4 bg-slate-900/40">
              <div className="space-y-2">
                <div className="text-xs font-mono-code text-amber-400 font-semibold">DEVELOPMENT CHALLENGE</div>
                <p className="text-slate-300 text-sm">{caseStudy.challenges}</p>
              </div>
              <div className="space-y-2 border-t border-slate-800 pt-3">
                <div className="text-xs font-mono-code text-emerald-400 font-semibold">ENGINEERING SOLUTION</div>
                <p className="text-slate-300 text-sm">{caseStudy.solution}</p>
              </div>
            </div>

            {/* Outcome */}
            <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/15 space-y-2">
              <div className="text-xs font-mono-code text-emerald-400 font-semibold">FINAL OUTCOME</div>
              <p className="text-slate-200 text-sm font-sans">{caseStudy.outcome}</p>
            </div>

            {/* Code Architecture Schema Snippet */}
            <div className="space-y-2">
              <div className="text-xs font-mono-code text-cyan-400 font-semibold flex items-center justify-between">
                <span>CORE INTERFACE SCHEMA</span>
                <span className="text-[10px] text-slate-500">TYPESCRIPT / PYTHON BOUNDARY</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono-code text-xs text-slate-300 overflow-x-auto space-y-1">
                <div className="text-slate-500">// OpenClaw Echo Provider Routing & Verification Handle</div>
                <div><span className="text-purple-400">interface</span> <span className="text-cyan-300">AgentExecutionState</span> &#123;</div>
                <div>&nbsp;&nbsp;taskId: <span className="text-amber-300">string</span>;</div>
                <div>&nbsp;&nbsp;primaryProvider: <span className="text-green-300">'ollama-local'</span> | <span className="text-green-300">'gemini-cloud'</span>;</div>
                <div>&nbsp;&nbsp;fallbackStrategy: <span className="text-green-300">'bounded-auto-recovery'</span>;</div>
                <div>&nbsp;&nbsp;verificationLoop: (output: <span className="text-amber-300">unknown</span>) =&gt; <span className="text-amber-300">Promise</span>&lt;<span className="text-cyan-300">ValidationResult</span>&gt;;</div>
                <div>&nbsp;&nbsp;memoryStore: <span className="text-cyan-300">SQLiteVectorStore</span>;</div>
                <div>&#125;</div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="space-y-2">
              <div className="text-xs font-mono-code text-slate-400">TECHNOLOGY STACK USED</div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-mono-code text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="border-t border-slate-800 p-4 bg-slate-950 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-slate-800 text-slate-200 font-mono-code text-xs hover:bg-slate-700 transition-colors cursor-pointer"
            >
              CLOSE CASE STUDY
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
