export interface SkillItem {
  name: string;
  contextNote: string;
  iconName?: string;
}

export interface SkillCategory {
  category: string;
  id: string;
  description: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "LANGUAGES",
    id: "languages",
    description: "Core programming & markup languages",
    skills: [
      { name: "Java", contextNote: "Used for core object-oriented programming, backend development, and Data Structures & Algorithms preparation." },
      { name: "Python", contextNote: "Used for AI agent logic, data manipulation scripts, LangChain workflows, and Streamlit telemetry." },
      { name: "TypeScript", contextNote: "Primary language for building type-safe full-stack applications and autonomous agent orchestrators." },
      { name: "JavaScript", contextNote: "Foundation for asynchronous web execution, DOM interactions, and Node.js server services." },
      { name: "HTML5", contextNote: "Semantic structural layout, SEO metadata integration, and accessible DOM architecture." },
      { name: "CSS3", contextNote: "Modern styling foundation, flexbox/grid architecture, animations, and custom design tokens." }
    ]
  },
  {
    category: "FRONTEND",
    id: "frontend",
    description: "User interface libraries & responsive design",
    skills: [
      { name: "React.js", contextNote: "Core component-driven framework for responsive interactive dashboards and single-page applications." },
      { name: "Tailwind CSS", contextNote: "Utility-first styling for high-density, custom dark-mode glass interfaces and rapid layout design." },
      { name: "Bootstrap", contextNote: "Utilized for rapid grid wireframing and responsive component patterns." },
      { name: "Responsive Web Design", contextNote: "Designing fluid layouts engineered for mobile, tablet, and widescreen command desktop views." }
    ]
  },
  {
    category: "BACKEND",
    id: "backend",
    description: "Server architecture & API engineering",
    skills: [
      { name: "Node.js", contextNote: "Event-driven runtime powering backend REST services and local agent tool execution engines." },
      { name: "Express.js", contextNote: "Lightweight web application framework for building structured REST APIs and middleware routes." },
      { name: "REST APIs", contextNote: "Designing clean endpoint schemas, HTTP status handling, JSON payload contracts, and error routing." },
      { name: "JWT", contextNote: "Stateless JSON Web Token authentication implementation for secure user session management." },
      { name: "bcrypt", contextNote: "Cryptographic password hashing and salt generation for secure database user credentials." },
      { name: "API Integration", contextNote: "Connecting third-party services like Telegram Bot API, Remotive Jobs API, and Gemini AI endpoints." }
    ]
  },
  {
    category: "DATABASE",
    id: "database",
    description: "Data persistence & query systems",
    skills: [
      { name: "MongoDB", contextNote: "NoSQL document database used in MERN projects with flexible Mongoose schema validation." },
      { name: "MySQL", contextNote: "Relational database management system for structured SQL data modelling and relational queries." },
      { name: "SQLite", contextNote: "Lightweight file-based SQL database chosen for OpenClaw Echo local-first memory storage." }
    ]
  },
  {
    category: "AI ENGINEERING",
    id: "ai",
    description: "Intelligent systems & agentic tooling",
    skills: [
      { name: "LangChain", contextNote: "Framework for building LLM pipelines, prompt templates, tool binding, and agent chains." },
      { name: "Google Gemini API", contextNote: "High-performance multimodal cloud model integration for reasoning and complex text generation." },
      { name: "Ollama", contextNote: "Local open-weights LLM runner used for offline agent execution and local reasoning." },
      { name: "RAG", contextNote: "Retrieval-Augmented Generation pattern connecting document embeddings to LLM reasoning loops." },
      { name: "Streamlit", contextNote: "Python framework used for creating interactive real-time data & AI agent monitoring dashboards." }
    ]
  },
  {
    category: "TOOLS & DEVOPS",
    id: "tools",
    description: "Development environment & deployment",
    skills: [
      { name: "Git", contextNote: "Version control for branch management, commit histories, and pull request workflows." },
      { name: "GitHub", contextNote: "Code hosting, repository management, continuous integration, and portfolio project showcase." },
      { name: "Docker", contextNote: "Containerization of full-stack services and agent environments for reproducible deployment." },
      { name: "Postman", contextNote: "API testing, payload verification, header inspection, and endpoint collection documentation." },
      { name: "VS Code", contextNote: "Primary code editor customized with TypeScript, Python, and Git developer extensions." }
    ]
  }
];
