import React, { useState } from "react";
import { ArrowUpRight, ExternalLink, Code2, Sparkles } from "lucide-react";
import { GithubIcon } from "../icons/SocialIcons";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="os-card os-card-interactive rounded-xl overflow-hidden border border-cyan-500/20 bg-slate-950/70 flex flex-col justify-between group hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300">
      {/* Top Banner / Screenshot Area */}
      <div
        onClick={onOpenDetails}
        className="relative w-full h-44 bg-gradient-to-br from-slate-900 via-[#0b1220] to-indigo-950 overflow-hidden border-b border-slate-800/80 flex items-center justify-center cursor-pointer group/img"
      >
        {project.image && !imageError ? (
          <img
            src={project.image}
            alt={`${project.title} Screenshot — ${project.category}`}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Stylized OS Cyberpunk Gradient Placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center space-y-2 relative bg-cyber-grid">
            <div className="p-3 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Code2 className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono-code text-cyan-300 font-bold tracking-widest uppercase">
              {project.title}
            </div>
          </div>
        )}

        {/* Category Pill Overlay */}
        <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono-code font-bold text-cyan-300 tracking-wider">
          {project.category}
        </div>

        {project.isFeatured && (
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-emerald-950/85 backdrop-blur-md border border-emerald-500/40 text-[10px] font-mono-code font-bold text-emerald-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>FEATURED</span>
          </div>
        )}
      </div>

      {/* Main Content Body */}
      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-display font-bold text-lg md:text-xl text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug">
              {project.title}
            </h4>
          </div>

          <p className="text-xs font-mono-code text-cyan-400/90 font-medium">{project.tagline}</p>

          <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Stack Chips & CTAs */}
        <div className="space-y-4 pt-3 border-t border-slate-800/80">
          {/* Tech Stack (Up to 5) */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono-code text-slate-400"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono-code text-slate-500">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between gap-2 pt-1 font-mono-code text-xs">
            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all"
                title="View Code on GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-indigo-950/60 border border-indigo-500/40 text-[11px] text-indigo-300 hover:bg-indigo-900/60 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none transition-all"
                  title="View Live Demo"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onOpenDetails}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-[11px] text-cyan-300 hover:bg-cyan-900/60 hover:border-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all cursor-pointer"
            >
              <span>Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
