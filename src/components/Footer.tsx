"use client";

import React from "react";
import Link from "next/link";
import { 
  Scroll, 
  Mail, 
  MapPin, 
  ArrowUp, 
  BookOpen, 
  ShieldCheck, 
  Youtube, 
  Linkedin, 
  Share2
} from "lucide-react";
import { SCHOLAR_PROFILE } from "@/data/scholarData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0e0f11] text-[#f5f4f0] border-t border-[#222328] pt-16 pb-12 relative">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Calligraphic Blessing */}
        <div className="text-center pb-10 border-b border-[#222328] space-y-2">
          <div className="font-arabic text-[24px] sm:text-[30px] text-[#dbf570] font-bold tracking-wide">
            وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ
          </div>
          <div className="font-serif text-[13px] text-[#9e9b94] italic">
            &ldquo;And my success is not but through Allah. Upon Him I have relied, and to Him I return.&rdquo; (Surah Hud: 88)
          </div>
        </div>

        {/* Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-12 border-b border-[#222328]">
          
          {/* Col 1: Identity & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <Link href="#home" className="inline-block">
              <span className="font-serif text-[22px] font-light tracking-[-0.66px] text-white">
                Mufti Zabeehullah Leghari
              </span>
              <div className="font-urdu text-[13px] text-[#dbf570]">
                مفتی ذبیح اللہ لغاری (حفظہ اللہ)
              </div>
            </Link>

            <p className="font-serif text-[14px] text-[#9e9b94] leading-relaxed max-w-sm">
              Integrating classical Dars-e-Nizami and Takhassus jurisprudence with contemporary university research (PhD, MPhil). Dedicated to contextually rigorous, ethically grounded scholarship.
            </p>

            <div className="space-y-1.5 text-[13px] font-serif text-[#a8a6a0] pt-1">
              <div className="flex items-center gap-2">
                <Scroll className="w-3.5 h-3.5 text-[#dbf570]" />
                <span>CEO: Dar ul Ifta Daharki, Sindh</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#dbf570]" />
                <span>Director: Institute of Islamic Sciences, Daharki</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#dbf570]" />
                <span>{SCHOLAR_PROFILE.contactEmail}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Site Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[12px] font-mono uppercase tracking-wider text-[#dbf570]">
              Navigation
            </h4>
            <ul className="space-y-2 text-[14px] font-serif">
              <li><Link href="/" className="text-[#9e9b94] hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[#9e9b94] hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#dar-ul-ifta" className="text-[#9e9b94] hover:text-white transition-colors">Dar ul Ifta</Link></li>
              <li><Link href="/#books" className="text-[#9e9b94] hover:text-white transition-colors">Books &amp; Treatises</Link></li>
              <li><Link href="/#media" className="text-[#9e9b94] hover:text-white transition-colors">Media &amp; Lectures</Link></li>
              <li><Link href="/faq" className="text-[#9e9b94] hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-[#9e9b94] hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-[#9e9b94] hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[#9e9b94] hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Col 3: Juristic Departments (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[12px] font-mono uppercase tracking-wider text-[#dbf570]">
              Dar ul Ifta
            </h4>
            <ul className="space-y-2 text-[14px] font-serif">
              <li><Link href="/#dar-ul-ifta" className="text-[#9e9b94] hover:text-white transition-colors">Ask Fatwa Portal</Link></li>
              <li><Link href="/#dar-ul-ifta" className="text-[#9e9b94] hover:text-white transition-colors">Verified Archive</Link></li>
              <li><Link href="/#dar-ul-ifta" className="text-[#9e9b94] hover:text-white transition-colors">Commercial Law (المعاملات)</Link></li>
              <li><Link href="/#dar-ul-ifta" className="text-[#9e9b94] hover:text-white transition-colors">Family Law &amp; Mawarith</Link></li>
              <li><Link href="/contact" className="text-[#9e9b94] hover:text-white transition-colors">Secretariat Inquiries</Link></li>
            </ul>
          </div>

          {/* Col 4: Verified Scholarly Profiles & Status (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[12px] font-mono uppercase tracking-wider text-[#dbf570]">
              Scholarly Footprints
            </h4>
            <p className="font-serif text-[13px] text-[#9e9b94] leading-relaxed">
              Connect with ongoing peer citations and research publications on scholarly repositories.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-inputs bg-[#1a1b1f] border border-[#2c2d33] flex items-center justify-center text-[#9e9b94] hover:text-white hover:border-[#dbf570] transition-colors"
                title="Google Scholar"
              >
                <BookOpen className="w-4 h-4" />
              </a>
              <a
                href="https://orcid.org"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-inputs bg-[#1a1b1f] border border-[#2c2d33] flex items-center justify-center text-[#9e9b94] hover:text-white hover:border-[#dbf570] transition-colors"
                title="ORCID"
              >
                <ShieldCheck className="w-4 h-4" />
              </a>
              <a
                href="https://www.researchgate.net"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-inputs bg-[#1a1b1f] border border-[#2c2d33] flex items-center justify-center text-[#9e9b94] hover:text-white hover:border-[#dbf570] transition-colors"
                title="ResearchGate"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-inputs bg-[#1a1b1f] border border-[#2c2d33] flex items-center justify-center text-[#9e9b94] hover:text-white hover:border-[#dbf570] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-inputs bg-[#1a1b1f] border border-[#2c2d33] flex items-center justify-center text-[#9e9b94] hover:text-white hover:border-[#dbf570] transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Status Pill */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-inputs bg-[#1a1b1f] border border-[#2c2d33] text-[12px] font-serif text-[#a8a6a0]">
                <span className="w-2 h-2 rounded-full bg-[#dbf570] animate-pulse"></span>
                <span>Ifta Portal &amp; Systems Operational</span>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center justify-center gap-2 border border-[#2c2d33] bg-[#1a1b1f] text-white hover:bg-chartreuse hover:text-ink hover:border-chartreuse transition-colors text-[12px] py-1.5 px-3 rounded-inputs w-full font-serif"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Return to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Quick Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[13px] font-serif text-[#706f6c] gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Mufti Zabeehullah Leghari. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="text-center sm:text-right text-[12px]">
            Dar ul Ifta Daharki • Institute of Islamic Sciences (Daharki, Sindh, Pakistan)
          </div>
        </div>

      </div>
    </footer>
  );
}
