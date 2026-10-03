import React, { useState } from "react";
import { Command, Terminal as TerminalIcon, FileText, Menu, X, Shield } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";
import { PROFILE_DATA } from "../../data/profile";

interface NavbarProps {
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
  onOpenCommandPalette: () => void;
  onToggleTerminal: () => void;
  isTerminalOpen: boolean;
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigateSection,
  onOpenCommandPalette,
  onToggleTerminal,
  isTerminalOpen,
  onOpenResumeModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "system", label: "01 SYSTEM" },
    { id: "about", label: "02 ABOUT" },
    { id: "experience", label: "03 EXPERIENCE" },
    { id: "education", label: "04 EDUCATION" },
    { id: "projects", label: "05 PROJECTS" },
    { id: "ai-core", label: "06 AI CORE" },
    { id: "stack", label: "07 STACK" },
    { id: "certifications", label: "08 CERTIFICATIONS" },
    { id: "research", label: "09 RESEARCH" },
    { id: "updates", label: "10 UPDATES" },
    { id: "contact", label: "11 CONTACT" },
  ];

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyan-500/10 bg-[#05070D]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateSection("system")}
            className="flex items-center gap-2 text-[#00f0ff] hover:opacity-80 transition-opacity cursor-pointer group"
          >
            <div className="p-1.5 rounded border border-cyan-500/30 bg-cyan-950/40 group-hover:border-cyan-400">
              <Shield className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="font-display font-bold tracking-wider text-base md:text-lg text-slate-100">
              ROQAIAH<span className="text-cyan-400 font-mono-code ml-1">OS</span>
            </span>
          </button>

          {/* System Online Status Indicator */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono-code text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-status-pulse inline-block"></span>
            <span>SYSTEM ONLINE</span>
          </div>
        </div>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Terminal Toggle Button */}
          <button
            onClick={onToggleTerminal}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono-code transition-all cursor-pointer border ${
              isTerminalOpen
                ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-cyan-400"
            }`}
            title="Toggle Interactive CLI Terminal ($)"
          >
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline">TERMINAL</span>
          </button>

          {/* Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono-code bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-all cursor-pointer"
            aria-label="Open Command Palette"
          >
            <Command className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline text-slate-400">Ctrl+K</span>
          </button>

          {/* External Profile Quick Links */}
          <div className="hidden lg:flex items-center gap-2 border-l border-slate-800 pl-3">
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenResumeModal ? onOpenResumeModal : () => onNavigateSection("contact")}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/60 border border-slate-700 hover:border-cyan-500/40 text-xs font-mono-code text-slate-200 hover:text-cyan-300 transition-all cursor-pointer"
              title="Preview / Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>RESUME</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-cyan-500/20 bg-[#090d16]/95 backdrop-blur-2xl p-4 space-y-3 font-mono-code text-sm">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
            <span className="text-xs text-slate-400">NAVIGATION SHELL</span>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-[10px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>ONLINE</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center px-3 py-2.5 rounded-lg border text-xs text-left transition-all cursor-pointer ${
                  activeSection === item.id
                    ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                    : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-around">
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-400"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-400"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={() => handleNavClick("contact")}
              className="flex items-center gap-2 text-xs text-cyan-400 hover:underline"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
