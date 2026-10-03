export interface ArchitectureStep {
  id: string;
  label: string;
  sublabel: string;
  description: string;
}

export interface CaseStudy {
  problem: string;
  idea: string;
  architecture: string;
  technologies: string[];
  capabilities: string[];
  challenges: string;
  solution: string;
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "AI / AGENTS" | "FULL-STACK" | "WEB APPS" | "TOOLS / OTHER";
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  isFeatured: boolean;
  featured?: boolean;
  image?: string;
  architectureSteps?: ArchitectureStep[];
  caseStudy?: CaseStudy;
  features: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "openclaw-echo",
    title: "OPENCLAW ECHO",
    tagline: "Local-first autonomous AI agent framework.",
    description: "A robust, local-first agentic framework designed for dynamic skill synthesis, multi-agent execution, hybrid memory persistence, and smart LLM provider fallback.",
    category: "AI / AGENTS",
    isFeatured: true,
    featured: true,
    image: "/projects/openclaw-echo.png",
    githubUrl: "https://github.com/roqaiahanjum/OpenClaw-echo",
    technologies: [
      "Node.js",
      "TypeScript",
      "Python",
      "LangChain",
      "Google Gemini API",
      "Ollama",
      "SQLite",
      "Telegram API",
      "Streamlit",
      "Docker"
    ],
    features: [
      "Multi-agent execution pipeline with explicit role delegation",
      "Hybrid memory (Short-term working context + SQLite persistent vector store)",
      "Dynamic skill synthesis and extensible skill registry",
      "LLM provider fallback & routing (Google Gemini Cloud <-> Ollama Local)",
      "Bounded auto-recovery & step verification loops",
      "Dual interface: Interactive Telegram bot & visual Streamlit dashboard",
      "Docker containerized reproducible deployment"
    ],
    architectureSteps: [
      {
        id: "ingest",
        label: "INGEST",
        sublabel: "Input Parsing & Validation",
        description: "Captures natural language requests from Telegram, CLI, or API webhooks. Sanitizes input and loads conversation context from memory."
      },
      {
        id: "synthesis",
        label: "SYNTHESIS",
        sublabel: "Plan & Skill Selection",
        description: "Decomposes complex goals into sequential sub-tasks. Queries the dynamic skill registry for matching execution blueprints."
      },
      {
        id: "routing",
        label: "ROUTING",
        sublabel: "Model Provider Allocation",
        description: "Evaluates task complexity and latency constraints to route prompts between Ollama local nodes and Google Gemini API."
      },
      {
        id: "execution",
        label: "EXECUTION",
        sublabel: "Multi-Agent Tool Orchestration",
        description: "Executes tools in isolated context windows. Supports web lookup, local file ops, database queries, and custom script runtimes."
      },
      {
        id: "verification",
        label: "VERIFICATION",
        sublabel: "Output Integrity & Recovery",
        description: "Validates JSON structure and task criteria. If errors occur, triggers bounded self-correction retry cycles."
      },
      {
        id: "persistence",
        label: "PERSISTENCE",
        sublabel: "Memory & Telemetry Sync",
        description: "Commits execution results to SQLite memory store. Emits telemetry events to the Streamlit monitoring interface."
      }
    ],
    caseStudy: {
      problem: "Traditional cloud-dependent AI agent implementations suffer from provider rate-limits, high API latency, lack of deterministic execution safety, and poor local offline capabilities.",
      idea: "Develop a modular local-first framework that seamlessly bridges local open-weights LLMs (Ollama) with high-capacity cloud models (Gemini), backed by deterministic tool verification and hybrid memory storage.",
      architecture: "Decoupled multi-agent system built on TypeScript/Node core orchestrator, Python research backend, SQLite persistent state database, LangChain tool wrappers, and dual user interfaces.",
      technologies: [
        "Node.js & TypeScript core orchestrator",
        "Python runtime with LangChain integrations",
        "Google Gemini 1.5/2.0 API & Ollama local models",
        "SQLite database for memory & state management",
        "Streamlit real-time monitoring dashboard",
        "Telegram bot interface & Docker deployment"
      ],
      capabilities: [
        "Local-first execution fallback when internet/cloud APIs drop",
        "Dynamic skill synthesis without code redeployments",
        "Hybrid memory retrieval across past sessions",
        "Real-time token and step telemetry logging via Streamlit"
      ],
      challenges: "Managing context window saturation during long multi-step agent trajectories while maintaining schema fidelity across different LLM backends.",
      solution: "Implemented a strict Pydantic/Zod schema validation boundary with dynamic window sliding and fallback routing strategies.",
      outcome: "A functional, customizable autonomous AI agent architecture ready for local-first tool automation and multi-interface deployment."
    }
  },
  {
    id: "swapstyle-marketplace",
    title: "SwapStyle Clothing Swap Marketplace",
    tagline: "Full-stack MERN sustainable fashion exchange platform.",
    description: "A comprehensive clothing exchange marketplace featuring user authentication, real-time messaging, smart item matching, notification feeds, search filtering, and an administrative dashboard.",
    category: "FULL-STACK",
    isFeatured: true,
    featured: true,
    image: "/projects/swapstyle.png",
    githubUrl: "https://github.com/roqaiahanjum/swapstyle-clothing-swap-marketplace",
    demoUrl: "https://swapstyle-clothing-swap-marketplace.vercel.app",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Socket.io", "Tailwind CSS", "Vercel"],
    features: [
      "Secure user authentication with JWT tokens and session protection",
      "Item listing creation with image uploads, category tags & condition details",
      "Smart item swap matching system connecting interested traders",
      "Real-time direct chat messaging powered by Socket.io",
      "Comprehensive admin control dashboard for item & user moderation",
      "Deployed live on Vercel with cloud database backend"
    ]
  },
  {
    id: "codealpha-project-management",
    title: "Collaborative Project Management Tool",
    tagline: "Real-time Trello/Asana style project workflow tool.",
    description: "A real-time collaborative project management application built with Node.js, Express, MongoDB, and Socket.io featuring Kanban task boards.",
    category: "FULL-STACK",
    isFeatured: false,
    featured: false,
    image: "/projects/project-management.png",
    githubUrl: "https://github.com/roqaiahanjum/CodeAlpha_ProjectManagementTool",
    technologies: ["Node.js", "Express.js", "MongoDB", "Socket.io", "JavaScript", "REST API"],
    features: [
      "Kanban board task management with drag-and-drop workflow states",
      "Real-time multi-user task updates broadcast via Socket.io webSockets",
      "Team project assignment & deadline tracking",
      "MongoDB database models for projects, boards, and task cards",
      "RESTful API backend serving user authentication and board state"
    ]
  },
  {
    id: "codealpha-ecommerce-store",
    title: "MERN E-Commerce Store",
    tagline: "Full-stack digital store with user auth & order processing.",
    description: "A full-stack MERN e-commerce application featuring secure authentication, product catalog browsing, category filtering, shopping cart state, and order database integration.",
    category: "FULL-STACK",
    isFeatured: false,
    featured: false,
    image: "/projects/shopease.png",
    githubUrl: "https://github.com/roqaiahanjum/CodeAlpha_ECommerceStore",
    technologies: ["React", "Express.js", "Node.js", "MongoDB", "Mongoose", "JWT", "bcrypt"],
    features: [
      "User signup & login with bcrypt password hashing and JWT authorization",
      "Interactive product catalog with category search and filtering",
      "Persistent shopping cart with dynamic item quantity calculation",
      "Order placement and transaction history database records",
      "MongoDB database models with schema validation"
    ]
  },
  {
    id: "gesture-meme",
    title: "GestureMeme Real-Time Generator",
    tagline: "Computer vision gesture & facial meme generator.",
    description: "Real-time webcam gesture and facial expression meme generator using Python, OpenCV, and MediaPipe. Detects hand gestures live and dynamically renders matching meme overlays.",
    category: "AI / AGENTS",
    isFeatured: true,
    featured: true,
    image: "/projects/gesture-meme.png",
    githubUrl: "https://github.com/roqaiahanjum/GestureMeme",
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "Computer Vision"],
    features: [
      "Real-time webcam video stream capturing at high FPS",
      "Hand gesture & finger landmark tracking using MediaPipe Hands",
      "Facial expression detection matching predefined meme templates",
      "Dynamic visual text and image overlay rendering using OpenCV",
      "Modular Python codebase for adding custom gesture-to-meme mappings"
    ]
  },
  {
    id: "ai-hackathon-validator",
    title: "AI Hackathon Idea Validator",
    tagline: "Intelligent hackathon project scoring & recommendation tool.",
    description: "An AI-powered application that evaluates hackathon project ideas, computes novelty scores, checks similarity against existing projects, and suggests technical improvements.",
    category: "AI / AGENTS",
    isFeatured: true,
    featured: true,
    image: "/projects/ai-hackathon-validator.png",
    githubUrl: "https://github.com/roqaiahanjum/AI-Hackthon-validator",
    technologies: ["JavaScript", "Node.js", "Google Gemini API", "REST API", "Express"],
    features: [
      "Natural language project pitch analysis & automated scoring",
      "Duplicate/existing project similarity detector algorithm",
      "Actionable recommendations for tech stack expansion & competitive edge",
      "Structured evaluation report output in JSON format"
    ]
  },
  {
    id: "smart-hostel-management",
    title: "Smart Hostel Management System",
    tagline: "Full-stack residential administration platform.",
    description: "A comprehensive MERN stack management dashboard designed to streamline student residence operations, warden administrative workflows, and facility issue resolution.",
    category: "FULL-STACK",
    isFeatured: true,
    featured: true,
    image: "/projects/smart-hostel.png",
    githubUrl: "https://github.com/roqaiahanjum/Hostel-Management--Sytem",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Chart.js", "Tailwind CSS"],
    features: [
      "Role-based authentication (Student & Admin / Warden roles)",
      "Complaints filing & automated status update workflow",
      "Digital student leave application & approval tracking",
      "Real-time institutional notice board feed",
      "Lost & Found item registry module",
      "Interactive analytics dashboard with Chart.js visualization"
    ]
  },
  {
    id: "job-finder-app",
    title: "JobFinder Portal",
    tagline: "API-driven remote job discovery engine.",
    description: "A lightweight RESTful application connecting job seekers with active tech opportunities fetched dynamically from remote employment APIs.",
    category: "WEB APPS",
    isFeatured: false,
    featured: false,
    image: "/projects/jobfinder.png",
    githubUrl: "https://github.com/roqaiahanjum/job-finder-app",
    technologies: ["JavaScript", "HTML5", "CSS3", "Remotive API", "localStorage", "REST API"],
    features: [
      "Dynamic remote job listing feed integrated with Remotive API",
      "Custom keyword filtering, category search & location tags",
      "Saved job bookmarks stored locally in browser storage",
      "Clean responsive client UI built with modular Vanilla JS"
    ]
  },
  {
    id: "household-service-platform",
    title: "Belagavi Home Care Platform",
    tagline: "Django web platform for verified household services.",
    description: "A Django web application connecting customers with verified home service providers in Belagavi, Karnataka. Features online service booking and Razorpay payment integration.",
    category: "FULL-STACK",
    isFeatured: true,
    featured: true,
    image: "/projects/home-care.png",
    githubUrl: "https://github.com/roqaiahanjum/household_service_platform",
    technologies: ["Python", "Django", "Bootstrap 5", "Razorpay API", "SQLite", "HTML5/CSS3"],
    features: [
      "Customer & Service Provider portal registration and verification",
      "Service booking scheduler with location filtering",
      "Razorpay payment gateway integration for secure transactions",
      "Customer reviews and rating system for providers",
      "Responsive UI styled with Bootstrap 5"
    ]
  },
  {
    id: "rag-ghousia",
    title: "RAG Ghousia Academic Query System",
    tagline: "Retrieval-Augmented Generation academic research assistant.",
    description: "A Python-based RAG system engineered for querying Ghousia College academic documents and technical literature using vector search embeddings.",
    category: "AI / AGENTS",
    isFeatured: true,
    featured: true,
    image: "/projects/rag-ghousia.png",
    githubUrl: "https://github.com/roqaiahanjum/RAG_GHOUSIA",
    technologies: ["Python", "LangChain", "Vector Store", "LLM Embeddings", "PyPDF"],
    features: [
      "PDF & academic document parsing and chunking pipeline",
      "Vector embeddings generation and indexing",
      "Semantic similarity search over technical document corpora",
      "LLM query answering grounded strictly in source context"
    ]
  },
  {
    id: "college-library-system",
    title: "College Library Management System",
    tagline: "Modern digital library operations platform.",
    description: "A web application designed to streamline library operations for educational institutions with separate interfaces for library patrons and administrators.",
    category: "WEB APPS",
    isFeatured: false,
    githubUrl: "https://github.com/roqaiahanjum/College-Library-Management-System",
    technologies: ["JavaScript", "HTML5", "CSS3", "Node.js", "Express"],
    features: [
      "Digital book catalog search with availability indicators",
      "Issue & return transaction recording for administrators",
      "Patron account management and borrowed book history",
      "Responsive clean user interface for mobile and desktop"
    ]
  },
  {
    id: "social-media-rest-api",
    title: "Social Media REST API Backend",
    tagline: "Node.js & Express REST API for social networking.",
    description: "A backend service built with Node.js, Express, MongoDB, and JWT authentication supporting user posts, comments, likes, and profile management.",
    category: "TOOLS / OTHER",
    isFeatured: false,
    githubUrl: "https://github.com/roqaiahanjum/social-media-",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "REST API"],
    features: [
      "JWT stateless token authentication and protected middleware routes",
      "User post CRUD operations with comment threading",
      "Like/unlike system logic with MongoDB collection updates",
      "Express validator input sanitization"
    ]
  },
  {
    id: "emi-calculator",
    title: "Financial EMI & Amortization Calculator",
    tagline: "Interactive loan EMI & payment breakdown tool.",
    description: "A financial calculator built with JavaScript, HTML/CSS, and Chart.js providing loan monthly installment calculations, interest totals, and amortization charts.",
    category: "TOOLS / OTHER",
    isFeatured: false,
    githubUrl: "https://github.com/roqaiahanjum/emi-calculator",
    technologies: ["JavaScript", "Chart.js", "HTML5", "CSS3", "Financial Math"],
    features: [
      "Real-time EMI calculation based on loan amount, tenure, and interest rate",
      "Interactive pie chart breakdown of principal vs interest",
      "Amortization table generation showing payment schedules",
      "Responsive lightweight web client"
    ]
  },
  {
    id: "sai-edge-scout",
    title: "SAI Edge Scout Web Dashboard",
    tagline: "Python Streamlit edge analytics web app.",
    description: "A Streamlit web dashboard built for visualizing edge analytics data and system telemetry.",
    category: "TOOLS / OTHER",
    isFeatured: false,
    githubUrl: "https://github.com/roqaiahanjum/SAI-Edge-Scout-Web",
    technologies: ["Python", "Streamlit", "Pandas", "Data Visualization"],
    features: [
      "Interactive Streamlit control panel widgets",
      "Data frame processing and chart visualization",
      "Configurable parameter inputs for simulation"
    ]
  },
  {
    id: "churn-analysis",
    title: "Customer Churn Data Analysis",
    tagline: "Python data science & churn prediction notebook.",
    description: "A data science project exploring customer churn patterns using Python, Pandas, and Jupyter Notebook to identify key attrition drivers.",
    category: "TOOLS / OTHER",
    isFeatured: false,
    githubUrl: "https://github.com/roqaiahanjum/churn-analysis",
    technologies: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn"],
    features: [
      "Data cleaning and exploratory data analysis (EDA)",
      "Correlation matrix analysis of customer retention features",
      "Data visualization plots detailing churn percentages"
    ]
  },
  {
    id: "recipe-box",
    title: "Recipe Box & Meal Planner",
    tagline: "Client-side recipe organizer web application.",
    description: "A web application for saving recipes, categorizing ingredients, and organizing weekly meal plans.",
    category: "WEB APPS",
    isFeatured: false,
    githubUrl: "https://github.com/roqaiahanjum/recipe-box",
    technologies: ["JavaScript", "HTML5", "CSS3", "localStorage"],
    features: [
      "Recipe creation and ingredient list management",
      "Category tagging for breakfast, lunch, and dinner recipes",
      "Browser persistent storage for saved recipes"
    ]
  }
];
