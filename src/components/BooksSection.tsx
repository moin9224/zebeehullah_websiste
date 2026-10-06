"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  Download, 
  ShoppingBag, 
  FileText, 
  CheckCircle2, 
  X, 
  Send, 
  Calendar,
  Layers,
  ArrowRight,
  BookMarked
} from "lucide-react";
import { BOOKS_DATA } from "@/data/scholarData";
import { Book } from "@/types";
import { downloadScholarPdf } from "@/utils/pdfGenerator";

interface BooksSectionProps {
  selectedBookFromSearch?: Book | null;
  onClearSelectedBook?: () => void;
}

export default function BooksSection({
  selectedBookFromSearch,
  onClearSelectedBook,
}: BooksSectionProps) {
  const [selectedBookForExcerpt, setSelectedBookForExcerpt] = useState<Book | null>(selectedBookFromSearch || null);
  const [selectedBookForOrder, setSelectedBookForOrder] = useState<Book | null>(null);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync if selectedBookFromSearch changes
  React.useEffect(() => {
    if (selectedBookFromSearch) {
      setSelectedBookForExcerpt(selectedBookFromSearch);
    }
  }, [selectedBookFromSearch]);

  // Order state
  const [orderName, setOrderName] = useState("");
  const [orderAddress, setOrderAddress] = useState("");
  const [orderPhone, setOrderPhone] = useState("");
  const [orderCopies, setOrderCopies] = useState("1");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleDownloadPdf = (book: Book) => {
    showToast(`Generating official PDF for: ${book.title}`);
    downloadScholarPdf({
      title: book.title,
      category: book.category,
      year: book.year,
      description: book.description,
      pages: `${book.pages} pages`,
      isbn: book.isbn,
      format: "Hardcover & Official PDF",
    });
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
    setTimeout(() => {
      setOrderSubmitted(false);
      setSelectedBookForOrder(null);
      setOrderName("");
      setOrderAddress("");
      setOrderPhone("");
      showToast("Hard copy request received! Our Daharki office will contact you via WhatsApp.");
    }, 2000);
  };

  return (
    <section id="books" className="py-20 bg-bone border-b border-ash relative">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="badge-tag">
              03 / PUBLICATIONS & MONOGRAPHS
            </span>
          </div>

          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-light text-ink tracking-[-1.5px] sm:tracking-[-2.3px] leading-[1.1]">
            Authored treatises across jurisprudence, economics & pedagogy
          </h2>

          <div className="font-urdu text-[17px] text-fossil leading-relaxed">
            تصانیف و تالیفات — فقہ، اسلامی معیشت اور تدریسی اصلاحات
          </div>

          <p className="font-serif text-[17px] font-normal text-fossil leading-[1.45] tracking-[-0.34px]">
            Original academic monographs exploring contemporary legal applications, ethical financial frameworks, and progressive educational pedagogy for Islamic institutions.
          </p>
        </div>

        {/* Report Preview Cards Grid — Paper cards, 12px radius, hairline borders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {BOOKS_DATA.map((book) => (
            <div
              key={book.id}
              className="card-paper p-6 flex flex-col justify-between hover:border-ink transition-colors group"
            >
              <div className="space-y-4">
                
                {/* Chartreuse / Sand Book Header Block */}
                <div className="bg-sand p-4 rounded-inputs text-ink">
                  <div className="flex items-center justify-between text-[11px] font-mono text-fossil mb-1">
                    <span>{book.year}</span>
                    <span className="badge-tag">{book.category}</span>
                  </div>
                  <h3 className="font-serif text-[20px] font-light text-ink leading-snug tracking-[-0.66px]">
                    {book.title}
                  </h3>
                  <div className="font-urdu text-[14px] text-fossil mt-1">
                    {book.titleUrdu}
                  </div>
                </div>

                <p className="font-serif text-[14px] text-smoke leading-relaxed">
                  {book.description}
                </p>

                {/* Metadata Row */}
                <div className="py-2 border-y border-sand flex items-center justify-between text-[12px] font-serif text-fossil">
                  <div>Pages: <span className="font-mono text-ink">{book.pages}</span></div>
                  <div>Format: <span className="text-ink">Hardcover / PDF</span></div>
                </div>

                {/* Chapters list preview */}
                <div className="space-y-1 text-[12px] font-serif text-fossil">
                  <span className="font-mono uppercase text-[11px] text-ink">Key Chapters:</span>
                  {(book.tableOfContents || []).slice(0, 2).map((ch, i) => (
                    <div key={i} className="truncate">
                      • {ch}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Excerpt (btn-ghost), Download (btn-ink), Hard Copy (text link) */}
              <div className="pt-5 mt-5 border-t border-sand space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedBookForExcerpt(book)}
                    className="btn-ghost text-[13px] py-2 px-3 justify-center"
                  >
                    <span>Read Excerpt</span>
                  </button>

                  <button
                    onClick={() => handleDownloadPdf(book)}
                    className="btn-ink text-[13px] py-2 px-3 justify-center"
                  >
                    <Download className="w-3.5 h-3.5 text-chartreuse" />
                    <span>Download PDF</span>
                  </button>
                </div>

                <div className="text-center pt-1">
                  <button
                    onClick={() => setSelectedBookForOrder(book)}
                    className="font-serif text-[13px] text-fossil hover:text-ink hover:underline decoration-olive underline-offset-4 transition-colors"
                  >
                    Request Hard Copy Dispatch →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-inputs bg-ink text-paper text-[13px] font-serif shadow-maze-subtle flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-chartreuse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* EXCERPT READER MODAL — Flat Paper Card (16px radius) */}
      {selectedBookForExcerpt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-paper max-w-2xl w-full max-h-[85vh] rounded-largecards border border-ash overflow-hidden shadow-maze-subtle flex flex-col">
            <div className="p-5 border-b border-sand flex items-center justify-between bg-bone">
              <div>
                <span className="badge-tag">Monograph Excerpt</span>
                <h4 className="font-serif text-[20px] font-light text-ink mt-0.5 tracking-[-0.66px]">
                  {selectedBookForExcerpt.title}
                </h4>
              </div>
              <button
                onClick={() => {
                  setSelectedBookForExcerpt(null);
                  if (onClearSelectedBook) onClearSelectedBook();
                }}
                className="w-8 h-8 rounded-inputs border border-ash bg-paper flex items-center justify-center text-fossil hover:text-ink transition-colors text-base"
              >
                ×
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="font-urdu text-[16px] text-fossil">
                {selectedBookForExcerpt.titleUrdu}
              </div>

              <div className="p-4 rounded-inputs bg-sand/40 border border-ash font-serif text-[15px] text-ink leading-relaxed">
                <div className="font-mono text-[11px] uppercase tracking-wider text-fossil mb-2">Author&apos;s Foreword (پیش لفظ):</div>
                {selectedBookForExcerpt.excerpt}
              </div>

              <div className="space-y-2 pt-2">
                <div className="font-mono text-[11px] uppercase tracking-wider text-fossil">Table of Contents:</div>
                <div className="space-y-1.5 font-serif text-[14px] text-smoke">
                  {(selectedBookForExcerpt.tableOfContents || []).map((ch, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-inputs bg-bone border border-sand">
                      <span className="font-mono text-fossil text-xs">Ch. {i + 1}</span>
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-sand">
                <button
                  onClick={() => handleDownloadPdf(selectedBookForExcerpt)}
                  className="btn-ink text-[14px] py-2 px-4"
                >
                  <Download className="w-3.5 h-3.5 text-chartreuse" />
                  <span>Download Full Volume (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* REQUEST HARD COPY MODAL — Flat Paper Card (16px radius) */}
      {selectedBookForOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-paper max-w-md w-full rounded-largecards border border-ash overflow-hidden shadow-maze-subtle">
            <div className="p-5 border-b border-sand flex items-center justify-between bg-bone">
              <div>
                <span className="badge-tag">Postal Dispatch</span>
                <h4 className="font-serif text-[18px] font-light text-ink mt-0.5">
                  Request Printed Copy
                </h4>
              </div>
              <button
                onClick={() => setSelectedBookForOrder(null)}
                className="w-8 h-8 rounded-inputs border border-ash bg-paper flex items-center justify-center text-fossil hover:text-ink transition-colors text-base"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="p-3 rounded-inputs bg-bone border border-sand text-[13px] font-serif">
                <div className="font-medium text-ink">{selectedBookForOrder.title}</div>
                <div className="text-fossil">Daharki Secretariat Fulfillment Desk</div>
              </div>

              {orderSubmitted ? (
                <div className="p-5 rounded-inputs bg-sand/60 text-center space-y-2 border border-ash">
                  <CheckCircle2 className="w-8 h-8 text-olive mx-auto" />
                  <div className="font-serif text-[16px] text-ink">Dispatch Order Received</div>
                  <p className="font-serif text-[13px] text-fossil">
                    Our academic secretariat will verify stock and contact your WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleOrderSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[13px] font-serif text-ink mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mufti Tariq"
                      value={orderName}
                      onChange={(e) => setOrderName(e.target.value)}
                      className="w-full px-3 py-2 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-serif text-ink mb-1">WhatsApp Number</label>
                    <input
                      type="text"
                      required
                      placeholder="+92 300 1234567"
                      value={orderPhone}
                      onChange={(e) => setOrderPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-serif text-ink mb-1">Postal Address</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="University department, Jamia, or complete postal address..."
                      value={orderAddress}
                      onChange={(e) => setOrderAddress(e.target.value)}
                      className="w-full px-3 py-2 rounded-inputs bg-bone border border-ash text-[14px] font-serif text-ink focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-ink w-full py-3 text-[14px] justify-center mt-2"
                  >
                    <span>Submit Postal Order</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
