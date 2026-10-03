export interface InternshipSelectionItem {
  id: string;
  title: string;
  company: string;
  status: string;
  date?: string;
  offerLetterUrl?: string;
  offerLetterUrl2?: string; // second page / continuation document
  summary?: string;
}

export interface HackathonItem {
  id: string;
  name: string;
  organizer: string;
  date: string;
  status: string; // e.g. "Certificate of Participation"
  projectName?: string;
  badgeImageUrl?: string;
  credentialUrl?: string;
}

export const INTERNSHIP_SELECTIONS: InternshipSelectionItem[] = [
  {
    id: "pentagon-space-selection",
    title: "Pentagon Internship — Selected",
    company: "Pentagon Space Pvt. Ltd., Bengaluru",
    status: "Selected Candidate",
    date: "08 Apr 2026",
    offerLetterUrl: "/certificates/pentagon-space-offer.png",
    offerLetterUrl2: "/certificates/pentagon-space-offer-2.png",
    summary: "Selected through interview stages for the Pentagon Space Incubate program featuring Integrated Internship & Application Development with placement assistance."
  }
];

export const HACKATHONS_DATA: HackathonItem[] = [
  {
    id: "hackathon-nexora-2026",
    name: "NEXORA-2K26 24-Hour National Level Hackathon (Certificate of Participation)",
    organizer: "Amruta Institute of Engineering and Management Sciences, Bidadi (IEEE Student Branch)",
    date: "24-25 Apr 2026",
    status: "Certificate of Participation",
    badgeImageUrl: "/certificates/nexora-2k26.jpg"
  },
  {
    id: "hackathon-innovatex-2026",
    name: "INNOVATEX 4.0 International Tech Fest (Certificate of Participation)",
    organizer: "Presidency University",
    date: "6-9 Apr 2026",
    status: "Certificate of Participation",
    badgeImageUrl: "/certificates/innovatex-4.jpg"
  }
];
