"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Lock, EyeOff, FileText, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightSearchModal from "@/components/SpotlightSearchModal";

export default function PrivacyPolicyPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <main className="min-h-screen bg-bone text-ink flex flex-col font-serif selection:bg-chartreuse selection:text-ink">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Hero Header — Warm Bone Canvas */}
      <section className="py-16 sm:py-24 border-b border-ash relative overflow-hidden bg-bone">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="badge-tag">
              PRIVACY CHARTER • اخلاقی و شرعی ضوابطِ رازداری
            </span>

            <h1 className="font-serif text-[38px] sm:text-[52px] lg:text-[60px] font-light text-ink leading-[1.05] tracking-[-2px] sm:tracking-[-3.5px]">
              Privacy Policy &amp; Fatwa Confidentiality Charter
            </h1>

            <div className="font-urdu text-[18px] text-fossil leading-relaxed">
              دار الافتاء اور معزز سائلین کے درمیان رازداری کا شرعی و قانونی معاہدہ (کتمان السر و امانت)
            </div>

            <p className="font-serif text-[17px] text-fossil leading-relaxed tracking-[-0.34px]">
              Last revised: Rabi&apos; al-Awwal 1448 AH (October 2026). Governed by classical Shariah fiduciary obligations (<em>Amanah</em>) and modern statutory privacy standards.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Bar — Pure White */}
      <section className="py-8 bg-white border-b border-ash">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-inputs bg-sand flex items-center justify-center text-ink flex-shrink-0">
                <Lock className="w-4 h-4 text-olive" />
              </div>
              <div className="text-[13px] font-serif">
                <span className="font-medium text-ink block">Zero Data Commercialization</span>
                <span className="text-fossil">Your data is never sold, monetized, or shared.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-inputs bg-sand flex items-center justify-center text-ink flex-shrink-0">
                <EyeOff className="w-4 h-4 text-olive" />
              </div>
              <div className="text-[13px] font-serif">
                <span className="font-medium text-ink block">Absolute Case Anonymization</span>
                <span className="text-fossil">All published Fatawa have names strictly redacted.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-inputs bg-sand flex items-center justify-center text-ink flex-shrink-0">
                <ShieldCheck className="w-4 h-4 text-olive" />
              </div>
              <div className="text-[13px] font-serif">
                <span className="font-medium text-ink block">Shariah Fiduciary Duty</span>
                <span className="text-fossil">Sacred juristic confidentiality (*Kitman al-Sirr*).</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Legal Content — Warm Parchment Sand */}
      <section className="py-20 bg-[#f4f1ea] border-b border-ash">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Article 1: Foundational Commitment */}
          <div className="bg-white rounded-largecards p-8 border border-ash shadow-maze-subtle space-y-4">
            <span className="badge-tag">ARTICLE I / FOUNDATIONAL COVENANT</span>
            <h2 className="font-serif text-[24px] font-light text-ink">
              1. The Juristic Canon of Confidentiality (کتمان السر)
            </h2>
            <div className="space-y-3 font-serif text-[15px] text-smoke leading-relaxed">
              <p>
                In the Islamic legal tradition, the relationship between a Mufti and a Mustafti (questioner) is grounded in solemn trust (<em>Amanah</em>) and absolute confidentiality (<em>Kitman al-Sirr</em>). Classical jurists across all Sunni schools have unanimously established that the private affairs, domestic marital crises, financial records, and moral questions submitted to an institution of Ifta must never be exposed.
              </p>
              <div className="p-4 rounded-inputs bg-[#fbfaf8] border border-sand text-center">
                <div className="font-arabic text-[18px] text-ink font-bold leading-relaxed">
                  «الْمَجَالِسُ بِالأَمَانَةِ»
                </div>
                <div className="font-serif text-[12px] text-fossil mt-1 italic">
                  &ldquo;Gatherings and scholarly consultations are governed by sacred trust.&rdquo; (Hadith: Abu Dawud)
                </div>
              </div>
            </div>
          </div>

          {/* Article 2: What We Collect */}
          <div className="bg-white rounded-largecards p-8 border border-ash shadow-maze-subtle space-y-4">
            <span className="badge-tag">ARTICLE II / INFORMATION SCOPE</span>
            <h2 className="font-serif text-[24px] font-light text-ink">
              2. Information We Receive &amp; Retain
            </h2>
            <div className="space-y-3 font-serif text-[15px] text-smoke leading-relaxed">
              <p>
                To provide legally accurate, contextually relevant Shariah decrees and academic responses, our portal processes the following parameters:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-fossil text-[14px]">
                <li><strong>Identity &amp; Contact:</strong> Full name, verified WhatsApp number, and email address for transmission of the sealed fatwa decree.</li>
                <li><strong>Juristic Scenario Details:</strong> Detailed factual narratives regarding family disputes, inheritance distribution records, or commercial contracts.</li>
                <li><strong>Documentary Attachments:</strong> Partnership agreements, bank clauses, loan instruments, or arbitration submissions uploaded for Shariah review.</li>
                <li><strong>Technical Logs:</strong> Minimal anonymous server logs (IP address, browser type) retained strictly for anti-spam security and DDOS mitigation.</li>
              </ul>
            </div>
          </div>

          {/* Article 3: Public Fatwa Archive & Redaction */}
          <div className="bg-white rounded-largecards p-8 border border-ash shadow-maze-subtle space-y-4">
            <span className="badge-tag">ARTICLE III / REDACTION STANDARDS</span>
            <h2 className="font-serif text-[24px] font-light text-ink">
              3. Strict Public Archive Anonymization Protocol
            </h2>
            <div className="space-y-3 font-serif text-[15px] text-smoke leading-relaxed">
              <p>
                Selected rulings of broad scholarly importance are published in the searchable <strong>Fatwa Archive</strong> for public education and legal research. However, this publication is subject to the <strong>Daharki Triple-Redaction Standard</strong>:
              </p>
              <div className="space-y-2 pt-2">
                {[
                  "All real names are replaced with classical placeholders (Zaid, 'Amr, Hind, Bakr).",
                  "All geographical addresses, employer details, and personal phone numbers are completely purged.",
                  "Proprietary corporate contract figures and identifiable family secrets are generalized to abstract legal hypotheticals.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[14px]">
                    <CheckCircle className="w-4 h-4 text-olive flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Article 4: Storage, Encryption & Security */}
          <div className="bg-white rounded-largecards p-8 border border-ash shadow-maze-subtle space-y-4">
            <span className="badge-tag">ARTICLE IV / DIGITAL SAFEGUARDS</span>
            <h2 className="font-serif text-[24px] font-light text-ink">
              4. Data Storage &amp; Digital Security
            </h2>
            <div className="space-y-3 font-serif text-[15px] text-smoke leading-relaxed">
              <p>
                Dar ul Ifta Daharki employs secure modern transport encryption (TLS/HTTPS with 256-bit encryption) on all inquiry forms and administrative portals. 
              </p>
              <p>
                Access to the non-redacted original inquiries is restricted exclusively to <strong>Mufti Zabeehullah Leghari</strong> and authorized senior juristic researchers sworn to non-disclosure. No third-party marketing services or commercial data brokers ever access our database.
              </p>
            </div>
          </div>

          {/* Article 5: Rights of the Questioner */}
          <div className="bg-white rounded-largecards p-8 border border-ash shadow-maze-subtle space-y-4">
            <span className="badge-tag">ARTICLE V / MUSTAFTI RIGHTS</span>
            <h2 className="font-serif text-[24px] font-light text-ink">
              5. Rights of the Questioner (Mustafti)
            </h2>
            <div className="space-y-3 font-serif text-[15px] text-smoke leading-relaxed">
              <p>
                As a user of our portal, you hold the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-fossil text-[14px]">
                <li>Request permanent deletion of your private inquiry ticket from our active inbox upon decree issuance.</li>
                <li>Explicitly request that your issued Fatwa not be entered into the public educational archive under any circumstances.</li>
                <li>Obtain an attested, sealed duplicate of your previously issued decree by verifying your original ticket ID.</li>
              </ul>
            </div>
          </div>

          {/* Contact Secretariat for Privacy Queries */}
          <div className="p-6 rounded-cards bg-[#dbf570] border border-ash text-ink space-y-2">
            <h3 className="font-serif text-[18px] font-light">
              Questions Regarding This Privacy Charter?
            </h3>
            <p className="text-[13px] text-ink/80 leading-relaxed">
              Contact our Data Secretariat directly at <strong>zabeehullahanwer@gmail.com</strong> or visit our office at Dar ul Ifta Daharki, Sindh.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="btn-ink text-[12px] py-1.5 px-4 inline-flex">
                Contact Secretariat
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <SpotlightSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </main>
  );
}
