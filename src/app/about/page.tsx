"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Scroll, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Building2, 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  FileText,
  Clock,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightSearchModal from "@/components/SpotlightSearchModal";
import { SCHOLAR_PROFILE } from "@/data/scholarData";

export default function AboutPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"classical" | "university">("classical");

  return (
    <main className="min-h-screen bg-bone text-ink flex flex-col font-serif selection:bg-chartreuse selection:text-ink">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Hero Header — Warm Bone Canvas */}
      <section className="py-16 sm:py-24 border-b border-ash relative overflow-hidden bg-bone">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="badge-tag">
                SCHOLAR PROFILE • سوانحی تعارف
              </span>
            </div>

            <h1 className="font-serif text-[38px] sm:text-[54px] lg:text-[64px] font-light text-ink leading-[1.05] tracking-[-2px] sm:tracking-[-3.5px]">
              Mufti Zabeehullah Leghari
            </h1>

            <div className="font-urdu text-[20px] sm:text-[24px] text-olive leading-relaxed">
              مفتی ذبیح اللہ لغاری — فقیہ، محقق، ناظم دار الافتاء اور ماہرِ تعلیم
            </div>

            <p className="font-serif text-[18px] text-fossil leading-relaxed tracking-[-0.34px]">
              Bridging classical Dars-e-Nizami and specialized Ifta scholarship with contemporary doctoral research, pedagogical innovation, and ethical commercial jurisprudence.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Institutional Mandate — Pure White Canvas */}
      <section className="py-16 bg-white border-b border-ash">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[12px] font-mono uppercase tracking-wider text-fossil mb-6">
            Institutional Leadership &amp; Administrative Roles
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SCHOLAR_PROFILE.roles.map((role, idx) => (
              <div 
                key={idx}
                className="bg-[#fbfaf8] border border-ash/80 rounded-cards p-6 hover:border-ink hover:bg-white hover:shadow-maze-subtle transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-inputs bg-sand flex items-center justify-center text-ink">
                    {idx === 0 && <Scroll className="w-4 h-4" />}
                    {idx === 1 && <Building2 className="w-4 h-4" />}
                    {idx === 2 && <GraduationCap className="w-4 h-4" />}
                    {idx === 3 && <Award className="w-4 h-4" />}
                  </div>

                  <div>
                    <h3 className="font-serif text-[18px] font-light text-ink leading-snug">
                      {role.title}
                    </h3>
                    <div className="text-[13px] font-serif text-olive font-medium mt-0.5">
                      {role.organization}
                    </div>
                  </div>

                  <p className="font-serif text-[13px] text-smoke leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Biographical Essay — Warm Parchment Sand */}
      <section className="py-20 bg-[#f4f1ea] border-b border-ash">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="badge-tag">
                  INTELLECTUAL EVOLUTION
                </span>
              </div>

              <h2 className="font-serif text-[32px] sm:text-[42px] font-light text-ink tracking-[-1.5px] leading-[1.1]">
                A Synthesizing Methodology: Dars-e-Nizami Meets Contemporary Inquiry
              </h2>

              <div className="space-y-4 font-serif text-[16px] text-smoke leading-relaxed">
                <p>
                  Mufti Zabeehullah Leghari represents a dynamic generation of Pakistani Islamic jurists who refuse the false dichotomy between classical seminary traditionalism and modern university scholarship. 
                </p>
                <p>
                  Beginning his rigorous theological foundation through the classical <em>Dars-e-Nizami</em> curriculum (concluding with <strong>Shahadat-ul-Almiyah</strong>, recognized by the Higher Education Commission of Pakistan as equivalent to an MA in Islamic Studies), he undertook specialized advanced postgraduate training (<em>Takhassus</em>) in Fiqh, Fatwa formulation, and Islamic Commercial Law.
                </p>
                <p>
                  Concurrently, he pursued modern academic degrees, completing a Master of Philosophy (MPhil) focusing on contemporary juristic hermeneutics, and is actively completing his PhD dissertation. His pedagogical contributions are underpinned by formal training in instructional design (Bachelor of Education — B.Ed), enabling him to implement the modern 5E Instructional Model across Islamic educational institutions in Sindh.
                </p>
              </div>

              {/* Classical Quote Callout */}
              <div className="p-6 rounded-cards bg-white border border-ash shadow-maze-subtle space-y-3">
                <div className="font-arabic text-[20px] text-ink font-bold leading-relaxed text-center sm:text-left">
                  «لَا يَكُونُ الْفَقِيهُ فَقِيهًا حَتَّى يَكُونَ عَالِمًا بِأَهْلِ زَمَانِهِ»
                </div>
                <div className="font-serif text-[13px] text-fossil italic border-t border-sand pt-2">
                  &ldquo;A jurist cannot be truly qualified until he is profoundly knowledgeable of the circumstances and people of his era.&rdquo; — Classical Legal Canon
                </div>
              </div>
            </div>

            {/* Right Evidentiary Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-largecards border border-ash p-7 shadow-maze-subtle space-y-6">
                <div className="flex items-center justify-between border-b border-sand pb-4">
                  <div className="font-serif text-[17px] font-light text-ink">
                    Academic Qualifications Dossier
                  </div>
                  <span className="badge-tag">HEC ACCREDITED</span>
                </div>

                {/* Tab Switcher */}
                <div className="flex rounded-inputs bg-sand p-1 text-[13px] font-serif">
                  <button
                    onClick={() => setActiveTab("classical")}
                    className={`flex-1 py-1.5 rounded-inputs transition-colors ${
                      activeTab === "classical" ? "bg-white text-ink shadow-sm font-medium" : "text-fossil hover:text-ink"
                    }`}
                  >
                    Seminary &amp; Fiqh
                  </button>
                  <button
                    onClick={() => setActiveTab("university")}
                    className={`flex-1 py-1.5 rounded-inputs transition-colors ${
                      activeTab === "university" ? "bg-white text-ink shadow-sm font-medium" : "text-fossil hover:text-ink"
                    }`}
                  >
                    University Degrees
                  </button>
                </div>

                {/* Qualification List */}
                <div className="space-y-3">
                  {SCHOLAR_PROFILE.credentials
                    .filter((c) => (activeTab === "classical" ? c.level === "classical" : c.level === "modern"))
                    .map((cred, idx) => (
                      <div 
                        key={idx}
                        className="p-3.5 rounded-inputs bg-[#fbfaf8] border border-ash/70 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-olive flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-serif text-[15px] font-medium text-ink leading-snug">
                            {cred.degree}
                          </div>
                          <div className="font-serif text-[13px] text-fossil mt-0.5">
                            {cred.field}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="pt-2 border-t border-sand text-[12px] font-mono text-fossil flex items-center justify-between">
                  <span>Authenticity Verified</span>
                  <span className="text-olive">Dar ul Ifta Daharki</span>
                </div>
              </div>

              {/* Research Focus Box */}
              <div className="bg-[#dbf570] rounded-cards p-6 border border-ash text-ink space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider font-semibold">
                  Core Research Specialization
                </div>
                <div className="font-serif text-[18px] font-light leading-snug">
                  Contemporary Commercial Jurisprudence (Fiqh al-Mu&apos;amalat) &amp; Educational Reform
                </div>
                <p className="text-[13px] text-ink/80 pt-1 leading-relaxed">
                  Focusing on Islamic banking products, fintech contracts, digital commerce compliance, and instructional curriculum optimization.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Three Pillars of Intellectual Vision — Pure White */}
      <section className="py-20 bg-white border-b border-ash">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="badge-tag">THE SCHOLARLY MANIFESTO</span>
            <h2 className="font-serif text-[32px] sm:text-[42px] font-light text-ink tracking-[-1.5px] leading-tight">
              The Three Pillars of Intellectual Vision
            </h2>
            <div className="font-urdu text-[16px] text-fossil">
              فکری اساس کے تین ستون: اصالت، عصریت اور اجتہادی تفہیم
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SCHOLAR_PROFILE.threePillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-[#fbfaf8] border border-ash/80 rounded-largecards p-7 flex flex-col justify-between hover:border-ink hover:bg-white hover:shadow-maze-subtle transition-all space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[12px] text-fossil">
                      PILLAR 0{idx + 1}
                    </span>
                    <span className="badge-tag">
                      {pillar.titleArabic}
                    </span>
                  </div>

                  <h3 className="font-serif text-[22px] font-light text-ink leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="font-serif text-[14px] text-smoke leading-relaxed">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-sand text-[13px] font-serif text-fossil">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-olive font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-sand">
                  <Link 
                    href="/contact"
                    className="text-[13px] font-serif text-ink hover:underline decoration-olive underline-offset-4 flex items-center gap-1.5"
                  >
                    <span>Consult on this framework</span>
                    <span className="text-xs">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Anchor — Soft Lavender Wash */}
      <section className="py-16 bg-[#f3effb] border-b border-[#dfd5f2]">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="badge-tag bg-white text-ink border border-[#dfd5f2]">
            SCHOLARLY INQUIRY
          </span>
          <h2 className="font-serif text-[30px] sm:text-[40px] font-light text-ink tracking-[-1.5px] max-w-2xl mx-auto leading-tight">
            Engage with Mufti Zabeehullah Leghari for Research, Fatwa or Lectures
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/contact" className="btn-ink text-[13px] py-2 px-5">
              Submit Academic Enquiry
            </Link>
            <Link href="/faq" className="btn-ghost text-[13px] py-2 px-5 bg-white">
              Read Frequently Asked Questions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <SpotlightSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </main>
  );
}
