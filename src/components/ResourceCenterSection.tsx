"use client";

import React, { useState } from "react";
import { 
  FolderDown, 
  Download, 
  Search, 
  CheckCircle2, 
  Eye, 
  X,
  FileCheck
} from "lucide-react";
import { ACADEMIC_RESOURCES } from "@/data/scholarData";
import { ResourceItem } from "@/types";
import { downloadScholarPdf } from "@/utils/pdfGenerator";

export default function ResourceCenterSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFormat, setSelectedFormat] = useState<string>("All");
  const [previewResource, setPreviewResource] = useState<ResourceItem | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const handleDownload = (item: ResourceItem) => {
    setDownloadToast(`Downloading digital document: ${item.title}`);
    setTimeout(() => setDownloadToast(null), 3500);

    downloadScholarPdf({
      title: item.title,
      category: item.category,
      description: item.description,
      pages: item.fileSize,
      format: `${item.format} Research Document`,
    });
  };

  const filteredResources = ACADEMIC_RESOURCES.filter((res) => {
    const matchesSearch =
      !searchQuery ||
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (res.titleUrdu && res.titleUrdu.toLowerCase().includes(searchQuery.toLowerCase())) ||
      res.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFormat = selectedFormat === "All" || res.format === selectedFormat;
    return matchesSearch && matchesFormat;
  });

  return (
    <section id="resources" className="py-20 bg-bone border-b border-ash relative">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="badge-tag">
              06 / ACADEMIC REPOSITORY
            </span>
          </div>

          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-light text-ink tracking-[-1.5px] sm:tracking-[-2.3px] leading-[1.1]">
            Downloadable research guides, pedagogic rubrics & trilingual glossaries
          </h2>

          <div className="font-urdu text-[17px] text-fossil leading-relaxed">
            علمی و تحقیقی وسائل، سائیٹیشن گائیڈز اور تدریسی فریم ورکس
          </div>

          <p className="font-serif text-[17px] font-normal text-fossil leading-[1.45] tracking-[-0.34px]">
            Open-access documentation designed for researchers, teachers, and post-graduate Muftis.
          </p>
        </div>

        {/* Filter Bar — Paper Card */}
        <div className="card-paper p-4 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-fossil" />
            <input
              type="text"
              placeholder="Search downloads by title or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-inputs bg-bone border border-ash text-[13px] font-serif text-ink focus:outline-none focus:border-ink transition-colors"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[12px] font-serif text-fossil">Format:</span>
            {["All", "PDF", "Docx"].map((fmt) => (
              <button
                key={fmt}
                onClick={() => setSelectedFormat(fmt)}
                className={`px-3 py-1 rounded-inputs text-[12px] font-serif transition-colors ${
                  selectedFormat === fmt
                    ? "bg-ink text-paper"
                    : "bg-bone text-fossil border border-ash hover:text-ink"
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        {/* Table View in Flat Paper Style */}
        <div className="card-paper overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-sand/40 border-b border-ash text-[12px] font-mono text-fossil uppercase tracking-wider">
                  <th className="py-3.5 px-5 font-normal">Document Title</th>
                  <th className="py-3.5 px-5 hidden sm:table-cell font-normal">Category</th>
                  <th className="py-3.5 px-5 hidden md:table-cell font-normal">Format / Size</th>
                  <th className="py-3.5 px-5 text-right font-normal">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand text-[14px] font-serif">
                {filteredResources.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-sand/20 transition-colors"
                  >
                    <td className="py-4 px-5">
                      <div className="font-normal text-ink">{item.title}</div>
                      {item.titleUrdu && (
                        <div className="font-urdu text-[13px] text-fossil mt-0.5">
                          {item.titleUrdu}
                        </div>
                      )}
                      <div className="text-[12px] text-fossil mt-0.5 line-clamp-1">
                        {item.description}
                      </div>
                    </td>

                    <td className="py-4 px-5 hidden sm:table-cell">
                      <span className="badge-tag">
                        {item.category}
                      </span>
                    </td>

                    <td className="py-4 px-5 hidden md:table-cell font-mono text-[12px] text-fossil">
                      {item.format} • {item.fileSize}
                    </td>

                    <td className="py-4 px-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setPreviewResource(item)}
                          className="p-2 rounded-inputs text-fossil hover:text-ink transition-colors"
                          title="Preview Summary"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleDownload(item)}
                          className="btn-ink text-[12px] py-1.5 px-3"
                        >
                          <Download className="w-3.5 h-3.5 text-chartreuse" />
                          <span>Download</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Download Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-inputs bg-ink text-paper text-[13px] font-serif shadow-maze-subtle flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-chartreuse" />
          <span>{downloadToast}</span>
        </div>
      )}

      {/* RESOURCE PREVIEW MODAL — Flat Paper Card (16px radius) */}
      {previewResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-paper max-w-lg w-full rounded-largecards border border-ash overflow-hidden shadow-maze-subtle">
            <div className="p-5 border-b border-sand flex items-center justify-between bg-bone">
              <div>
                <span className="badge-tag">{previewResource.category}</span>
                <h4 className="font-serif text-[18px] font-light text-ink mt-0.5">
                  {previewResource.title}
                </h4>
              </div>
              <button
                onClick={() => setPreviewResource(null)}
                className="w-8 h-8 rounded-inputs border border-ash bg-paper flex items-center justify-center text-fossil hover:text-ink transition-colors text-base"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="p-4 rounded-inputs bg-sand/40 border border-ash font-serif text-[14px] text-smoke leading-relaxed">
                {previewResource.description}
              </div>

              <div className="p-3 rounded-inputs bg-bone border border-sand flex items-center justify-between font-mono text-[12px] text-fossil">
                <span>File Format: {previewResource.format}</span>
                <span>File Size: {previewResource.fileSize}</span>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => {
                    handleDownload(previewResource);
                    setPreviewResource(null);
                  }}
                  className="btn-ink text-[13px] py-2 px-4"
                >
                  <Download className="w-3.5 h-3.5 text-chartreuse" />
                  <span>Download Document Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
