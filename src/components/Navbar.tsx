"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  ChevronUp,
  ArrowRight,
  Scroll,
  BookOpen,
  Building,
  GraduationCap,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { SCHOLAR_PROFILE } from "@/data/scholarData";

interface MegaMenuItem {
  label: string;
  badge: string;
  href: string;
}

interface MegaMenuConfig {
  tag: string;
  year: string;
  title: string;
  titleUrdu: string;
  description: string;
  actionText: string;
  actionHref: string;
  accentBg: string;
  middleHeading: string;
  middleItems: MegaMenuItem[];
  rightHeading: string;
  rightLinks: { label: string; href: string }[];
}

const MEGA_MENUS_CONFIG: Record<"platform" | "solutions" | "resources" | "services", MegaMenuConfig> = {
  platform: {
    tag: "Official Shariah Decree",
    year: "Dar ul Ifta Daharki",
    title: "Digital Currencies & Autonomous Smart Contracts",
    titleUrdu: "ڈیجیٹل کرنسی، اسمارٹ کنٹریکٹس اور فقہ المعاملات کی تنقیح",
    description: "Authoritative juristic decree examining the premise of currency (Thamaniyyah) and financial speculation in decentralized blockchain protocols.",
    actionText: "Read Decree & Juristic Precedents",
    actionHref: "/#dar-ul-ifta",
    accentBg: "bg-[#dbf570]",
    middleHeading: "SPECIALIZED IFTA DESKS",
    middleItems: [
      { label: "Commercial Fiqh & FinTech Contracts", badge: "FinTech", href: "/#dar-ul-ifta" },
      { label: "Corporate Murabaha & Sukuk Structuring", badge: "Finance", href: "/#dar-ul-ifta" },
      { label: "Inheritance (Mawarith) Legal Shares", badge: "Family Law", href: "/#dar-ul-ifta" },
      { label: "Waqf, Endowment & Non-Profit Law", badge: "Waqf", href: "/#dar-ul-ifta" },
    ],
    rightHeading: "IFTA PORTALS & TOOLS",
    rightLinks: [
      { label: "Ask Online Fatwa (استفتاء فارم)", href: "/#dar-ul-ifta" },
      { label: "Track Decree Ticket Status", href: "/#dar-ul-ifta" },
      { label: "Search 1,400+ Verified Fatawa Archive", href: "/#dar-ul-ifta" },
      { label: "Family Arbitration & Conciliation Desk", href: "/contact" },
    ],
  },
  solutions: {
    tag: "Featured Authored Treatise",
    year: "New Release • 2024–2026",
    title: "Nawazil al-Mu'amalat al-Maliyyah al-Mu'asirah",
    titleUrdu: "نوازل المعاملات المالية المعاصرة — معاصر مالیاتی مسائل اور حنفی فقہ",
    description: "An analytical study of classical Hanafi principles applied to modern statutory banking, digital currencies, and corporate debt instruments.",
    actionText: "Browse Chapters & Excerpts",
    actionHref: "/#books",
    accentBg: "bg-[#eae6e1]",
    middleHeading: "TREATISES BY LEGAL DOMAIN",
    middleItems: [
      { label: "Islamic Jurisprudence & Usul al-Fiqh", badge: "Usul", href: "/#books" },
      { label: "Contemporary Islamic Economics", badge: "Economics", href: "/#books" },
      { label: "Pedagogical Reform in Seminaries", badge: "5E Model", href: "/#books" },
      { label: "Specialized Takhassus Monograph Series", badge: "Postgrad", href: "/#books" },
    ],
    rightHeading: "ACADEMIC ACCESS",
    rightLinks: [
      { label: "Download Free PDF Treatises", href: "/#books" },
      { label: "Request Physical Hardbound Copy", href: "/contact" },
      { label: "Chicago / APA Academic Citations", href: "/#articles" },
      { label: "Library & Seminary Dissemination", href: "/contact" },
    ],
  },
  services: {
    tag: "Academic Directorate",
    year: "Institute of Islamic Sciences",
    title: "Institute of Islamic Sciences (Daharki, Sindh)",
    titleUrdu: "انسٹیٹیوٹ آف اسلامک سائنسز ڈہرکی — اعلیٰ دینی و تعلیمی شعبہ جات",
    description: "Directing higher scholarly curriculum integrating traditional Dars-e-Nizami seminary rigor with modern university research methodology and instructional design.",
    actionText: "Inspect Institutional Programs",
    actionHref: "/about",
    accentBg: "bg-[#b8a3ff]",
    middleHeading: "ACADEMIC & CONSULTATIVE SERVICES",
    middleItems: [
      { label: "Shariah Board Corporate Compliance Audits", badge: "Corporate", href: "/contact" },
      { label: "Madrasah Teacher Development Masterclasses", badge: "Pedagogy", href: "/contact" },
      { label: "Post-Graduate Takhassus fil-Fiqh Residency", badge: "Curriculum", href: "/about" },
      { label: "Arbitration & Commercial Conciliation", badge: "Arbitration", href: "/#dar-ul-ifta" },
    ],
    rightHeading: "DIRECT ENGAGEMENT",
    rightLinks: [
      { label: "Schedule Corporate Shariah Audit", href: "/contact" },
      { label: "Book 5E Teacher Training Masterclass", href: "/contact" },
      { label: "Academic Thesis Supervision Inquiry", href: "/contact" },
      { label: "Frequently Asked Questions (FAQ)", href: "/faq" },
    ],
  },
  resources: {
    tag: "Academic Repository",
    year: "Open Access Guides",
    title: "Research Methodology & Citation Standard",
    titleUrdu: "جامع تحقیقی رہنمائی برائے مقالہ نگاران و طلبہ تخصص",
    description: "Standardized manual for Islamic studies researchers covering Chicago Manual of Style (CMS), APA 7th edition, and classical Arabic manuscript citation standards.",
    actionText: "Download Research Guide (PDF)",
    actionHref: "/#resources",
    accentBg: "bg-[#dbf570]",
    middleHeading: "REPOSITORY DIRECTORIES",
    middleItems: [
      { label: "CMS & APA Citation Standard Manual", badge: "Writing", href: "/#resources" },
      { label: "5E Pedagogy & Positive Discipline Framework", badge: "Education", href: "/#resources" },
      { label: "Trilingual Glossary of Financial Terms", badge: "Reference", href: "/#resources" },
      { label: "Mawarith Legal Inheritance Worksheets", badge: "Calculator", href: "/#resources" },
    ],
    rightHeading: "SCHOLARLY ARCHIVE",
    rightLinks: [
      { label: "Download Complete Resource Catalog", href: "/#resources" },
      { label: "Watch Recorded Video Lectures", href: "/#media" },
      { label: "Listen to Jurisprudential Podcasts", href: "/#media" },
      { label: "Privacy & Confidentiality Charter", href: "/privacy" },
    ],
  },
};

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenFatwaModal?: () => void;
}

export default function Navbar({ onOpenSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementClosed, setAnnouncementClosed] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  
  // Mega Menu State
  const [activeMegaMenu, setActiveMegaMenu] = useState<"platform" | "solutions" | "resources" | "services" | null>(null);

  // Auto wrap-up / dismiss when clicking outside, scrolling, or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMegaMenu(null);
        setMobileMenuOpen(false);
      }
    };

    const handleScrollClose = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY > 40 && activeMegaMenu) {
        setActiveMegaMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScrollClose);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScrollClose);
    };
  }, [activeMegaMenu]);

  const toggleMegaMenu = (menu: "platform" | "solutions" | "resources" | "services") => {
    setActiveMegaMenu(activeMegaMenu === menu ? null : menu);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full transition-all duration-150 bg-white">
      {/* Top Bar Black Color Strip */}
      {!announcementClosed && (
        <div className="bg-black text-white h-[38px] px-4 sm:px-6 flex items-center justify-between text-[13px] sm:text-[14px] font-serif border-b border-black">
          <div className="w-6 hidden sm:block" />
          <div className="flex-1 text-center truncate px-2 font-light tracking-wide flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-chartreuse animate-pulse" />
            <span>🌙 18 Rabi&apos; al-Awwal 1448 AH — Official Juristic Research Portal &amp; Dar ul Ifta Daharki</span>
          </div>
          <button 
            onClick={() => setAnnouncementClosed(true)} 
            className="text-white/70 hover:text-white text-lg leading-none p-1 transition-colors"
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      )}

      {/* Header Navigation — White (#ffffff) background */}
      <nav
        className={`w-full transition-all duration-150 border-b border-ash relative bg-white ${
          isScrolled || activeMegaMenu ? "shadow-maze-subtle" : ""
        }`}
      >
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-3">
          
          {/* Logo Brand: Wordmark */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0 whitespace-nowrap">
            <div className="w-6 h-6 rounded-[5px] bg-ink text-paper flex items-center justify-center font-bold text-[11px] font-mono flex-shrink-0">
              ZL
            </div>
            <span className="font-serif text-[18px] sm:text-[19px] font-light tracking-[-0.5px] text-ink whitespace-nowrap">
              Zabeehullah Leghari
            </span>
          </Link>

          {/* Desktop Navigation Links with Mega Dropdown Triggers */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0 whitespace-nowrap">
            
            {/* PLATFORM / IFTA */}
            <button
              onClick={() => toggleMegaMenu("platform")}
              className={`font-serif text-[12px] font-normal transition-colors px-2.5 py-1.5 rounded-inputs flex items-center gap-1 whitespace-nowrap flex-shrink-0 ${
                activeMegaMenu === "platform"
                  ? "bg-sand text-ink"
                  : "text-fossil hover:text-ink"
              }`}
            >
              <span className="whitespace-nowrap">DAR UL IFTA</span>
              {activeMegaMenu === "platform" ? (
                <ChevronUp className="w-3 h-3 text-ink flex-shrink-0" />
              ) : (
                <ChevronDown className="w-3 h-3 text-fossil flex-shrink-0" />
              )}
            </button>

            {/* SOLUTIONS / WORKS */}
            <button
              onClick={() => toggleMegaMenu("solutions")}
              className={`font-serif text-[12px] font-normal transition-colors px-2.5 py-1.5 rounded-inputs flex items-center gap-1 whitespace-nowrap flex-shrink-0 ${
                activeMegaMenu === "solutions"
                  ? "bg-sand text-ink"
                  : "text-fossil hover:text-ink"
              }`}
            >
              <span className="whitespace-nowrap">PUBLICATIONS</span>
              {activeMegaMenu === "solutions" ? (
                <ChevronUp className="w-3 h-3 text-ink flex-shrink-0" />
              ) : (
                <ChevronDown className="w-3 h-3 text-fossil flex-shrink-0" />
              )}
            </button>

            {/* SERVICES / CUSTOMERS */}
            <button
              onClick={() => toggleMegaMenu("services")}
              className={`font-serif text-[12px] font-normal transition-colors px-2.5 py-1.5 rounded-inputs flex items-center gap-1 whitespace-nowrap flex-shrink-0 ${
                activeMegaMenu === "services"
                  ? "bg-sand text-ink"
                  : "text-fossil hover:text-ink"
              }`}
            >
              <span className="whitespace-nowrap">SERVICES</span>
              {activeMegaMenu === "services" ? (
                <ChevronUp className="w-3 h-3 text-ink flex-shrink-0" />
              ) : (
                <ChevronDown className="w-3 h-3 text-fossil flex-shrink-0" />
              )}
            </button>

            {/* RESOURCES */}
            <button
              onClick={() => toggleMegaMenu("resources")}
              className={`font-serif text-[12px] font-normal transition-colors px-2.5 py-1.5 rounded-inputs flex items-center gap-1 whitespace-nowrap flex-shrink-0 ${
                activeMegaMenu === "resources"
                  ? "bg-sand text-ink"
                  : "text-fossil hover:text-ink"
              }`}
            >
              <span className="whitespace-nowrap">RESOURCES</span>
              {activeMegaMenu === "resources" ? (
                <ChevronUp className="w-3 h-3 text-ink flex-shrink-0" />
              ) : (
                <ChevronDown className="w-3 h-3 text-fossil flex-shrink-0" />
              )}
            </button>

            <Link
              href="/about"
              className="font-serif text-[12px] font-normal text-fossil hover:text-ink px-2.5 py-1.5 transition-colors whitespace-nowrap flex-shrink-0"
            >
              ABOUT
            </Link>
          </div>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 flex-shrink-0 whitespace-nowrap">
            <button
              onClick={onOpenSearch}
              className="h-8 px-2.5 rounded-inputs text-fossil hover:text-ink text-[12px] font-serif border border-ash/80 hover:border-ink transition-colors flex items-center gap-1.5 flex-shrink-0 whitespace-nowrap"
              title="Search (⌘K)"
            >
              <Search className="w-3.5 h-3.5" />
              <kbd className="text-[10px] font-mono px-1 py-0.5 rounded bg-sand text-fossil">⌘K</kbd>
            </button>

            {/* 'Log in' text link */}
            <Link
              href="/#dar-ul-ifta"
              className="h-8 px-2 font-serif text-[12.5px] text-ink hover:underline decoration-olive underline-offset-4 flex items-center flex-shrink-0 whitespace-nowrap"
            >
              Log in
            </Link>

            {/* 'Ask Fatwa' outlined ghost button */}
            <Link
              href="/#dar-ul-ifta"
              className="h-8 px-3 rounded-inputs border border-ink text-ink hover:bg-sand transition-colors text-[12.5px] font-serif flex items-center justify-center flex-shrink-0 whitespace-nowrap"
            >
              Ask Fatwa
            </Link>

            {/* 'Academic Enquiry' filled dark button */}
            <Link
              href="/contact"
              className="h-8 px-3.5 rounded-inputs bg-ink text-paper hover:opacity-90 transition-opacity text-[12.5px] font-serif flex items-center justify-center flex-shrink-0 whitespace-nowrap"
            >
              Academic Enquiry
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-ink"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* MAZE MEGA DROPDOWN MENU PANEL — Exact Layout from User's Image 1 */}
        <AnimatePresence>
          {activeMegaMenu && (
            <>
              {/* Backdrop Overlay: click anywhere on the page to wrap up / dismiss */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveMegaMenu(null)}
                className="fixed inset-0 top-[100px] z-40 bg-black/15 backdrop-blur-[1px] cursor-pointer"
                aria-hidden="true"
              />

              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 right-0 top-full pt-2 px-4 sm:px-6 pointer-events-auto z-50"
              >
                <div className="max-w-page mx-auto bg-paper rounded-cards border border-ash shadow-2xl p-6 sm:p-8 relative">
                  
                  {/* Close Button to wrap up */}
                  <button
                    onClick={() => setActiveMegaMenu(null)}
                    className="absolute top-4 right-4 w-7 h-7 rounded-inputs border border-ash/70 bg-white text-fossil hover:text-ink hover:border-ink flex items-center justify-center text-xs font-mono transition-colors"
                    title="Close (Esc)"
                    aria-label="Close menu"
                  >
                    ✕
                  </button>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Featured Highlight Card for the specific menu */}
                  <div className="md:col-span-5">
                    <div className={`${MEGA_MENUS_CONFIG[activeMegaMenu].accentBg} rounded-cards p-6 text-ink relative overflow-hidden group border border-ash/50 shadow-sm`}>
                      <div className="absolute inset-0 bg-bone-dots opacity-40 pointer-events-none" />
                      
                      <div className="relative z-10 space-y-3">
                        <div className="flex items-center justify-between text-[12px] font-mono uppercase text-ink/80">
                          <span>{MEGA_MENUS_CONFIG[activeMegaMenu].tag}</span>
                          <span>{MEGA_MENUS_CONFIG[activeMegaMenu].year}</span>
                        </div>

                        <div className="py-2">
                          <h4 className="font-serif text-[22px] sm:text-[24px] font-light tracking-[-0.66px] text-ink leading-tight">
                            {MEGA_MENUS_CONFIG[activeMegaMenu].title}
                          </h4>
                          <div className="font-urdu text-[14px] text-ink/80 mt-1 leading-relaxed">
                            {MEGA_MENUS_CONFIG[activeMegaMenu].titleUrdu}
                          </div>
                        </div>

                        <p className="font-serif text-[13px] text-ink/90 leading-snug">
                          {MEGA_MENUS_CONFIG[activeMegaMenu].description}
                        </p>

                        <div className="pt-2">
                          <Link
                            href={MEGA_MENUS_CONFIG[activeMegaMenu].actionHref}
                            onClick={() => setActiveMegaMenu(null)}
                            className="font-serif text-[13px] font-medium text-ink hover:underline underline-offset-4 inline-flex items-center gap-1.5"
                          >
                            <span>{MEGA_MENUS_CONFIG[activeMegaMenu].actionText}</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column: Domain Categories for this specific menu */}
                  <div className="md:col-span-4 space-y-4">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-fossil font-semibold">
                      {MEGA_MENUS_CONFIG[activeMegaMenu].middleHeading}
                    </div>
                    <div className="space-y-3 font-serif text-[14px]">
                      {MEGA_MENUS_CONFIG[activeMegaMenu].middleItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setActiveMegaMenu(null)}
                          className="flex items-center justify-between text-ink hover:text-olive transition-colors group"
                        >
                          <span className="truncate pr-2">{item.label}</span>
                          <span className="badge-tag flex-shrink-0">{item.badge}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Direct Links for this specific menu */}
                  <div className="md:col-span-3 space-y-4 border-t md:border-t-0 md:border-l border-sand md:pl-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-fossil font-semibold">
                      {MEGA_MENUS_CONFIG[activeMegaMenu].rightHeading}
                    </div>
                    <div className="space-y-2.5 font-serif text-[14px]">
                      {MEGA_MENUS_CONFIG[activeMegaMenu].rightLinks.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          onClick={() => setActiveMegaMenu(null)}
                          className="block text-fossil hover:text-ink transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-ash bg-paper px-5 py-6 space-y-4 animate-fadeIn">
            <div className="flex flex-col space-y-3 font-serif">
              {[
                { name: "About Us", href: "/about" },
                { name: "Dar ul Ifta Portal", href: "/#dar-ul-ifta" },
                { name: "Books & Publications", href: "/#books" },
                { name: "Media & Lectures", href: "/#media" },
                { name: "Research Articles", href: "/#articles" },
                { name: "FAQ", href: "/faq" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Use", href: "/terms" },
                { name: "Contact Secretariat", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[16px] text-ink py-1.5 border-b border-sand flex items-center justify-between font-serif"
                >
                  <span>{link.name}</span>
                  <span className="text-fossil text-xs">→</span>
                </Link>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-2">
              <Link
                href="/#dar-ul-ifta"
                onClick={() => setMobileMenuOpen(false)}
                className="h-10 px-4 rounded-inputs border border-ink text-ink hover:bg-sand transition-colors text-[13px] font-serif flex items-center justify-center w-full"
              >
                Ask Fatwa / دار الافتاء
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="h-10 px-4 rounded-inputs bg-ink text-paper hover:opacity-90 transition-opacity text-[13px] font-serif flex items-center justify-center w-full"
              >
                Academic Enquiry
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
