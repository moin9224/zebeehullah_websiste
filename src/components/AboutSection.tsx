"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Scroll, 
  GraduationCap, 
  CheckCircle2, 
  Layers,
  Award,
  ArrowRight,
  ShieldCheck,
  Scale
} from "lucide-react";
import { SCHOLAR_PROFILE } from "@/data/scholarData";

interface PillarData {
  id: "tradition" | "reality" | "confidence";
  label: string;
  urdu: string;
  tag: string;
  heading: string;
  description: string;
  detailedText: string;
  accentBg: string;
  cardBadge: string;
  cardTitle: string;
  cardMaxim: string;
  actionText: string;
}

export default function AboutSection() {
  const [activePillar, setActivePillar] = useState<"tradition" | "reality" | "confidence">("reality");

  const pillars: PillarData[] = [
    {
      id: "tradition",
      label: "Tradition",
      urdu: "اصالت",
      tag: "PILLAR I / ASALAT",
      heading: "Rooted in authentic classical jurisprudence and canonical heritage",
      description:
        "Deep, uninterrupted engagement with the Holy Qur'an, prophetic Sunnah, classical legal canons, and authoritative Islamic intellectual heritage spanning 1,400 years. Preserving methodological fidelity to the Usul al-Fiqh frameworks formulated by the classical Aimmah.",
      detailedText:
        "Ensuring every juristic derivation remains methodologically tethered to the canonical works of Abu Hanifah, al-Bazdawi, al-Sarakhsi, and Ibn Abidin, resisting rootless modernism.",
      accentBg: "bg-[#EFECE4] border border-[#D8D2C4]",
      cardBadge: "✦ CLASSICAL SANAD & IJAZAH",
      cardTitle: "Canonical Usul al-Fiqh Derivation & Manuscript Hermeneutics",
      cardMaxim: "«الأَصْلُ فِي الأَشْيَاءِ الإِبَاحَةُ حَتَّى يَدُلَّ الدَّلِيلُ عَلَى التَّحْرِيمِ»",
      actionText: "Examine Classical Sanad",
    },
    {
      id: "reality",
      label: "Reality",
      urdu: "عصریت",
      tag: "PILLAR II / ASRIYYAT",
      heading: "Engaged with the factual realities of modern law, economy & society",
      description:
        "Methodological analysis of contemporary legal shifts, statutory corporate structures, algorithmic financial systems, and modern pedagogical reforms. Bridging theoretical doctrine with verified empirical reality.",
      detailedText:
        "Employing the classical juristic science of Tahqiq al-Manat (investigation of factual premises) so that Shariah rulings accurately address real-world business contracts, digital assets, and institutional dilemmas.",
      accentBg: "bg-[#F7F3E8] border border-[#DFCCA0]", // Warm Antique Gold Tint
      cardBadge: "✦ TAHQIQ AL-MANAT",
      cardTitle: "Contemporary Financial Screening & Corporate Shariah Compliance",
      cardMaxim: "«الْفَتْوَى تَتَغَيَّرُ بِتَغَيُّرِ الزَّمَانِ وَالْمَكَانِ وَالأَحْوَالِ»",
      actionText: "Inspect Commercial Fiqh Framework",
    },
    {
      id: "confidence",
      label: "Confidence",
      urdu: "دعوت و تفہیم",
      tag: "PILLAR III / TAFHEEM",
      heading: "Articulating Islamic juristic answers with academic clarity & intellectual rigor",
      description:
        "Presenting Islamic answers and juristic guidance (Ifta) to contemporary queries with academic rigor, pedagogical clarity, intellectual confidence, and contextual relevance. Transcending defensive apologetics to offer constructive institutional solutions.",
      detailedText:
        "Integrating classical seminary acumen with peer-reviewed university research (PhD, MPhil) to build a robust, respectable discourse across universities and international conferences.",
      accentBg: "bg-[#EBF4F0] border border-[#D2E2DA]", // Soft Emerald / Sage Mist
      cardBadge: "✦ ACADEMIC TAFHEEM",
      cardTitle: "Instructional Reform, Peer-Reviewed Papers & Public Lectures",
      cardMaxim: "«خَاطِبُوا النَّاسَ عَلَى قَدْرِ عُقُولِهِمْ»",
      actionText: "View Published Papers",
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activePillar) || pillars[1];

  return (
    <section id="about" className="py-20 bg-[#f4f1ea] border-b border-ash relative">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="badge-tag">
              01 / ABOUT & INTELLECTUAL VISION
            </span>
          </div>

          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-light text-ink tracking-[-1.5px] sm:tracking-[-2.3px] leading-[1.1]">
            Mufti Zabeehullah Leghari: Jurist, Scholar & Educationist
          </h2>

          <div className="font-urdu text-[17px] text-fossil leading-relaxed">
            سوانحی تعارف اور فکری منشور: اصالت، عصریت اور معاصر اجتہادی تفہیم کا نظام
          </div>

          <p className="font-serif text-[17px] font-normal text-fossil leading-[1.45] tracking-[-0.34px]">
            {SCHOLAR_PROFILE.bio}
          </p>
        </div>

        {/* THE THREE PILLARS — SWITCH BAR OPTION (Exact Layout & Aesthetics from Image 2) */}
        <div className="mb-20">
          <div className="text-[12px] font-mono uppercase tracking-wider text-fossil mb-6 text-center">
            The Three Pillars of Intellectual Vision • فکری اساس کے تین ستون
          </div>

          {/* Switch Bar Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 mb-14 select-none">
            {pillars.map((pillar) => {
              const isActive = activePillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className="relative py-2 px-6 focus:outline-none transition-colors group"
                >
                  {isActive && (
                    <motion.div
                      layoutId="pillarSwitchPill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 bg-sand rounded-largecards border border-ash/80 shadow-maze-subtle"
                    />
                  )}
                  <div className="relative z-10 text-center">
                    <span
                      className={`font-serif text-[34px] sm:text-[52px] lg:text-[64px] font-light leading-none tracking-[-1.5px] sm:tracking-[-3.5px] transition-colors ${
                        isActive ? "text-ink" : "text-fossil/50 hover:text-fossil"
                      }`}
                    >
                      {pillar.label}
                    </span>
                    <span className="block font-urdu text-[14px] text-fossil mt-1">
                      {pillar.urdu}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Switch Tab Content Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Left Column (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2">
                  <span className="badge-tag">
                    {currentPillar.tag}
                  </span>
                  <span className="font-urdu text-[13px] text-fossil">{currentPillar.urdu}</span>
                </div>

                <h3 className="font-serif text-[28px] sm:text-[36px] font-light text-ink tracking-[-1px] sm:tracking-[-1.5px] leading-[1.12]">
                  {currentPillar.heading}
                </h3>

                <p className="font-serif text-[16px] text-fossil leading-[1.45] tracking-[-0.34px]">
                  {currentPillar.description}
                </p>

                <p className="font-serif text-[14px] text-smoke leading-relaxed border-l-2 border-olive pl-3.5">
                  {currentPillar.detailedText}
                </p>

                <div className="pt-2">
                  <a
                    href="#dar-ul-ifta"
                    className="font-serif text-[15px] text-ink hover:underline decoration-olive underline-offset-8 inline-flex items-center gap-2 font-normal"
                  >
                    <span>{currentPillar.actionText}</span>
                    <span className="text-sm">→</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Graphic & Elevated Paper Card (7 cols) */}
              <div className="lg:col-span-7">
                <div className={`relative ${currentPillar.accentBg} rounded-largecards p-6 sm:p-10 border border-ash/80 overflow-hidden shadow-maze-subtle`}>
                  <div className="absolute inset-0 bg-bone-dots opacity-40 pointer-events-none" />

                  {/* Elevated Paper Card */}
                  <div className="relative z-10 bg-paper rounded-cards p-6 border border-ash shadow-maze-subtle space-y-4 max-w-lg mx-auto">
                    <div className="flex items-center justify-between">
                      <span className="badge-tag">
                        {currentPillar.cardBadge}
                      </span>
                      <span className="font-mono text-[11px] text-fossil">
                        Supervised by Mufti Zabeehullah
                      </span>
                    </div>

                    <h4 className="font-serif text-[18px] font-light text-ink leading-snug">
                      {currentPillar.cardTitle}
                    </h4>

                    {/* Legal Maxim / Evidentiary Arabic Banner */}
                    <div className="p-3.5 rounded-inputs bg-sand/40 border border-ash text-center space-y-1">
                      <div className="font-arabic text-[17px] text-ink font-bold leading-relaxed">
                        {currentPillar.cardMaxim}
                      </div>
                      <div className="text-[11px] font-mono text-fossil uppercase tracking-wider">
                        Classical Legal Canon • القاعدة الفقهية
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-sand text-[13px] font-serif">
                      <span className="text-fossil">Status: Canonical Authority</span>
                      <span className="font-mono text-olive font-medium">Dar ul Ifta Daharki</span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dual Qualification Matrix (Seminary & University) */}
        <div>
          <div className="text-[12px] font-mono uppercase tracking-wider text-fossil mb-4">
            Dual Qualification Matrix • Seminary & University
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Classical Seminary Track */}
            <div className="card-paper-lg p-7 space-y-5">
              <div className="flex items-center justify-between border-b border-sand pb-3">
                <div>
                  <span className="badge-tag">Traditional Seminary Track</span>
                  <h3 className="font-serif text-[22px] font-light text-ink mt-1 tracking-[-0.66px]">
                    Dars-e-Nizami & Specialization
                  </h3>
                </div>
                <Scroll className="w-5 h-5 text-fossil" />
              </div>

              <p className="font-serif text-[14px] text-fossil leading-relaxed">
                Trained in the canonical Islamic legal curriculum spanning 8 years of Shahadat-ul-Almiyah followed by post-graduate Takhassus in Fiqh, Ifta, and Islamic Economics.
              </p>

              <div className="space-y-2.5">
                <div className="p-3.5 rounded-inputs bg-bone border border-ash flex items-center justify-between">
                  <div>
                    <div className="font-serif text-[15px] text-ink font-normal">Takhassus fil-Fiqh wal-Ifta</div>
                    <div className="text-[12px] text-fossil">Post-Graduate Juristic Mastery & Economic Fiqh</div>
                  </div>
                  <span className="badge-tag">Ifta Certified</span>
                </div>

                <div className="p-3.5 rounded-inputs bg-bone border border-ash flex items-center justify-between">
                  <div>
                    <div className="font-serif text-[15px] text-ink font-normal">Shahadat-ul-Almiyah (Dars-e-Nizami)</div>
                    <div className="text-[12px] text-fossil">8-Year Canonical Seminary Degree (HEC M.A. Equivalence)</div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sand text-ink">Mumtaz (Distinction)</span>
                </div>
              </div>
            </div>

            {/* Modern University Track */}
            <div className="card-paper-lg p-7 space-y-5">
              <div className="flex items-center justify-between border-b border-sand pb-3">
                <div>
                  <span className="badge-tag">University Higher Education Track</span>
                  <h3 className="font-serif text-[22px] font-light text-ink mt-1 tracking-[-0.66px]">
                    Academic Research & Degrees
                  </h3>
                </div>
                <GraduationCap className="w-5 h-5 text-fossil" />
              </div>

              <p className="font-serif text-[14px] text-fossil leading-relaxed">
                Integrating higher postgraduate university research in Islamic Studies, comparative legal hermeneutics, and modern education sciences.
              </p>

              <div className="space-y-2.5">
                <div className="p-3.5 rounded-inputs bg-bone border border-ash flex items-center justify-between">
                  <div>
                    <div className="font-serif text-[15px] text-ink font-normal">PhD Candidate: Islamic Studies</div>
                    <div className="text-[12px] text-fossil">Doctoral Thesis on Contemporary Juristic Hermeneutics</div>
                  </div>
                  <span className="badge-tag">In Progress</span>
                </div>

                <div className="p-3.5 rounded-inputs bg-bone border border-ash flex items-center justify-between">
                  <div>
                    <div className="font-serif text-[15px] text-ink font-normal">M.Phil, M.A., B.A., B.Ed.</div>
                    <div className="text-[12px] text-fossil">Islamic Studies, Modern Pedagogy & Instruction</div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sand text-ink">University Accredited</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
