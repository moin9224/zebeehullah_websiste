"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  Search, 
  X, 
  Scroll, 
  BookOpen, 
  Video, 
  FileText, 
  Download, 
  ArrowRight,
  Command
} from "lucide-react";
import { SAMPLE_FATAWA, BOOKS_DATA, MEDIA_ITEMS, ARTICLES_DATA, ACADEMIC_RESOURCES } from "@/data/scholarData";

interface SpotlightSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFatwa?: (fatwa: any) => void;
  onSelectBook?: (book: any) => void;
  onSelectArticle?: (article: any) => void;
}

export default function SpotlightSearchModal({
  isOpen,
  onClose,
  onSelectFatwa,
  onSelectBook,
  onSelectArticle,
}: SpotlightSearchModalProps) {
  const [query, setQuery] = useState("");

  // Keyboard shortcut listener: Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Unified search results
  const results = useMemo(() => {
    if (!query.trim()) return { fatawa: [], books: [], media: [], articles: [], resources: [] };
    const q = query.toLowerCase();

    return {
      fatawa: SAMPLE_FATAWA.filter(
        (f) =>
          f.title.toLowerCase().includes(q) ||
          f.titleUrdu.toLowerCase().includes(q) ||
          f.fatwaNumber.toLowerCase().includes(q) ||
          f.tags.some((t) => t.toLowerCase().includes(q))
      ),
      books: BOOKS_DATA.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.titleUrdu.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q)
      ),
      media: MEDIA_ITEMS.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          (m.titleUrdu && m.titleUrdu.toLowerCase().includes(q)) ||
          m.tags.some((t) => t.toLowerCase().includes(q))
      ),
      articles: ARTICLES_DATA.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          (a.titleUrdu && a.titleUrdu.toLowerCase().includes(q)) ||
          a.category.toLowerCase().includes(q)
      ),
      resources: ACADEMIC_RESOURCES.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          (r.titleUrdu && r.titleUrdu.toLowerCase().includes(q)) ||
          r.category.toLowerCase().includes(q)
      ),
    };
  }, [query]);

  const totalResults =
    results.fatawa.length +
    results.books.length +
    results.media.length +
    results.articles.length +
    results.resources.length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-charcoal/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-paper border border-ash max-w-2xl w-full rounded-largecards shadow-maze-subtle overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Header Bar */}
        <div className="p-4 sm:p-5 border-b border-sand flex items-center gap-3 bg-bone">
          <Search className="w-5 h-5 text-fossil flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search across Fatawa, Books, Lectures, Articles & Downloads..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-ink placeholder-fossil font-serif text-[15px] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-fossil hover:text-ink text-[12px] font-mono px-2 py-0.5 rounded bg-sand"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-inputs border border-ash bg-paper flex items-center justify-center text-fossil hover:text-ink text-base transition-colors"
          >
            ×
          </button>
        </div>

        {/* Results Container */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {!query.trim() ? (
            <div className="py-8 text-center space-y-3 font-serif">
              <div className="w-10 h-10 rounded-inputs bg-sand flex items-center justify-center mx-auto text-ink">
                <Command className="w-5 h-5" />
              </div>
              <h4 className="text-[17px] font-light text-ink">Global Scholarly Spotlight</h4>
              <p className="text-[13px] text-fossil max-w-sm mx-auto">
                Type any keyword such as <span className="text-ink underline decoration-olive">&ldquo;Cryptocurrency&rdquo;</span>, <span className="text-ink underline decoration-olive">&ldquo;Murabaha&rdquo;</span>, or <span className="text-ink underline decoration-olive">&ldquo;5E Pedagogy&rdquo;</span>.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-2">
                {["Cryptocurrency", "Inheritance IP", "5E Model", "Murabaha", "Chicago Manual"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 text-[12px] rounded-inputs bg-sand/60 hover:bg-sand text-ink transition-colors font-mono"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-10 text-center text-fossil text-[14px] font-serif">
              No matching records found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* FATAWA RESULTS */}
              {results.fatawa.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] uppercase font-mono tracking-wider text-fossil flex items-center gap-1.5">
                    <Scroll className="w-3.5 h-3.5 text-ink" />
                    <span>Fatawa Decrees ({results.fatawa.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.fatawa.map((f) => (
                      <a
                        key={f.id}
                        href="#dar-ul-ifta"
                        onClick={() => {
                          if (onSelectFatwa) onSelectFatwa(f);
                          onClose();
                        }}
                        className="p-3 rounded-inputs bg-bone hover:bg-sand border border-sand hover:border-ash flex items-center justify-between transition-colors block group"
                      >
                        <div className="min-w-0 pr-3">
                          <div className="flex items-center gap-2">
                            <span className="badge-tag">
                              {f.fatwaNumber}
                            </span>
                            <span className="text-[14px] font-serif text-ink truncate">
                              {f.title}
                            </span>
                          </div>
                          <p className="font-urdu text-[12px] text-fossil truncate mt-0.5">
                            {f.titleUrdu}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-fossil group-hover:text-ink flex-shrink-0 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* BOOKS RESULTS */}
              {results.books.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] uppercase font-mono tracking-wider text-fossil flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-ink" />
                    <span>Authored Books ({results.books.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.books.map((b) => (
                      <a
                        key={b.id}
                        href="#books"
                        onClick={() => {
                          if (onSelectBook) onSelectBook(b);
                          onClose();
                        }}
                        className="p-3 rounded-inputs bg-bone hover:bg-sand border border-sand hover:border-ash flex items-center justify-between transition-colors block group"
                      >
                        <div className="min-w-0 pr-3">
                          <div className="text-[14px] font-serif text-ink truncate">
                            {b.title}
                          </div>
                          <div className="text-[11px] font-mono text-fossil">
                            {b.category} • {b.pages} pages
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-fossil group-hover:text-ink flex-shrink-0 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* ARTICLES RESULTS */}
              {results.articles.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] uppercase font-mono tracking-wider text-fossil flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-ink" />
                    <span>Articles & Papers ({results.articles.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.articles.map((a) => (
                      <a
                        key={a.id}
                        href="#articles"
                        onClick={() => {
                          if (onSelectArticle) onSelectArticle(a);
                          onClose();
                        }}
                        className="p-3 rounded-inputs bg-bone hover:bg-sand border border-sand hover:border-ash flex items-center justify-between transition-colors block group"
                      >
                        <div className="min-w-0 pr-3">
                          <div className="text-[14px] font-serif text-ink truncate">
                            {a.title}
                          </div>
                          <div className="text-[11px] font-mono text-fossil">
                            {a.category} • {a.readingTime}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-fossil group-hover:text-ink flex-shrink-0 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* MEDIA RESULTS */}
              {results.media.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] uppercase font-mono tracking-wider text-fossil flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-ink" />
                    <span>Media & Lectures ({results.media.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.media.map((m) => (
                      <a
                        key={m.id}
                        href="#media"
                        onClick={onClose}
                        className="p-3 rounded-inputs bg-bone hover:bg-sand border border-sand hover:border-ash flex items-center justify-between transition-colors block group"
                      >
                        <div className="min-w-0 pr-3">
                          <div className="text-[14px] font-serif text-ink truncate">
                            {m.title}
                          </div>
                          <div className="text-[11px] font-mono text-fossil">
                            {m.typeLabel} • {m.duration}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-fossil group-hover:text-ink flex-shrink-0 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* RESOURCES RESULTS */}
              {results.resources.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] uppercase font-mono tracking-wider text-fossil flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-ink" />
                    <span>Academic Resources ({results.resources.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.resources.map((r) => (
                      <a
                        key={r.id}
                        href="#resources"
                        onClick={onClose}
                        className="p-3 rounded-inputs bg-bone hover:bg-sand border border-sand hover:border-ash flex items-center justify-between transition-colors block group"
                      >
                        <div className="min-w-0 pr-3">
                          <div className="text-[14px] font-serif text-ink truncate">
                            {r.title}
                          </div>
                          <div className="text-[11px] font-mono text-fossil">
                            {r.format} • {r.fileSize}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-fossil group-hover:text-ink flex-shrink-0 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Modal Footer info */}
        <div className="p-3 bg-bone border-t border-sand flex items-center justify-between text-[11px] font-mono text-fossil px-5">
          <span>Navigate with mouse or keyboard</span>
          <kbd className="px-1.5 py-0.5 rounded bg-sand text-ink">ESC to exit</kbd>
        </div>

      </div>
    </div>
  );
}
