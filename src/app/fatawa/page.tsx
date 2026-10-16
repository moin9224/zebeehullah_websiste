import React from "react";
import InnerPageTemplate from "@/components/InnerPageTemplate";
import { INNER_PAGES } from "@/data/siteConfig";

export const metadata = {
  title: "Fatawa | Zabeehullah Leghari",
  description: INNER_PAGES.fatawa.introduction,
};

export default function FatawaPage() {
  return (
    <InnerPageTemplate
      title={INNER_PAGES.fatawa.title}
      introduction={INNER_PAGES.fatawa.introduction}
      sectionKey="fatawa"
    />
  );
}
