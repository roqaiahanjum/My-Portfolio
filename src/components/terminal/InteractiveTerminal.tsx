import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, CornerDownLeft } from "lucide-react";
import { PROFILE_DATA } from "../../data/profile";
import { PROJECTS } from "../../data/projects";

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
}) => {
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: "init",
      command: "roqaiah-os --status",
      output: (
        <div className="space-y-1 text-slate-300">
          <div>ROQAIAH OS CLI Terminal v1.0.26</div>
          <div className="text-cyan-400">Type <span className="text-emerald-400">help</span> to view available commands.</div>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let response: React.ReactNode;

    switch (cmd) {
      case "help":
        response = (
          <div className="space-y-1 text-xs">
            <div className="text-cyan-400 font-semibold">AVAILABLE CLI COMMANDS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
              <div><span className="text-emerald-400 font-bold">whoami</span> — Identity and background overview</div>
              <div><span className="text-emerald-400 font-bold">projects</span> — List engineered systems</div>
              <div><span className="text-emerald-400 font-bold">stack</span> — Core technologies & dependencies</div>
              <div><span className="text-emerald-400 font-bold">experience</span> — Professional logs & education</div>
              <div><span className="text-emerald-400 font-bold">certifications</span> — Verified credentials & selections</div>
              <div><span className="text-emerald-400 font-bold">github</span> — GitHub profile & repository access</div>
              <div><span className="text-emerald-400 font-bold">contact</span> — Connection details</div>
              <div><span className="text-emerald-400 font-bold">clear</span> — Clear terminal output</div>
            </div>
          </div>
        );
        break;

      case "github":
        response = (
          <div className="space-y-1.5 text-xs text-slate-200">
            <div className="text-cyan-400 font-semibold">GITHUB PROFILE:</div>
            <div>• <span className="text-slate-400">Account:</span> @roqaiahanjum</div>
            <div>• <span className="text-slate-400">URL:</span> <a href={PROFILE_DATA.githubUrl} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PROFILE_DATA.githubUrl}</a></div>
            <div>• <span className="text-slate-400">Focus:</span> Open-source AI agents, MERN platforms & autonomous systems</div>
          </div>
        );
        break;

      case "whoami":
        response = (
          <div className="space-y-1 text-xs text-slate-200">
            <div><span className="text-cyan-400">NAME:</span> {PROFILE_DATA.name}</div>
            <div><span className="text-cyan-400">ROLE:</span> {PROFILE_DATA.identity}</div>
            <div><span className="text-cyan-400">STAGE:</span> Final-year CSE Student at {PROFILE_DATA.education.institution}</div>
            <div><span className="text-cyan-400">LOCATION:</span> {PROFILE_DATA.location}</div>
            <div><span className="text-cyan-400">STATUS:</span> {PROFILE_DATA.status}</div>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-1.5 text-xs">
            <div className="text-cyan-400 font-semibold">REPOSITORIES & SYSTEMS:</div>
            {PROJECTS.map((p) => (
              <div key={p.id} className="flex flex-col sm:flex-row sm:items-center justify-between text-slate-300">
                <span className="font-bold text-slate-100">{p.title}</span>
                <span className="text-slate-400 text-[11px]">{p.tagline}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "stack":
        response = (
          <div className="text-xs text-slate-300">
            <div className="text-cyan-400 font-semibold">DEPENDENCY SUMMARY:</div>
            <div>Java, Python, TypeScript, React.js, Node.js, Express.js, MongoDB, SQLite, LangChain, Google Gemini API, Ollama, Docker</div>
          </div>
        );
        break;

      case "experience":
        response = (
          <div className="text-xs text-slate-300 space-y-1">
            <div><span className="text-cyan-400">2026:</span> Omni-IDE — AI Intern</div>
            <div><span className="text-cyan-400">EDUCATION:</span> B.E. Computer Science & Engineering (CGPA 8.0)</div>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="text-xs text-slate-300 space-y-1">
            <div><span className="text-cyan-400">GITHUB:</span> {PROFILE_DATA.githubUrl}</div>
            <div><span className="text-cyan-400">LINKEDIN:</span> {PROFILE_DATA.linkedinUrl}</div>
            <div><span className="text-cyan-400">STATUS:</span> Open for opportunities</div>
          </div>
        );
        break;

      case "certifications":
        response = (
          <div className="text-xs text-slate-300 space-y-1.5">
            <div className="text-cyan-400 font-semibold">VERIFIED CREDENTIALS & SELECTIONS:</div>
            <div>• AI Careers for Women (Certificate of Completion) — Microsoft, Edunet & SAP</div>
            <div>• Enterprise Design Thinking Practitioner — IBM SkillsBuild</div>
            <div>• Design Thinking & Innovation Workshop — Ghousia College of Eng.</div>
            <div>• Pentagon Internship — Selected Candidate</div>
            <div>• NEXORA-2K26 & INNOVATEX 4.0 — Hackathon Participation</div>
          </div>
        );
        break;

      case "clear":
        setLogs([]);
        setInputVal("");
        return;

      default:
        response = (
          <div className="text-xs text-red-400">
            Command not recognized: "{cmd}". Type <span className="underline">help</span> for command list.
          </div>
        );
    }

    setLogs((prev) => [...prev, { id: String(Date.now()), command: inputVal, output: response }]);
    setInputVal("");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed bottom-4 right-4 z-50 w-full max-w-lg p-2 sm:p-0">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="os-card rounded-xl border border-cyan-500/40 bg-[#070b14]/95 shadow-2xl overflow-hidden font-mono-code text-xs text-slate-200"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2.5 bg-slate-900/80">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-cyan-400" />
              <span className="font-display font-semibold text-slate-200 text-xs">ROQAIAH_OS_CLI</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-1 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close Terminal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Log Window */}
          <div className="p-4 space-y-3 max-h-72 overflow-y-auto bg-[#05070d]/80">
            {logs.map((log) => (
              <div key={log.id} className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span>roqaiah@os:~$</span>
                  <span className="text-slate-100 font-semibold">{log.command}</span>
                </div>
                <div className="pl-4 border-l border-slate-800 py-1">{log.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick Command Chips */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/90 border-t border-slate-800 overflow-x-auto text-[10px]">
            <span className="text-slate-500 shrink-0">QUICK:</span>
            {["whoami", "projects", "stack", "experience", "certifications", "contact", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  setInputVal(cmd);
                  setTimeout(() => {
                    const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
                    handleCommandSubmit(fakeEvent);
                  }, 10);
                }}
                className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-colors cursor-pointer shrink-0"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Form Input Line */}
          <form onSubmit={handleCommandSubmit} className="flex items-center border-t border-slate-800 px-3 py-2 bg-slate-950">
            <span className="text-emerald-400 mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type command (help, whoami, projects)..."
              className="w-full bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none text-xs"
              aria-label="Interactive CLI Terminal Input"
            />
            <button type="submit" className="p-1 text-slate-400 hover:text-cyan-400 cursor-pointer" aria-label="Execute Command">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
