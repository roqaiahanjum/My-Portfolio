import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, Eye, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";
import { PROFILE_DATA } from "../../data/profile";

interface ContactSectionProps {
  onOpenResumeModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please complete all required fields before establishing connection.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 border-t border-slate-800/80">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-400">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono-code text-cyan-400 tracking-wider">11 MODULE // CONTACT</div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-100">ESTABLISH CONNECTION</h2>
            </div>
          </div>
          <p className="text-xs font-mono-code text-slate-400 max-w-sm">
            "Interested in building something useful?"
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Panel */}
          <div className="lg:col-span-7 os-card rounded-xl p-6 md:p-8 border border-cyan-500/20 space-y-6">
            {submitted ? (
              <div className="py-8 space-y-4 text-center font-sans">
                <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-100">Connection Message Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out! Your message payload has been recorded locally. (Backend mailer endpoint is ready to connect).
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="px-4 py-2 rounded bg-slate-900 border border-slate-800 text-xs font-mono-code text-cyan-400 hover:border-cyan-500/40 transition-colors cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono-code text-xs">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-cyan-400 font-semibold">DIRECT TRANSMISSION FORM</span>
                  <span className="text-slate-500 text-[10px]">ALL FIELDS REQUIRED</span>
                </div>

                {errorMsg && (
                  <div className="flex items-center gap-2 p-3 rounded bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-sans">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-slate-300 block">SENDER NAME</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name..."
                    className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-slate-300 block">EMAIL ADDRESS</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-slate-300 block">TRANSMISSION MESSAGE</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe project details or opportunities..."
                    className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 text-sm font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-cyan-500 text-slate-950 font-display font-semibold text-sm hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Channels & Resume Download Panel */}
          <div className="lg:col-span-5 os-card rounded-xl p-6 md:p-8 border border-cyan-500/20 space-y-6 flex flex-col justify-between">
            <div className="space-y-5 font-mono-code">
              <div className="text-xs text-cyan-400 font-semibold border-b border-slate-800 pb-3">
                DIRECT NETWORK CHANNELS
              </div>

              <div className="space-y-3 text-xs">
                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GITHUB</span>
                  </div>
                  <span className="text-[11px] text-slate-400">@roqaiahanjum</span>
                </a>

                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                    <span>LINKEDIN</span>
                  </div>
                  <span className="text-[11px] text-slate-400">roqaiah-anjum</span>
                </a>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>EMAIL</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-sans">{PROFILE_DATA.emailPlaceholder}</span>
                </div>
              </div>
            </div>

            {/* Resume Download Action */}
            <div className="pt-6 border-t border-slate-800 space-y-3 font-mono-code">
              <div className="text-[11px] text-slate-400">CURRICULUM VITAE (PDF)</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {onOpenResumeModal && (
                  <button
                    onClick={onOpenResumeModal}
                    className="py-3 rounded-lg border border-slate-700 bg-slate-900 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 font-display font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-cyan-400" />
                    <span>PREVIEW SPEC</span>
                  </button>
                )}
                <a
                  href="/resume.pdf"
                  download="Roqaiah_Anjum_Resume.pdf"
                  className="py-3 rounded-lg border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 hover:bg-cyan-500/20 font-display font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>DOWNLOAD PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
