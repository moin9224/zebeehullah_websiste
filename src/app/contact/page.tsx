"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import SocialIcons from "@/components/SocialIcons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Prepares mailto link as direct delivery method to the specified recipient
    const recipient = SITE_CONFIG.email;
    const subject = encodeURIComponent(`[Website Contact] ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Launch default email client
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

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
          Get in Touch
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#162923] font-normal tracking-tight">
          Contact
        </h1>
        <p className="font-serif text-base sm:text-lg text-[#55625B]">
          Please use the contact form below or reach out directly via email.
        </p>
      </div>

      <div className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-6 rounded-xl bg-white border border-[#E2DDD2] space-y-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E2DDD2] flex items-center justify-center text-[#0F382A]">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#7A8780] font-sans">
                Official Email
              </p>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="font-mono text-sm sm:text-base text-[#0F382A] hover:underline break-all mt-1 block"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Social & Academic Profiles (only renders if links are provided in siteConfig) */}
          <div className="p-6 rounded-xl bg-white border border-[#E2DDD2] space-y-4 shadow-sm">
            <h3 className="font-serif text-base text-[#162923]">
              Profiles & Academic Channels
            </h3>
            <p className="font-serif text-xs text-[#717E77]">
              Connect across social and scholarly research repositories.
            </p>
            <SocialIcons className="flex flex-wrap gap-2 pt-2" />
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xl border border-[#E2DDD2] shadow-sm">
          <h2 className="font-serif text-2xl text-[#162923] font-normal mb-6">
            Send a Message
          </h2>

          {status === "success" && (
            <div className="mb-6 p-4 rounded-lg bg-[#EBF4F0] border border-[#0F382A]/20 flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#0F382A] mt-0.5 shrink-0" />
              <div className="text-xs sm:text-sm text-[#0F382A] font-serif">
                Thank you. Your email client has been opened with your message ready to send to {SITE_CONFIG.email}.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label 
                htmlFor="name" 
                className="block text-xs uppercase tracking-wider text-[#4A5550] font-sans font-medium mb-1.5"
              >
                Name <span className="text-[#96783B]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className="w-full px-4 py-2.5 rounded-lg border border-[#D5CFBF] bg-[#FAF8F5] text-sm text-[#162923] placeholder-[#9AA59F] focus:outline-none focus:border-[#0F382A] focus:bg-white transition-all font-serif"
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-xs uppercase tracking-wider text-[#4A5550] font-sans font-medium mb-1.5"
              >
                Email <span className="text-[#96783B]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className="w-full px-4 py-2.5 rounded-lg border border-[#D5CFBF] bg-[#FAF8F5] text-sm text-[#162923] placeholder-[#9AA59F] focus:outline-none focus:border-[#0F382A] focus:bg-white transition-all font-serif"
              />
            </div>

            <div>
              <label 
                htmlFor="subject" 
                className="block text-xs uppercase tracking-wider text-[#4A5550] font-sans font-medium mb-1.5"
              >
                Subject <span className="text-[#96783B]">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Purpose of inquiry"
                className="w-full px-4 py-2.5 rounded-lg border border-[#D5CFBF] bg-[#FAF8F5] text-sm text-[#162923] placeholder-[#9AA59F] focus:outline-none focus:border-[#0F382A] focus:bg-white transition-all font-serif"
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-xs uppercase tracking-wider text-[#4A5550] font-sans font-medium mb-1.5"
              >
                Message <span className="text-[#96783B]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                className="w-full px-4 py-2.5 rounded-lg border border-[#D5CFBF] bg-[#FAF8F5] text-sm text-[#162923] placeholder-[#9AA59F] focus:outline-none focus:border-[#0F382A] focus:bg-white transition-all font-serif"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-[#0F382A] bg-[#0F382A] text-white hover:bg-[#164E3D] transition-colors text-sm font-serif shadow-sm cursor-pointer"
              >
                <Send size={15} />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
