export interface SocialLink {
  id: string;
  name: string;
  url: string; // Empty string or '#' if hidden/not provided
  type: 'social' | 'academic';
}

export interface SiteConfig {
  name: string;
  role: string;
  email: string;
  hero: {
    title: string;
    subtitle: string;
    role: string;
    imagePlaceholder: string;
  };
  intro: {
    heading: string;
    text: string;
  };
  sectionCards: {
    id: string;
    title: string;
    description: string;
    href: string;
  }[];
  quranVerse: {
    arabic: string;
    translation: string;
    reference: string;
  };
  socialLinks: SocialLink[];
}

export const SITE_CONFIG: SiteConfig = {
  name: "Zabeehullah Leghari",
  role: "Islamic Scholar • Researcher",
  email: "zabeehullahleghari391@gmail.com",
  hero: {
    title: "Exploring the Timeless Guidance of Islam",
    subtitle: "Rooted in Tradition, Conversant with the Age",
    role: "Islamic Scholar • Researcher",
    imagePlaceholder: "/images/scholar-portrait.jpg",
  },
  intro: {
    heading: "About Zabeehullah Leghari",
    text: "Zabeehullah Leghari is an Islamic scholar and researcher whose work brings together the depth of classical Islamic learning and the rigor of modern academic research. Trained in the traditional Dars-e-Nizami curriculum with advanced specialized studies, he is pursuing doctoral research in Islamic Studies. Through his writing and teaching, he seeks to present the timeless guidance of Islam with clarity and depth, offering thoughtful answers to the questions of our time.",
  },
  sectionCards: [
    {
      id: "writings",
      title: "Writings",
      description: "Reflections and articles on Islamic thought, faith and the questions of our time.",
      href: "/writings",
    },
    {
      id: "research",
      title: "Research",
      description: "Academic papers, research articles and scholarly studies in Islamic Studies.",
      href: "/research",
    },
    {
      id: "publications",
      title: "Publications",
      description: "Books and published works.",
      href: "/publications",
    },
    {
      id: "fatawa",
      title: "Fatawa",
      description: "Answers to religious questions in the light of the Qur'an, Sunnah and the scholarly tradition.",
      href: "/fatawa",
    },
    {
      id: "lectures",
      title: "Lectures & Sessions",
      description: "Lectures, study circles and scholarly sessions.",
      href: "/lectures-and-sessions",
    },
  ],
  quranVerse: {
    arabic: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ",
    translation: "My success is only through Allah.",
    reference: "Hud 11:88",
  },
  // Social and Academic links.
  // When a link is empty string "", it will be automatically hidden from the UI.
  // Add the URL to show the icon immediately.
  socialLinks: [
    // Social
    { id: "youtube", name: "YouTube", url: "", type: "social" },
    { id: "facebook", name: "Facebook", url: "", type: "social" },
    { id: "instagram", name: "Instagram", url: "", type: "social" },
    { id: "whatsapp", name: "WhatsApp Channel", url: "", type: "social" },
    { id: "twitter", name: "X (Twitter)", url: "", type: "social" },
    { id: "linkedin", name: "LinkedIn", url: "", type: "social" },
    // Academic
    { id: "google-scholar", name: "Google Scholar", url: "", type: "academic" },
    { id: "orcid", name: "ORCID", url: "", type: "academic" },
    { id: "researchgate", name: "ResearchGate", url: "", type: "academic" },
    { id: "academia", name: "Academia.edu", url: "", type: "academic" },
  ],
};

export const INNER_PAGES = {
  writings: {
    title: "Writings",
    introduction: "Reflections and articles on Islamic thought, faith and the questions of our time.",
  },
  research: {
    title: "Research",
    introduction: "Academic papers, research articles and scholarly studies in Islamic Studies.",
  },
  publications: {
    title: "Publications",
    introduction: "Books and published works.",
  },
  fatawa: {
    title: "Fatawa",
    introduction: "Answers to religious questions in the light of the Qur'an, Sunnah and the scholarly tradition.",
  },
  lectures: {
    title: "Lectures & Sessions",
    introduction: "Lectures, study circles and scholarly sessions.",
  },
};
