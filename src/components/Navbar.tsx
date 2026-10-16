"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Writings", href: "/writings" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Fatawa", href: "/fatawa" },
  { label: "Lectures & Sessions", href: "/lectures-and-sessions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E4DA] transition-all">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Scholar Signature / Logo */}
        <Link 
          href="/" 
          className="group flex flex-col focus:outline-none"
        >
          <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#162923] group-hover:text-[#0F382A] transition-colors">
            Zabeehullah Leghari
          </span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#717E77] font-sans mt-0.5 font-medium">
            Islamic Scholar • Researcher
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors py-1 relative font-serif ${
                  isActive
                    ? "text-[#0F382A] font-semibold"
                    : "text-[#4A5550] hover:text-[#0F382A]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A869]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#162923] hover:text-[#0F382A] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E8E4DA] bg-[#FAF8F5] px-6 py-6 space-y-4">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-serif py-1.5 transition-colors ${
                  isActive
                    ? "text-[#0F382A] font-semibold pl-2 border-l-2 border-[#C5A869]"
                    : "text-[#4A5550] hover:text-[#0F382A]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
