export interface ExperienceItem {
  id: string;
  year: string;
  company: string;
  role: string;
  type: string;
  location?: string;
  summary: string;
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  cgpa: string;
  graduationYear: string;
  status: string;
}

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: "omni-ide",
    year: "2026",
    company: "Omni-IDE",
    role: "AI Intern",
    type: "Internship",
    summary: "Worked on artificial intelligence integration, agentic workflow concepts, and developer tooling.",
    technologies: ["AI Tools", "Python", "TypeScript", "Developer Experience"]
  }
];

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Engineering (B.E.)",
  field: "Computer Science and Engineering",
  institution: "Ghousia College of Engineering",
  cgpa: "8.0",
  graduationYear: "2027",
  status: "Final Year CSE Student"
};
