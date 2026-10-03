import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldCheck, ArrowRight, SkipForward } from "lucide-react";

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  const steps = [
    { text: "ROQAIAH OS v1.0.26", delay: 150 },
    { text: "Initializing kernel & profile tokens...", delay: 350 },
    { text: "Loading projects dataset............ ✓", delay: 650 },
    { text: "Loading AI core & agent nodes....... ✓", delay: 950 },
    { text: "Loading dependency graph............ ✓", delay: 1250 },
    { text: "Loading experience logs.............. ✓", delay: 1550 },
    { text: "SYSTEM READY", delay: 1850 },
  ];

  useEffect(() => {
    // Check if already booted in this session
    const hasBooted = sessionStorage.getItem("roqaiah_os_booted");
    if (hasBooted === "true") {
      onComplete();
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    steps.forEach((step, index) => {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, step.text]);
        setProgress(Math.round(((index + 1) / steps.length) * 100));
        if (index === steps.length - 1) {
          setIsReady(true);
        }
      }, step.delay);
      timers.push(timer);
    });

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("roqaiah_os_booted", "true");
    onComplete();
  };

  const handleSkip = () => {
    sessionStorage.setItem("roqaiah_os_booted", "true");
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070D] text-slate-200 font-mono-code p-4 selection:bg-cyan-500/30 overflow-hidden bg-cyber-grid"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />

      {/* Top right skip button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded border border-cyan-500/30 bg-slate-900/80 text-xs text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-colors z-20 cursor-pointer"
        aria-label="Skip Boot Sequence"
      >
        <SkipForward className="w-3.5 h-3.5" />
        <span>SKIP BOOT</span>
      </button>

      {/* OS Boot Card */}
      <div className="w-full max-w-xl os-card rounded-xl border border-cyan-500/20 p-6 md:p-8 relative z-10 shadow-2xl backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span className="font-display font-semibold text-sm tracking-wider text-slate-100">
              ROQAIAH_OS // BOOT_SEQUENCE
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
        </div>

        {/* Console Log Output */}
        <div className="space-y-2.5 min-h-[220px] text-xs md:text-sm text-slate-300">
          {logs.map((log, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2"
            >
              <span className="text-cyan-500">$</span>
              <span className={idx === logs.length - 1 && isReady ? "text-emerald-400 font-bold" : ""}>
                {log}
              </span>
            </motion.div>
          ))}
          {!isReady && (
            <div className="flex items-center gap-2 text-cyan-400 animate-pulse">
              <span>&gt;</span>
              <span className="w-2 h-4 bg-cyan-400 inline-block"></span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-[11px] text-slate-400">
            <span>SYSTEM INIT</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>

        {/* Enter OS Action Button */}
        <AnimatePresence>
          {isReady && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 pt-4 border-t border-slate-800 flex justify-center"
            >
              <button
                onClick={handleEnter}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-lg bg-cyan-500 text-slate-950 font-display font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:bg-cyan-400 transition-all duration-300 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-slate-950" />
                <span>ENTER ROQAIAH OS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
