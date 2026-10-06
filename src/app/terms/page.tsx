"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Scale, 
  FileCheck, 
  AlertCircle, 
  BookOpen, 
  CheckCircle2, 
  ShieldAlert, 
  ArrowRight 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightSearchModal from "@/components/SpotlightSearchModal";

export default function TermsPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <main className="min-h-screen bg-bone text-ink flex flex-col font-serif selection:bg-chartreuse selection:text-ink">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Hero Header — Warm Bone Canvas */}
      <section className="py-16 sm:py-24 border-b border-ash relative overflow-hidden bg-bone">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="badge-tag">
              LEGAL TERMS • شرائط و ضوابطِ خدمت
            </span>

            <h1 className="font-serif text-[38px] sm:text-[52px] lg:text-[60px] font-light text-ink leading-[1.05] tracking-[-2px] sm:tracking-[-3.5px]">
              Terms of Use &amp; Juristic Disclaimer
            </h1>

            <div className="font-urdu text-[18px] text-fossil leading-relaxed">
              دار الافتاء کی شرعی رہنمائی، فتاویٰ کے نفاذ اور علمی تصانیف کے استعمال کے قانونی ضوابط
            </div>

            <p className="font-serif text-[17px] text-fossil leading-relaxed tracking-[-0.34px]">
              Effective as of Rabi&apos; al-Awwal 1448 AH (October 2026). Outlining the scope of religious decrees, intellectual property, and academic citation terms.
            </p>
          </div>
        </div>
      </section>

      {/* Key Principles Bar — Pure White */}
      <section className="py-8 bg-white border-b border-ash">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-inputs bg-sand flex items-center justify-center text-ink flex-shrink-0">
                <Scale className="w-4 h-4 text-olive" />
              </div>
              <div className="text-[13px] font-serif">
                <span className="font-medium text-ink block">Advisory Shariah Guidance</span>
                <span className="text-fossil">Decrees represent religious jurisprudence (*Diyanatan*).</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-inputs bg-sand flex items-center justify-center text-ink flex-shrink-0">
                <BookOpen className="w-4 h-4 text-olive" />
              </div>
              <div className="text-[13px] font-serif">
                <span className="font-medium text-ink block">Educational Attribution</span>
                <span className="text-fossil">Free academic usage with authoritative citation.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-inputs bg-sand flex items-center justify-center text-ink flex-shrink-0">
                <ShieldAlert className="w-4 h-4 text-olive" />
              </div>
              <div className="text-[13px] font-serif">
                <span className="font-medium text-ink block">No Civil Enforcement</span>
                <span className="text-fossil">Distinct from statutory judicial court summons.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Legal Articles — Warm Parchment Sand */}
      <section className="py-20 bg-[#f4f1ea] border-b border-ash">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Article 1: Nature of Fatwa */}
          <div className="bg-white rounded-largecards p-8 border border-ash shadow-maze-subtle space-y-4">
            <span className="badge-tag">SECTION 01 / NATURE OF DECREES</span>
            <h2 className="font-serif text-[24px] font-light text-ink">
              1. Nature &amp; Jurisprudential Scope of Issued Decrees
            </h2>
            <div className="space-y-3 font-serif text-[15px] text-smoke leading-relaxed">
              <p>
                All rulings, answers, and decrees issued by <strong>Mufti Zabeehullah Leghari</strong> or <strong>Dar ul Ifta Daharki</strong> constitute religious juristic advisory opinions formulated under the classical Hanafi legal school (<em>Al-Madhhab al-Hanafi</em>) and contemporary research principles.
              </p>
              <div className="p-4 rounded-inputs bg-[#fbfaf8] border border-sand space-y-1.5">
                <div className="font-medium text-ink text-[14px]">Distinct from Civil Judicial Judgments:</div>
                <p className="text-[13px] text-fossil leading-relaxed">
                  A Fatwa is an elucidation of Shariah status between the believer and the Creator (<em>Diyanatan</em>). It does not hold executive or coercive judicial power (<em>Qada&apos;an</em>) and is not a substitute for a decree issued by a statutory civil, criminal, or family court of law in Pakistan or any other sovereign state.
                </p>
              </div>
            </div>
          </div>

          {/* Article 2: Factual Premise */}
          <div className="bg-white rounded-largecards p-8 border border-ash shadow-maze-subtle space-y-4">
            <span className="badge-tag">SECTION 02 / FACTUAL PREMISE</span>
            <h2 className="font-serif text-[24px] font-light text-ink">
              2. Reliance Upon Inquirer&apos;s Factual Representations
            </h2>
            <div className="space-y-3 font-serif text-[15px] text-smoke leading-relaxed">
              <p>
                Every Fatwa is formulated strictly in response to the specific narrative, contracts, and evidentiary assertions provided by the questioner (<em>Mustafti</em>).
              </p>
              <div className="p-4 rounded-inputs bg-[#fbfaf8] border border-sand text-center">
                <div className="font-arabic text-[18px] text-ink font-bold leading-relaxed">
                  «إِنَّمَا أَنَا بَشَرٌ، وَإِنَّكُمْ تَخْتَصِمُونَ إِلَيَّ»
                </div>
                <div className="font-serif text-[12px] text-fossil mt-1 italic">
                  &ldquo;I am only human, and you bring your disputes to me...&rdquo; (Prophetic Hadith: Bukhari &amp; Muslim)
                </div>
              </div>
              <p className="text-[14px] text-fossil pt-1">
                If the questioner has withheld critical material facts, concealed bilateral obligations, or misrepresented documents, the issued Fatwa becomes null and void regarding the withheld realities, and the spiritual burden rests upon the misrepresenting party.
              </p>
            </div>
          </div>

          {/* Article 3: Intellectual Property */}
          <div className="bg-white rounded-largecards p-8 border border-ash shadow-maze-subtle space-y-4">
            <span className="badge-tag">SECTION 03 / INTELLECTUAL PROPERTY</span>
            <h2 className="font-serif text-[24px] font-light text-ink">
              3. Copyright &amp; Authored Scholarly Treatises
            </h2>
            <div className="space-y-3 font-serif text-[15px] text-smoke leading-relaxed">
              <p>
                All published books, academic monographs, peer-reviewed articles, lecture audio, and website code are the protected intellectual property of <strong>Mufti Zabeehullah Leghari</strong> and Dar ul Ifta Daharki.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-fossil text-[14px]">
                <li><strong>Permitted Use:</strong> Students, scholars, and educational institutions are granted full permission to download, read, print, and quote from these works for non-commercial educational and research purposes.</li>
                <li><strong>Attribution:</strong> Full scholarly attribution to Mufti Zabeehullah Leghari and Dar ul Ifta Daharki must accompany all quotes, citations, and curriculum uses.</li>
                <li><strong>Prohibited Actions:</strong> Commercial republication, selling digital copies, or altering the text without written authorization from the Daharki secretariat is strictly unlawful under both Shariah ethical covenants and international copyright treaties.</li>
              </ul>
            </div>
          </div>

          {/* Article 4: Financial Transactions Disclaimer */}
          <div className="bg-white rounded-largecards p-8 border border-ash shadow-maze-subtle space-y-4">
            <span className="badge-tag">SECTION 04 / FINANCIAL DISCLAIMER</span>
            <h2 className="font-serif text-[24px] font-light text-ink">
              4. Disclaimer on Commercial &amp; Investment Decisions
            </h2>
            <div className="space-y-3 font-serif text-[15px] text-smoke leading-relaxed">
              <p>
                While Mufti Zabeehullah Leghari provides specialized Shariah compliance reviews for fintech platforms, corporate Murabaha agreements, and Islamic investment funds, such reviews determine <em>Shariah permissibility</em> only.
              </p>
              <p className="text-fossil text-[14px]">
                A certificate of Shariah compliance does not constitute financial, commercial, or market investment advice. Neither the author nor Dar ul Ifta Daharki assumes liability for commercial business losses, statutory tax penalties, or insolvency arising from independent market transactions.
              </p>
            </div>
          </div>

          {/* Article 5: Amendments & Governing Law */}
          <div className="bg-white rounded-largecards p-8 border border-ash shadow-maze-subtle space-y-4">
            <span className="badge-tag">SECTION 05 / GOVERNING JURISDICTION</span>
            <h2 className="font-serif text-[24px] font-light text-ink">
              5. Governing Law &amp; Dispute Resolution
            </h2>
            <div className="space-y-3 font-serif text-[15px] text-smoke leading-relaxed">
              <p>
                These terms are governed by the established canons of Islamic Fiqh and the relevant legal framework of the Islamic Republic of Pakistan. Any institutional disputes relating to services or curriculum will be addressed through principled Islamic arbitration (<em>Tahkim</em>) at the Institute of Islamic Sciences, Daharki, Sindh.
              </p>
            </div>
          </div>

          {/* Quick Action Box */}
          <div className="p-6 rounded-cards bg-[#dbf570] border border-ash text-ink flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-serif text-[17px] font-medium">Have Questions Regarding Our Terms?</div>
              <div className="text-[13px] text-ink/80 mt-0.5">Contact the Dar ul Ifta Daharki secretariat for formal clarifications.</div>
            </div>
            <Link href="/contact" className="btn-ink text-[12px] py-1.5 px-4 flex-shrink-0">
              Contact Us
            </Link>
          </div>

        </div>
      </section>

      <Footer />
      <SpotlightSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </main>
  );
}
