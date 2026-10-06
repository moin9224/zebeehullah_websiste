"use client";

import React, { useState, useMemo } from "react";
import { 
  Scroll, 
  Search, 
  Send, 
  FileText, 
  CheckCircle2, 
  Printer, 
  Copy, 
  X, 
  Clock, 
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  Check,
  ArrowRight,
  Sparkles,
  Lock,
  Layers,
  FileCheck
} from "lucide-react";
import { SAMPLE_FATAWA } from "@/data/scholarData";
import { Fatwa, FatwaCategory } from "@/types";

interface DarUlIftaSectionProps {
  selectedFatwaFromSearch?: Fatwa | null;
  onClearSelectedFatwa?: () => void;
}

export default function DarUlIftaSection({
  selectedFatwaFromSearch,
  onClearSelectedFatwa,
}: DarUlIftaSectionProps) {
  const [activeTab, setActiveTab] = useState<"archive" | "ask" | "track">("archive");
  
  // Archive States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedFatwa, setSelectedFatwa] = useState<Fatwa | null>(selectedFatwaFromSearch || null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Sync if selectedFatwaFromSearch changes
  React.useEffect(() => {
    if (selectedFatwaFromSearch) {
      setSelectedFatwa(selectedFatwaFromSearch);
      setActiveTab("archive");
    }
  }, [selectedFatwaFromSearch]);

  // Form States
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [urgency, setUrgency] = useState<"Routine" | "Urgent" | "Corporate Review">("Routine");
  const [category, setCategory] = useState<FatwaCategory>("Commercial & Business Fiqh");
  const [isConfidential, setIsConfidential] = useState(false);
  const [question, setQuestion] = useState("");
  const [submittedTicket, setSubmittedTicket] = useState<{ 
    id: string; 
    name: string; 
    date: string;
    category: string;
    urgency: string;
  } | null>(null);
  const [formError, setFormError] = useState("");

  // Track Ticket State
  const [trackTicketInput, setTrackTicketInput] = useState("");
  const [trackedResult, setTrackedResult] = useState<{
    found: boolean;
    ticketId?: string;
    status?: string;
    details?: string;
    date?: string;
    estimatedCompletion?: string;
  } | null>(null);

  const categories = [
    "All",
    "Commercial & Business Fiqh",
    "Fiqh al-Ibadat",
    "Family Law",
    "General",
  ];

  // Filtered Fatawa
  const filteredFatawa = useMemo(() => {
    return SAMPLE_FATAWA.filter((f) => {
      const matchesCat = selectedCategory === "All" || f.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        f.title.toLowerCase().includes(q) ||
        f.titleUrdu.toLowerCase().includes(q) ||
        f.question.toLowerCase().includes(q) ||
        f.fatwaNumber.toLowerCase().includes(q) ||
        f.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleSubmitFatwa = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !contact.trim() || !question.trim()) {
      setFormError("Please fill out all mandatory fields before submitting.");
      return;
    }
    setFormError("");

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const ticketId = `DID-2026-Q${randomNum}`;

    setSubmittedTicket({
      id: ticketId,
      name: fullName,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      category: category,
      urgency: urgency,
    });

    setFullName("");
    setContact("");
    setQuestion("");
  };

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = trackTicketInput.trim().toUpperCase();
    if (!query) return;

    if (query.includes("DID") || query.length >= 6) {
      setTrackedResult({
        found: true,
        ticketId: query,
        status: "In Jurisprudential Research (قيد التحقيق الفقهي)",
        details:
          "Your query has been authenticated in the Dar ul Ifta Daharki registry. The inquiry is currently undergoing classical legal derivation (Tahqiq al-Manat) supervised directly by Mufti Zabeehullah Leghari.",
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        estimatedCompletion: "2-3 business days",
      });
    } else {
      setTrackedResult({
        found: false,
        ticketId: query,
        status: "Record Not Found",
        details: "No active query matches this reference ID. Please check the ticket number sent to your email or WhatsApp.",
      });
    }
  };

  const copyFatwaText = () => {
    if (!selectedFatwa) return;
    navigator.clipboard.writeText(
      `[Dar ul Ifta Daharki - Official Decree]\nRef: ${selectedFatwa.fatwaNumber}\nTitle: ${selectedFatwa.title}\nMufti: ${selectedFatwa.mufti}\nRuling: ${selectedFatwa.answerSummary}`
    );
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="dar-ul-ifta" className="py-24 bg-white border-b border-ash relative overflow-hidden">
      
      {/* Pixel Globe Section Motif in Chartreuse (#dbf570) behind the section header */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-chartreuse/25 pointer-events-none blur-2xl" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full pixel-globe-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline Overlay — Centered Phonic 46–58px / 300 Ink headline */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2">
            <span className="badge-tag">
              02 / DAR UL IFTA DAHARKI
            </span>
          </div>

          <h2 className="font-serif text-[34px] sm:text-[46px] lg:text-[54px] font-light text-ink tracking-[-2px] sm:tracking-[-3.48px] leading-[1.05]">
            Institutional fatwa issuing, research & dispute arbitration
          </h2>

          <div className="font-urdu text-[18px] sm:text-[20px] text-fossil">
            دار الافتاء ڈہرکی و شعبہ استفتائی — شرعی رہنمائی، مفتویات اور آن لائن استفتاء
          </div>

          <p className="font-serif text-[17px] font-normal text-fossil leading-[1.45] tracking-[-0.34px] max-w-xl mx-auto">
            Authorized juristic platform delivering authenticated Islamic legal decrees, commercial contract vetting, and personal guidance supervised directly by Mufti Zabeehullah Leghari.
          </p>
        </div>

        {/* Tab Navigation Segment Control — Active tab on Sand (#eae6e1) pill with 8px radius */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("archive")}
            className={`font-serif text-[15px] sm:text-[17px] font-light transition-colors ${
              activeTab === "archive"
                ? "tab-sand-active"
                : "px-5 py-3 rounded-inputs text-fossil hover:text-ink"
            }`}
          >
            Fatwa Archive & Search (فتاویٰ کا ذخیرہ)
          </button>

          <button
            onClick={() => setActiveTab("ask")}
            className={`font-serif text-[15px] sm:text-[17px] font-light transition-colors ${
              activeTab === "ask"
                ? "tab-sand-active"
                : "px-5 py-3 rounded-inputs text-fossil hover:text-ink"
            }`}
          >
            Ask a Fatwa (آن لائن استفتاء)
          </button>

          <button
            onClick={() => setActiveTab("track")}
            className={`font-serif text-[15px] sm:text-[17px] font-light transition-colors ${
              activeTab === "track"
                ? "tab-sand-active"
                : "px-5 py-3 rounded-inputs text-fossil hover:text-ink"
            }`}
          >
            Track Query Status
          </button>
        </div>

        {/* TAB 1: ARCHIVE */}
        {activeTab === "archive" && (
          <div className="space-y-6 animate-fadeIn">
            {/* Search Filter Header — Flat Paper Card */}
            <div className="card-paper p-5 space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-fossil" />
                <input
                  type="text"
                  placeholder="Search previously issued rulings by keyword, Arabic terms, or decree ID (e.g. Crypto, Murabaha, Nikah, DID-2026)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink placeholder-fossil focus:outline-none focus:border-ink transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-fossil hover:text-ink text-sm"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => {
                  const count =
                    cat === "All"
                      ? SAMPLE_FATAWA.length
                      : SAMPLE_FATAWA.filter((f) => f.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-inputs text-[13px] font-serif transition-colors flex items-center gap-1.5 ${
                        selectedCategory === cat
                          ? "bg-ink text-paper"
                          : "bg-bone text-fossil hover:text-ink border border-ash"
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-[11px] font-mono px-1 rounded ${
                        selectedCategory === cat ? "bg-paper/20 text-paper" : "text-fossil"
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Fatawa Cards Grid — Flat Paper Cards (card-paper), 12px radius, hairline borders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredFatawa.map((fatwa) => (
                <div
                  key={fatwa.id}
                  className="card-paper p-6 flex flex-col justify-between hover:border-ink transition-colors group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[12px] font-serif">
                      <span className="badge-tag">
                        {fatwa.fatwaNumber}
                      </span>
                      <span className="text-fossil font-mono">
                        {fatwa.date}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-fossil">
                        {fatwa.category}
                      </span>
                      <h3 className="font-serif text-[20px] font-light text-ink leading-snug tracking-[-0.66px] mt-1">
                        {fatwa.title}
                      </h3>
                      <p className="font-urdu text-[14px] text-fossil mt-1 leading-relaxed">
                        {fatwa.titleUrdu}
                      </p>
                    </div>

                    <div className="bg-bone p-3.5 rounded-inputs border border-sand space-y-1">
                      <div className="text-[11px] font-mono text-fossil uppercase tracking-wider">
                        Juristic Summary (خلاصۂ فتویٰ):
                      </div>
                      <p className="font-serif text-[13px] text-smoke leading-relaxed line-clamp-3">
                        {fatwa.answerSummary}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {fatwa.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-[4px] text-[11px] bg-sand/60 text-fossil font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-sand flex items-center justify-between text-[13px] font-serif">
                    <div className="text-fossil">
                      Mufti Zabeehullah Leghari
                    </div>

                    <button
                      onClick={() => setSelectedFatwa(fatwa)}
                      className="inline-flex items-center gap-1.5 text-ink hover:underline decoration-olive underline-offset-4"
                    >
                      <span>Read Full Ruling</span>
                      <span className="text-xs group-hover:translate-x-0.5 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredFatawa.length === 0 && (
              <div className="text-center py-16 card-paper space-y-3">
                <AlertCircle className="w-8 h-8 text-fossil mx-auto" />
                <h4 className="font-serif text-[18px] text-ink font-light">No Fatawa Found</h4>
                <p className="font-serif text-[14px] text-fossil max-w-sm mx-auto">
                  No rulings match your query. Try clearing your filters or submit a new inquiry below.
                </p>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: ASK A FATWA FORM */}
        {activeTab === "ask" && (
          <div className="max-w-2xl mx-auto card-paper p-8 animate-fadeIn space-y-6">
            <div className="border-b border-sand pb-4 space-y-1">
              <span className="badge-tag">Online Istifta Service</span>
              <h3 className="font-serif text-[24px] font-light text-ink tracking-[-0.66px]">
                Submit Juristic Query (آن لائن فتویٰ فارم)
              </h3>
              <p className="font-serif text-[14px] text-fossil">
                Your question will be reviewed directly by the research board of Dar ul Ifta Daharki.
              </p>
            </div>

            {submittedTicket ? (
              <div className="p-6 rounded-inputs bg-sand/50 border border-ash text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-olive mx-auto" />
                <h4 className="font-serif text-[20px] font-light text-ink">Istifta Successfully Registered</h4>
                <div className="p-3 bg-paper rounded-inputs border border-ash inline-block font-mono text-[14px] text-ink font-medium">
                  Reference ID: {submittedTicket.id}
                </div>
                <p className="font-serif text-[14px] text-fossil leading-relaxed max-w-md mx-auto">
                  Dear {submittedTicket.name}, your query has been routed to the juristic council. Please preserve your ticket ID to track the formal decree status.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmittedTicket(null)}
                    className="btn-ink text-[14px] py-2 px-5"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitFatwa} className="space-y-4">
                {formError && (
                  <div className="p-3 rounded-inputs bg-sand text-ink text-[13px] font-serif border border-pebble">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-serif text-ink mb-1">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Asim Raza"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-serif text-ink mb-1">
                      Email or WhatsApp <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. +92 300 1234567"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-serif text-ink mb-1">
                      Question Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as FatwaCategory)}
                      className="w-full px-3.5 py-2.5 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors"
                    >
                      <option value="Commercial & Business Fiqh">Commercial & Business Fiqh</option>
                      <option value="Fiqh al-Ibadat">Fiqh al-Ibadat (Worship)</option>
                      <option value="Family Law">Family Law & Inheritance</option>
                      <option value="General">General / Contemporary Issues</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-serif text-ink mb-1">
                      Urgency Level
                    </label>
                    <select
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors"
                    >
                      <option value="Routine">Routine (3-5 Business Days)</option>
                      <option value="Urgent">Urgent (48 Hours)</option>
                      <option value="Corporate Review">Corporate Contract Review</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-serif text-ink mb-1">
                    Detailed Question Box / استفتاء <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Provide the complete factual circumstances of your inquiry with relevant contractual details or family specifics..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors leading-relaxed"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-ink w-full py-3.5 text-[15px] justify-center"
                  >
                    <Send className="w-4 h-4 text-chartreuse" />
                    <span>Submit Question / فتویٰ ارسال کریں</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* TAB 3: TRACK TICKET */}
        {activeTab === "track" && (
          <div className="max-w-xl mx-auto card-paper p-8 animate-fadeIn space-y-6">
            <div className="border-b border-sand pb-4 space-y-1">
              <span className="badge-tag">Status Verification</span>
              <h3 className="font-serif text-[24px] font-light text-ink tracking-[-0.66px]">
                Track Submitted Inquiry
              </h3>
              <p className="font-serif text-[14px] text-fossil">
                Enter your reference code (e.g. DID-2026-Q8942) to check verification progress.
              </p>
            </div>

            <form onSubmit={handleTrackSubmit} className="flex gap-2">
              <input
                type="text"
                placeholder="Enter Reference ID..."
                value={trackTicketInput}
                onChange={(e) => setTrackTicketInput(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors uppercase font-mono"
              />
              <button
                type="submit"
                className="btn-ink text-[14px] px-5"
              >
                Track
              </button>
            </form>

            {trackedResult && (
              <div className="p-5 rounded-inputs bg-bone border border-ash space-y-3">
                <div className="flex items-center justify-between border-b border-sand pb-2">
                  <span className="font-mono text-[13px] text-ink">{trackedResult.ticketId}</span>
                  <span className="badge-tag">{trackedResult.status}</span>
                </div>
                <p className="font-serif text-[14px] text-smoke leading-relaxed">
                  {trackedResult.details}
                </p>
                {trackedResult.estimatedCompletion && (
                  <div className="text-[12px] font-mono text-fossil">
                    Estimated Time: {trackedResult.estimatedCompletion}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </div>

      {/* FULL FATWA OFFICIAL DECREED DOCUMENT MODAL — Paper card, 16px radius, flat with hairline border */}
      {selectedFatwa && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-paper max-w-3xl w-full max-h-[90vh] rounded-largecards border border-ash overflow-hidden shadow-maze-subtle flex flex-col">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-sand flex items-center justify-between bg-bone">
              <div className="flex items-center gap-3">
                <span className="badge-tag">
                  {selectedFatwa.fatwaNumber}
                </span>
                <span className="text-[12px] font-mono text-fossil">
                  {selectedFatwa.date}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyFatwaText}
                  className="px-3 py-1.5 rounded-inputs border border-ash bg-paper text-[12px] font-serif text-fossil hover:text-ink transition-colors flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedLink ? "Copied" : "Copy Decree"}</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 rounded-inputs border border-ash bg-paper text-[12px] font-serif text-fossil hover:text-ink transition-colors flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedFatwa(null);
                    if (onClearSelectedFatwa) onClearSelectedFatwa();
                  }}
                  className="w-8 h-8 rounded-inputs border border-ash bg-paper flex items-center justify-center text-fossil hover:text-ink transition-colors text-base"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Decree Seal Banner */}
              <div className="text-center border-b border-sand pb-6 space-y-1">
                <div className="font-arabic text-[22px] text-ink font-bold">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </div>
                <div className="text-[12px] font-mono uppercase tracking-wider text-fossil">
                  Dar ul Ifta Daharki • Official Jurisprudential Decree
                </div>
                <h3 className="font-serif text-[24px] sm:text-[28px] font-light text-ink mt-2 leading-snug">
                  {selectedFatwa.title}
                </h3>
                <p className="font-urdu text-[16px] text-fossil">
                  {selectedFatwa.titleUrdu}
                </p>
              </div>

              {/* Question Section */}
              <div className="space-y-2">
                <div className="text-[12px] font-mono uppercase tracking-wider text-fossil">
                  Question (الاستفتاء):
                </div>
                <div className="p-4 rounded-inputs bg-bone border border-sand font-serif text-[15px] text-smoke leading-relaxed">
                  {selectedFatwa.question}
                </div>
              </div>

              {/* Full Answer Ruling */}
              <div className="space-y-2">
                <div className="text-[12px] font-mono uppercase tracking-wider text-fossil">
                  Juristic Ruling (الجواب وبالله التوفيق):
                </div>
                <div className="p-5 rounded-inputs bg-sand/40 border border-ash font-serif text-[15px] text-ink leading-relaxed whitespace-pre-line">
                  {selectedFatwa.fullAnswer}
                </div>
              </div>

              {/* Classical Evidentiary Citations */}
              {selectedFatwa.arabicCitations && selectedFatwa.arabicCitations.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[12px] font-mono uppercase tracking-wider text-fossil">
                    Authoritative Citations (المراجع الفقهية):
                  </div>
                  <div className="p-3.5 rounded-inputs bg-bone border border-sand space-y-1.5">
                    {selectedFatwa.arabicCitations.map((src, i) => (
                      <div key={i} className="text-[13px] font-serif text-fossil flex items-start gap-2">
                        <span className="font-mono text-ink text-xs">[{i + 1}]</span>
                        <span>{src}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Signature Footer */}
              <div className="pt-4 border-t border-sand flex items-center justify-between text-[13px] font-serif">
                <div>
                  <div className="font-medium text-ink">{selectedFatwa.mufti}</div>
                  <div className="text-fossil text-[12px]">Chief Jurist & CEO, Dar ul Ifta Daharki</div>
                </div>
                <div className="text-right">
                  <div className="badge-tag">Canonically Verified</div>
                  <div className="text-[11px] font-mono text-fossil mt-1">Ref: {selectedFatwa.fatwaNumber}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
