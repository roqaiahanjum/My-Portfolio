import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Download, CheckCircle2 } from "lucide-react";
import { PROFILE_DATA } from "../../data/profile";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-4xl os-card rounded-2xl border border-cyan-500/40 bg-[#090d16] overflow-hidden shadow-2xl my-8 text-slate-200 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 p-4 sm:p-5 bg-slate-900/90 shrink-0 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono-code text-cyan-400 tracking-wider">OFFICIAL RESUME // PDF SPECIFICATION</div>
                <h3 className="font-display font-bold text-lg md:text-xl text-slate-100">{PROFILE_DATA.name}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                download="Roqaiah_Anjum_Resume.pdf"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-mono-code font-bold hover:bg-cyan-400 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-slate-950" />
                <span>DOWNLOAD PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
                aria-label="Close Resume Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Viewer Body */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-slate-950/60 font-mono-code text-xs">
            {/* Action Bar Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
              <div className="flex items-center gap-4 text-xs">
                <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>VERIFIED PDF DOCUMENT</span>
                </span>
                <span className="text-slate-400 hidden md:inline">PDF Format • 1 Page</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                >
                  Open PDF in New Tab
                </a>
              </div>
            </div>

            {/* Document Frame Rendering actual resume-preview.png */}
            <div className="w-full rounded-xl border border-slate-800 bg-white p-2 sm:p-4 shadow-2xl relative overflow-hidden">
              <img
                src="/resume-preview.png"
                alt="Roqaiah Anjum E. Official Resume PDF Preview"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain rounded"
              />
            </div>
          </div>

          {/* Footer Direct Download Action */}
          <div className="border-t border-slate-800 p-4 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono-code text-xs shrink-0">
            <span className="text-slate-400">PDF FORMAT // PUBLIC FILE: public/resume.pdf</span>
            <a
              href="/resume.pdf"
              download="Roqaiah_Anjum_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-display font-semibold text-xs hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>DOWNLOAD RESUME PDF</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
