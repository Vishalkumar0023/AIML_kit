import type {
  BlogCard,
  ConversionStat,
  LearningNote,
  LearningProduct,
  LearningTutorial,
  NavItem,
  Testimonial
} from "@/types";

export const platformNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Notes", href: "/notes" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" }
];

export const products: LearningProduct[] = [
  {
    id: "ai-ml-free-roadmap",
    type: "free",
    title: "Python for AI/ML Starter Kit (Free Bundle)",
    tagline: "Build a strong Python foundation before transitioning to Machine Learning.",
    description:
      "A structured 15-day study plan covering Python basics, practice problems, interview Q&A, mini-projects (Expense Tracker, Data Cleaner), and an AI/ML roadmap.",
    priceLabel: "Free",
    ctaLabel: "Download Free Kit",
    href: "https://drive.google.com/drive/folders/1wPueuswZHK6x24dJGicEjW5mn0KWFOzv",
    features: [
      "15-Day Structured Study Plan",
      "Python Basics & 50 Interview Q&A",
      "10 Practice Problems with Solutions",
      "3 Mini Projects with Source Code",
      "Before AI/ML Checklist"
    ],
    badge: "Free Resource"
  },
  {
    id: "ai-engineer-foundation-system",
    type: "paid",
    title: "AI Engineer Foundation System",
    tagline: "The complete 16-week execution system to go from beginner to AI Engineer.",
    description:
      "A massive 41-PDF structured learning system. It removes confusion by giving you a daily execution plan, curated resources, DSA parallel tracks, and career templates.",
    priceLabel: "₹49",
    ctaLabel: "Buy Complete Bundle",
    amountInPaise: 4900,
    features: [
      "41 Premium PDF Study Guides",
      "16-Week Structured Roadmap",
      "Curated Videos (NeetCode, StatQuest, etc.)",
      "DSA Parallel Track (5 PDFs)",
      "700+ Practice Problems",
      "Interview & Resume Templates"
    ],
    badge: "Premium System"
  }
];

export const notes: LearningNote[] = [
  {
    id: "roadmap-overview",
    title: "16-Week AI Roadmap",
    category: "Foundations",
    access: "free",
    description:
      "A free high-level roadmap showing you the exact sequence of topics from Python to Deep Learning.",
    bullets: [
      "Python and Data Handling sequence",
      "When to start Machine Learning",
      "Free starter content for clarity"
    ]
  },
  {
    id: "ai-engineer-system",
    title: "AI Engineer Foundation System (41 PDFs)",
    category: "Premium Track",
    access: "premium",
    description:
      "The complete premium execution system containing 41 detailed study guides, 700+ problems, and interview templates.",
    bullets: [
      "Daily execution plans and cheatsheets",
      "Curated YouTube resources embedded",
      "Available inside the Premium Bundle"
    ]
  }
];

export const tutorials: LearningTutorial[] = [
  {
    id: "python-crash-course",
    title: "Python Crash Course",
    description:
      "Corey Schafer's professional Python tutorials. The standard for clean, accurate Python fundamentals.",
    youtubeId: "YYXdXT2l-Gg",
    level: "Beginner",
    duration: "Series"
  },
  {
    id: "dsa-masterclass",
    title: "Arrays & Hashing Masterclass",
    description:
      "NeetCode's essential guide to cracking Data Structures and Algorithms for technical interviews.",
    youtubeId: "IiDuXLqV6e4",
    level: "Intermediate",
    duration: "Masterclass"
  },
  {
    id: "machine-learning-math",
    title: "Machine Learning Concepts Visually Explained",
    description:
      "StatQuest breaks down complex ML concepts and math into simple, intuitive visual explanations.",
    youtubeId: "nk2CQITm_eo",
    level: "All Levels",
    duration: "Conceptual"
  }
];

export const blogCards: BlogCard[] = [
  {
    id: "study-plan",
    title: "Stop jumping from tutorial to tutorial",
    excerpt:
      "Learn why having a structured execution system is the only way to actually become an AI Engineer.",
    href: "/notes",
    category: "Mindset"
  },
  {
    id: "starter-stack",
    title: "The 16-Week AI/ML Roadmap",
    excerpt:
      "A clear path covering Python, Data Handling, Machine Learning, Deep Learning, and System Design.",
    href: "/product/ai-ml-free-roadmap",
    category: "Roadmap"
  },
  {
    id: "portfolio",
    title: "How to pass the technical interview",
    excerpt:
      "Why you need to study Data Structures (DSA) alongside your Machine Learning curriculum.",
    href: "/product/ai-engineer-foundation-system",
    category: "Career"
  }
];

export const homepageStats: ConversionStat[] = [
  {
    id: "learning",
    label: "Learning paths",
    value: "Notes + Tutorials",
    detail: "Students can move from free content into deeper products without confusion."
  },
  {
    id: "resources",
    label: "Resources",
    value: "Free + Paid",
    detail: "The platform supports both free downloads and paid starter products."
  },
  {
    id: "progress",
    label: "Student focus",
    value: "Beginner-first",
    detail: "Everything is written for students who need a practical, lower-pressure start."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "aarti",
    name: "Aarti Sharma",
    role: "BTech AIML Student",
    feedback:
      "The roadmap removed a lot of confusion. I finally understood what to learn before jumping into machine learning projects."
  },
  {
    id: "rohan",
    name: "Rohan Mehta",
    role: "Python Beginner",
    feedback:
      "The paid kit feels small but useful. The practice problems and project ideas made it easier to start instead of overthinking everything."
  },
  {
    id: "neha",
    name: "Neha Verma",
    role: "Internship Prep Student",
    feedback:
      "I liked that the platform is simple. Free notes for confidence, then a clear paid option when I wanted more guidance."
  }
];

export const comparisonRows = [
  {
    label: "Study Plan",
    free: "15-Day Python Focus",
    paid: "16-Week AI/ML Execution System"
  },
  {
    label: "Curriculum Modules",
    free: "Python Basics Only (5 PDFs)",
    paid: "Python, DSA, ML, Math, Career (41 PDFs)"
  },
  {
    label: "Practice Problems",
    free: "10 Problems",
    paid: "700+ Hands-on Problems"
  },
  {
    label: "Projects & Portfolio",
    free: "3 Beginner Mini Projects",
    paid: "Advanced ML Projects + Resume Kits"
  },
  {
    label: "Interview Prep",
    free: "50 Python Q&A",
    paid: "Mock Interviews & DSA Sheets"
  },
  {
    label: "Price",
    free: "Free download",
    paid: "Limited launch price ₹49"
  }
] as const;

export const homepageProblems = [
  "You want to learn AI/ML but do not know what to learn first.",
  "You keep switching between random videos and still feel behind.",
  "You need beginner-friendly Python practice before real projects.",
  "You want a low-cost starter pack instead of an expensive course."
] as const;

export const homepageSolutions = [
  "A free roadmap that shows the right order for Python and AI/ML topics.",
  "A compact paid starter kit with notes, practice, and interview prep.",
  "Simple product pages and repeated CTAs that reduce decision friction.",
  "Mobile-friendly sections so students can browse and buy quickly."
] as const;

export const homepageHighlights = [
  {
    title: "Structured Notes",
    description: "Free and premium note sections help students revise in smaller, clearer steps.",
    href: "/notes"
  },
  {
    title: "Practical Tutorials",
    description: "Embedded videos and blog-style guides help students move from watching to doing.",
    href: "/tutorials"
  },
  {
    title: "Learning Products",
    description: "A growing catalog of free and paid learning resources keeps the platform scalable.",
    href: "/products"
  }
] as const;

export const paidProductProblems = [
  "You are jumping between random tutorials and feel completely overwhelmed.",
  "You know some Python but don't know how to start Machine Learning.",
  "You spend more time searching for resources than actually studying.",
  "You lack a structured daily study schedule to maintain consistency."
] as const;

export const paidProductSolutions = [
  "A 16-week structured roadmap from Python to Deep Learning.",
  "41 Premium PDF Study Guides that tell you exactly what to learn daily.",
  "Curated YouTube links (NeetCode, CampusX, StatQuest) built into the guides.",
  "DSA, Interview Prep, Resume Templates, and an Execution Tracking System."
] as const;

export const paidProductTrustPoints = [
  "Secure Razorpay checkout",
  "No spam",
  "Instant access to the free roadmap",
  "Student-friendly pricing"
] as const;

export const paidBundleBenefits = [
  {
    title: "Stop Guessing, Start Executing",
    english: "Stop wasting time searching for tutorials. Follow a proven daily system.",
    hindi: "Tutorials dhundhne mein time waste mat karo. Daily system follow karo."
  },
  {
    title: "Master AI/ML Foundations",
    english: "Learn Python, Data Handling, ML, and Deep Learning in the right order.",
    hindi: "Python se Deep Learning tak sab kuch ek sahi sequence mein seekho."
  },
  {
    title: "Clear Tech Interviews",
    english: "Includes DSA guides and curated practice problems for technical rounds.",
    hindi: "DSA aur interview preparation guides se placements ke liye ready raho."
  },
  {
    title: "Build a Standout Portfolio",
    english: "Get resume templates and GitHub project guidance to get shortlisted.",
    hindi: "Resume templates aur GitHub guides se apna strong portfolio banao."
  }
] as const;

export const paidBundleIncludes = [
  {
    title: "41 Premium PDF Guides",
    english: "Comprehensive notes covering Python, DSA, Data Handling, ML, Deep Learning, and System Design.",
    hindi: "41 premium PDFs jisme Python, ML, DL aur DSA ki daily study guides hain."
  },
  {
    title: "Curated Video Integration",
    english: "The absolute best free videos (NeetCode, CampusX, StatQuest) linked directly in your daily PDFs.",
    hindi: "Top YouTubers ke exact video links PDFs ke andar hi embedded hain."
  },
  {
    title: "DSA Parallel Track",
    english: "A 5-part Data Structures & Algorithms guide specifically designed for AI/ML students to clear interviews.",
    hindi: "Interview clear karne ke liye specially designed DSA guides aur problems."
  },
  {
    title: "700+ Practice Problems",
    english: "100 Python problems, 300 curated DSA problems, and ML logic questions to test your knowledge.",
    hindi: "Sirf theory nahi, 700 se zyada practice problems for hands-on learning."
  },
  {
    title: "Execution System",
    english: "Discipline frameworks, weekly review templates, and Excel trackers to ensure you stay consistent.",
    hindi: "Consistency maintain rakhne ke liye daily aur weekly tracking system."
  },
  {
    title: "Career & Portfolio Kit",
    english: "Resume project examples, interview prep guides, and GitHub README templates to get you hired.",
    hindi: "Job ready banne ke liye resume templates aur interview preparation guide."
  }
] as const;

export const paidBundleResources = {
  websites: [
    {
      title: "StatQuest with Josh Starmer",
      url: "https://www.youtube.com/@StatQuest",
      english: "The absolute best channel for intuitively understanding ML and DL math.",
      hindi: "Machine Learning aur Deep Learning ke concepts ko simply samajhne ke liye best."
    },
    {
      title: "NeetCode",
      url: "https://www.youtube.com/@NeetCode",
      english: "The gold standard for Data Structures and Algorithms interview prep.",
      hindi: "DSA aur coding interviews crack karne ke liye sabse best resource."
    },
    {
      title: "CampusX (Hindi)",
      url: "https://www.youtube.com/@campusx-official",
      english: "Excellent end-to-end ML, DL, and MLOps playlists in Hindi.",
      hindi: "Hindi mein ML, DL aur deployments seekhne ke liye top channel."
    }
  ],
  videos: [
    {
      title: "Python Foundation — Corey Schafer",
      url: "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU",
      english: "Professional, clean Python tutorials.",
      hindi: "Professional level Python seekhne ke liye best playlist."
    },
    {
      title: "Complete DSA in Java — Apna College",
      url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop",
      english: "Great for Hindi speakers starting Data Structures.",
      hindi: "DSA basics se advance tak seekhne ke liye excellent series."
    },
    {
      title: "Neural Networks — 3Blue1Brown",
      url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
      english: "The best visual explanation of how Deep Learning actually works.",
      hindi: "Neural networks ke piche ka math visually samajhne ke liye best."
    }
  ]
} as const;

export const paidBundleUsageSteps = [
  {
    english: "Follow the structured learning path to build your foundation.",
    hindi: "Step-by-step roadmap follow karo."
  },
  {
    english: "Use the recommended websites and videos alongside each topic.",
    hindi: "Har topic ke saath recommended resources use karo."
  },
  {
    english: "Practice consistently using the provided problems.",
    hindi: "Daily practice karo, consistency maintain karo."
  },
  {
    english: "Complete the mini projects to gain hands-on experience.",
    hindi: "Projects complete karo for real experience."
  },
  {
    english: "Use the checklist to validate your readiness.",
    hindi: "Checklist se apni progress check karo."
  },
  {
    english: "Revisit the material as a reference whenever needed.",
    hindi: "Doubt aaye toh wapas refer karo."
  }
] as const;

export const paidBundleAudience = {
  for: [
    {
      english: "Students who want a direct roadmap to AI Engineer roles.",
      hindi: "Jo directly AI Engineer banne ka proper roadmap chahte hain."
    },
    {
      english: "Self-taught developers drowning in too many YouTube tutorials.",
      hindi: "Jo random YouTube videos dekh kar confuse ho gaye hain."
    },
    {
      english: "Anyone who struggles with consistency and needs a daily study plan.",
      hindi: "Jinko padhai mein consistency maintain karne mein problem hoti hai."
    }
  ],
  notFor: [
    {
      english: "People looking for a magical overnight shortcut.",
      hindi: "Jo bina mehnat kiye shortcut dhundh rahe hain."
    },
    {
      english: "Experienced Senior Data Scientists.",
      hindi: "Already experienced professionals ke liye yeh basic lagega."
    },
    {
      english: "Those who just want to hoard PDFs and not execute.",
      hindi: "Jo sirf PDFs jama karna chahte hain aur practice nahi karenge."
    }
  ]
} as const;

export const paidBundleOutcomeAndAccess = {
  outcome: {
    english:
      "By the end of this system, you will have the knowledge, portfolio, and interview readiness required to land an entry-level AI/Machine Learning Engineer role.",
    hindi:
      "Is system ke end tak aapke paas knowledge, strong portfolio aur interview skills hongi ek AI Engineer role crack karne ke liye."
  },
  access: [
    {
      english: "Instant access to all 41 PDFs via Google Drive.",
      hindi: "Google Drive ke through sabhi 41 PDFs ka turant access."
    },
    {
      english: "Digital format with downloadable resources.",
      hindi: "Digital files milengi (downloadable)."
    },
    {
      english: "Can be used as both a structured guide and long-term reference.",
      hindi: "Guide + long-term reference dono ke liye use kar sakte ho."
    }
  ]
} as const;

export function getProductById(id: string) {
  return products.find((product) => product.id === id) ?? null;
}
