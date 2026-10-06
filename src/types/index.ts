export interface ScholarProfile {
  name: string;
  nameUrdu: string;
  titles: string[];
  roleTitle: string;
  heroTagline: string;
  heroDescription: string;
  bio: string;
  contactEmail: string;
  location: string;
  roles: {
    title: string;
    organization: string;
    icon: string;
    description: string;
  }[];
  credentials: {
    degree: string;
    field: string;
    institution?: string;
    level: 'classical' | 'modern';
  }[];
  threePillars: {
    title: string;
    titleArabic: string;
    description: string;
    icon: string;
    points: string[];
  }[];
  socials: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export type FatwaCategory = 
  | 'Fiqh al-Ibadat' 
  | 'Commercial & Business Fiqh' 
  | 'Family Law' 
  | 'General';

export interface Fatwa {
  id: string;
  fatwaNumber: string;
  title: string;
  titleUrdu: string;
  category: FatwaCategory;
  date: string;
  question: string;
  questionUrdu?: string;
  answerSummary: string;
  fullAnswer: string;
  arabicCitations: string[];
  mufti: string;
  darUlIfta: string;
  tags: string[];
  views?: number;
}

export interface FatwaSubmission {
  fullName: string;
  contact: string; // Email or WhatsApp
  category: FatwaCategory;
  question: string;
}

export interface Book {
  id: string;
  title: string;
  titleUrdu: string;
  subtitle: string;
  category: 'Islamic Jurisprudence & Law' | 'Islamic Economics & Commercial Law' | 'Pedagogy & Contemporary Thought';
  categoryUrdu: string;
  description: string;
  pages: number;
  year: string;
  isbn?: string;
  language: string;
  excerpt: string;
  pdfUrl?: string;
  tableOfContents: string[];
  isHardCopyAvailable: boolean;
  coverAccent: string;
}

export type MediaType = 'visual' | 'lecture' | 'sermon' | 'podcast';

export interface MediaItem {
  id: string;
  title: string;
  titleUrdu?: string;
  type: MediaType;
  typeLabel: string;
  duration: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string;
  audioUrl?: string;
  youtubeId?: string;
  tags: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  titleUrdu?: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string[];
  citations?: string[];
  tags: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  titleUrdu?: string;
  category: 'Academic Writing' | 'Education' | 'Reference' | 'Curriculum';
  format: 'PDF' | 'Docx' | 'EPUB';
  fileSize: string;
  description: string;
  downloadUrl: string;
  dateAdded: string;
}

export interface EventItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  date: string;
  status: 'upcoming' | 'archived';
  description: string;
  type: 'Workshop' | 'International Conference' | 'National Conference' | 'Keynote';
  registrationOpen?: boolean;
}
