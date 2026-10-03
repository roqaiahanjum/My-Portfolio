export interface DetailedEducationItem {
  id: string;
  level: string;
  degree: string;
  institution: string;
  fullInstitutionName?: string;
  location?: string;
  score?: string;
  status: string;
  graduationYear?: string;
  isFeatured?: boolean;
}

export const EDUCATION_STAGES: DetailedEducationItem[] = [
  {
    id: "sslc",
    level: "SSLC / 10TH STANDARD",
    degree: "Secondary School Leaving Certificate (10th Standard)",
    institution: "G.M.M.D.R.G. Residential School",
    fullInstitutionName: "Government Minority Morarji Desai Residential Girls' School",
    location: "Sira Taluk, Tumakuru District, Karnataka",
    status: "Completed",
    isFeatured: false
  },
  {
    id: "ii-puc",
    level: "II PUC / 12TH STANDARD",
    degree: "Pre-University Science Course (12th Standard)",
    institution: "G.M.M.D.R.G. PU College",
    fullInstitutionName: "Government Minority Morarji Desai Residential Girls' PU College",
    location: "Sira Taluk, Tumakuru District, Karnataka",
    score: "89%",
    status: "Completed",
    isFeatured: false
  },
  {
    id: "be-cse",
    level: "B.E.",
    degree: "B.E. – Computer Science and Engineering",
    institution: "Ghousia College of Engineering",
    score: "CGPA 8.0 / 10",
    status: "Final Year Student",
    graduationYear: "2027",
    isFeatured: true
  }
];
