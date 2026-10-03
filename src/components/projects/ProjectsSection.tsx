import React, { useState } from "react";
import { Layers, Sparkles, Search, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { PROJECTS } from "../../data/projects";
import type { Project } from "../../data/projects";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";
import { ProjectDetailModal } from "./ProjectDetailModal";

interface ProjectsSectionProps {
  isOpenClawModalOpen: boolean;
  onCloseOpenClawModal: () => void;
  onOpenOpenClawModal: () => void;
}

type FilterType = "ALL" | "AI / AGENTS" | "FULL-STACK" | "TOOLS / OTHER";

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  isOpenClawModalOpen,
  onCloseOpenClawModal,
  onOpenOpenClawModal,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<FilterType>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Core featured OpenClaw Echo project banner
  const heroFeaturedProject = PROJECTS.find((p) => p.id === "openclaw-echo") || PROJECTS[0];

  // All secondary projects excluding the primary hero project
  const gridProjects = PROJECTS.filter((p) => p.id !== "openclaw-echo");

  // Filter projects by category and search term
  const matchingProjects = gridProjects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (filterCategory === "ALL") return true;

    if (filterCategory === "AI / AGENTS") {
      return p.category === "AI / AGENTS";
    }
    if (filterCategory === "FULL-STACK") {
      return p.category === "FULL-STACK";
    }
    if (filterCategory === "TOOLS / OTHER") {
      return p.category === "TOOLS / OTHER" || p.category === "WEB APPS";
    }

    return true;
  });

  // Separate featured and remaining projects
  const featuredMatching = matchingProjects.filter((p) => p.isFeatured || p.featured);
  const remainingMatching = matchingProjects.filter((p) => !(p.isFeatured || p.featured));

  // Determine displayed projects based on toggle state
  const displayedProjects = showAllProjects
    ? [...featuredMatching, ...remainingMatching]
    : featuredMatching.length > 0
    ? featuredMatching
    : matchingProjects;

  return (
    <section id="projects" className="py-16 border-t border-slate-800/80 space-y-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono-code text-cyan-400 tracking-wider">05 MODULE // PROJECTS</div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-100 uppercase tracking-tight">
              PROJECT CATALOGUE
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono-code text-xs">
          <div className="px-3 py-1.5 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>PROJECTS: {PROJECTS.length} VERIFIED</span>
          </div>
        </div>
      </div>

      {/* Primary Featured Project Banner (OpenClaw Echo) */}
      <FeaturedProject project={heroFeaturedProject} onOpenCaseStudy={onOpenOpenClawModal} />

      {/* Secondary Projects Grid & Filter Controls */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/60 pb-4">
          <div className="text-xs font-mono-code text-slate-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>
              {showAllProjects ? "ALL REPOSITORIES" : "FEATURED PROJECTS"} ({displayedProjects.length} OF {matchingProjects.length})
            </span>
          </div>

          {/* Search Input & Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3 font-mono-code text-xs">
            <div className="relative flex items-center">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or stack..."
                className="pl-8 pr-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/40 focus-visible:ring-2 focus-visible:ring-cyan-400 text-xs"
              />
            </div>

            {/* Filter Category Tabs */}
            <div className="flex flex-wrap items-center gap-1 bg-slate-900 p-1 rounded border border-slate-800">
              {(["ALL", "AI / AGENTS", "FULL-STACK", "TOOLS / OTHER"] as FilterType[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1 rounded transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                    filterCategory === cat
                      ? "bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {cat === "ALL" ? "All" : cat === "AI / AGENTS" ? "AI & Agents" : cat === "FULL-STACK" ? "Full-stack" : "Tools & other"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        {displayedProjects.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-xs font-mono-code os-card rounded-xl border border-slate-800">
            No matching projects found for category "{filterCategory}" and search query "{searchQuery}".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={() => setSelectedProject(project)}
              />
            ))}
          </div>
        )}

        {/* Show All Projects (+N) Toggle Button */}
        {remainingMatching.length > 0 && (
          <div className="flex justify-center pt-6">
            <button
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-xs font-mono-code font-semibold text-cyan-300 hover:bg-cyan-950/50 hover:border-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all cursor-pointer shadow-lg"
            >
              {showAllProjects ? (
                <>
                  <span>Show featured projects only</span>
                  <ChevronUp className="w-4 h-4 text-cyan-400" />
                </>
              ) : (
                <>
                  <span>Show all projects (+{remainingMatching.length})</span>
                  <ChevronDown className="w-4 h-4 text-cyan-400" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Case Study Modal for OpenClaw Echo */}
      <CaseStudyModal
        project={heroFeaturedProject}
        isOpen={isOpenClawModalOpen}
        onClose={onCloseOpenClawModal}
      />

      {/* Detail Modal for Secondary Projects */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
