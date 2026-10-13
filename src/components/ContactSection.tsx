"use client";

import React, { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  BookOpen, 
  ShieldCheck, 
  Share2, 
  Linkedin, 
  Youtube, 
  ExternalLink,
  Clock,
  ArrowRight
} from "lucide-react";
import { SCHOLAR_PROFILE } from "@/data/scholarData";

export default function ContactSection() {
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [subject, setSubject] = useState("Academic Correspondence");
  const [message, setMessage] = useState("");
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterSuccess(false);
      setNewsletterEmail("");
    }, 4000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setName("");
      setEmail("");
      setOrganization("");
      setMessage("");
    }, 4500);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-ash relative">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="badge-tag">
              08 / CONTACT & ACADEMIC COLLABORATION
            </span>
          </div>

          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-light text-ink tracking-[-1.5px] sm:tracking-[-2.3px] leading-[1.1]">
            Direct Correspondence & Academic Secretariat
          </h2>

          <div className="font-urdu text-[17px] text-fossil leading-relaxed">
            رابطہ و علمی مشاورت — مراسلت برائے تحقیق، سیمینارز اور افتاء
          </div>

          <p className="font-serif text-[17px] font-normal text-fossil leading-[1.45] tracking-[-0.34px]">
            Direct communication portal for university partnerships, keynote inquiries, legal consultations, and research coordination.
          </p>
        </div>

        {/* ACADEMIC NEWSLETTER CALLOUT BANNER — Royal Emerald & Gold */}
        <div className="bg-gradient-to-br from-[#0F382A] to-[#07120E] text-white rounded-largecards p-8 sm:p-12 mb-14 border border-gold/30 shadow-md relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center space-y-4 relative z-10">
            <div className="w-10 h-10 rounded-inputs bg-gold/20 border border-gold/40 flex items-center justify-center mx-auto text-gold-light">
              <Mail className="w-5 h-5 text-gold" />
            </div>

            <h3 className="font-serif text-[26px] sm:text-[32px] font-light text-white tracking-[-1px]">
              Subscribe to the Academic Dispatch
            </h3>

            <p className="font-serif text-[15px] text-[#A2ADA7] max-w-lg mx-auto font-light leading-relaxed">
              Receive newly released research papers, book reviews, quarterly Fatawa digests, and scholarly reflections directly in your inbox.
            </p>

            {newsletterSuccess ? (
              <div className="p-3.5 rounded-inputs bg-gold/15 border border-gold/40 text-gold-light text-[13px] font-serif flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span>Subscription confirmed! Thank you for joining our scholarly community.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your academic email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-inputs bg-black/30 border border-gold/30 text-white placeholder-[#A2ADA7] text-[14px] font-serif focus:outline-none focus:border-gold transition-colors"
                />
                <button
                  type="submit"
                  className="bg-gold text-[#07120E] font-medium hover:bg-gold-light transition-colors px-5 py-3 rounded-inputs text-[14px] font-serif flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            
            <p className="text-[12px] font-mono text-[#A2ADA7]/80">
              No spam. Delivered monthly. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* TWO COLUMNS: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Academic Footprint (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif text-[22px] font-light text-ink tracking-[-0.66px]">
                Direct Contact Information
              </h3>
              <p className="font-serif text-[14px] text-fossil leading-relaxed">
                Correspondence regarding Dar ul Ifta proceedings, university academic invitations, or editorial submissions may be sent directly through the following official channels:
              </p>
            </div>

            {/* Contact details cards — Paper card */}
            <div className="card-paper p-6 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-inputs bg-sand flex items-center justify-center text-ink flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-fossil">Email Address</div>
                  <a
                    href={`mailto:${SCHOLAR_PROFILE.contactEmail}`}
                    className="font-serif text-[16px] text-ink hover:underline decoration-olive underline-offset-4 break-all"
                  >
                    {SCHOLAR_PROFILE.contactEmail}
                  </a>
                  <div className="text-[12px] font-serif text-fossil mt-0.5">Direct Academic Secretariat</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-sand">
                <div className="w-9 h-9 rounded-inputs bg-sand flex items-center justify-center text-ink flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-fossil">Office Location</div>
                  <div className="font-serif text-[15px] text-ink">
                    {SCHOLAR_PROFILE.location}
                  </div>
                  <div className="text-[12px] font-serif text-fossil">
                    Dar ul Ifta Daharki • Institute of Islamic Sciences
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-sand">
                <div className="w-9 h-9 rounded-inputs bg-sand flex items-center justify-center text-ink flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-fossil">Office Hours</div>
                  <div className="font-serif text-[14px] text-ink">
                    Saturday – Thursday: 9:00 AM – 2:00 PM (PKT)
                  </div>
                  <div className="text-[12px] font-serif text-fossil">
                    Closed on Fridays for Jumu'ah & Da'wah Dispatches
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Profiles & Repositories */}
            <div className="space-y-3">
              <h4 className="text-[12px] font-mono uppercase tracking-wider text-fossil">
                Verified Scholarly Repositories
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="card-paper p-3 flex items-center gap-2 text-[13px] font-serif text-ink hover:border-ink transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-fossil" />
                  <span>Google Scholar</span>
                </a>

                <a
                  href="https://orcid.org"
                  target="_blank"
                  rel="noreferrer"
                  className="card-paper p-3 flex items-center gap-2 text-[13px] font-serif text-ink hover:border-ink transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-fossil" />
                  <span>ORCID Registry</span>
                </a>

                <a
                  href="https://www.researchgate.net"
                  target="_blank"
                  rel="noreferrer"
                  className="card-paper p-3 flex items-center gap-2 text-[13px] font-serif text-ink hover:border-ink transition-colors"
                >
                  <Share2 className="w-4 h-4 text-fossil" />
                  <span>ResearchGate</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="card-paper p-3 flex items-center gap-2 text-[13px] font-serif text-ink hover:border-ink transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-fossil" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="card-paper p-3 flex items-center gap-2 text-[13px] font-serif text-ink hover:border-ink transition-colors col-span-2"
                >
                  <Youtube className="w-4 h-4 text-ink" />
                  <span className="truncate">Official YouTube Lectures Channel</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Correspondence Form (7 cols) */}
          <div className="lg:col-span-7 card-paper p-7 sm:p-8 space-y-5">
            <div className="border-b border-sand pb-3 space-y-1">
              <span className="badge-tag">Academic Form</span>
              <h3 className="font-serif text-[22px] font-light text-ink tracking-[-0.66px]">
                Academic & General Correspondence Form
              </h3>
              <p className="font-serif text-[13px] text-fossil">
                Please provide institutional details and select the nature of your inquiry.
              </p>
            </div>

            {contactSuccess ? (
              <div className="p-6 rounded-inputs bg-sand/50 text-center space-y-2 border border-ash">
                <CheckCircle2 className="w-8 h-8 text-olive mx-auto" />
                <h4 className="font-serif text-[18px] text-ink">Message Successfully Dispatched</h4>
                <p className="font-serif text-[14px] text-fossil max-w-md mx-auto leading-relaxed">
                  Your communication has been registered at the academic secretariat of Mufti Zabeehullah Leghari. An administrative officer will respond within 24 to 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-serif text-ink mb-1">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Prof. Tariq Mahmood"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-serif text-ink mb-1">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tariq@university.edu.pk"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-serif text-ink mb-1">
                      Organization / Seminary
                    </label>
                    <input
                      type="text"
                      placeholder="University / Jamia / Corporate Body"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-serif text-ink mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors"
                    >
                      <option value="Academic Correspondence">Academic Correspondence</option>
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="Fatwa Query">Fatwa Query</option>
                      <option value="Seminar Invitation">Seminar / Keynote Invitation</option>
                      <option value="General Query">General Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-serif text-ink mb-1">
                    Your Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Enter the complete text of your proposal, inquiry, or correspondence..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-ink w-full py-3.5 text-[15px] justify-center"
                >
                  <Send className="w-4 h-4 text-chartreuse" />
                  <span>Send Message / پیغام ارسال کریں</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
