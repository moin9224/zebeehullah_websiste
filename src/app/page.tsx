import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section (with large photo) */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-[#E8E4DA] bg-gradient-to-b from-[#FAF8F5] via-[#F6F3EC] to-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Titles & Taglines */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-block px-3.5 py-1 rounded border border-[#C5A869]/40 bg-[#FAF8F5] text-xs uppercase tracking-[0.22em] text-[#0F382A] font-sans font-medium">
                {SITE_CONFIG.hero.role}
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#162923] font-normal leading-[1.18] tracking-tight">
                {SITE_CONFIG.hero.title}
              </h1>

              <p className="font-serif italic text-lg sm:text-xl text-[#4D5A54] leading-relaxed max-w-xl mx-auto lg:mx-0">
                &ldquo;{SITE_CONFIG.hero.subtitle}&rdquo;
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-[#0F382A] bg-[#0F382A] text-white hover:bg-[#164E3D] transition-colors text-sm font-serif shadow-sm"
                >
                  About the Scholar
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-[#D5CFBF] bg-[#FAF8F5] text-[#162923] hover:border-[#0F382A] hover:bg-white transition-all text-sm font-serif"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right: Large Scholar Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-xl overflow-hidden border border-[#D8D2C4] shadow-md bg-[#EFECE4]">
                {/* Fallback portrait container with elegant styling */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#F2EEE4] to-[#E5E0D2]">
                  <div className="w-24 h-24 rounded-full border border-[#C5A869]/60 flex items-center justify-center mb-4 bg-white/60 shadow-inner">
                    <span className="font-serif text-3xl text-[#0F382A] font-light">ZL</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#162923] font-medium">{SITE_CONFIG.name}</h3>
                  <p className="text-xs font-sans uppercase tracking-widest text-[#697770] mt-1">
                    {SITE_CONFIG.role}
                  </p>
                  <p className="text-[11px] text-[#8C9892] mt-4 italic max-w-xs">
                    (Professional portrait photo will be displayed here)
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Introduction Section (with photo) */}
      <section className="py-20 sm:py-24 border-b border-[#E8E4DA] bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Scholar Secondary Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-lg overflow-hidden border border-[#E0DBD0] shadow-sm bg-[#FAF8F5] p-4">
                <div className="w-full h-full rounded border border-dashed border-[#C5A869]/50 flex flex-col items-center justify-center p-6 text-center bg-[#FAF8F5]">
                  <span className="font-arabic text-3xl text-[#0F382A] mb-2">ذبیح اللہ</span>
                  <p className="font-serif text-sm text-[#3E4A45] font-medium">{SITE_CONFIG.name}</p>
                  <p className="text-xs text-[#717E77] font-sans mt-1">Scholar & Researcher</p>
                  <div className="w-12 h-px bg-[#C5A869]/60 my-4" />
                  <p className="text-[11px] text-[#8B9891] italic">
                    Traditional Dars-e-Nizami & Modern Doctoral Research
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Bio & Learn More Button */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C5A869] font-medium">
                  Introduction
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#162923] font-normal tracking-tight">
                  {SITE_CONFIG.intro.heading}
                </h2>
              </div>

              <div className="h-px w-16 bg-[#0F382A]" />

              <p className="font-serif text-base sm:text-lg text-[#3E4A45] leading-[1.8] text-justify sm:text-left">
                {SITE_CONFIG.intro.text}
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-[#C5A869] bg-[#FAF8F5] text-[#0F382A] hover:bg-[#0F382A] hover:text-white transition-all text-sm font-serif group"
                >
                  <span>Learn More</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Five Section Cards */}
      <section className="py-20 sm:py-28 border-b border-[#E8E4DA] bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C5A869] font-medium">
              Areas of Focus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#162923] mt-2 font-normal">
              Scholarly Endeavors
            </h2>
            <div className="w-12 h-px bg-[#0F382A] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITE_CONFIG.sectionCards.map((card, idx) => {
              // For a balanced grid, allow 5 items to look spacious and clean
              return (
                <div
                  key={card.id}
                  className={`bg-white rounded-xl border border-[#E2DDD2] p-8 flex flex-col justify-between hover:border-[#C5A869] transition-all hover:shadow-sm ${
                    idx === 3 ? "lg:col-span-1 md:col-span-1" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <span className="text-xs font-sans font-mono text-[#8C9892] tracking-wider">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl text-[#162923] font-normal">
                      {card.title}
                    </h3>
                    <p className="font-serif text-[#55625B] text-sm sm:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-8">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#0F382A] hover:text-[#C5A869] font-medium transition-colors group"
                    >
                      <span>Explore</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Contact Strip */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#E2DDD2] text-[#0F382A]">
            <Mail size={20} />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#162923] font-normal">
            Scholarly Inquiries & Correspondence
          </h2>

          <p className="font-serif text-base text-[#55625B]">
            For academic collaborations, religious queries, or correspondence:
          </p>

          <p className="font-mono text-base sm:text-lg text-[#0F382A] font-medium selection:bg-[#C5A869]">
            {SITE_CONFIG.email}
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded border border-[#0F382A] bg-[#0F382A] text-white hover:bg-[#164E3D] transition-colors text-sm font-serif"
            >
              Contact
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
