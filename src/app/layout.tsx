import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f4f0",
};

export const metadata: Metadata = {
  title: "Mufti Zabeehullah Leghari | Islamic Scholar, Jurist & Educationist",
  description:
    "Official website of Mufti Zabeehullah Leghari — CEO Dar ul Ifta Daharki, Director Institute of Islamic Sciences. Bridging classical Islamic heritage with contemporary legal, economic, and educational thought.",
  keywords: [
    "Mufti Zabeehullah Leghari",
    "Dar ul Ifta Daharki",
    "Institute of Islamic Sciences",
    "Islamic Scholar",
    "Fiqh",
    "Islamic Economics",
    "Fatwa Online",
    "Daharki Sindh",
    "Dars-e-Nizami",
    "Islamic Studies",
  ],
  authors: [{ name: "Mufti Zabeehullah Leghari" }],
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
      </head>
      <body className="min-h-screen bg-bone text-ink font-serif antialiased selection:bg-chartreuse selection:text-ink">
        {children}
      </body>
    </html>
  );
}
