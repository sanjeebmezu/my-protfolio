import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  keyBenefit: string;
  overview: string;
  icon: LucideIcon;
  problems: string[];
  audience: string[];
  benefits: string[];
  deliverables: string[];
  process: { title: string; description: string }[];
  outcomes: string[];
  faqs: { question: string; answer: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  featured: boolean;
  imageLabel: string;
  sections: {
    id: string;
    heading: string;
    body: string[];
  }[];
};

export type ProjectPlaceholder = {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  tools: string[];
  results: string;
};
