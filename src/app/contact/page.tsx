"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building2, 
  Scroll, 
  Calendar,
  AlertCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightSearchModal from "@/components/SpotlightSearchModal";
import { SCHOLAR_PROFILE } from "@/data/scholarData";

export default function ContactPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [department, setDepartment] = useState("fatwa");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFullName("");
      setEmail("");
      setPhone("");
      setOrganization("");
      setSubject("");
      setMessage("");
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-bone text-ink flex flex-col font-serif selection:bg-chartreuse selection:text-ink">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Hero Header — Warm Bone Canvas */}
      <section className="py-16 sm:py-24 border-b border-ash relative overflow-hidden bg-bone">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="badge-tag">
              08 / CONTACT &amp; SECRETARIAT • رابطہ و دار الافتاء
            </span>

            <h1 className="font-serif text-[38px] sm:text-[54px] lg:text-[62px] font-light text-ink leading-[1.05] tracking-[-2px] sm:tracking-[-3.5px]">
              Direct Correspondence &amp; Academic Secretariat
            </h1>

            <div className="font-urdu text-[20px] text-fossil leading-relaxed">
              علمی رہنمائی، فتویٰ طلبی، کانفرنسز اور ادارہ جاتی تعاون کے لیے رابطہ
            </div>

            <p className="font-serif text-[17px] text-fossil leading-relaxed tracking-[-0.34px]">
              Connect directly with the secretariat of Mufti Zabeehullah Leghari for official fatwa inquiries, academic collaboration, conference keynotes, or media engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Channels Grid — Pure White Canvas */}
      <section className="py-16 bg-white border-b border-ash">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Channel 1: Dar ul Ifta Daharki */}
            <div className="bg-[#fbfaf8] border border-ash/80 rounded-cards p-6 hover:border-ink hover:bg-white hover:shadow-maze-subtle transition-all space-y-4">
              <div className="w-10 h-10 rounded-inputs bg-sand flex items-center justify-center text-ink">
                <Scroll className="w-5 h-5 text-olive" />
              </div>
              <div>
                <span className="badge-tag mb-2">OFFICIAL DECREES</span>
                <h3 className="font-serif text-[19px] font-light text-ink">
                  Dar ul Ifta Daharki
                </h3>
                <p className="font-serif text-[13px] text-fossil mt-1 leading-relaxed">
                  For formal Shariah decrees, commercial transaction audits, and family arbitration.
                </p>
              </div>
              <div className="pt-3 border-t border-sand text-[13px] font-mono text-ink space-y-1">
                <div>Email: {SCHOLAR_PROFILE.contactEmail}</div>
                <div>Hours: Mon–Thu 09:00–16:00</div>
              </div>
            </div>

            {/* Channel 2: Institute of Islamic Sciences */}
            <div className="bg-[#fbfaf8] border border-ash/80 rounded-cards p-6 hover:border-ink hover:bg-white hover:shadow-maze-subtle transition-all space-y-4">
              <div className="w-10 h-10 rounded-inputs bg-sand flex items-center justify-center text-ink">
                <Building2 className="w-5 h-5 text-olive" />
              </div>
              <div>
                <span className="badge-tag mb-2">ACADEMIC &amp; SEMINARY</span>
                <h3 className="font-serif text-[19px] font-light text-ink">
                  Institute of Islamic Sciences
                </h3>
                <p className="font-serif text-[13px] text-fossil mt-1 leading-relaxed">
                  Seminary curriculum, teacher training workshops, and educational admissions.
                </p>
              </div>
              <div className="pt-3 border-t border-sand text-[13px] font-mono text-ink space-y-1">
                <div>Location: Daharki, Sindh, Pakistan</div>
                <div>Status: Higher Studies Directorate</div>
              </div>
            </div>

            {/* Channel 3: Academic Secretariat */}
            <div className="bg-[#fbfaf8] border border-ash/80 rounded-cards p-6 hover:border-ink hover:bg-white hover:shadow-maze-subtle transition-all space-y-4">
              <div className="w-10 h-10 rounded-inputs bg-sand flex items-center justify-center text-ink">
                <Calendar className="w-5 h-5 text-olive" />
              </div>
              <div>
                <span className="badge-tag mb-2">SPEAKING &amp; RESEARCH</span>
                <h3 className="font-serif text-[19px] font-light text-ink">
                  Symposia &amp; Keynotes
                </h3>
                <p className="font-serif text-[13px] text-fossil mt-1 leading-relaxed">
                  University conferences, research symposiums, and television/podcast dialogues.
                </p>
              </div>
              <div className="pt-3 border-t border-sand text-[13px] font-mono text-ink space-y-1">
                <div>Notice Required: 2–3 Weeks</div>
                <div>Direct: secretariat@zabeehullah.com</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Form & Secretariat Information — Warm Parchment Sand */}
      <section className="py-20 bg-[#f4f1ea] border-b border-ash">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Interactive Submission Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-largecards border border-ash p-7 sm:p-9 shadow-maze-subtle space-y-6">
                
                <div>
                  <h2 className="font-serif text-[24px] font-light text-ink leading-tight">
                    Submit Formal Correspondence
                  </h2>
                  <p className="font-serif text-[14px] text-fossil mt-1">
                    Your correspondence will be routed directly to the appropriate desk at Daharki.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-inputs bg-[#f2f8eb] border border-[#bcdcb0] space-y-3 animate-fadeIn">
                    <div className="flex items-center gap-2 text-olive font-medium font-serif text-[17px]">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Correspondence Received Successfully</span>
                    </div>
                    <p className="font-serif text-[14px] text-smoke leading-relaxed">
                      Thank you. Your inquiry has been logged in the Dar ul Ifta secretariat system. An official confirmation has been generated, and our desk will respond within 48–72 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-ink text-[12px] py-1.5 px-4 mt-2"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Department Selector */}
                    <div>
                      <label className="block text-[12px] font-mono text-fossil uppercase tracking-wider mb-1.5">
                        Inquiry Nature / شعبہ منتخب کریں
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { id: "fatwa", label: "Ask Fatwa" },
                          { id: "research", label: "Research/Paper" },
                          { id: "speaking", label: "Conference" },
                          { id: "general", label: "General" },
                        ].map((d) => (
                          <button
                            key={d.id}
                            type="button"
                            onClick={() => setDepartment(d.id)}
                            className={`py-2 px-3 text-[12px] font-serif rounded-inputs border transition-colors ${
                              department === d.id
                                ? "bg-ink text-white border-ink"
                                : "bg-white text-fossil border-ash hover:border-ink"
                            }`}
                          >
                            {d.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-mono text-fossil uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Dr. / Maulana / Mr. / Ms."
                          className="w-full h-10 px-3 rounded-inputs border border-ash bg-white text-ink text-[14px] font-serif focus:outline-none focus:border-ink transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-mono text-fossil uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@domain.com"
                          className="w-full h-10 px-3 rounded-inputs border border-ash bg-white text-ink text-[14px] font-serif focus:outline-none focus:border-ink transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone & Organization Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-mono text-fossil uppercase tracking-wider mb-1">
                          WhatsApp / Phone Number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+92 300 0000000"
                          className="w-full h-10 px-3 rounded-inputs border border-ash bg-white text-ink text-[14px] font-serif focus:outline-none focus:border-ink transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-mono text-fossil uppercase tracking-wider mb-1">
                          Institution / Organization
                        </label>
                        <input
                          type="text"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          placeholder="University / Jamia / Firm"
                          className="w-full h-10 px-3 rounded-inputs border border-ash bg-white text-ink text-[14px] font-serif focus:outline-none focus:border-ink transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-[12px] font-mono text-fossil uppercase tracking-wider mb-1">
                        Subject Line
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Brief summary of inquiry"
                        className="w-full h-10 px-3 rounded-inputs border border-ash bg-white text-ink text-[14px] font-serif focus:outline-none focus:border-ink transition-colors"
                      />
                    </div>

                    {/* Message Box */}
                    <div>
                      <label className="block text-[12px] font-mono text-fossil uppercase tracking-wider mb-1">
                        Detailed Query or Proposal *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please articulate the juristic context, research query, or event specifications clearly..."
                        className="w-full p-3 rounded-inputs border border-ash bg-white text-ink text-[14px] font-serif focus:outline-none focus:border-ink transition-colors resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex items-center justify-between">
                      <div className="text-[12px] text-fossil font-serif">
                        Strictly confidential under Shariah ethics (*Amanah*).
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-ink text-[13px] py-2 px-5 flex items-center gap-1.5"
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Transmit Query</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </div>

            {/* Right Column: Protocols & Secretariat Notes */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Response Protocol Box */}
              <div className="bg-white rounded-largecards border border-ash p-6 shadow-maze-subtle space-y-4">
                <div className="flex items-center gap-2 text-ink font-serif text-[17px] font-light">
                  <Clock className="w-4 h-4 text-olive" />
                  <span>Turnaround Protocols &amp; Schedule</span>
                </div>

                <div className="space-y-3 text-[14px] font-serif">
                  <div className="p-3 rounded-inputs bg-[#fbfaf8] border border-ash/70">
                    <div className="font-medium text-ink">Online Fatawa (General Queries)</div>
                    <div className="text-fossil text-[13px] mt-0.5">Estimated 3 to 5 business days for full juristic formulation and seal.</div>
                  </div>

                  <div className="p-3 rounded-inputs bg-[#fbfaf8] border border-ash/70">
                    <div className="font-medium text-ink">Commercial &amp; Financial Fiqh</div>
                    <div className="text-fossil text-[13px] mt-0.5">Comprehensive review of contract documents requires 7 to 10 working days.</div>
                  </div>

                  <div className="p-3 rounded-inputs bg-[#fbfaf8] border border-ash/70">
                    <div className="font-medium text-ink">Urgent Family Arbitration / Talaq Matters</div>
                    <div className="text-fossil text-[13px] mt-0.5">Fast-tracked within 24–48 hours upon verification of parties.</div>
                  </div>
                </div>
              </div>

              {/* Privacy & Confidentiality Guarantee */}
              <div className="bg-[#dbf570] rounded-cards p-6 border border-ash text-ink space-y-2">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider font-semibold">
                  <AlertCircle className="w-4 h-4" />
                  <span>Confidentiality Guarantee (کتمان السر)</span>
                </div>
                <div className="font-serif text-[16px] font-light leading-snug">
                  Personal Details &amp; Disputed Facts Are Kept Strictly Confidential
                </div>
                <p className="text-[13px] text-ink/80 leading-relaxed">
                  In accordance with the sacred duties of the Mufti, all names, family particulars, and financial records submitted are never shared publicly or published in the fatwa repository without complete anonymization.
                </p>
                <div className="pt-1">
                  <Link href="/privacy" className="text-[12px] font-serif underline decoration-ink underline-offset-4">
                    Read our Privacy &amp; Fatwa Confidentiality Charter →
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
      <SpotlightSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </main>
  );
}
