export interface ProfileData {
  name: string;
  identity: string;
  role: string;
  education: {
    degree: string;
    institution: string;
    cgpa: string;
    graduationYear: string;
    status: string;
  };
  location: string;
  status: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string; // Configurable resume link
  emailPlaceholder: string;
  bioSummary: string[];
}

export const PROFILE_DATA: ProfileData = {
  name: "Roqaiah Anjum E.",
  identity: "AI Engineer | Full-Stack Developer",
  role: "Omni-IDE — AI Intern",
  education: {
    degree: "Computer Science and Engineering",
    institution: "Ghousia College of Engineering",
    cgpa: "8.0",
    graduationYear: "2027",
    status: "Final Year CSE Student",
  },
  location: "India",
  status: "OPEN TO OPPORTUNITIES",
  githubUrl: "https://github.com/roqaiahanjum",
  linkedinUrl: "https://linkedin.com/in/roqaiah-anjum-582593394",
  resumeUrl: "/resume.pdf", // Link to actual public/resume.pdf
  emailPlaceholder: "roqaiah.anjum.dev@example.com",
  bioSummary: [
    "Final-year Computer Science & Engineering student specializing in building intelligent software applications, multi-agent frameworks, and scalable full-stack web platforms.",
    "Driven by the intersection of Autonomous AI systems (LLMs, RAG, Agentic tool orchestration) and robust modern web backend/frontend engineering.",
    "Focused on clean architecture, API design, database schemas, local-first agent workflows, and seamless developer user experiences."
  ]
};
