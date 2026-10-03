import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award, Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";
import type { CertificationItem } from "../../data/certifications";

// ─── Generic Image Lightbox ────────────────────────────────────────────────────
interface ImageLightboxProps {
  imageUrl: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  imageUrl,
  title,
  isOpen,
  onClose,
}) => {
  // Close on ESC
  React.useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="w-full flex items-center justify-between px-1">
              <span className="text-xs font-mono-code text-slate-400 truncate max-w-[80%]">
                {title}
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-slate-100 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors cursor-pointer shrink-0"
                aria-label="Close image"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image */}
            <div className="w-full overflow-auto rounded-xl border border-slate-700/60 bg-white/5 shadow-2xl flex items-center justify-center">
              <img
                src={imageUrl}
                alt={title}
                className="max-w-full max-h-[80vh] object-contain rounded-xl"
              />
            </div>

            <p className="text-xs font-mono-code text-slate-500 text-center">
              Click outside or press ESC to close
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ─── Certification Detail Modal ────────────────────────────────────────────────
interface CertificationModalProps {
  certification: CertificationItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificationModal: React.FC<CertificationModalProps> = ({
  certification,
  isOpen,
  onClose,
}) => {
  const [imgError, setImgError] = React.useState(false);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  React.useEffect(() => {
    setImgError(false);
    setLightboxOpen(false);
  }, [certification]);

  // Close on ESC
  React.useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !lightboxOpen) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose, lightboxOpen]);

  if (!isOpen || !certification) return null;

  const hasVerifyUrl = Boolean(certification.credentialUrl && certification.credentialUrl.trim() !== "");
  const hasCredentialId = Boolean(certification.credentialId && certification.credentialId.trim() !== "");
  const hasDescription = Boolean(certification.description && certification.description.trim() !== "");
  const hasSkills = Boolean(certification.skills && certification.skills.length > 0);
  const hasImage = Boolean(certification.badgeImageUrl) && !imgError;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xl os-card rounded-2xl border border-cyan-500/40 bg-[#090d16] overflow-hidden shadow-2xl p-6 md:p-8 space-y-6 text-slate-200 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider">
                      CERTIFICATION SPECIFICATION
                    </div>
                    <h3 className="font-display font-bold text-base md:text-xl text-slate-100 leading-snug break-words">
                      {certification.name}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-slate-100 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors cursor-pointer shrink-0"
                  aria-label="Close Certification Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image Preview */}
              {hasImage ? (
                <div
                  className="w-full rounded-xl overflow-hidden border border-slate-700/60 bg-white relative cursor-zoom-in group"
                  style={{ maxHeight: "320px" }}
                  onClick={() => setLightboxOpen(true)}
                  title="Click to view full size"
                >
                  <img
                    src={certification.badgeImageUrl}
                    alt={`${certification.name} Certificate`}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-contain"
                    style={{ maxHeight: "320px" }}
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono-code px-3 py-1.5 rounded-full">
                      Click to view full size
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full h-36 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-[#0b1220] to-cyan-950/30 p-6 flex flex-col items-center justify-center text-center space-y-2 relative">
                  <ShieldCheck className="w-10 h-10 text-cyan-400/80" />
                  <div className="font-display font-bold text-sm text-slate-100 uppercase tracking-wide break-words max-w-[90%]">
                    {certification.issuer}
                  </div>
                  <div className="text-xs font-mono-code text-slate-400">
                    VERIFIED TECHNICAL CERTIFICATE
                  </div>
                </div>
              )}

              {/* Metadata Grid */}
              <div className="space-y-3 font-mono-code text-xs md:text-sm">
                <div className="flex justify-between py-2 border-b border-slate-800/60 gap-4">
                  <span className="text-slate-400 shrink-0">ISSUING ORGANIZATION</span>
                  <span className="text-cyan-400 font-semibold text-right break-words">{certification.issuer}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-slate-800/60 gap-4">
                  <span className="text-slate-400 font-mono-code flex items-center gap-1 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>ISSUE DATE / YEAR</span>
                  </span>
                  <span className="text-slate-200 text-right">{certification.date}</span>
                </div>

                {hasCredentialId && (
                  <div className="flex justify-between py-2 border-b border-slate-800/60 gap-4">
                    <span className="text-slate-400 shrink-0">CREDENTIAL ID</span>
                    <span className="text-slate-200 font-mono-code text-right break-all">{certification.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              {hasDescription && (
                <div className="space-y-2">
                  <div className="text-xs font-mono-code text-cyan-400">DESCRIPTION</div>
                  <p className="text-xs md:text-sm text-slate-300 font-sans leading-relaxed">
                    {certification.description}
                  </p>
                </div>
              )}

              {/* Skills */}
              {hasSkills && (
                <div className="space-y-2">
                  <div className="text-xs font-mono-code text-slate-400">COVERED COMPETENCIES</div>
                  <div className="flex flex-wrap gap-1.5">
                    {certification.skills!.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono-code text-slate-300 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer CTAs */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between font-mono-code text-xs gap-3 flex-wrap">
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-colors cursor-pointer"
                >
                  CLOSE
                </button>

                {hasVerifyUrl && (
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none transition-colors"
                  >
                    <span>VERIFY CREDENTIAL</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Full-size image lightbox */}
      {hasImage && (
        <ImageLightbox
          imageUrl={certification.badgeImageUrl!}
          title={certification.name}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};
