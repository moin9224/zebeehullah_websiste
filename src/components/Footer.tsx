import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/siteConfig";
import SocialIcons from "./SocialIcons";

const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Writings", href: "/writings" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Fatawa", href: "/fatawa" },
  { label: "Lectures & Sessions", href: "/lectures-and-sessions" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E4DA] bg-[#FAF8F5] text-[#2C3832]">
      {/* Quranic Verse Accent Banner */}
      <div className="py-14 sm:py-16 text-center border-b border-[#E8E4DA] bg-gradient-to-b from-[#F5F2EB]/50 to-transparent">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-arabic text-2xl sm:text-3xl text-[#0F382A] mb-3 leading-relaxed tracking-wide">
            {SITE_CONFIG.quranVerse.arabic}
          </p>
          <p className="font-serif italic text-base sm:text-lg text-[#55625B]">
            &ldquo;{SITE_CONFIG.quranVerse.translation}&rdquo;
          </p>
          <p className="text-xs uppercase tracking-widest text-[#88948D] mt-1 font-sans">
            ({SITE_CONFIG.quranVerse.reference})
          </p>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-8 text-center">
          {FOOTER_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-serif text-[#4A5550] hover:text-[#0F382A] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social & Academic Icons (renders if links are provided in siteConfig) */}
        <div className="flex justify-center mb-8">
          <SocialIcons className="flex flex-wrap items-center justify-center gap-4" />
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-[#E8E4DA]/70">
          <p className="text-xs font-serif text-[#78847E]">
            © 2026 {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
