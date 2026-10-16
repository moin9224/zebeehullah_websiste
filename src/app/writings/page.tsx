import React from "react";
import InnerPageTemplate from "@/components/InnerPageTemplate";
import { INNER_PAGES } from "@/data/siteConfig";

export const metadata = {
  title: "Writings | Zabeehullah Leghari",
  description: INNER_PAGES.writings.introduction,
};

export default function WritingsPage() {
  return (
    <InnerPageTemplate
      title={INNER_PAGES.writings.title}
      introduction={INNER_PAGES.writings.introduction}
      sectionKey="writings"
    />
  );
}
