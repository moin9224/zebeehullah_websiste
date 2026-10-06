import { jsPDF } from 'jspdf';

interface GeneratePdfOptions {
  title: string;
  category?: string;
  year?: string | number;
  description?: string;
  pages?: string;
  isbn?: string;
  format?: string;
}

export function downloadScholarPdf({
  title,
  category = 'Jurisprudential Monograph',
  year = '1445 AH / 2024 CE',
  description = 'Authoritative academic and jurisprudential work published under the supervision of Mufti Zabeehullah Leghari, Institute of Islamic Sciences Daharki.',
  pages = 'Academic Edition',
  isbn = '978-969-DAR-01',
  format = 'Digital PDF Edition',
}: GeneratePdfOptions) {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;

    // --- Cover Header Strip (Dark Midnight) ---
    doc.setFillColor(14, 15, 17); // #0e0f11
    doc.rect(0, 0, pageWidth, 42, 'F');

    // Accent line (Chartreuse)
    doc.setFillColor(219, 245, 112); // #dbf570
    doc.rect(0, 42, pageWidth, 2.5, 'F');

    // Header Text
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('DAR UL IFTA & RESEARCH SECRETARIAT', margin, 18);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(180, 185, 195);
    doc.text('INSTITUTE OF ISLAMIC SCIENCES DAHARKI, SINDH, PAKISTAN', margin, 26);
    doc.text(`CATALOGUE REF: JIS-DH-${new Date().getFullYear()}-PUB`, margin, 33);

    // --- Title & Metadata Section ---
    let y = 60;
    doc.setTextColor(160, 100, 30);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text(category.toUpperCase(), margin, y);

    y += 10;
    doc.setTextColor(18, 19, 22);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(19);

    // Wrap Title if long
    const splitTitle = doc.splitTextToSize(title, pageWidth - margin * 2);
    doc.text(splitTitle, margin, y);
    y += splitTitle.length * 8 + 4;

    // Author byline
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(11);
    doc.setTextColor(80, 85, 95);
    doc.text('Author: Mufti Zabeehullah Leghari', margin, y);
    y += 6;
    doc.text(`Publication Year: ${year} | Format: ${format}`, margin, y);
    y += 12;

    // Separator line
    doc.setDrawColor(220, 222, 228);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 10;

    // --- Abstract / Summary Box ---
    doc.setFillColor(245, 244, 240); // bone background
    doc.rect(margin, y, pageWidth - margin * 2, 40, 'F');
    doc.setDrawColor(210, 212, 218);
    doc.rect(margin, y, pageWidth - margin * 2, 40, 'S');

    doc.setTextColor(14, 15, 17);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text('EXECUTIVE MONOGRAPH SUMMARY', margin + 6, y + 9);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(60, 64, 72);
    const splitDesc = doc.splitTextToSize(description, pageWidth - margin * 2 - 12);
    doc.text(splitDesc, margin + 6, y + 17);

    y += 50;

    // --- Academic Specifications Table ---
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(18, 19, 22);
    doc.text('Document Specifications & Citation', margin, y);
    y += 8;

    const specs = [
      ['Supervising Authority', 'Shariah Research Board, Daharki'],
      ['Jurisprudential Methodology', 'Hanafi Usul, Tahqiq al-Manat & Contemporary Finance'],
      ['Target Audience', 'Muftis, Shariah Scholars, Economists & Researchers'],
      ['Citation Standard (CMS)', `Leghari, Zabeehullah. ${title}. Daharki: JIS Press, ${year}.`],
      ['Access Rights', 'Open Access for Educational & Non-Commercial Research'],
    ];

    specs.forEach(([label, val]) => {
      doc.setFillColor(250, 250, 252);
      doc.rect(margin, y, 52, 9, 'F');
      doc.rect(margin + 52, y, pageWidth - margin * 2 - 52, 9, 'S');
      doc.setDrawColor(225, 227, 232);
      doc.rect(margin, y, 52, 9, 'S');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(40, 44, 52);
      doc.text(label, margin + 3, y + 6);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(70, 75, 85);
      const splitVal = doc.splitTextToSize(val, pageWidth - margin * 2 - 56);
      doc.text(splitVal[0] || '', margin + 55, y + 6);

      y += 9.5;
    });

    y += 12;

    // --- Verification Seal Box ---
    doc.setFillColor(243, 239, 251); // soft lavender
    doc.roundedRect(margin, y, pageWidth - margin * 2, 28, 2, 2, 'F');
    doc.setDrawColor(200, 190, 225);
    doc.roundedRect(margin, y, pageWidth - margin * 2, 28, 2, 2, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(70, 45, 120);
    doc.text('OFFICIAL VERIFICATION & ATTESTATION', margin + 6, y + 8);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(60, 50, 90);
    doc.text(
      'This document represents an officially sanctioned digital reproduction from the archives of Mufti Zabeehullah Leghari.',
      margin + 6,
      y + 14
    );
    doc.text(
      'For formal judicial citation, certified printed copies with physical signature & seal can be requested from the Secretariat.',
      margin + 6,
      y + 20
    );

    // --- Footer Note ---
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(140, 145, 155);
    doc.text(
      'Institute of Islamic Sciences Daharki • www.zabeehullah.edu.pk • Verified Open Access Repository',
      pageWidth / 2,
      pageHeight - 12,
      { align: 'center' }
    );

    // Sanitize title for filename
    const safeFilename = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    doc.save(`${safeFilename || 'treatise'}.pdf`);
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
}
