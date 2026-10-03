export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  badgeImageUrl?: string;
  description?: string;
  skills?: string[];
}

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-cse-specialization",
    name: "Computer Science & Engineering Degree Specialization",
    issuer: "Ghousia College of Engineering",
    date: "2027",
    description: "B.E. Computer Science & Engineering degree program specializing in Artificial Intelligence, Software Engineering, and Operating Systems.",
    skills: ["Computer Science", "Algorithms", "Software Engineering", "Full-Stack Systems"]
  },
  {
    id: "cert-nexora-2026",
    name: "NEXORA-2K26 24-Hour National Level Hackathon (Certificate of Participation)",
    issuer: "Amruta Institute of Engineering and Management Sciences, Bidadi (IEEE Student Branch)",
    date: "24-25 Apr 2026",
    badgeImageUrl: "/certificates/nexora-2k26.jpg"
  },
  {
    id: "cert-gce-design-thinking",
    name: "Design Thinking, Critical Thinking and Innovation Design (Certificate of Participation)",
    issuer: "Ghousia College of Engineering (Dept. of Civil Engineering)",
    date: "08 Apr 2026",
    badgeImageUrl: "/certificates/gce-design-thinking.png"
  },
  {
    id: "cert-innovatex-2026",
    name: "INNOVATEX 4.0 International Tech Fest (Certificate of Participation)",
    issuer: "Presidency University",
    date: "6-9 Apr 2026",
    badgeImageUrl: "/certificates/innovatex-4.jpg"
  },
  {
    id: "cert-ibm-edt-practitioner",
    name: "Enterprise Design Thinking Practitioner",
    issuer: "IBM SkillsBuild",
    date: "26 Feb 2026",
    credentialUrl: "https://www.credly.com/go/vQkyTdQS",
    badgeImageUrl: "/certificates/ibm-edt-practitioner.png"
  },
  {
    id: "cert-aicw-2026",
    name: "AI Careers for Women (Certificate of Completion)",
    issuer: "Microsoft, Edunet Foundation, SAP & Ministry of Skill Development and Entrepreneurship",
    date: "2025-26",
    credentialId: "AICW26_101963",
    credentialUrl: "",
    badgeImageUrl: "/certificates/aicw-2026.png"
  }
];
