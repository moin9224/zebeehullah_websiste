import React from "react";
import InnerPageTemplate from "@/components/InnerPageTemplate";
import { INNER_PAGES } from "@/data/siteConfig";

export const metadata = {
  title: "Publications | Zabeehullah Leghari",
  description: INNER_PAGES.publications.introduction,
};

export default function PublicationsPage() {
  return (
    <InnerPageTemplate
      title={INNER_PAGES.publications.title}
      introduction={INNER_PAGES.publications.introduction}
      sectionKey="publications"
    />
  );
}
