export type NavItem = {
  label: string;
  href: string;
};

export type CopyCard = {
  title: string;
  description: string;
  eyebrow?: string;
};

export type ChecklistItem = {
  label: string;
};

export type PreviewCard = {
  label?: string;
  title: string;
  description: string;
  points?: string[];
  question?: string;
  answer?: string;
  tone?: "document" | "code" | "folder";
};

export type PricingFeature = {
  label: string;
};

export type TimelineItem = {
  day: string;
  title: string;
  description?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LeadLevel = "Complete Beginner" | "Basic Python" | "Intermediate";
export type LeadInterest = "Python" | "AI/ML" | "Interview Prep" | "Projects";

export type LeadFormPayload = {
  name: string;
  email: string;
  whatsapp: string;
  currentLevel?: LeadLevel;
  interest?: LeadInterest;
  message?: string;
  website?: string;
  type: "roadmap" | "support";
};

export type LeadRecord = LeadFormPayload & {
  id: string;
  createdAt: string;
};
