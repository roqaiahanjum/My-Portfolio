export interface ProfessionalUpdate {
  id: string;
  date: string; // YYYY-MM-DD
  type: "PROJECT" | "CERTIFICATION" | "MILESTONE" | "RESEARCH" | "INTERNSHIP";
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

export const RAW_UPDATES: ProfessionalUpdate[] = [
  {
    id: "upd-2026-10-openclaw",
    date: "2026-10-01",
    type: "PROJECT",
    title: "OpenClaw Echo Case Study & Verification Loop Architecture",
    description: "Published technical specifications and case study for OpenClaw Echo local-first agent framework featuring dual LLM fallback routing between Ollama and Google Gemini.",
    link: "https://github.com/roqaiahanjum/OpenClaw-echo",
    linkLabel: "GitHub Repository"
  },
  {
    id: "upd-2026-09-omni",
    date: "2026-09-15",
    type: "INTERNSHIP",
    title: "Omni-IDE AI Internship Progress",
    description: "Engaged in AI tool integration and developer environment workflow prototyping during AI Internship at Omni-IDE.",
  },
  {
    id: "upd-2026-08-hostel",
    date: "2026-08-20",
    type: "PROJECT",
    title: "Smart Hostel Management System Launch",
    description: "Completed full-stack MERN application for student residence administration with complaint workflows and Chart.js analytics.",
    link: "https://github.com/roqaiahanjum/Hostel-Management--Sytem",
    linkLabel: "GitHub Repository"
  },
  {
    id: "upd-2026-07-research",
    date: "2026-07-10",
    type: "RESEARCH",
    title: "OpenClaw Echo Research in Progress",
    description: "Initiated technical analysis on deterministic validation boundaries and low-latency LLM fallback mechanisms in edge environments.",
    link: "https://github.com/roqaiahanjum/OpenClaw-echo",
    linkLabel: "Research Project"
  }
];

// Automatically sorted with newest updates first
export const UPDATES_DATA: ProfessionalUpdate[] = [...RAW_UPDATES].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
