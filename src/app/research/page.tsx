import React from "react";
import InnerPageTemplate from "@/components/InnerPageTemplate";
import { INNER_PAGES } from "@/data/siteConfig";

export const metadata = {
  title: "Research | Zabeehullah Leghari",
  description: INNER_PAGES.research.introduction,
};

export default function ResearchPage() {
  return (
    <InnerPageTemplate
      title={INNER_PAGES.research.title}
      introduction={INNER_PAGES.research.introduction}
      sectionKey="research"
    />
  );
}
