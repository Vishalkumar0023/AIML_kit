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

export type PurchaseFormPayload = {
  fullName: string;
  paymentEmail: string;
  driveAccessEmail?: string;
  phone?: string;
};

export type PurchaseRecord = {
  id: string;
  fullName: string;
  paymentEmail: string;
  driveAccessEmail: string;
  phone?: string;
  amount: number;
  currency: string;
  productName: string;
  receipt: string;
  providerOrderId?: string;
  providerPaymentId?: string;
  paymentStatus:
    | "created"
    | "checkout_opened"
    | "authorized"
    | "captured"
    | "failed"
    | "verification_pending";
  deliveryStatus:
    | "not_started"
    | "pending_capture"
    | "granted"
    | "failed"
    | "config_missing"
    | "link_ready"
    | "manual_review";
  notes?: string;
  createdAt: string;
  updatedAt: string;
};
