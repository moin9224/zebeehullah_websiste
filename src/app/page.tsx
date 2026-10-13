"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KeyHighlightsBar from "@/components/KeyHighlightsBar";
import AboutSection from "@/components/AboutSection";
import DarUlIftaSection from "@/components/DarUlIftaSection";
import BooksSection from "@/components/BooksSection";
import MediaLecturesSection from "@/components/MediaLecturesSection";
import ArticlesSection from "@/components/ArticlesSection";
import ResourceCenterSection from "@/components/ResourceCenterSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SpotlightSearchModal from "@/components/SpotlightSearchModal";
import { Fatwa, Book, Article } from "@/types";

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedFatwaFromSearch, setSelectedFatwaFromSearch] = useState<Fatwa | null>(null);
  const [selectedBookFromSearch, setSelectedBookFromSearch] = useState<Book | null>(null);
  const [selectedArticleFromSearch, setSelectedArticleFromSearch] = useState<Article | null>(null);

  const handleSelectFatwa = (fatwa: Fatwa) => {
    setSelectedFatwaFromSearch(fatwa);
    const element = document.getElementById("dar-ul-ifta");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectBook = (book: Book) => {
    setSelectedBookFromSearch(book);
    const element = document.getElementById("books");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectArticle = (article: Article) => {
    setSelectedArticleFromSearch(article);
    const element = document.getElementById("articles");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-bone text-ink flex flex-col font-serif selection:bg-gold selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 2. Hero Section */}
      <Hero 
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 3. Key Highlights Bar */}
      <KeyHighlightsBar />

      {/* 4. About & Intellectual Vision (Includes Three Pillars Switch Bar) */}
      <AboutSection />

      {/* 5. Dar ul Ifta Daharki & Ask Fatwa Portal */}
      <DarUlIftaSection 
        selectedFatwaFromSearch={selectedFatwaFromSearch}
        onClearSelectedFatwa={() => setSelectedFatwaFromSearch(null)}
      />

      {/* 6. Scholarly Works & Books */}
      <BooksSection 
        selectedBookFromSearch={selectedBookFromSearch}
        onClearSelectedBook={() => setSelectedBookFromSearch(null)}
      />

      {/* 7. Media, Lectures & Visual Gallery */}
      <MediaLecturesSection />

      {/* 8. Blogs & Articles */}
      <ArticlesSection 
        selectedArticleFromSearch={selectedArticleFromSearch}
        onClearSelectedArticle={() => setSelectedArticleFromSearch(null)}
      />

      {/* 9. Resource Center & Downloads */}
      <ResourceCenterSection />

      {/* 10. Events & Speaking Engagements */}
      <EventsSection />

      {/* 11. Contact & Academic Footprint */}
      <ContactSection />

      {/* Comprehensive Scholarly Footer */}
      <Footer />

      {/* Global Spotlight Search Modal */}
      <SpotlightSearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectFatwa={handleSelectFatwa}
        onSelectBook={handleSelectBook}
        onSelectArticle={handleSelectArticle}
      />
    </main>
  );
}
