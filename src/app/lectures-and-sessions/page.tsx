import React from "react";
import InnerPageTemplate from "@/components/InnerPageTemplate";
import { INNER_PAGES } from "@/data/siteConfig";

export const metadata = {
  title: "Lectures & Sessions | Zabeehullah Leghari",
  description: INNER_PAGES.lectures.introduction,
};

export default function LecturesPage() {
  return (
    <InnerPageTemplate
      title={INNER_PAGES.lectures.title}
      introduction={INNER_PAGES.lectures.introduction}
      sectionKey="lectures"
    />
  );
}
