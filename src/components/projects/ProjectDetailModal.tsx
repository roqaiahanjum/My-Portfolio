import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Layers, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "../icons/SocialIcons";
import type { Project } from "../../data/projects";

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl os-card rounded-2xl border border-cyan-500/30 bg-[#090d16] overflow-hidden shadow-2xl p-6 md:p-8 space-y-6 text-slate-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-indigo-950 text-indigo-400 border border-indigo-500/30">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono-code text-indigo-400">PROJECT SPECIFICATION</div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-slate-100">{project.title}</h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tagline & Overview */}
          <div className="space-y-3 font-sans">
            <p className="text-slate-200 font-medium text-base">{project.tagline}</p>
            <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Features List */}
          <div className="space-y-2">
            <div className="text-xs font-mono-code text-cyan-400">KEY FEATURES & CAPABILITIES</div>
            <div className="space-y-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <div className="text-xs font-mono-code text-slate-400">TECH STACK</div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-mono-code text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between font-mono-code text-xs">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GITHUB REPOSITORY</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700 text-slate-200 hover:border-cyan-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LIVE DEMO</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
