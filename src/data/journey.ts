export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  category: "AI" | "Full-Stack" | "Internship" | "Research" | "Core DSA";
  description: string;
  status: "Completed" | "In Progress" | "Ongoing";
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: "m-2026-1",
    year: "2026",
    title: "AI Engineering & Multi-Agent Systems",
    category: "AI",
    description: "Deepened expertise in LLM orchestrations, local-first open-weights execution with Ollama, and agentic tool workflows.",
    status: "In Progress"
  },
  {
    id: "m-2026-2",
    year: "2026",
    title: "OpenClaw Echo Framework Development",
    category: "AI",
    description: "Built OpenClaw Echo, a local-first autonomous agent framework with hybrid memory and multi-provider model fallback.",
    status: "Completed"
  },
  {
    id: "m-2026-3",
    year: "2026",
    title: "Omni-IDE Internship",
    category: "Internship",
    description: "Served as AI Intern at Omni-IDE focusing on AI tooling, intelligent workspace interactions, and software engineering.",
    status: "Completed"
  },
  {
    id: "m-2026-4",
    year: "2026",
    title: "OpenClaw Echo Architecture Research",
    category: "Research",
    description: "Drafting technical case study and architecture paper on local-first multi-agent verification and recovery loops.",
    status: "In Progress"
  },
  {
    id: "m-2026-5",
    year: "2026",
    title: "Full-Stack System Engineering",
    category: "Full-Stack",
    description: "Engineered web platforms including Smart Hostel Management System, JobFinder REST API portal, and ShopEase e-commerce.",
    status: "Completed"
  },
  {
    id: "m-2026-6",
    year: "2026",
    title: "Java & Data Structures Mastery",
    category: "Core DSA",
    description: "Continuous practice with Java algorithms, data structures, and computer science fundamentals.",
    status: "Ongoing"
  }
];
