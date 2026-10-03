import React, { useState } from "react";
import { Award, ExternalLink, Calendar, ShieldCheck, Eye, CheckCircle2, Trophy, Briefcase, ZoomIn } from "lucide-react";
import { CERTIFICATIONS_DATA } from "../../data/certifications";
import type { CertificationItem } from "../../data/certifications";
import { INTERNSHIP_SELECTIONS, HACKATHONS_DATA } from "../../data/achievements";
import { CertificationModal, ImageLightbox } from "./CertificationModal";

// ─── Card Image Preview (clickable) ───────────────────────────────────────────
interface CardImagePreviewProps {
  imageUrl?: string;
  issuer: string;
  title: string;
  accentClass?: string; // e.g. "border-cyan-500/30" for tint
  onZoom?: () => void;
}

const CardImagePreview: React.FC<CardImagePreviewProps & { fitMode?: "contain" | "cover" }> = ({
  imageUrl,
  issuer,
  title,
  accentClass = "border-cyan-500/30",
  onZoom,
  fitMode = "contain",
}) => {
  const [hasError, setHasError] = useState(false);

  if (!imageUrl || hasError) {
    return (
      <div
        className={`w-full h-36 rounded-xl border ${accentClass} bg-gradient-to-br from-slate-900 via-[#0b1220] to-cyan-950/30 p-4 flex flex-col items-center justify-center text-center space-y-1 relative overflow-hidden transition-colors`}
      >
        <ShieldCheck className="w-7 h-7 text-cyan-400/80" />
        <div className="font-display font-semibold text-xs text-slate-200 line-clamp-1 max-w-[95%]">
          {issuer}
        </div>
        <div className="text-[10px] font-mono-code text-slate-400 tracking-wider uppercase">
          CREDENTIAL PREVIEW
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full rounded-xl overflow-hidden border ${accentClass} bg-white relative flex items-center justify-center group ${onZoom ? "cursor-zoom-in" : ""} transition-colors`}
      style={{ height: fitMode === "cover" ? "300px" : "220px" }}
      onClick={onZoom}
      title={onZoom ? "Click to view full size" : undefined}
    >
      <img
        src={imageUrl}
        alt={`${title} Preview`}
        loading="lazy"
        decoding="async"
        onError={() => setHasError(true)}
        className={`w-full h-full ${fitMode === "cover" ? "object-cover object-center" : "object-contain"}`}
      />
      {onZoom && (
        <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-all flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
        </div>
      )}
    </div>
  );
};

// ─── Main Section ──────────────────────────────────────────────────────────────
export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  // Generic lightbox state for internship + hackathon images
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="certifications" className="py-16 border-t border-slate-800/80 space-y-12">
      {/* Section Main Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono-code text-cyan-400 tracking-wider">08 MODULE // CERTIFICATIONS</div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-100 uppercase tracking-tight">
              CERTIFICATIONS &amp; ACHIEVEMENTS
            </h2>
          </div>
        </div>
        <p className="text-xs font-mono-code text-slate-400 max-w-sm">
          Verified credentials, internship selections &amp; national hackathon participations.
        </p>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* SUBSECTION 1: CERTIFICATIONS                                        */}
      {/* ------------------------------------------------------------------- */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400 tracking-wider uppercase border-b border-slate-800/60 pb-2">
          <Award className="w-4 h-4 text-cyan-400" />
          <span>VERIFIED TECHNICAL CERTIFICATIONS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="os-card os-card-interactive rounded-2xl p-4 sm:p-6 border border-cyan-500/20 bg-slate-950/70 space-y-4 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header Info */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 font-mono-code text-xs gap-2">
                  <span className="text-cyan-400 font-semibold flex items-center gap-1.5 min-w-0 break-words">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{cert.date}</span>
                  </span>
                </div>

                {/* Image Preview (clickable → lightbox) */}
                <CardImagePreview
                  imageUrl={cert.badgeImageUrl}
                  issuer={cert.issuer}
                  title={cert.name}
                  accentClass="border-cyan-500/20 group-hover:border-cyan-500/40"
                  fitMode="contain"
                  onZoom={
                    cert.badgeImageUrl
                      ? () => setLightboxImage({ url: cert.badgeImageUrl!, title: cert.name })
                      : undefined
                  }
                />

                {/* Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-base md:text-lg text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug break-words">
                    {cert.name}
                  </h3>

                  {cert.credentialId && cert.credentialId.trim() !== "" && (
                    <div className="text-xs font-mono-code text-slate-400">
                      ID: <span className="text-slate-200">{cert.credentialId}</span>
                    </div>
                  )}

                  {cert.description && cert.description.trim() !== "" && (
                    <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-2 pt-1">
                      {cert.description}
                    </p>
                  )}
                </div>

                {/* Skills */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono-code text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono-code text-xs gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Quick View</span>
                </button>

                {cert.credentialUrl && cert.credentialUrl.trim() !== "" && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/60 hover:border-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* SUBSECTION 2: INTERNSHIP SELECTIONS                                 */}
      {/* ------------------------------------------------------------------- */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-2 text-xs font-mono-code text-emerald-400 tracking-wider uppercase border-b border-slate-800/60 pb-2">
          <Briefcase className="w-4 h-4 text-emerald-400" />
          <span>INTERNSHIP SELECTIONS &amp; OFFERS</span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {INTERNSHIP_SELECTIONS.map((selection) => (
            <div
              key={selection.id}
              className="os-card rounded-2xl p-4 sm:p-6 border border-emerald-500/30 bg-slate-950/80 space-y-4 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 font-mono-code text-xs gap-2">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5 min-w-0 break-words">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="truncate">{selection.company}</span>
                  </span>
                  {selection.date && (
                    <span className="text-slate-400 flex items-center gap-1 shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{selection.date}</span>
                    </span>
                  )}
                </div>

                {/* Offer letter pages — side by side if page 2 exists */}
                {selection.offerLetterUrl2 ? (
                  <div className="grid grid-cols-2 gap-2">
                    <CardImagePreview
                      imageUrl={selection.offerLetterUrl}
                      issuer={selection.company}
                      title={`${selection.title} — Page 1`}
                      accentClass="border-emerald-500/20 group-hover:border-emerald-500/40"
                      fitMode="contain"
                      onZoom={
                        selection.offerLetterUrl
                          ? () => setLightboxImage({ url: selection.offerLetterUrl!, title: `${selection.title} — Page 1` })
                          : undefined
                      }
                    />
                    <CardImagePreview
                      imageUrl={selection.offerLetterUrl2}
                      issuer={selection.company}
                      title={`${selection.title} — Page 2`}
                      accentClass="border-emerald-500/20 group-hover:border-emerald-500/40"
                      fitMode="contain"
                      onZoom={() => setLightboxImage({ url: selection.offerLetterUrl2!, title: `${selection.title} — Page 2` })}
                    />
                  </div>
                ) : (
                  <CardImagePreview
                    imageUrl={selection.offerLetterUrl}
                    issuer={selection.company}
                    title={selection.title}
                    accentClass="border-emerald-500/20 group-hover:border-emerald-500/40"
                    fitMode="contain"
                    onZoom={
                      selection.offerLetterUrl
                        ? () => setLightboxImage({ url: selection.offerLetterUrl!, title: selection.title })
                        : undefined
                    }
                  />
                )}

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[11px] font-mono-code font-semibold">
                      {selection.status}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base md:text-lg text-slate-100 leading-snug break-words">
                    {selection.title}
                  </h3>

                  {selection.summary && (
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {selection.summary}
                    </p>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-start font-mono-code text-xs gap-2 flex-wrap">
                {selection.offerLetterUrl && (
                  <button
                    onClick={() => setLightboxImage({ url: selection.offerLetterUrl!, title: `${selection.title} — Page 1` })}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Page 1</span>
                  </button>
                )}
                {selection.offerLetterUrl2 && (
                  <button
                    onClick={() => setLightboxImage({ url: selection.offerLetterUrl2!, title: `${selection.title} — Page 2` })}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Page 2</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* SUBSECTION 3: HACKATHONS & PARTICIPATION                            */}
      {/* ------------------------------------------------------------------- */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-2 text-xs font-mono-code text-indigo-400 tracking-wider uppercase border-b border-slate-800/60 pb-2">
          <Trophy className="w-4 h-4 text-indigo-400" />
          <span>HACKATHONS &amp; PARTICIPATION</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HACKATHONS_DATA.map((hackathon) => (
            <div
              key={hackathon.id}
              className="os-card rounded-2xl p-4 sm:p-6 border border-indigo-500/30 bg-slate-950/70 space-y-4 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 font-mono-code text-xs gap-2">
                  <span className="text-indigo-400 font-semibold flex items-center gap-1.5 min-w-0 break-words">
                    <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="truncate">{hackathon.organizer}</span>
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{hackathon.date}</span>
                  </span>
                </div>

                {/* Certificate preview (clickable) */}
                <CardImagePreview
                  imageUrl={hackathon.badgeImageUrl}
                  issuer={hackathon.organizer}
                  title={hackathon.name}
                  accentClass="border-indigo-500/20 group-hover:border-indigo-500/40"
                  fitMode="cover"
                  onZoom={
                    hackathon.badgeImageUrl
                      ? () => setLightboxImage({ url: hackathon.badgeImageUrl!, title: hackathon.name })
                      : undefined
                  }
                />

                <div className="space-y-2">
                  <span className="px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30 text-[11px] font-mono-code">
                    {hackathon.status}
                  </span>

                  <h3 className="font-display font-bold text-base md:text-lg text-slate-100 leading-snug break-words">
                    {hackathon.name}
                  </h3>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-end font-mono-code text-xs gap-2 flex-wrap">
                {hackathon.badgeImageUrl && (
                  <button
                    onClick={() => setLightboxImage({ url: hackathon.badgeImageUrl!, title: hackathon.name })}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:border-indigo-500/40 hover:text-indigo-300 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-indigo-400" />
                    <span>View Certificate</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Modals / Lightboxes ─────────────────────────────────────────── */}

      {/* Certification detail modal (for cert cards) */}
      <CertificationModal
        certification={selectedCert}
        isOpen={selectedCert !== null}
        onClose={() => setSelectedCert(null)}
      />

      {/* Generic image lightbox (for all image zoom actions) */}
      <ImageLightbox
        imageUrl={lightboxImage?.url ?? ""}
        title={lightboxImage?.title ?? ""}
        isOpen={lightboxImage !== null}
        onClose={() => setLightboxImage(null)}
      />
    </section>
  );
};
