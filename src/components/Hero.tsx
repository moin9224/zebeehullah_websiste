"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Scroll, 
  BookOpen, 
  ArrowRight,
  Star
} from "lucide-react";

interface HeroProps {
  onOpenSearch?: () => void;
}

export default function Hero({ onOpenSearch }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"ruling" | "proofs" | "principles">("ruling");

  return (
    <section id="home" className="relative bg-bone pt-12 pb-20 border-b border-ash overflow-hidden">
      <div className="relative max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column on desktop: left holds Phonic 90px / weight 300 headline in Ink with –6.3px tracking, right holds product surface cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Phonic 90px / 300 Headline & Editorial Cluster (7 cols) — Fully visible by default */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Study Tag Badge — Chartreuse (#dbf570) background, Ink text, 4px radius, 4px x 8px padding */}
            <div className="inline-flex items-center gap-2">
              <span className="badge-tag">
                ISLAMIC SCHOLAR • MUFTI • RESEARCHER • EDUCATIONIST
              </span>
            </div>

            {/* Phonic 90px / weight 300 headline in Ink with –6.3px tracking, line-height 1.0 */}
            <h1 className="font-serif text-[44px] sm:text-[68px] lg:text-[80px] xl:text-[90px] font-light text-ink leading-[1.0] tracking-[-3px] sm:tracking-[-6.3px]">
              Bridging Classical Heritage with{" "}
              <span className="underline decoration-olive underline-offset-8 decoration-2">
                Contemporary Thought
              </span>
            </h1>

            {/* Urdu Subtitle Badge */}
            <div className="text-fossil font-urdu text-[17px] sm:text-[20px] leading-relaxed">
              اصالت و عصریت کا سنگم: کلاسیکی فقہی ورثے اور معاصر قانونی و معاشی افکار کی محققانہ ہم آہنگی
            </div>

            {/* Sub-paragraph at 17px / 400 in Fossil */}
            <p className="font-serif text-[17px] font-normal text-fossil leading-[1.45] tracking-[-0.34px] max-w-xl">
              Engaging the Islamic intellectual tradition with modern legal, economic, educational, and social inquiry to build a contextually relevant and methodologically rigorous scholarly discourse.
            </p>

            {/* CTA Cluster: Filled Dark Button (btn-ink) + Outlined Ghost Button (btn-ghost) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#dar-ul-ifta"
                className="btn-ink text-[15px] group"
              >
                <Scroll className="w-4 h-4 text-chartreuse" />
                <span>Ask Fatwa / فتویٰ پوچھیں</span>
              </a>

              <a
                href="#books"
                className="btn-ghost text-[15px]"
              >
                <BookOpen className="w-4 h-4" />
                <span>Browse Books & Works</span>
              </a>

              <a
                href="#media"
                className="font-serif text-[15px] text-fossil hover:text-ink transition-colors px-2 inline-flex items-center gap-1.5"
              >
                <span>Watch Lectures</span>
                <span className="text-xs">→</span>
              </a>
            </div>

          </div>

          {/* Right Column: Staggered Collage of Product Surface Cards with Framer Motion (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Report Preview Card — White (#ffffff) surface, 8px radius, no shadow. Header label in Phonic 12px / 400 Fossil */}
            <div className="bg-paper border border-ash rounded-inputs p-5 shadow-maze-subtle">
              <div className="flex items-center justify-between text-[12px] font-serif text-fossil mb-3 border-b border-sand pb-2">
                <span>Report Preview / Dar ul Ifta Research</span>
                <span className="font-mono text-ink text-[11px]">VOL. XXIV — 2026</span>
              </div>

              {/* Chartreuse (#dbf570) hero image block with 8px top radius, 16px internal padding, 22px Phonic label */}
              <div className="bg-chartreuse rounded-inputs p-4 text-ink mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-mono text-ink/80">Juristic Monograph</span>
                  <span className="text-[11px] font-medium bg-ink text-paper px-2 py-0.5 rounded-[4px]">Peer Reviewed</span>
                </div>
                <h3 className="font-serif text-[22px] font-light text-ink mt-2 leading-[1.15] tracking-[-0.66px]">
                  Islamic Economics & Digital Asset Liquidity
                </h3>
              </div>

              {/* Right-aligned stat column (Responses, No. of themes) */}
              <div className="grid grid-cols-3 gap-2 text-center py-2 border-t border-sand">
                <div className="text-left">
                  <div className="text-[11px] text-fossil">Fatawa Issued</div>
                  <div className="font-serif text-[17px] text-ink font-light">1,420+</div>
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-fossil">Evidentiary Citations</div>
                  <div className="font-serif text-[17px] text-ink font-light">3,800+</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-fossil">Seminary Status</div>
                  <div className="font-serif text-[13px] text-olive font-medium">Accredited</div>
                </div>
              </div>
            </div>

            {/* Unmoderated Study Card / Juristic Engine Card — Paper background, 12px radius */}
            <div className="card-paper p-5 space-y-3 shadow-maze-subtle">
              <div className="flex items-center justify-between">
                {/* Chartreuse tag pill at top-left with Phonic 12px / 400 Ink text */}
                <span className="badge-tag">
                  Verified Case Study • Dar ul Ifta Daharki
                </span>
                <div className="flex items-center gap-1 text-chartreuse">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-chartreuse text-chartreuse" />
                  ))}
                </div>
              </div>

              <div className="font-serif text-[17px] font-normal text-ink leading-[1.4] tracking-[-0.34px]">
                Application of &lsquo;Urf and Maslahah in Autonomous Smart Contracts
              </div>

              <p className="font-serif text-[14px] text-fossil leading-relaxed">
                Juristic consensus formulated under classical Hanafi principles cross-referenced with modern financial regulation frameworks.
              </p>

              {/* Tab Navigation — Three tabs in 14px / 300 Ink. Active tab on Sand (#eae6e1) pill with 8px radius */}
              <div className="flex items-center gap-1.5 pt-2 border-t border-sand text-[13px]">
                <button
                  onClick={() => setActiveTab("ruling")}
                  className={`px-3 py-1.5 rounded-inputs font-serif transition-colors ${
                    activeTab === "ruling" ? "bg-sand text-ink" : "text-fossil hover:text-ink"
                  }`}
                >
                  Juristic Ruling
                </button>
                <button
                  onClick={() => setActiveTab("proofs")}
                  className={`px-3 py-1.5 rounded-inputs font-serif transition-colors ${
                    activeTab === "proofs" ? "bg-sand text-ink" : "text-fossil hover:text-ink"
                  }`}
                >
                  Classical Citations
                </button>
                <button
                  onClick={() => setActiveTab("principles")}
                  className={`px-3 py-1.5 rounded-inputs font-serif transition-colors ${
                    activeTab === "principles" ? "bg-sand text-ink" : "text-fossil hover:text-ink"
                  }`}
                >
                  Legal Maxims
                </button>
              </div>

              {/* Dynamic Content Preview */}
              <div className="p-3 bg-bone rounded-inputs text-[13px] font-serif text-smoke leading-normal">
                {activeTab === "ruling" && (
                  <span>
                    <strong>Ruling Summary:</strong> Conditional permissibility granted subject to elimination of Gharar Fahish and asset-backing verification.
                  </span>
                )}
                {activeTab === "proofs" && (
                  <span>
                    <strong>Primary Sources:</strong> Radd al-Muhtar (Ibn Abidin), Bada&apos;i al-Sana&apos;i (Al-Kasani), Majallah al-Ahkam al-Adliyyah.
                  </span>
                )}
                {activeTab === "principles" && (
                  <span>
                    <strong>Legal Maxim:</strong> &ldquo;Al-Asl fi al-Mu&apos;amalat al-Ibahah hatta Yadulla al-Dalil &lsquo;ala al-Tahrim&rdquo; (Permissibility is the default).
                  </span>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
