"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  Search, 
  Scroll,
  ArrowRight,
  BookOpen,
  Mail
} from "lucide-react";

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenFatwaModal?: () => void;
}

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Dar ul Ifta", href: "/#dar-ul-ifta" },
  { name: "Books", href: "/#books" },
  { name: "Articles", href: "/#articles" },
  { name: "Lectures", href: "/#media" },
  { name: "Resources", href: "/#resources" },
  { name: "Events", href: "/#events" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ onOpenSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementClosed, setAnnouncementClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-150 bg-white">
      {/* Top Scholarly Announcement Strip */}
      {!announcementClosed && (
        <div className="bg-[#07120E] text-white h-[36px] px-4 sm:px-6 flex items-center justify-between text-[12.5px] sm:text-[13px] font-serif border-b border-[#0F382A]">
          <div className="w-6 hidden sm:block" />
          <div className="flex-1 text-center truncate px-2 font-light tracking-wide flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
            <span className="truncate">
              🌙 Official Academic &amp; Juristic Portal — Dar ul Ifta Daharki &amp; Institute of Islamic Sciences
            </span>
          </div>
          <button 
            onClick={() => setAnnouncementClosed(true)} 
            className="text-white/70 hover:text-white text-lg leading-none p-1 transition-colors flex-shrink-0"
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      )}

      {/* Main Header Navigation */}
      <nav
        className={`w-full transition-all duration-150 border-b border-ash bg-white ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-3">
          
          {/* Logo Brand: Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-7 h-7 rounded-[5px] bg-[#0F382A] text-gold-light border border-gold/40 flex items-center justify-center font-bold text-[12px] font-mono flex-shrink-0">
              ZL
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[17px] sm:text-[18px] font-normal tracking-[-0.4px] text-ink leading-tight">
                Zabeehullah Leghari
              </span>
              <span className="font-urdu text-[11px] text-emerald leading-none hidden sm:block">
                مفتی ذبیح اللہ لغاری
              </span>
            </div>
          </Link>

          {/* Desktop Direct Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-serif text-[13px] font-normal text-fossil hover:text-ink hover:bg-[#FAF8F5] px-2.5 py-1.5 rounded-inputs transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 flex-shrink-0 whitespace-nowrap">
            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              className="h-8 px-2.5 rounded-inputs text-fossil hover:text-ink text-[12px] font-serif border border-ash hover:border-ink transition-colors flex items-center gap-1.5 flex-shrink-0"
              title="Search (⌘K)"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Search</span>
              <kbd className="text-[10px] font-mono px-1 py-0.5 rounded bg-sand text-fossil">⌘K</kbd>
            </button>

            {/* 'Ask Fatwa' outlined ghost button */}
            <Link
              href="/#dar-ul-ifta"
              className="h-8 px-3 rounded-inputs border border-[#0F382A] text-[#0F382A] hover:bg-[#EBF4F0] transition-colors text-[12.5px] font-serif flex items-center justify-center flex-shrink-0"
            >
              <Scroll className="w-3.5 h-3.5 mr-1.5 text-emerald" />
              <span>Ask Fatwa</span>
            </Link>

            {/* 'Academic Enquiry' filled emerald button */}
            <Link
              href="/contact"
              className="h-8 px-3.5 rounded-inputs bg-[#0F382A] text-white hover:bg-[#164E3D] border border-gold/40 shadow-sm transition-colors text-[12.5px] font-serif flex items-center justify-center flex-shrink-0"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5 text-gold-light" />
              <span>Academic Enquiry</span>
            </Link>
          </div>

          {/* Mobile Menu & Search Buttons */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-inputs border border-ash text-fossil hover:text-ink transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-inputs border border-ash text-fossil hover:text-ink transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-ash bg-white px-5 py-6 space-y-4 shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-1 font-serif">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[15px] text-ink py-2 px-2 rounded-inputs hover:bg-[#FAF8F5] flex items-center justify-between font-serif transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-fossil text-xs">→</span>
                </Link>
              ))}
              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] text-fossil py-2 px-2 rounded-inputs hover:bg-[#FAF8F5] flex items-center justify-between font-serif transition-colors"
              >
                <span>FAQ</span>
                <span className="text-fossil text-xs">→</span>
              </Link>
            </div>

            <div className="pt-3 border-t border-sand flex flex-col gap-2">
              <Link
                href="/#dar-ul-ifta"
                onClick={() => setMobileMenuOpen(false)}
                className="h-10 px-4 rounded-inputs border border-[#0F382A] text-[#0F382A] hover:bg-[#EBF4F0] transition-colors text-[13px] font-serif flex items-center justify-center w-full font-medium"
              >
                <Scroll className="w-4 h-4 mr-2 text-emerald" />
                Ask Fatwa / دار الافتاء
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="h-10 px-4 rounded-inputs bg-[#0F382A] text-white hover:bg-[#164E3D] transition-colors text-[13px] font-serif flex items-center justify-center w-full font-medium shadow-sm"
              >
                <Mail className="w-4 h-4 mr-2 text-gold-light" />
                Academic Enquiry
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
