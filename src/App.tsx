import { useState, useEffect } from "react";
import { BootSequence } from "./components/boot/BootSequence";
import { Navbar } from "./components/layout/Navbar";
import { Sidebar } from "./components/layout/Sidebar";
import { Footer } from "./components/layout/Footer";
import { HeroDashboard } from "./components/hero/HeroDashboard";
import { SystemProfile } from "./components/profile/SystemProfile";
import { ProjectsSection } from "./components/projects/ProjectsSection";
import { AICoreVisualizer } from "./components/aiCore/AICoreVisualizer";
import { TechStackSection } from "./components/stack/TechStackSection";
import { ExperienceSection } from "./components/experience/ExperienceSection";
import { ResearchSection } from "./components/research/ResearchSection";
import { ContactSection } from "./components/contact/ContactSection";
import { CommandPalette } from "./components/palette/CommandPalette";
import { InteractiveTerminal } from "./components/terminal/InteractiveTerminal";
import { CustomCursor } from "./components/cursor/CustomCursor";
import { ResumeModal } from "./components/resume/ResumeModal";

import { CertificationsSection } from "./components/certifications/CertificationsSection";
import { UpdatesSection } from "./components/updates/UpdatesSection";

export function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [activeSection, setActiveSection] = useState("system");
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isOpenClawModalOpen, setIsOpenClawModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Keyboard shortcut handler (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("system");
  };

  return (
    <div className="min-h-screen bg-[#05070D] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 bg-cyber-grid bg-radial-glow relative overflow-x-hidden">
      {/* Custom Glowing Dot Cursor */}
      <CustomCursor />

      {/* OS Boot Experience Overlay */}
      {isBooting ? (
        <BootSequence onComplete={() => setIsBooting(false)} />
      ) : (
        <div className="flex flex-col min-h-screen">
          {/* Top Sticky OS Header */}
          <Navbar
            activeSection={activeSection}
            onNavigateSection={handleNavigateSection}
            onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            onToggleTerminal={() => setIsTerminalOpen((prev) => !prev)}
            isTerminalOpen={isTerminalOpen}
            onOpenResumeModal={() => setIsResumeModalOpen(true)}
          />

          {/* Main Application Shell Layout */}
          <div className="mx-auto flex w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
            {/* Desktop Left OS Sidebar */}
            <Sidebar
              activeSection={activeSection}
              onNavigateSection={handleNavigateSection}
            />

            {/* Main Content Workspace */}
            <main className="flex-1 min-w-0 lg:pl-8 py-6 space-y-16">
              {/* 01 SYSTEM — Hero & Control Center */}
              <HeroDashboard
                onExploreWork={() => handleNavigateSection("projects")}
                onOpenTerminal={() => setIsTerminalOpen(true)}
              />

              {/* 02 ABOUT — System Profile & Identity Overview */}
              <SystemProfile />

              {/* 03 & 04 EXPERIENCE / EDUCATION */}
              <ExperienceSection />

              {/* 05 PROJECTS — OpenClaw Echo Featured & Secondary Apps */}
              <ProjectsSection
                isOpenClawModalOpen={isOpenClawModalOpen}
                onCloseOpenClawModal={() => setIsOpenClawModalOpen(false)}
                onOpenOpenClawModal={() => setIsOpenClawModalOpen(true)}
              />

              {/* 06 AI CORE — Agentic Node Architecture */}
              <AICoreVisualizer />

              {/* 07 STACK — System Dependencies */}
              <TechStackSection />

              {/* 08 CERTIFICATIONS — Verified Credentials */}
              <CertificationsSection />

              {/* 09 RESEARCH — Research Publications */}
              <ResearchSection />

              {/* 10 UPDATES — Professional Activity Stream */}
              <UpdatesSection />

              {/* 11 CONTACT — Establish Connection */}
              <ContactSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
            </main>
          </div>

          {/* OS Footer */}
          <Footer
            onScrollTop={handleScrollTop}
            onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          />

          {/* Command Palette Modal (Ctrl+K) */}
          <CommandPalette
            isOpen={isCommandPaletteOpen}
            onClose={() => setIsCommandPaletteOpen(false)}
            onNavigateSection={handleNavigateSection}
            onOpenOpenClawModal={() => setIsOpenClawModalOpen(true)}
          />

          {/* Interactive CLI Terminal Drawer */}
          <InteractiveTerminal
            isOpen={isTerminalOpen}
            onClose={() => setIsTerminalOpen(false)}
            onNavigateSection={handleNavigateSection}
          />

          {/* Recruiter Resume Spec Modal */}
          <ResumeModal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export default App;
