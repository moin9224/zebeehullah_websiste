import React from "react";
import { 
  Youtube, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  MessageCircle, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Globe 
} from "lucide-react";
import { SITE_CONFIG, SocialLink } from "@/data/siteConfig";

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
  type?: 'all' | 'social' | 'academic';
}

function getIconComponent(id: string) {
  switch (id) {
    case "youtube":
      return Youtube;
    case "facebook":
      return Facebook;
    case "instagram":
      return Instagram;
    case "whatsapp":
      return MessageCircle;
    case "twitter":
      return Twitter;
    case "linkedin":
      return Linkedin;
    case "google-scholar":
      return GraduationCap;
    case "orcid":
      return Globe;
    case "researchgate":
      return BookOpen;
    case "academia":
      return FileText;
    default:
      return Globe;
  }
}

export default function SocialIcons({ 
  className = "flex flex-wrap items-center gap-3", 
  iconClassName = "text-[#62706A] hover:text-[#0F382A] transition-colors p-2 rounded-full hover:bg-[#EFECE4]",
  type = 'all'
}: SocialIconsProps) {
  // Only show icons that have an active URL (non-empty string and not '#')
  const activeLinks = SITE_CONFIG.socialLinks.filter((item: SocialLink) => {
    const hasValidUrl = Boolean(item.url && item.url.trim() !== "" && item.url.trim() !== "#");
    if (!hasValidUrl) return false;
    if (type === 'all') return true;
    return item.type === type;
  });

  if (activeLinks.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      {activeLinks.map((item) => {
        const IconComponent = getIconComponent(item.id);
        return (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
            aria-label={item.name}
            className={iconClassName}
          >
            <IconComponent size={20} strokeWidth={1.75} />
          </a>
        );
      })}
    </div>
  );
}
