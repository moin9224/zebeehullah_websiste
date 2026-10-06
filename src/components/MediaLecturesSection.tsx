"use client";

import React, { useState } from "react";
import { 
  Play, 
  Video, 
  Headphones, 
  Clock, 
  X, 
  Volume2, 
  VolumeX,
  Pause,
  Tv,
  Mic,
  BookOpen,
  SkipForward,
  SkipBack
} from "lucide-react";
import { MEDIA_ITEMS } from "@/data/scholarData";
import { MediaItem } from "@/types";

export default function MediaLecturesSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);

  // Audio state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioIndex, setAudioIndex] = useState(3);
  const [playbackSpeed, setPlaybackSpeed] = useState<"1x" | "1.25x" | "1.5x">("1x");
  const [isMuted, setIsMuted] = useState(false);

  const currentAudioTrack = MEDIA_ITEMS[audioIndex] || MEDIA_ITEMS[3];

  const filterTabs = [
    { id: "all", label: "All Media" },
    { id: "visual", label: "Visual Explainers" },
    { id: "lecture", label: "Academic Lectures" },
    { id: "sermon", label: "Sermons & Da'wah" },
    { id: "podcast", label: "Podcasts & Audio" },
  ];

  const filteredMedia = MEDIA_ITEMS.filter((item) => {
    if (activeTab === "all") return true;
    return item.type === activeTab;
  });

  const toggleAudio = (item?: MediaItem) => {
    if (item) {
      const idx = MEDIA_ITEMS.findIndex((m) => m.id === item.id);
      if (idx !== -1) {
        setAudioIndex(idx);
        setIsPlayingAudio(true);
      }
    } else {
      setIsPlayingAudio(!isPlayingAudio);
    }
  };

  const handleNextTrack = () => {
    setAudioIndex((prev) => (prev + 1) % MEDIA_ITEMS.length);
    setIsPlayingAudio(true);
  };

  const handlePrevTrack = () => {
    setAudioIndex((prev) => (prev - 1 + MEDIA_ITEMS.length) % MEDIA_ITEMS.length);
    setIsPlayingAudio(true);
  };

  const cycleSpeed = () => {
    if (playbackSpeed === "1x") setPlaybackSpeed("1.25x");
    else if (playbackSpeed === "1.25x") setPlaybackSpeed("1.5x");
    else setPlaybackSpeed("1x");
  };

  return (
    <section id="media" className="py-24 bg-[#141518] text-[#f5f4f0] border-b border-[#232428] relative">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="badge-tag bg-chartreuse text-ink font-medium">
              04 / AUDIOVISUAL & LECTURES
            </span>
          </div>

          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-light text-white tracking-[-1.5px] sm:tracking-[-2.3px] leading-[1.1]">
            Scholarly video explainers, university keynotes &amp; intellectual podcasts
          </h2>

          <div className="font-urdu text-[17px] text-[#dbf570] leading-relaxed">
            خطابات، علمی لیکچرز، پوڈکاسٹس اور بصری تفہیمی ویڈیوز
          </div>

          <p className="font-serif text-[17px] font-normal text-[#9e9b94] leading-[1.45] tracking-[-0.34px]">
            Short engaging visual breakdowns of complex Islamic, economic, and legal concepts alongside full-length university lectures and Friday sermons.
          </p>
        </div>

        {/* Tab Navigation Segment Control */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-serif text-[14px] sm:text-[15px] transition-colors ${
                activeTab === tab.id
                  ? "bg-chartreuse text-ink font-medium px-4 py-2 rounded-inputs"
                  : "px-4 py-2 rounded-inputs text-[#9e9b94] hover:text-white bg-[#1c1d22] border border-[#2a2c33]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Video Interview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item) => {
            const isPodcast = item.type === "podcast";
            return (
              <div
                key={item.id}
                className="bg-[#1b1d22] border border-[#2c2e36] p-5 flex flex-col justify-between hover:border-chartreuse/70 transition-all group rounded-cards"
              >
                <div className="space-y-3">
                  
                  {/* Video Thumbnail / Audio Tile Block */}
                  <div
                    onClick={() => {
                      if (isPodcast) {
                        toggleAudio(item);
                      } else {
                        setSelectedVideo(item);
                      }
                    }}
                    className="relative aspect-video rounded-inputs bg-[#242730] overflow-hidden cursor-pointer flex items-center justify-center border border-[#343744] group-hover:opacity-95 transition-opacity"
                  >
                    {/* Centered Play Button Circle in Chartreuse */}
                    <div className="w-12 h-12 rounded-full bg-chartreuse text-ink flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      {isPodcast ? (
                        <Headphones className="w-5 h-5 text-ink" />
                      ) : (
                        <Play className="w-5 h-5 fill-ink text-ink ml-0.5" />
                      )}
                    </div>

                    {/* Duration badge */}
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-[4px] bg-black/80 text-white font-mono text-[11px]">
                      {item.duration}
                    </span>

                    {/* Top Type Tag */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-black/70 backdrop-blur-sm text-chartreuse border border-chartreuse/30 text-[11px] font-mono px-2 py-0.5 rounded-[4px]">
                        {item.typeLabel}
                      </span>
                    </div>
                  </div>

                  {/* Video Title & Captions */}
                  <div>
                    <h3 className="font-serif text-[18px] font-light text-white leading-snug tracking-[-0.34px] group-hover:text-chartreuse transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-urdu text-[13px] text-[#9e9b94] mt-1 leading-relaxed">
                      {item.titleUrdu}
                    </p>
                  </div>

                  <p className="font-serif text-[13px] text-[#8a8882] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Caption Strip */}
                <div className="pt-4 mt-4 border-t border-[#2c2e36] flex items-center justify-between text-[12px] font-serif text-[#8a8882]">
                  <span className="font-mono">{item.date}</span>

                  <button
                    onClick={() => {
                      if (isPodcast) toggleAudio(item);
                      else setSelectedVideo(item);
                    }}
                    className="font-serif text-chartreuse hover:underline underline-offset-4 flex items-center gap-1"
                  >
                    <span>{isPodcast ? "Listen Podcast" : "Watch Lecture"}</span>
                    <span className="text-xs">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Floating Audio Podcast Player — Midnight Studio Bar */}
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-[#1b1d22] border border-[#2c2e36] rounded-cards p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="w-10 h-10 rounded-inputs bg-[#242730] flex items-center justify-center text-chartreuse flex-shrink-0 border border-[#343744]">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-chartreuse/20 text-chartreuse border border-chartreuse/30 text-[10px] font-mono px-1.5 py-0.5 rounded">PODCAST PLAYER</span>
                <span className="text-[11px] font-mono text-[#8a8882]">Episode 04</span>
              </div>
              <div className="font-serif text-[15px] font-normal text-white leading-snug">
                {currentAudioTrack.title}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={handlePrevTrack}
              className="p-2 rounded-inputs text-[#8a8882] hover:text-white transition-colors"
              title="Previous Track"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={() => toggleAudio()}
              className="bg-chartreuse text-ink font-medium text-[13px] py-2 px-4 rounded-inputs hover:bg-[#c9e45e] transition-colors flex items-center gap-1.5"
            >
              {isPlayingAudio ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-ink" />
                  <span>Play Podcast</span>
                </>
              )}
            </button>

            <button
              onClick={handleNextTrack}
              className="p-2 rounded-inputs text-[#8a8882] hover:text-white transition-colors"
              title="Next Track"
            >
              <SkipForward className="w-4 h-4" />
            </button>

            <button
              onClick={cycleSpeed}
              className="px-2.5 py-1 rounded-inputs border border-[#343744] bg-[#242730] font-mono text-[11px] text-[#dbf570] hover:text-white"
            >
              {playbackSpeed}
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-inputs text-[#8a8882] hover:text-white"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* YOUTUBE VIDEO MODAL — Paper card, 16px radius, flat with hairline border */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-paper max-w-3xl w-full rounded-largecards border border-ash overflow-hidden shadow-maze-subtle flex flex-col">
            <div className="p-4 border-b border-sand flex items-center justify-between bg-bone">
              <div className="flex items-center gap-2 truncate pr-4">
                <span className="badge-tag">{selectedVideo.typeLabel}</span>
                <span className="font-serif text-[15px] text-ink truncate font-medium">{selectedVideo.title}</span>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-8 h-8 rounded-inputs border border-ash bg-paper flex items-center justify-center text-fossil hover:text-ink transition-colors text-base"
              >
                ×
              </button>
            </div>

            <div className="aspect-video w-full bg-charcoal">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-5 space-y-2">
              <div className="font-serif text-[18px] text-ink font-light">
                {selectedVideo.title}
              </div>
              <p className="font-serif text-[14px] text-smoke leading-relaxed">
                {selectedVideo.description}
              </p>
              <div className="pt-2 text-[12px] font-mono text-fossil border-t border-sand flex items-center justify-between">
                <span>Duration: {selectedVideo.duration}</span>
                <span>Date: {selectedVideo.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
