export interface OpenClawArchitectureNode {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  shortExplanation: string;
  technicalDescription: string;
  iconName: string;
  technologies: string[];
  responsibilities: string[];
  connections: string[];
}

export const OPENCLAW_ECHO_ARCHITECTURE: OpenClawArchitectureNode[] = [
  {
    id: "input",
    stepNumber: "01",
    title: "INPUT",
    subtitle: "Interface Ingestion",
    shortExplanation: "Captures user goals via Telegram bot or local CLI.",
    technicalDescription: "User prompts and operational requests enter the agent framework through dual interfaces: an interactive Telegram bot client or local CLI interface. Input payloads are sanitized, timestamped, and hydrated with conversational session context.",
    iconName: "MessageSquare",
    technologies: ["Telegram Bot API", "CLI Interface", "REST / Webhooks", "Node.js Runtime"],
    responsibilities: [
      "Natural language request ingestion",
      "Session context hydration",
      "Input boundary sanitization",
      "Webhook event dispatch"
    ],
    connections: ["llm-routing"]
  },
  {
    id: "llm-routing",
    stepNumber: "02",
    title: "LLM ROUTING",
    subtitle: "Provider Waterfall",
    shortExplanation: "Multi-provider waterfall routing with local/cloud fallback.",
    technicalDescription: "Rather than binding to a single model provider, OpenClaw Echo deploys a dynamic provider waterfall architecture. Prompts route dynamically between low-latency cloud providers (Google Gemini API / Groq) and local offline inference nodes (Ollama local open-weights models like Llama-3-8B), automatically triggering failover on rate limits or network drops.",
    iconName: "GitFork",
    technologies: ["Google Gemini API", "Ollama (Local Models)", "Groq API", "Waterfall Fallback Router"],
    responsibilities: [
      "Provider waterfall failover",
      "Latency & rate-limit monitoring",
      "Local-first offline fallback (Ollama)",
      "Strict schema prompt formatting"
    ],
    connections: ["hybrid-memory"]
  },
  {
    id: "hybrid-memory",
    stepNumber: "03",
    title: "HYBRID MEMORY",
    subtitle: "Context & Persistence",
    shortExplanation: "Dual-tier scratchpad memory and SQLite persistent state.",
    technicalDescription: "Employs a resilient hybrid memory strategy that pairs short-term working context windows (for in-flight agent planning and dynamic prompt scratchpads) with SQLite persistent disk storage. Historical session logs, agent state, and prior execution context persist across cold reboots.",
    iconName: "Database",
    technologies: ["SQLite Storage", "Session Working Memory", "Key-Value State Store", "Context Window Management"],
    responsibilities: [
      "In-flight scratchpad context buffer",
      "Cross-session SQLite persistence",
      "Context-window truncation mitigation",
      "Historical state indexing"
    ],
    connections: ["agents"]
  },
  {
    id: "agents",
    stepNumber: "04",
    title: "AGENT / WORKERS",
    subtitle: "Sub-Agent Delegation",
    shortExplanation: "Decomposes plans and delegates to Research, Coding, and Browser workers.",
    technicalDescription: "The central orchestrator decomposes complex goals into granular execution sub-tasks, delegating assignments to specialized worker sub-agents: Research Worker (data lookup & synthesis), Coding Worker (sandbox script generation & logic), and Browser Worker (automated web interaction).",
    iconName: "Workflow",
    technologies: ["LangChain Multi-Agent", "Role-Based Delegation", "Research Worker", "Coding Worker", "Browser Worker"],
    responsibilities: [
      "Goal decomposition into sub-tasks",
      "Research Worker delegation",
      "Coding Worker script generation",
      "Browser Worker automated tasks"
    ],
    connections: ["tools"]
  },
  {
    id: "tools",
    stepNumber: "05",
    title: "TOOL ORCHESTRATION",
    subtitle: "Sandboxed Execution",
    shortExplanation: "Executes registered tools: sandbox scripts, Chart.js, email, & search.",
    technicalDescription: "The agent selects and invokes registered functional tools from an extensible tool registry. Supported tools include sandboxed script execution, Chart.js dynamic visualization (generate_data_chart), transactional email dispatch via Nodemailer (send_email_report), web search research lookup, and local file operations.",
    iconName: "Wrench",
    technologies: ["Skill Registry", "Sandbox Execution", "Chart.js Renderer", "Nodemailer (send_email_report)", "Filesystem Ops"],
    responsibilities: [
      "Dynamic tool lookup & parameter binding",
      "Sandboxed script execution",
      "HTML Chart.js visualization output",
      "Automated email reporting"
    ],
    connections: ["verification"]
  },
  {
    id: "verification",
    stepNumber: "06",
    title: "VERIFICATION",
    subtitle: "Schema & Output Integrity",
    shortExplanation: "Validates JSON structure, santizes code, and checks criteria.",
    technicalDescription: "Before outputs are marked complete or committed, the verification layer inspects results against strict schema boundaries. It sanitizes LLM markdown fences and headers (sanitizeSandboxCode), checks structural integrity, and validates execution criteria before handoff.",
    iconName: "ShieldCheck",
    technologies: ["Pydantic / Zod Schemas", "sanitizeSandboxCode", "Integrity Assertions", "Markdown Fence Filter"],
    responsibilities: [
      "Deterministic schema parsing",
      "Markdown code fence sanitization",
      "Output integrity validation",
      "Failure signal detection"
    ],
    connections: ["recovery"]
  },
  {
    id: "recovery",
    stepNumber: "07",
    title: "RECOVERY",
    subtitle: "Bounded Self-Healing",
    shortExplanation: "Bounded self-correcting retry cycles with safety backoff.",
    technicalDescription: "If verification fails or a tool runtime error is detected, OpenClaw Echo engages a bounded self-healing recovery loop. The error trace is fed back into the reasoning prompt for targeted repair under strict maximum-iteration limits to prevent unbounded recursion or runaway execution.",
    iconName: "RotateCcw",
    technologies: ["Bounded Self-Correction", "Error Trace Back-Propagation", "Max-Iteration Guard", "Graceful Degradation"],
    responsibilities: [
      "Error trace capture & feedback",
      "Bounded iterative repair cycle",
      "Runaway recursion prevention",
      "Graceful degradation on hard fails"
    ],
    connections: ["persistence"]
  },
  {
    id: "persistence",
    stepNumber: "08",
    title: "TELEMETRY",
    subtitle: "State & Audit Logging",
    shortExplanation: "Commits final state to SQLite and streams telemetry to Streamlit.",
    technicalDescription: "Final verified artifacts, execution logs, and state checkpoints are committed to the SQLite database. Live execution telemetry, token usage, and step trajectories stream directly to the visual Streamlit monitoring dashboard and technical audit logs (TECHNICAL_AUDIT_REPORT.md).",
    iconName: "Activity",
    technologies: ["SQLite Database", "Streamlit Dashboard", "TECHNICAL_AUDIT_REPORT", "Step Execution Traces"],
    responsibilities: [
      "Final state commit to SQLite",
      "Real-time Streamlit telemetry stream",
      "Technical audit report logging",
      "Completed artifact delivery"
    ],
    connections: []
  }
];

// Documented benchmarks from OpenClaw Echo project evaluation
export const OPENCLAW_PROJECT_SPECS = {
  projectName: "OpenClaw Echo",
  repositoryUrl: "https://github.com/roqaiahanjum/OpenClaw-echo",
  architectureType: "Local-First Resilient Autonomous Agent",
  coreRuntime: "TypeScript / Node.js & Python backend",
  interfaces: "Telegram Bot Client, Local CLI, Streamlit Dashboard",
  database: "SQLite persistent store",
  modelsSupported: "Google Gemini 1.5/2.0 API, Ollama (Local Llama-3-8B), Groq API",
  keyTools: ["sandboxCode", "generate_data_chart", "send_email_report", "web_search", "file_ops"],
  workers: ["Research Worker", "Coding Worker", "Browser Worker"]
};
