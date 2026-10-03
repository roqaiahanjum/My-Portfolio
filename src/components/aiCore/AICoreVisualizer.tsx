import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  GitFork,
  Database,
  Workflow,
  Wrench,
  ShieldCheck,
  RotateCcw,
  Activity,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import {
  OPENCLAW_ECHO_ARCHITECTURE,
  OPENCLAW_PROJECT_SPECS,
} from "../../data/aiCore";
import type { OpenClawArchitectureNode } from "../../data/aiCore";

export const AICoreVisualizer: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("llm-routing");
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const selectedNode: OpenClawArchitectureNode =
    OPENCLAW_ECHO_ARCHITECTURE.find((node) => node.id === selectedNodeId) ||
    OPENCLAW_ECHO_ARCHITECTURE[1];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageSquare":
        return MessageSquare;
      case "GitFork":
        return GitFork;
      case "Database":
        return Database;
      case "Workflow":
        return Workflow;
      case "Wrench":
        return Wrench;
      case "ShieldCheck":
        return ShieldCheck;
      case "RotateCcw":
        return RotateCcw;
      case "Activity":
        return Activity;
      default:
        return Cpu;
    }
  };

  return (
    <section id="ai-core" className="py-16 border-t border-slate-800/80 font-mono-code">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-cyan-400 tracking-wider font-semibold">
                SYSTEM ARCHITECTURE // OPENCLAW ECHO
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-100 tracking-tight">
                OPENCLAW ECHO // AI ARCHITECTURE
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={OPENCLAW_PROJECT_SPECS.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors"
            >
              <span>VIEW REPOSITORY</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Section Subtitle */}
        <p className="text-xs md:text-sm text-slate-300 font-sans leading-relaxed max-w-3xl">
          Local-first autonomous agent architecture built around routing, memory, tools, verification, and recovery.
        </p>

        {/* System Spec Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="os-card rounded-lg p-3 border border-cyan-500/20 bg-slate-900/40">
            <div className="text-[10px] text-slate-400">FRAMEWORK TYPE</div>
            <div className="font-semibold text-slate-200 mt-0.5">Local-First Autonomous Agent</div>
          </div>
          <div className="os-card rounded-lg p-3 border border-cyan-500/20 bg-slate-900/40">
            <div className="text-[10px] text-slate-400">LLM ROUTER</div>
            <div className="font-semibold text-cyan-300 mt-0.5">Waterfall (Gemini / Ollama / Groq)</div>
          </div>
          <div className="os-card rounded-lg p-3 border border-cyan-500/20 bg-slate-900/40">
            <div className="text-[10px] text-slate-400">MEMORY TIER</div>
            <div className="font-semibold text-slate-200 mt-0.5">Context Scratchpad + SQLite</div>
          </div>
          <div className="os-card rounded-lg p-3 border border-cyan-500/20 bg-slate-900/40">
            <div className="text-[10px] text-slate-400">SAFETY BOUNDARY</div>
            <div className="font-semibold text-emerald-400 mt-0.5">Bounded Self-Healing Loops</div>
          </div>
        </div>

        {/* Architecture Graph Card */}
        <div className="os-card rounded-2xl p-5 sm:p-6 border border-cyan-500/20 space-y-6 bg-gradient-to-b from-[#070b14] to-[#04060d]">
          {/* Header of Visualizer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-xs text-cyan-400">
              <Layers className="w-4 h-4" />
              <span className="font-semibold tracking-wider">EXECUTION PIPELINE FLOW (8 STAGES)</span>
            </div>
            <div className="text-[11px] text-cyan-300 font-mono transition-all">
              {hoveredNodeId
                ? `STAGE ${OPENCLAW_ECHO_ARCHITECTURE.find((n) => n.id === hoveredNodeId)?.stepNumber}: ${OPENCLAW_ECHO_ARCHITECTURE.find((n) => n.id === hoveredNodeId)?.shortExplanation}`
                : "HOVER OR CLICK ANY STAGE TO INSPECT EXECUTION LOGIC"}
            </div>
          </div>

          {/* Desktop/Tablet Horizontal Pipeline Grid */}
          <div className="hidden md:grid grid-cols-4 lg:grid-cols-8 gap-2 relative">
            {OPENCLAW_ECHO_ARCHITECTURE.map((node, index) => {
              const IconComp = getIcon(node.iconName);
              const isSelected = node.id === selectedNodeId;
              const isHovered = node.id === hoveredNodeId;

              return (
                <div key={node.id} className="relative flex flex-col group">
                  <button
                    onClick={() => setSelectedNodeId(node.id)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    title={node.shortExplanation}
                    className={`w-full flex flex-col items-center justify-between p-2.5 rounded-xl border text-center transition-all cursor-pointer relative min-h-[145px] ${
                      isSelected
                        ? "bg-cyan-500/15 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] scale-[1.02] z-20"
                        : isHovered
                        ? "bg-slate-900/80 border-cyan-500/50 text-slate-200"
                        : "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    {/* Top step badge */}
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-[9px] font-bold text-slate-400">
                        {node.stepNumber}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      )}
                    </div>

                    {/* Icon */}
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isSelected
                          ? "bg-cyan-500/20 text-cyan-300"
                          : "bg-slate-950 text-slate-400 group-hover:text-cyan-400"
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <div className="my-1.5 w-full flex-1 flex flex-col justify-center">
                      <div className="font-display font-bold text-[11px] leading-tight uppercase tracking-tight text-slate-100">
                        {node.title}
                      </div>
                      <div className="text-[9px] text-slate-400 font-sans mt-0.5 leading-tight">
                        {node.subtitle}
                      </div>
                    </div>

                    {/* Active State Pill */}
                    <div
                      className={`w-full text-[8px] py-0.5 px-1 rounded transition-colors uppercase ${
                        isSelected
                          ? "bg-cyan-500/30 text-cyan-200 font-semibold"
                          : "bg-slate-950/60 text-slate-400"
                      }`}
                    >
                      {isSelected ? "ACTIVE" : "STAGE"}
                    </div>
                  </button>

                  {/* Flow connector arrow (between items on desktop) */}
                  {index < OPENCLAW_ECHO_ARCHITECTURE.length - 1 && (
                    <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-30 pointer-events-none text-slate-700">
                      <ArrowRight className="w-3 h-3 text-cyan-500/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Vertical Connected Flow */}
          <div className="md:hidden space-y-2.5">
            {OPENCLAW_ECHO_ARCHITECTURE.map((node, index) => {
              const IconComp = getIcon(node.iconName);
              const isSelected = node.id === selectedNodeId;

              return (
                <div key={node.id} className="relative">
                  <button
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "bg-cyan-500/15 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                        : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          isSelected ? "bg-cyan-500/20 text-cyan-300" : "bg-slate-950 text-slate-400"
                        }`}
                      >
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-cyan-400 font-bold">
                            {node.stepNumber}
                          </span>
                          <span className="font-display font-bold text-xs uppercase text-slate-100">
                            {node.title}
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-sans">
                          {node.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span
                        className={`text-[9px] px-2 py-0.5 rounded font-mono ${
                          isSelected
                            ? "bg-cyan-500/30 text-cyan-200"
                            : "bg-slate-950 text-slate-400"
                        }`}
                      >
                        {isSelected ? "SELECTED" : "VIEW"}
                      </span>
                    </div>
                  </button>

                  {/* Vertical flow connector */}
                  {index < OPENCLAW_ECHO_ARCHITECTURE.length - 1 && (
                    <div className="w-0.5 h-2 bg-cyan-500/30 mx-auto my-0.5" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Node Inspector Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-6 pt-6 border-t border-slate-800/80 bg-slate-950/60 rounded-xl p-5 sm:p-6 border border-cyan-500/20 space-y-5"
            >
              {/* Top Header of Node Inspector */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      STAGE {selectedNode.stepNumber} // {selectedNode.subtitle.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-100 uppercase tracking-tight">
                    {selectedNode.title}
                  </h3>
                </div>

                <div className="text-xs px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 self-start sm:self-center">
                  OpenClaw Echo Core Stage
                </div>
              </div>

              {/* Technical Description */}
              <div className="space-y-2">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                  TECHNICAL EXECUTION LOGIC
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                  {selectedNode.technicalDescription}
                </p>
              </div>

              {/* Two Column Grid: Responsibilities & Technologies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Stage Responsibilities */}
                <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 space-y-2.5">
                  <div className="text-[11px] text-cyan-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>CORE RESPONSIBILITIES</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedNode.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-mono">›</span>
                        <span className="font-sans text-[11px] text-slate-200">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Associated Technologies */}
                <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 space-y-2.5">
                  <div className="text-[11px] text-cyan-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>IMPLEMENTED TECHNOLOGIES & TOOLS</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedNode.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-cyan-950/50 border border-cyan-500/30 text-[11px] text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
