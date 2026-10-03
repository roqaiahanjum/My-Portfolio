import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, FileText, Mail, Bot, Layers, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";
import { PROFILE_DATA } from "../../data/profile";

interface HeroDashboardProps {
  onExploreWork: () => void;
  onOpenTerminal: () => void;
  onOpenResumeModal?: () => void;
}

export const HeroDashboard: React.FC<HeroDashboardProps> = ({
  onExploreWork,
  onOpenTerminal,
  onOpenResumeModal,
}) => {
  return (
    <section id="system" className="relative pt-6 pb-16 md:py-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-10">
        {/* Availability Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-mono-code text-cyan-300 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.1)]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-status-pulse inline-block"></span>
          <span className="tracking-wide">OPEN TO OPPORTUNITIES</span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-400 font-semibold">AI / FULL-STACK</span>
        </motion.div>

        {/* Primary Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="text-xs md:text-sm font-mono-code text-cyan-400 tracking-widest uppercase flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>ROQAIAH OPERATING SYSTEM // CONTROL CENTER</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-100 uppercase leading-[1.1]">
            {PROFILE_DATA.name}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl lg:text-3xl font-display font-semibold text-slate-300">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              AI ENGINEER
            </span>
            <span className="text-slate-600 font-mono-code">|</span>
            <span className="text-slate-200">FULL-STACK DEVELOPER</span>
          </div>
        </motion.div>

        {/* Supporting Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-sans"
        >
          "Building AI-powered applications, autonomous agents, and scalable full-stack systems."
        </motion.p>

        {/* Primary Action Buttons & Quick Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 pt-2 font-mono-code text-sm"
        >
          {/* Button 1: View Projects */}
          <button
            onClick={onExploreWork}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-display font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:bg-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all duration-300 cursor-pointer"
          >
            <span>View projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Button 2: Download Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onOpenResumeModal) {
                e.preventDefault();
                onOpenResumeModal();
              }
            }}
            className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 font-semibold hover:bg-cyan-900/60 hover:border-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all cursor-pointer shadow-lg"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Download resume</span>
          </a>

          {/* Quick Contact Icons */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="p-3 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all"
              title="Email Contact"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
            </a>

            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-3.5 py-3.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-400 hover:text-cyan-400 hover:border-slate-700 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all cursor-pointer"
              title="Open CLI Terminal"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">CLI</span>
            </button>
          </div>
        </motion.div>

        {/* 3 Small Stat Chips from Real Data */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
        >
          {/* Stat Chip 1: Primary Identity & Role */}
          <div className="os-card rounded-xl p-4 border border-cyan-500/30 bg-slate-950/70 space-y-2 hover:border-cyan-400/50 transition-all">
            <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
              <span className="flex items-center gap-2 text-cyan-400 font-semibold">
                <Bot className="w-4 h-4" />
                <span>PRIMARY IDENTITY</span>
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                ROLE
              </span>
            </div>
            <div className="font-display font-bold text-sm md:text-base text-slate-100 uppercase tracking-tight">
              AI ENGINEER | FULL-STACK DEVELOPER
            </div>
            <div className="text-xs text-slate-400 font-mono-code">
              Omni-IDE — AI Intern
            </div>
          </div>

          {/* Stat Chip 2: Real Verified Selected Projects */}
          <div className="os-card rounded-xl p-4 border border-indigo-500/30 bg-slate-950/70 space-y-2 hover:border-indigo-400/50 transition-all">
            <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
              <span className="flex items-center gap-2 text-indigo-400 font-semibold">
                <Layers className="w-4 h-4" />
                <span>PROJECT CATALOGUE</span>
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                VERIFIED
              </span>
            </div>
            <div className="font-display font-bold text-lg text-slate-100">SELECTED PROJECTS</div>
            <div className="text-xs text-slate-400 font-mono-code">
              AI, Autonomous Agents & Full-Stack
            </div>
          </div>

          {/* Stat Chip 3: Academic Stage & Institution */}
          <div className="os-card rounded-xl p-4 border border-violet-500/30 bg-slate-950/70 space-y-2 hover:border-violet-400/50 transition-all">
            <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
              <span className="flex items-center gap-2 text-violet-400 font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC STAGE</span>
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-violet-950 text-violet-300 border border-violet-500/30">
                CSE '27
              </span>
            </div>
            <div className="font-display font-bold text-lg text-slate-100">CGPA 8.0 / 10</div>
            <div className="text-xs text-slate-400 font-mono-code">
              Ghousia College of Engineering
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
