import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  Code2,
  Cpu,
  GraduationCap,
  FolderGit2,
  FileText,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";
import { PROFILE_DATA } from "../../data/profile";

export const SystemProfile: React.FC = () => {
  return (
    <section id="about" className="py-12 border-t border-slate-800/80 space-y-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-400">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono-code text-cyan-400 tracking-wider">02 MODULE // ABOUT</div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-100 uppercase tracking-tight">
              THE PROFILE
            </h2>
          </div>
        </div>
        <span className="text-xs font-mono-code text-slate-400 hidden sm:inline">IDENTITY_SPEC_v1.0</span>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* PROMINENT PORTRAIT HERO SECTION WITH FLOATING GLASS CARDS     */}
      {/* ------------------------------------------------------------- */}
      <div className="relative max-w-5xl mx-auto py-4 md:py-8">
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-500/15 to-violet-500/15 blur-3xl -z-10 pointer-events-none animate-pulse" />

        <div className="flex flex-col lg:block items-center justify-center relative min-h-[420px]">
          {/* Centered Futuristic Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-64 h-80 sm:w-72 sm:h-[380px] rounded-2xl p-2 bg-slate-950/70 backdrop-blur-md border border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.2)] relative z-10 mx-auto group hover:border-cyan-400/70 transition-all duration-300"
          >
            {/* Ambient inner glow ring */}
            <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 relative flex items-center justify-center border border-slate-800">
              <img
                src="/profile-hero.webp"
                alt={PROFILE_DATA.name}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.endsWith("/profile-hero.webp")) {
                    target.src = "/profile-hero.jpg";
                  } else if (target.src.endsWith("/profile-hero.jpg")) {
                    target.src = "/profile.webp";
                  } else if (target.src.endsWith("/profile.webp")) {
                    target.src = "/profile.jpg";
                  } else {
                    target.style.display = "none";
                    const fallback = target.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).style.display = "flex";
                  }
                }}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              {/* Monogram Avatar Fallback */}
              <div
                style={{ display: "none" }}
                className="w-full h-full bg-gradient-to-br from-cyan-950 via-slate-900 to-indigo-950 flex flex-col items-center justify-center p-6 text-center space-y-2"
              >
                <div className="w-20 h-20 rounded-full border-2 border-cyan-500/40 bg-slate-900/80 flex items-center justify-center font-display font-extrabold text-3xl text-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                  RA
                </div>
                <div className="font-display font-bold text-sm text-slate-100">{PROFILE_DATA.name}</div>
                <div className="text-[11px] font-mono-code text-cyan-400">{PROFILE_DATA.identity}</div>
              </div>

              {/* Bottom Glass Overlay Pill */}
              <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-center space-y-0.5 shadow-lg">
                <div className="font-display font-bold text-sm text-slate-100 flex items-center justify-center gap-1.5">
                  <span>{PROFILE_DATA.name}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                </div>
                <div className="text-[10px] font-mono-code text-cyan-400 tracking-tight uppercase">
                  {PROFILE_DATA.identity}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ----------------------------------------------------------- */}
          {/* 4 FLOATING GLASS INFORMATION CARDS                          */}
          {/* Desktop: Positioned around portrait | Mobile: Stacked grid  */}
          {/* ----------------------------------------------------------- */}
          <div className="w-full mt-6 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 lg:block gap-3 relative z-20">
            {/* Card 1: Top-Left (Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:absolute lg:top-4 lg:left-0 xl:-left-4 lg:w-64 os-card p-3.5 rounded-xl border border-cyan-500/30 bg-slate-950/85 backdrop-blur-md hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-display font-bold text-slate-100 tracking-wide uppercase truncate">
                    AI ENGINEER | FULL-STACK
                  </div>
                  <div className="text-[11px] font-mono-code text-slate-400 truncate mt-0.5">
                    Java • Python • React • Node.js
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Top-Right (Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:absolute lg:top-4 lg:right-0 xl:-right-4 lg:w-64 os-card p-3.5 rounded-xl border border-indigo-500/30 bg-slate-950/85 backdrop-blur-md hover:border-indigo-400/60 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-indigo-950/60 text-indigo-400 border border-indigo-500/30 shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-display font-bold text-slate-100 tracking-wide uppercase truncate">
                    OPENCLAW ECHO
                  </div>
                  <div className="text-[11px] font-mono-code text-indigo-300 truncate mt-0.5">
                    Autonomous AI Agent Framework
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Bottom-Left (Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:absolute lg:bottom-4 lg:left-0 xl:-left-4 lg:w-64 os-card p-3.5 rounded-xl border border-violet-500/30 bg-slate-950/85 backdrop-blur-md hover:border-violet-400/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-violet-950/60 text-violet-400 border border-violet-500/30 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-display font-bold text-slate-100 tracking-wide uppercase truncate">
                    FINAL YEAR CSE
                  </div>
                  <div className="text-[11px] font-mono-code text-slate-400 truncate mt-0.5">
                    Ghousia College of Engineering • 2027
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Bottom-Right (Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:absolute lg:bottom-4 lg:right-0 xl:-right-4 lg:w-64 os-card p-3.5 rounded-xl border border-emerald-500/30 bg-slate-950/85 backdrop-blur-md hover:border-emerald-400/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 shrink-0">
                  <FolderGit2 className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-display font-bold text-slate-100 tracking-wide uppercase truncate">
                    PROJECT PORTFOLIO
                  </div>
                  <div className="text-[11px] font-mono-code text-emerald-400 truncate mt-0.5">
                    AI & Full-Stack Applications
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* DETAILED NARRATIVE & METADATA GRID                            */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Quick Facts Card Panel */}
        <div className="lg:col-span-5 os-card rounded-xl p-6 border border-cyan-500/20 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono-code text-slate-400 font-semibold tracking-wider uppercase">
            <span>Quick facts</span>
          </div>

          <dl className="font-mono-code text-xs md:text-sm">
            <div className="grid grid-cols-[9rem_1fr] gap-x-4 items-baseline py-2.5 border-b border-white/5">
              <dt className="text-slate-400 uppercase tracking-wider text-xs">NAME</dt>
              <dd className="min-w-0 break-words text-right font-semibold text-slate-100">{PROFILE_DATA.name}</dd>
            </div>

            <div className="grid grid-cols-[9rem_1fr] gap-x-4 items-baseline py-2.5 border-b border-white/5">
              <dt className="text-slate-400 uppercase tracking-wider text-xs">ROLE</dt>
              <dd className="min-w-0 break-words text-right font-medium text-cyan-400">{PROFILE_DATA.identity}</dd>
            </div>

            <div className="grid grid-cols-[9rem_1fr] gap-x-4 items-baseline py-2.5 border-b border-white/5">
              <dt className="text-slate-400 uppercase tracking-wider text-xs">DEGREE</dt>
              <dd className="min-w-0 break-words text-right font-medium text-slate-200">{PROFILE_DATA.education.degree}</dd>
            </div>

            <div className="grid grid-cols-[9rem_1fr] gap-x-4 items-baseline py-2.5 border-b border-white/5">
              <dt className="text-slate-400 uppercase tracking-wider text-xs">COLLEGE</dt>
              <dd className="min-w-0 break-words text-right font-medium text-slate-200">{PROFILE_DATA.education.institution}</dd>
            </div>

            <div className="grid grid-cols-[9rem_1fr] gap-x-4 items-baseline py-2.5 border-b border-white/5">
              <dt className="text-slate-400 uppercase tracking-wider text-xs">ACADEMIC STAGE</dt>
              <dd className="min-w-0 break-words text-right font-semibold text-indigo-400">{PROFILE_DATA.education.status}</dd>
            </div>

            <div className="grid grid-cols-[9rem_1fr] gap-x-4 items-baseline py-2.5 border-b border-white/5">
              <dt className="text-slate-400 uppercase tracking-wider text-xs">INTERNSHIP</dt>
              <dd className="min-w-0 break-words text-right font-medium text-slate-200">Omni-IDE — AI Intern</dd>
            </div>

            <div className="grid grid-cols-[9rem_1fr] gap-x-4 items-baseline py-2.5">
              <dt className="text-slate-400 uppercase tracking-wider text-xs">LOCATION</dt>
              <dd className="min-w-0 break-words text-right font-medium text-slate-200">{PROFILE_DATA.location}</dd>
            </div>
          </dl>

          {/* Quick Action Link Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 text-xs font-mono-code hover:bg-cyan-900/60 hover:border-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>RESUME PDF</span>
            </a>
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Professional Summary & Technical Background Narrative */}
        <div className="lg:col-span-7 os-card rounded-xl p-6 border border-cyan-500/20 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400 tracking-wider">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>PROFESSIONAL SUMMARY & DIRECTION</span>
            </div>

            <h3 className="font-display font-semibold text-xl md:text-2xl text-slate-100 leading-snug">
              Building AI-powered applications, autonomous agents & scalable full-stack systems.
            </h3>

            <div className="space-y-3.5 text-slate-300 font-sans text-sm md:text-base leading-relaxed">
              <p>
                I am a final-year Computer Science & Engineering student at Ghousia College of Engineering with hands-on software development experience across AI engineering and full-stack web applications.
              </p>
              <p>
                My focus spans building autonomous AI agent workflows (like <strong className="text-cyan-300">OpenClaw Echo</strong>), implementing LLM orchestration (Gemini API, Ollama, LangChain, RAG), and engineering robust web backends and responsive frontends with React, Node.js, Express, and databases (MongoDB, SQLite, MySQL).
              </p>
              <p>
                Currently completing my AI Internship at <span className="text-indigo-300 font-medium">Omni-IDE</span>, I bring a strong analytical mindset, solid foundation in Computer Science algorithms and system architecture, and a drive to ship production-ready intelligent software.
              </p>
            </div>
          </div>

          {/* Key Specialization Tags */}
          <div className="pt-4 border-t border-slate-800 space-y-2">
            <div className="text-xs font-mono-code text-slate-400 uppercase">CORE TECHNICAL AREAS</div>
            <div className="flex flex-wrap gap-2 text-xs font-mono-code">
              <span className="px-3 py-1 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                AI Engineering & LLMs
              </span>
              <span className="px-3 py-1 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-500/30">
                Full-Stack (MERN / Node.js)
              </span>
              <span className="px-3 py-1 rounded bg-violet-950/60 text-violet-300 border border-violet-500/30">
                Autonomous Agents & Tool Loops
              </span>
              <span className="px-3 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                REST APIs & Schemas
              </span>
              <span className="px-3 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                Python & Java
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

