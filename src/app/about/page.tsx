import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata = {
  title: "About | Zabeehullah Leghari",
  description: "About Zabeehullah Leghari — Islamic Scholar and Researcher.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 max-w-4xl mx-auto px-6">
      {/* Navigation breadcrumb */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#717E77] hover:text-[#0F382A] font-sans transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 pb-12 border-b border-[#E8E4DA]">
        <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C5A869] font-medium">
          Biography
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#162923] font-normal tracking-tight">
          About Zabeehullah Leghari
        </h1>
        <p className="font-serif italic text-lg sm:text-xl text-[#55625B]">
          {SITE_CONFIG.role}
        </p>
      </div>

      {/* Main Content Area */}
      <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Scholar Portrait Card */}
        <div className="md:col-span-5">
          <div className="w-full aspect-[4/5] rounded-xl border border-[#D8D2C4] bg-[#FAF8F5] p-5 shadow-sm">
            <div className="w-full h-full rounded border border-dashed border-[#C5A869]/50 flex flex-col items-center justify-center p-6 text-center bg-white/50">
              <div className="w-20 h-20 rounded-full border border-[#C5A869] flex items-center justify-center mb-3 bg-[#FAF8F5]">
                <span className="font-serif text-2xl text-[#0F382A]">ZL</span>
              </div>
              <h2 className="font-serif text-lg text-[#162923] font-medium">{SITE_CONFIG.name}</h2>
              <p className="text-xs text-[#717E77] font-sans mt-1">Islamic Scholar • Researcher</p>
              <div className="w-8 h-px bg-[#C5A869]/60 my-3" />
              <p className="text-[11px] text-[#8C9892] italic">
                (Professional photo will be added here)
              </p>
            </div>
          </div>
        </div>

        {/* Bio Text */}
        <div className="md:col-span-7 space-y-6">
          <p className="font-serif text-base sm:text-lg text-[#3E4A45] leading-[1.85] text-justify sm:text-left">
            {SITE_CONFIG.intro.text}
          </p>

          <div className="p-5 rounded-lg bg-[#FAF8F5] border border-[#E2DDD2] space-y-2">
            <p className="font-serif text-sm text-[#4D5A54] italic">
              &ldquo;A detailed biography, academic lineage, and research publications will be published here in subsequent updates.&rdquo;
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-[#0F382A] bg-[#0F382A] text-white hover:bg-[#164E3D] transition-colors text-sm font-serif"
            >
              <span>Get in Touch</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-[#D5CFBF] bg-white text-[#162923] hover:border-[#0F382A] transition-colors text-sm font-serif"
            >
              <span>View Research Areas</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
