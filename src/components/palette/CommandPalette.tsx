import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, ArrowRight, ExternalLink, Shield, Cpu, Layers, Terminal, Sparkles, FileText, UserCheck, Code } from "lucide-react";
import { PROFILE_DATA } from "../../data/profile";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenOpenClawModal: () => void;
}

interface CommandItem {
  id: string;
  label: string;
  category: "Navigation" | "Project" | "External";
  icon: React.ElementType;
  action: () => void;
  shortcut?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
  onOpenOpenClawModal,
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: CommandItem[] = [
    {
      id: "system",
      label: "System Control Center / Hero",
      category: "Navigation",
      icon: Shield,
      action: () => {
        onNavigateSection("system");
        onClose();
      },
      shortcut: "01",
    },
    {
      id: "about",
      label: "System Profile / About Me",
      category: "Navigation",
      icon: UserCheck,
      action: () => {
        onNavigateSection("about");
        onClose();
      },
      shortcut: "02",
    },
    {
      id: "experience",
      label: "Omni-IDE AI Internship Log",
      category: "Navigation",
      icon: Terminal,
      action: () => {
        onNavigateSection("experience");
        onClose();
      },
      shortcut: "03",
    },
    {
      id: "education",
      label: "Academic Education & Degrees",
      category: "Navigation",
      icon: UserCheck,
      action: () => {
        onNavigateSection("education");
        onClose();
      },
      shortcut: "04",
    },
    {
      id: "projects",
      label: "Engineered Projects Overview",
      category: "Navigation",
      icon: Layers,
      action: () => {
        onNavigateSection("projects");
        onClose();
      },
      shortcut: "05",
    },
    {
      id: "openclaw-echo",
      label: "OpenClaw Echo — Case Study",
      category: "Project",
      icon: Sparkles,
      action: () => {
        onNavigateSection("projects");
        onOpenOpenClawModal();
        onClose();
      },
    },
    {
      id: "ai-core",
      label: "AI Core Architecture",
      category: "Navigation",
      icon: Cpu,
      action: () => {
        onNavigateSection("ai-core");
        onClose();
      },
      shortcut: "06",
    },
    {
      id: "stack",
      label: "System Dependencies / Tech Stack",
      category: "Navigation",
      icon: Code,
      action: () => {
        onNavigateSection("stack");
        onClose();
      },
      shortcut: "07",
    },
    {
      id: "certifications",
      label: "Technical Certifications",
      category: "Navigation",
      icon: Sparkles,
      action: () => {
        onNavigateSection("certifications");
        onClose();
      },
      shortcut: "08",
    },
    {
      id: "research",
      label: "Research Work (OpenClaw Echo)",
      category: "Navigation",
      icon: Sparkles,
      action: () => {
        onNavigateSection("research");
        onClose();
      },
      shortcut: "09",
    },
    {
      id: "updates",
      label: "Activity Feed & Announcements",
      category: "Navigation",
      icon: Sparkles,
      action: () => {
        onNavigateSection("updates");
        onClose();
      },
      shortcut: "10",
    },
    {
      id: "contact",
      label: "Establish Connection / Contact",
      category: "Navigation",
      icon: FileText,
      action: () => {
        onNavigateSection("contact");
        onClose();
      },
      shortcut: "11",
    },
    {
      id: "github-profile",
      label: "GitHub Profile (@roqaiahanjum)",
      category: "External",
      icon: ExternalLink,
      action: () => {
        window.open(PROFILE_DATA.githubUrl, "_blank", "noopener,noreferrer");
        onClose();
      },
    },
    {
      id: "linkedin",
      label: "LinkedIn Profile",
      category: "External",
      icon: ExternalLink,
      action: () => {
        window.open(PROFILE_DATA.linkedinUrl, "_blank", "noopener,noreferrer");
        onClose();
      },
    },
    {
      id: "resume",
      label: "Download Resume PDF",
      category: "External",
      icon: FileText,
      action: () => {
        window.open("/resume.pdf", "_blank", "noopener,noreferrer");
        onClose();
      },
    },
  ];

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].action();
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-xl os-card rounded-xl border border-cyan-500/30 overflow-hidden shadow-2xl bg-[#090d16]"
        >
          {/* Search Header */}
          <div className="relative flex items-center border-b border-slate-800 px-4 py-3 bg-slate-900/60">
            <Search className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="SEARCH ROQAIAH OS..."
              className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none font-mono-code text-sm"
              aria-label="Search ROQAIAH OS command palette"
            />
            <div className="flex items-center gap-1 ml-2 text-xs text-slate-400 border border-slate-700 rounded px-1.5 py-0.5 font-mono-code">
              <Command className="w-3 h-3" />
              <span>K</span>
            </div>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filtered.length === 0 ? (
              <div className="p-6 text-center text-slate-500 text-sm font-mono-code">
                No matching system command found for "{query}"
              </div>
            ) : (
              filtered.map((cmd, idx) => {
                const IconComponent = cmd.icon;
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-xs md:text-sm font-mono-code transition-all cursor-pointer ${
                      isSelected
                        ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                        : "text-slate-300 hover:bg-slate-800/40"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`p-1.5 rounded ${
                          isSelected ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="truncate">{cmd.label}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {cmd.shortcut && (
                        <span className="text-[10px] text-slate-500 border border-slate-800 px-1.5 py-0.5 rounded">
                          {cmd.shortcut}
                        </span>
                      )}
                      {isSelected && <ArrowRight className="w-4 h-4 text-cyan-400" />}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Command Footer */}
          <div className="flex items-center justify-between border-t border-slate-800/80 px-4 py-2 bg-slate-950 text-[11px] text-slate-500 font-mono-code">
            <div className="flex items-center gap-3">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>ESC Close</span>
            </div>
            <span className="text-cyan-400/80">ROQAIAH_OS v1.0</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
