"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Scroll, 
  BookOpen, 
  GraduationCap, 
  FileText,
  ArrowRight 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightSearchModal from "@/components/SpotlightSearchModal";

interface FAQItem {
  id: string;
  category: "ifta" | "books" | "institute" | "academic";
  question: string;
  questionUrdu: string;
  answer: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "ifta",
    question: "Is there any fee charged for obtaining an official Fatwa from Dar ul Ifta Daharki?",
    questionUrdu: "کیا دار الافتاء ڈہرکی سے فتویٰ حاصل کرنے پر کوئی فیس لاگو ہوتی ہے؟",
    answer: "No. Issuing Shariah guidance and legal rulings (Ifta) is considered an obligatory religious service (Fard Kifayah) in Islamic jurisprudence. Dar ul Ifta Daharki provides all standard religious decrees, inheritance distributions, and business consultations completely free of charge. Only exceptional formal commercial arbitration or corporate Shariah board audits may involve administrative costs."
  },
  {
    id: "faq-2",
    category: "ifta",
    question: "How long does it take to receive a formal written decree?",
    questionUrdu: "آن لائن فتویٰ موصول ہونے میں کتنا وقت درکار ہوتا ہے؟",
    answer: "Standard queries regarding worship (Ibadat) and everyday transactions are typically resolved within 3 to 5 business days. Complex corporate contracts, fintech inquiries, or complicated inheritance distribution matrices require 7 to 10 working days for full review, text verification, and official stamping."
  },
  {
    id: "faq-3",
    category: "ifta",
    question: "Can I verify the authenticity of an issued Fatwa online?",
    questionUrdu: "کیا جاری کردہ فتوے کی تصدیق آن لائن کی جا سکتی ہے؟",
    answer: "Yes. Every Fatwa issued by Dar ul Ifta Daharki carries a unique Tracking Ticket ID and an official institutional seal. You can input this reference code directly into our online tracker or email the secretariat to verify the authenticity of the signed decree."
  },
  {
    id: "faq-4",
    category: "ifta",
    question: "Are my personal and family matters kept confidential?",
    questionUrdu: "کیا سائل کے ذاتی یا خاندانی معاملات کو خفیہ رکھا جاتا ہے؟",
    answer: "Absolutely. In accordance with the sacred juristic canon of Kitman al-Sirr (sacred confidentiality), all questioner names, contact numbers, and specific disputed facts are permanently confidential. If a ruling is later published in the educational archive, all identities are completely anonymized."
  },
  {
    id: "faq-5",
    category: "books",
    question: "How can I request a physical hard copy of Mufti Zabeehullah's treatises?",
    questionUrdu: "مفتی صاحب کی تصانیف کی ہارڈ کاپی کیسے حاصل کی جا سکتی ہے؟",
    answer: "You can click 'Request Hard Copy' on any book card in the Books section, or send a request through our Contact page. Our Daharki publication secretariat ships hardbound copies via courier across Pakistan and internationally upon request."
  },
  {
    id: "faq-6",
    category: "books",
    question: "Are PDF downloads of authored works completely free for students and researchers?",
    questionUrdu: "کیا کتب کے پی ڈی ایف نسخے محققین اور طلبہ کے لیے مفت دستیاب ہیں؟",
    answer: "Yes. All digital treatises, monographs, and research papers authored by Mufti Zabeehullah Leghari are available in downloadable PDF format at no cost for academic, educational, and personal study purposes."
  },
  {
    id: "faq-7",
    category: "institute",
    question: "What courses are offered at the Institute of Islamic Sciences Daharki?",
    questionUrdu: "انسٹیٹیوٹ آف اسلامک سائنسز ڈہرکی میں کون سے تعلیمی پروگرامز جاری ہیں؟",
    answer: "The Institute offers advanced post-graduate Dars-e-Nizami modules, specialized Takhassus fil-Fiqh wal-Ifta training, classical Arabic rhetoric, and specialized teacher development masterclasses on the 5E Instructional Model and positive educational psychology."
  },
  {
    id: "faq-8",
    category: "academic",
    question: "How should Mufti Zabeehullah's papers and fatawa be cited in academic theses?",
    questionUrdu: "تحقیقی مقالہ جات میں مفتی صاحب کے کام کا حوالہ کیسے دیا جائے؟",
    answer: "Our Research Papers section includes a built-in citation generator supporting Chicago Manual of Style (CMS 17th ed. Notes & Bibliography), APA 7th Edition, and MLA 9th Edition. You can copy pre-formatted citations with one click from each article reader."
  },
  {
    id: "faq-9",
    category: "academic",
    question: "How can universities invite Mufti Zabeehullah for a keynote lecture or workshop?",
    questionUrdu: "یونیورسٹیز اور تعلیمی ادارے سیمینار یا لیکچر کے لیے کیسے رابطہ کریں؟",
    answer: "Academic institutions, research departments, and conference organizers should submit an invitation through our Contact Secretariat page at least 3 weeks prior to the event date to allow for scheduling and paper preparation."
  }
];

export default function FAQPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "ifta" | "books" | "institute" | "academic">("all");
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.questionUrdu.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-bone text-ink flex flex-col font-serif selection:bg-gold selection:text-white">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Hero Header — Warm Bone Canvas */}
      <section className="py-16 sm:py-24 border-b border-ash relative overflow-hidden bg-bone">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="badge-tag">
              KNOWLEDGE BASE • سوال و جواب
            </span>

            <h1 className="font-serif text-[38px] sm:text-[54px] lg:text-[62px] font-light text-ink leading-[1.05] tracking-[-2px] sm:tracking-[-3.5px]">
              Frequently Asked Questions (FAQ)
            </h1>

            <div className="font-urdu text-[19px] text-fossil leading-relaxed">
              دار الافتاء، فتاویٰ طلبی، کتب کی ترسیل اور علمی سرگرمیوں سے متعلق عمومی استفسارات
            </div>

            <p className="font-serif text-[17px] text-fossil leading-relaxed tracking-[-0.34px]">
              Find immediate, authoritative answers regarding fatwa procedures, book deliveries, academic citations, and seminary programs.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Live Search Bar — Pure White */}
      <section className="py-8 bg-white border-b border-ash">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: "all", label: "All Questions" },
                { id: "ifta", label: "Dar ul Ifta & Fatwa" },
                { id: "books", label: "Books & Hard Copies" },
                { id: "institute", label: "Seminary & Courses" },
                { id: "academic", label: "Citations & Speaking" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`py-1.5 px-3 rounded-inputs text-[13px] font-serif transition-colors ${
                    activeCategory === cat.id
                      ? "bg-ink text-white font-medium shadow-sm"
                      : "bg-[#fbfaf8] border border-ash/80 text-fossil hover:text-ink hover:bg-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fossil" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search queries / سوال تلاش کریں..."
                className="w-full h-9 pl-9 pr-3 rounded-inputs border border-ash bg-[#fbfaf8] text-ink text-[13px] font-serif focus:outline-none focus:border-ink focus:bg-white transition-colors"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Main Accordion List — Warm Parchment Sand */}
      <section className="py-20 bg-[#f4f1ea] border-b border-ash">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          <div className="flex items-center justify-between text-[12px] font-mono text-fossil pb-2">
            <span>Showing {filteredFaqs.length} Inquiries</span>
            <span>Category: {activeCategory.toUpperCase()}</span>
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-largecards p-12 text-center border border-ash space-y-3">
              <HelpCircle className="w-8 h-8 text-fossil mx-auto" />
              <div className="font-serif text-[18px] text-ink">No matching answers found</div>
              <p className="font-serif text-[14px] text-fossil max-w-md mx-auto">
                We couldn&apos;t find an answer matching &ldquo;{searchQuery}&rdquo;. You can submit your question directly to our secretariat.
              </p>
              <div className="pt-2">
                <Link href="/contact" className="btn-ink text-[12px] py-1.5 px-4 inline-flex">
                  Ask Your Question Directly
                </Link>
              </div>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-cards border border-ash/80 overflow-hidden shadow-maze-subtle transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-[#fcfbf9] transition-colors focus:outline-none"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="badge-tag">
                          {faq.category === "ifta" && "IFTA & FATWA"}
                          {faq.category === "books" && "PUBLICATIONS"}
                          {faq.category === "institute" && "SEMINARY"}
                          {faq.category === "academic" && "ACADEMIC"}
                        </span>
                      </div>
                      <h3 className="font-serif text-[17px] sm:text-[18px] font-normal text-ink leading-snug">
                        {faq.question}
                      </h3>
                      <div className="font-urdu text-[14px] text-fossil">
                        {faq.questionUrdu}
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-inputs bg-sand flex items-center justify-center text-ink flex-shrink-0 mt-1">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-fossil" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-sand text-smoke font-serif text-[15px] leading-relaxed">
                          <p>{faq.answer}</p>
                          
                          <div className="pt-4 mt-4 border-t border-sand flex items-center justify-between text-[12px] font-serif text-fossil">
                            <span>Authoritative Juristic Advisory</span>
                            <Link 
                              href="/contact" 
                              className="text-emerald hover:text-emerald-light hover:underline font-medium inline-flex items-center gap-1 transition-colors"
                            >
                              <span>Have a specific follow-up?</span>
                              <span>→</span>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}

        </div>
      </section>

      {/* Still Have Questions CTA — Soft Sage Wash */}
      <section className="py-16 bg-[#EBF4F0] border-b border-[#D2E2DA]">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="badge-tag bg-white text-ink border border-[#D2E2DA]">
            DAR UL IFTA DAHARKI
          </span>
          <h2 className="font-serif text-[30px] sm:text-[38px] font-light text-ink tracking-[-1.5px]">
            Have a Specific Shariah Query or Case to Discuss?
          </h2>
          <p className="font-serif text-[15px] text-fossil max-w-xl mx-auto">
            Our juristic secretariat is ready to review your contract clauses, family arbitration case, or academic thesis question.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn-ink text-[13px] py-2 px-5">
              Submit Your Question Online
            </Link>
            <Link href="/" className="btn-ghost text-[13px] py-2 px-5 bg-white">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <SpotlightSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </main>
  );
}
