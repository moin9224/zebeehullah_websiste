import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF8F5",
};

export const metadata: Metadata = {
  title: "Zabeehullah Leghari | Islamic Scholar • Researcher",
  description:
    "Exploring the Timeless Guidance of Islam — Rooted in Tradition, Conversant with the Age. Islamic Scholar & Researcher.",
  keywords: [
    "Zabeehullah Leghari",
    "Islamic Scholar",
    "Islamic Studies",
    "Researcher",
    "Fatawa",
    "Islamic Thought",
    "Dars-e-Nizami",
  ],
  authors: [{ name: "Zabeehullah Leghari" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#162923] font-serif antialiased selection:bg-[#C5A869]/30 flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
