import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

interface InnerPageTemplateProps {
  title: string;
  introduction: string;
  sectionKey?: string;
}

export default function InnerPageTemplate({
  title,
  introduction,
}: InnerPageTemplateProps) {
  return (
    <div className="py-16 sm:py-24 max-w-4xl mx-auto px-6">
      {/* Back to Home link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#717E77] hover:text-[#0F382A] font-sans transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="space-y-4 pb-12 border-b border-[#E8E4DA]">
        <h1 className="font-serif text-3xl sm:text-5xl text-[#162923] font-normal tracking-tight">
          {title}
        </h1>
        <p className="font-serif text-lg sm:text-xl text-[#55625B] leading-relaxed">
          {introduction}
        </p>
      </div>

      {/* Clean, Dignified Coming Soon Notice */}
      <div className="py-20 sm:py-28 text-center space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#E2DDD2] text-[#C5A869] shadow-sm mb-2">
          <Clock size={20} />
        </div>
        
        <h2 className="font-serif text-xl sm:text-2xl text-[#162923] font-normal italic">
          Content coming soon, in sha Allah.
        </h2>

        <p className="font-serif text-sm text-[#7D8A83] max-w-md mx-auto leading-relaxed">
          This repository is currently being curated and will be published systematically. Please check back soon or get in touch for specific scholarly inquiries.
        </p>

        <div className="pt-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#0F382A] hover:text-[#C5A869] font-medium border-b border-[#0F382A] pb-0.5 hover:border-[#C5A869] transition-all"
          >
            Inquire via Contact Page
          </Link>
        </div>
      </div>
    </div>
  );
}
