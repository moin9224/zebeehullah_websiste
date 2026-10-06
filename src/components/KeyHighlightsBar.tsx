"use client";

import React, { useState } from "react";
import { 
  Scroll, 
  Building2, 
  GraduationCap, 
  Award, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";

interface HighlightDetail {
  role: string;
  roleUrdu: string;
  category: string;
  badge: string;
  description: string;
  keyResponsibilities: string[];
  scope: string;
}

export default function KeyHighlightsBar() {
  const [selectedHighlight, setSelectedHighlight] = useState<HighlightDetail | null>(null);

  const highlights: (HighlightDetail & { icon: any })[] = [
    {
      role: "CEO: Dar ul Ifta Daharki",
      roleUrdu: "سربراہ: دار الافتاء ڈہرکی، سندھ",
      category: "Juristic Authority & Ifta",
      badge: "Judicial & Shariah",
      icon: Scroll,
      description:
        "Presiding over the premier judicial and fatwa issuing authority in Daharki, Sindh. Investigating contemporary queries through classical Tahqiq al-Manat and issuing canonical, documented legal rulings.",
      keyResponsibilities: [
        "Issuing verified written Fatawa on commercial, family, and civil contracts",
        "Arbitrating financial and commercial disputes among corporate and local entities",
        "Supervising the research council and digital fatwa archives",
      ],
      scope: "Daharki, Sindh & Global Online Inquiries",
    },
    {
      role: "Director: Institute of Islamic Sciences",
      roleUrdu: "ڈائریکٹر: انسٹیٹیوٹ آف اسلامک سائنسز",
      category: "Institutional Leadership",
      badge: "Daharki, Sindh",
      icon: Building2,
      description:
        "Directing institutional academic operations, curriculum design, research seminars, and educational reform across higher Dars-e-Nizami and Islamic research disciplines in Daharki.",
      keyResponsibilities: [
        "Overseeing post-graduate specialization programs in Fiqh and Islamic Studies",
        "Implementing modern educational methodologies (5E Instructional Model)",
        "Managing academic conferences, faculty development, and community seminars",
      ],
      scope: "Higher Islamic Education & Research Campus",
    },
    {
      role: "PhD Candidate: Islamic Studies",
      roleUrdu: "ڈاکٹریٹ محقق: علومِ اسلامیہ",
      category: "University Research",
      badge: "Doctoral Thesis",
      icon: GraduationCap,
      description:
        "Pursuing doctoral dissertation focusing on contemporary legal hermeneutics, classical legal maxims (Qawa'id Fiqhiyyah), and modern statutory commercial frameworks.",
      keyResponsibilities: [
        "Advanced archival research in classical jurisprudence compendia",
        "Publishing peer-reviewed journal papers on Shariah and economics",
        "Presenting keynote papers at international and national conferences",
      ],
      scope: "Advanced Jurisprudential Research & Hermeneutics",
    },
    {
      role: "Takhassus: Fiqh, Ifta & Economics",
      roleUrdu: "تخصص: فقہ، افتاء اور اسلامی معاشیات",
      category: "Classical Specialization",
      badge: "Post-Graduate",
      icon: Award,
      description:
        "Comprehensive post-graduate scholarly mastery following the 8-year Shahadat-ul-Almiyah (Dars-e-Nizami), concentrating on the jurisprudence of complex financial instruments, banking, and fatwa formulation.",
      keyResponsibilities: [
        "Mastery of authoritative Hanafi and comparative jurisprudential sources",
        "Shariah vetting of modern banking instruments (Murabaha, Ijarah, Sukuk)",
        "Training emerging Muftis in the methodology of legal reasoning (Usul al-Ifta)",
      ],
      scope: "Classical Islamic Jurisprudence & Islamic Banking",
    },
  ];

  return (
    <section className="relative z-20 py-10 bg-white border-b border-ash">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Four Cards Grid — Elevated off-white cards on pure white canvas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                onClick={() => setSelectedHighlight(item)}
                className="bg-[#fbfaf8] border border-ash/80 rounded-cards p-5 cursor-pointer hover:border-ink hover:bg-white hover:shadow-maze-subtle transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="badge-tag">
                      {item.badge}
                    </span>
                    <Icon className="w-4 h-4 text-fossil group-hover:text-ink transition-colors" />
                  </div>

                  <div>
                    <h3 className="font-serif text-[17px] font-normal text-ink leading-[1.3] tracking-[-0.34px]">
                      {item.role}
                    </h3>
                    <p className="font-urdu text-[13px] text-fossil mt-1 leading-normal">
                      {item.roleUrdu}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-sand flex items-center justify-between text-[12px] font-serif text-fossil">
                  <span>{item.category}</span>
                  <span className="text-ink text-xs font-mono group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Credential Dossier Modal — Paper card, 16px radius, flat with hairline border */}
      {selectedHighlight && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-paper max-w-lg w-full rounded-largecards border border-ash overflow-hidden shadow-maze-subtle">
            <div className="p-6 border-b border-sand flex items-center justify-between bg-bone">
              <div className="space-y-1">
                <span className="badge-tag">
                  {selectedHighlight.category}
                </span>
                <h4 className="font-serif text-[22px] font-light text-ink mt-1 tracking-[-0.66px]">
                  {selectedHighlight.role}
                </h4>
                <p className="font-urdu text-[14px] text-fossil">
                  {selectedHighlight.roleUrdu}
                </p>
              </div>
              <button
                onClick={() => setSelectedHighlight(null)}
                className="w-8 h-8 rounded-inputs border border-ash bg-paper flex items-center justify-center text-fossil hover:text-ink transition-colors text-base"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <div className="text-[12px] font-mono uppercase tracking-wider text-fossil mb-1">Mandate & Scope</div>
                <p className="font-serif text-[15px] text-ink leading-relaxed">
                  {selectedHighlight.description}
                </p>
              </div>

              <div>
                <div className="text-[12px] font-mono uppercase tracking-wider text-fossil mb-2">Key Juristic Responsibilities</div>
                <div className="space-y-2">
                  {selectedHighlight.keyResponsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[14px] font-serif text-smoke">
                      <span className="text-olive text-sm leading-none mt-1">✓</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-inputs bg-sand/60 text-[13px] font-serif text-ink border border-ash flex items-center justify-between">
                <span className="text-fossil">Jurisdiction:</span>
                <span className="font-medium text-ink">{selectedHighlight.scope}</span>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedHighlight(null)}
                  className="btn-ink text-[14px] py-2.5 px-5"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
