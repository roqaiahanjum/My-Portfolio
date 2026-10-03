import React from "react";
import { Shield, UserCheck, Layers, Cpu, Code, Briefcase, GraduationCap, BookOpen, Send, Activity, Award } from "lucide-react";
import { PROFILE_DATA } from "../../data/profile";

interface SidebarProps {
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigateSection }) => {
  const navItems = [
    { id: "system", number: "01", label: "SYSTEM", icon: Shield, subtitle: "Dashboard & Hero" },
    { id: "about", number: "02", label: "ABOUT", icon: UserCheck, subtitle: "Identity & Profile" },
    { id: "experience", number: "03", label: "EXPERIENCE", icon: Briefcase, subtitle: "Internship Log" },
    { id: "education", number: "04", label: "EDUCATION", icon: GraduationCap, subtitle: "Academic Specs" },
    { id: "projects", number: "05", label: "PROJECTS", icon: Layers, subtitle: "OpenClaw & Apps" },
    { id: "ai-core", number: "06", label: "AI CORE", icon: Cpu, subtitle: "Agent Architecture" },
    { id: "stack", number: "07", label: "STACK", icon: Code, subtitle: "Dependencies" },
    { id: "certifications", number: "08", label: "CERTIFICATIONS", icon: Award, subtitle: "Verified Credentials" },
    { id: "research", number: "09", label: "RESEARCH", icon: BookOpen, subtitle: "OpenClaw Paper" },
    { id: "updates", number: "10", label: "UPDATES", icon: Activity, subtitle: "Activity Feed" },
    { id: "contact", number: "11", label: "CONTACT", icon: Send, subtitle: "Establish Connection" },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 border-r border-cyan-500/10 bg-[#070b14]/90 backdrop-blur-xl h-[calc(100vh-4rem)] sticky top-16 select-none justify-between p-4 font-mono-code text-xs">
      {/* Top Navigation Options */}
      <div className="space-y-6">
        {/* Navigation Category Label */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 tracking-wider px-2">
          <span>OS MODULES</span>
          <span className="text-cyan-500/80">v1.0.26</span>
        </div>

        {/* Sidebar Nav Buttons */}
        <nav className="space-y-1.5" aria-label="Operating system navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigateSection(item.id)}
                className={`w-full group flex items-center justify-between px-3 py-3 rounded-lg border transition-all cursor-pointer text-left ${
                  isActive
                    ? "bg-cyan-500/15 border-cyan-500/50 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                    : "bg-transparent border-transparent text-slate-400 hover:bg-slate-900/60 hover:text-slate-200 hover:border-slate-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`font-semibold transition-colors ${
                      isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-slate-300"
                    }`}
                  >
                    {item.number}
                  </span>
                  <div>
                    <div className="font-display font-medium text-xs tracking-wide">{item.label}</div>
                    <div className="text-[10px] text-slate-400 font-sans">{item.subtitle}</div>
                  </div>
                </div>

                <Icon
                  className={`w-4 h-4 transition-all ${
                    isActive ? "text-cyan-400 scale-110" : "text-slate-400 group-hover:text-slate-300"
                  }`}
                />
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom System Status Widget */}
      <div className="space-y-3 pt-4 border-t border-slate-800/80">
        <div className="os-card rounded-lg p-3 space-y-2 border border-cyan-500/20 bg-slate-900/40">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Activity className="w-3.5 h-3.5" />
              <span>STATUS</span>
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
              ACTIVE
            </span>
          </div>

          <div className="space-y-1 text-[11px] text-slate-300 font-sans">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-slate-400">Location:</span>
              <span className="text-slate-200">{PROFILE_DATA.location}</span>
            </div>
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-slate-400">Stage:</span>
              <span className="text-slate-200">Final-Year CSE</span>
            </div>
          </div>
        </div>

        <div className="text-[10px] text-center text-slate-400 tracking-wider">
          ROQAIAH ANJUM E. © {new Date().getFullYear()}
        </div>
      </div>
    </aside>
  );
};
