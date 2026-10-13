"use client";

import React, { useState } from "react";
import { 
  FileText, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  X, 
  Copy, 
  Quote, 
  Check, 
  Award
} from "lucide-react";
import { ARTICLES_DATA } from "@/data/scholarData";
import { Article } from "@/types";

interface ArticlesSectionProps {
  selectedArticleFromSearch?: Article | null;
  onClearSelectedArticle?: () => void;
}

export default function ArticlesSection({
  selectedArticleFromSearch,
  onClearSelectedArticle,
}: ArticlesSectionProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(selectedArticleFromSearch || null);
  const [citationFormat, setCitationFormat] = useState<"CMS" | "APA" | "MLA">("CMS");
  const [copiedCitation, setCopiedCitation] = useState(false);

  // Sync if selectedArticleFromSearch changes
  React.useEffect(() => {
    if (selectedArticleFromSearch) {
      setSelectedArticle(selectedArticleFromSearch);
    }
  }, [selectedArticleFromSearch]);

  const getCitationText = (art: Article, format: "CMS" | "APA" | "MLA") => {
    switch (format) {
      case "CMS":
        return `Leghari, Mufti Zabeehullah. "${art.title}." Journal of Islamic Thought & Contemporary Juridical Studies 14, no. 2 (2026): 45–72.`;
      case "APA":
        return `Leghari, Z. (2026). ${art.title}. Journal of Islamic Thought & Contemporary Juridical Studies, 14(2), 45–72.`;
      case "MLA":
        return `Leghari, Mufti Zabeehullah. "${art.title}." Journal of Islamic Thought & Contemporary Juridical Studies, vol. 14, no. 2, 2026, pp. 45–72.`;
    }
  };

  const copyCitation = () => {
    if (!selectedArticle) return;
    const text = getCitationText(selectedArticle, citationFormat);
    navigator.clipboard.writeText(text);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  return (
    <section id="articles" className="py-24 bg-[#EBF4F0] border-b border-[#D2E2DA] relative">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="badge-tag">
              05 / RESEARCH PAPERS & ARTICLES
            </span>
          </div>

          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-light text-ink tracking-[-1.5px] sm:tracking-[-2.3px] leading-[1.1]">
            Original academic papers, legal philosophy & pedagogical reform
          </h2>

          <div className="font-urdu text-[17px] text-emerald leading-relaxed">
            مقالات و مضامین — عصری، فقہی اور تعلیمی مباحث
          </div>

          <p className="font-serif text-[17px] font-normal text-fossil leading-[1.45] tracking-[-0.34px]">
            Analytical treatises exploring tradition, modern instructional design (5E Model), and ethical financial justice in peer-reviewed journals.
          </p>
        </div>

        {/* Articles Grid — Crisp White cards on Soft Sage Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-[#D2E2DA] rounded-cards p-6 flex flex-col justify-between hover:border-gold hover:shadow-md transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[12px] font-serif">
                  <span className="badge-tag">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-fossil text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readingTime}</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-[19px] font-light text-ink group-hover:text-emerald transition-colors leading-snug tracking-[-0.34px]">
                    {article.title}
                  </h3>
                  <p className="font-urdu text-[14px] text-fossil mt-1 leading-relaxed">
                    {article.titleUrdu}
                  </p>
                </div>

                <p className="font-serif text-[13px] text-smoke leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="text-[12px] font-mono text-fossil pt-1">
                  Published: {article.date}
                </div>
              </div>

              {/* Action Buttons: Read (btn-ink), Cite (btn-ghost) */}
              <div className="pt-4 mt-4 border-t border-sand grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="btn-ink text-[13px] py-2 px-3 justify-center"
                >
                  <span>Read Paper</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedArticle(article);
                  }}
                  className="btn-ghost text-[13px] py-2 px-3 justify-center"
                >
                  <Quote className="w-3.5 h-3.5" />
                  <span>Cite</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* FULL ARTICLE READER & CITATION MODAL — Flat Paper Card (16px radius) */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-paper max-w-3xl w-full max-h-[88vh] rounded-largecards border border-ash overflow-hidden shadow-maze-subtle flex flex-col">
            <div className="p-5 border-b border-sand flex items-center justify-between bg-bone">
              <div>
                <span className="badge-tag">{selectedArticle.category}</span>
                <h4 className="font-serif text-[20px] font-light text-ink mt-0.5 tracking-[-0.66px]">
                  {selectedArticle.title}
                </h4>
              </div>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  if (onClearSelectedArticle) onClearSelectedArticle();
                }}
                className="w-8 h-8 rounded-inputs border border-ash bg-paper flex items-center justify-center text-fossil hover:text-ink transition-colors text-base"
              >
                ×
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Publication Header */}
              <div className="p-4 rounded-inputs bg-sand/40 border border-ash flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[13px] font-serif">
                <div>
                  <span className="text-fossil">Category: </span>
                  <span className="font-medium text-ink">{selectedArticle.category}</span>
                </div>
                <div className="text-fossil font-mono text-[12px]">
                  {selectedArticle.date} • {selectedArticle.readingTime} read
                </div>
              </div>

              {/* Interactive Citation Generator Box */}
              <div className="p-4 rounded-inputs bg-bone border border-sand space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-[12px] font-mono uppercase tracking-wider text-fossil">
                    Academic Citation Generator
                  </div>
                  <div className="flex items-center gap-1">
                    {(["CMS", "APA", "MLA"] as const).map((fmt) => (
                      <button
                        key={fmt}
                        onClick={() => setCitationFormat(fmt)}
                        className={`px-2.5 py-1 rounded-[4px] text-[11px] font-mono transition-colors ${
                          citationFormat === fmt
                            ? "bg-ink text-paper"
                            : "bg-paper text-fossil border border-ash hover:text-ink"
                        }`}
                      >
                        {fmt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-paper rounded-inputs border border-ash font-mono text-[12px] text-ink leading-relaxed">
                  {getCitationText(selectedArticle, citationFormat)}
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={copyCitation}
                    className="btn-ghost text-[12px] py-1.5 px-3"
                  >
                    {copiedCitation ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-olive" />
                        <span>Citation Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Citation</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Full Article Content */}
              <div className="space-y-4">
                <div className="text-[12px] font-mono uppercase tracking-wider text-fossil">
                  Paper Text & Analytical Formulation:
                </div>
                <div className="font-serif text-[15px] text-smoke leading-relaxed space-y-4">
                  {Array.isArray(selectedArticle.content)
                    ? selectedArticle.content.map((p, i) => <p key={i}>{p}</p>)
                    : <p>{selectedArticle.content}</p>}
                </div>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-sand flex items-center justify-between text-[13px] font-serif text-fossil">
                <div>Author: Mufti Zabeehullah Leghari</div>
                <div className="badge-tag">Open Academic Access</div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
