import React from "react";
import { Terminal, Shield, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";
import { PROFILE_DATA } from "../../data/profile";

interface FooterProps {
  onScrollTop: () => void;
  onOpenCommandPalette: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTop, onOpenCommandPalette }) => {
  return (
    <footer className="w-full border-t border-cyan-500/10 bg-[#04060a] text-slate-400 font-mono-code text-xs py-8 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="p-1 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-400">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <div className="font-display font-semibold text-slate-200 text-sm">
              ROQAIAH OS <span className="text-cyan-400 text-xs">v1.0</span>
            </div>
            <div className="text-[11px] text-slate-400 font-sans">
              AI Engineer | Full-Stack Developer
            </div>
          </div>
        </div>

        {/* Center System Status & Keyboard Quick Tip */}
        <div className="flex items-center gap-4 text-[11px]">
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 transition-colors cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>PRESS CTRL+K FOR COMMAND PALETTE</span>
          </button>
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SYSTEM ONLINE</span>
          </div>
        </div>

        {/* Right Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PROFILE_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PROFILE_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={onScrollTop}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
