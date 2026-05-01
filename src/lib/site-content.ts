import type {
  ChecklistItem,
  CopyCard,
  FaqItem,
  LeadInterest,
  LeadLevel,
  NavItem,
  PreviewCard,
  PricingFeature,
  TimelineItem
} from "@/types";

const paymentLink =
  process.env.NEXT_PUBLIC_PAYMENT_LINK ??
  "upi://pay?pa=8307188864@fam&pn=Vishal%20AI%20Academy&tn=Python%20for%20AI%2FML%20Beginner%20Starter%20Kit&am=99&cu=INR";
const telegramLink = process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? "https://t.me/AIml_kit";
const instagramLink =
  process.env.NEXT_PUBLIC_INSTAGRAM_LINK ?? "https://www.instagram.com/vishal_ai_academy";
const youtubeLink = process.env.NEXT_PUBLIC_YOUTUBE_LINK ?? "";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "vishal.kumar.connect0@gmail.com";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteContent = {
  brand: {
    name: "Vishal AI Academy",
    companyName: "V.M. AI Technologies Private Limited",
    companyShortName: "V.M. AI Technologies Pvt. Ltd.",
    productName: "Python for AI/ML Beginner Starter Kit",
    productSubtitle: "Python for AI/ML Starter Kit",
    tagline: "Python • AI/ML • Student Projects",
    formalLine: "Vishal AI Academy by V.M. AI Technologies Private Limited"
  },
  seo: {
    title: "Python for AI/ML Beginner Starter Kit | Vishal AI Academy",
    description:
      "Beginner-friendly Python for AI/ML starter kit with notes, interview questions, practice problems, projects, and roadmap for students."
  },
  links: {
    paymentLink,
    telegramLink,
    instagramLink,
    youtubeLink,
    contactEmail,
    siteUrl
  },
  payment: {
    upiId: "8307188864@fam",
    amount: "₹99",
    payeeName: "Vishal AI Academy",
    productLine: "Python for AI/ML Beginner Starter Kit",
    helperText:
      "If the UPI app does not open on desktop, copy the UPI ID and pay ₹99 from any UPI app manually."
  },
  announcementBar: {
    text: "Launch Offer: Python for AI/ML Beginner Starter Kit at ₹99",
    cta: "Get Access"
  },
  navItems: [
    { label: "What You Get", href: "/#what-you-get" },
    { label: "Roadmap", href: "/#learning-path" },
    { label: "Bonuses", href: "/#bonuses" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" }
  ] satisfies NavItem[],
  hero: {
    badge: "Beginner Friendly • PDF + Code Bundle",
    headline: "AI/ML Is Not Hard. Your Python Basics Are Weak.",
    dynamicHeadlines: [
      "AI/ML Is Not Hard.",
      "AI/ML Starts Here.",
      "AI/ML Needs Python."
    ],
    subheadline:
      "Most students jump into Machine Learning, TensorFlow, and AI projects without understanding Python properly. This starter kit gives you Python notes, interview questions, practice problems, mini projects, and a clear AI/ML roadmap in one place.",
    benefits: [
      "Learn Python basics in a proper order",
      "Practice with beginner coding problems",
      "Prepare with 50 Python interview Q&A",
      "Build 3 mini projects with source code",
      "Know what to learn before AI/ML"
    ],
    launchPrice: "₹99",
    originalPrice: "₹299",
    primaryCta: "Get Starter Kit Now",
    secondaryCta: "Download Free Roadmap",
    trustLine: "No fake job guarantee • No advanced coding required • Made for students",
    mockupCards: [
      {
        type: "PDF",
        title: "Python Notes PDF",
        subtitle: "Python basics before AI/ML"
      },
      {
        type: "PDF",
        title: "50 Interview Q&A PDF",
        subtitle: "Viva + internship prep"
      },
      {
        type: "PDF",
        title: "Practice Problems PDF",
        subtitle: "Small coding drills"
      },
      {
        type: "Code",
        title: "3 Mini Projects Source Code",
        subtitle: "Ready-to-study project files"
      },
      {
        type: "PDF",
        title: "AI/ML Roadmap PDF",
        subtitle: "What to learn after Python"
      },
      {
        type: "Folder",
        title: "GitHub-ready code files",
        subtitle: "Clean files for practice"
      }
    ],
    priceTag: "₹99 Launch Offer"
  },
  problemSection: {
    title: "Are You Also Facing This Problem?",
    items: [
      "I want to learn AI/ML but don’t know where to start",
      "I watch YouTube tutorials but forget everything later",
      "I copy Python code but cannot write it myself",
      "I get stuck in lists, functions, NumPy, and Pandas",
      "I need Python interview/viva questions",
      "I want beginner projects for GitHub",
      "I need one clear roadmap before starting ML"
    ],
    note:
      "If you checked even 2–3 boxes, you need a structured Python foundation before AI/ML.",
    cta: "Start With the ₹99 Starter Kit"
  },
  includedSection: {
    title: "What You Get Inside the Starter Kit",
    items: [
      {
        eyebrow: "PDF",
        title: "Python Basics Notes PDF",
        description:
          "Clear beginner notes covering variables, data types, conditions, loops, functions, strings, lists, dictionaries, file handling, errors, and OOP basics."
      },
      {
        eyebrow: "Q&A",
        title: "50 Python Interview Questions with Answers",
        description:
          "Simple answers for viva, internship, and beginner technical interviews."
      },
      {
        eyebrow: "Practice",
        title: "10 Practice Problems",
        description: "Small coding problems to test your understanding."
      },
      {
        eyebrow: "Projects",
        title: "3 Mini Projects with Source Code",
        description:
          "Beginner projects to apply Python and upload to GitHub."
      },
      {
        eyebrow: "Roadmap",
        title: "AI/ML Learning Roadmap",
        description:
          "What to learn after Python: NumPy, Pandas, Matplotlib, ML basics, projects, and interview preparation."
      },
      {
        eyebrow: "Files",
        title: "GitHub-ready Code Files",
        description:
          "Clean Python files students can study, modify, and upload."
      },
      {
        eyebrow: "Checklist",
        title: "Before AI/ML Checklist",
        description:
          "A practical checklist to know whether your Python foundation is ready."
      },
      {
        eyebrow: "Guide",
        title: "Beginner Mistakes Guide",
        description:
          "Common mistakes students make before starting AI/ML."
      }
    ] satisfies CopyCard[],
    cta: "Get Everything for ₹99"
  },
  previewSection: {
    title: "Preview What You’ll Learn",
    description:
      "These previews show the kind of simple, practical material included in the kit.",
    cards: [
      {
        label: "Interview Q&A Preview",
        title: "Interview Q&A Preview",
        description: "Short beginner-friendly answers for common Python questions.",
        question: "What is the difference between list and tuple?",
        answer: "A list is mutable, while a tuple is immutable.",
        tone: "document"
      },
      {
        label: "Project Preview",
        title: "Student Marks Analyzer",
        description: "A beginner project to make Python feel practical.",
        points: ["Skills used", "Lists", "Functions", "Conditions", "Basic calculations"],
        tone: "code"
      },
      {
        label: "Roadmap Preview",
        title: "Roadmap Preview",
        description: "A clear path before you jump into bigger AI/ML topics.",
        points: [
          "Python Basics",
          "NumPy",
          "Pandas",
          "Matplotlib",
          "ML Basics",
          "Mini Projects"
        ],
        tone: "document"
      },
      {
        label: "Notes Preview",
        title: "Functions",
        description: "Short notes that are easy to revise quickly.",
        points: ["def function_name(parameters):", "    return result"],
        tone: "code"
      }
    ] satisfies PreviewCard[]
  },
  curriculumSection: {
    title: "Follow This Simple Learning Path",
    description:
      "This is a self-study kit, but the material is arranged so students can follow it in a practical order.",
    weeks: [
      {
        day: "Week 1",
        title: "Python Basics",
        description: "Variables and data types • Operators • Conditions • Loops • Strings"
      },
      {
        day: "Week 2",
        title: "Core Python Practice",
        description: "Lists • Tuples • Sets • Dictionaries • Functions • File handling"
      },
      {
        day: "Week 3",
        title: "Projects + Interview Prep",
        description: "Practice problems • Mini project 1 • Mini project 2 • Mini project 3 • 50 Python Q&A"
      },
      {
        day: "Week 4",
        title: "AI/ML Readiness",
        description: "NumPy basics • Pandas basics • Matplotlib basics • ML roadmap • Next steps"
      }
    ] satisfies TimelineItem[],
    cta: "Get the Starter Kit and Follow This Path"
  },
  instructorSection: {
    title: "Built by a Student, for Students",
    copy:
      "Hi, I’m Vishal. I’m a BTech CSE AIML student and I created this starter kit for students who want to start Python for AI/ML without confusion. I made this because many beginners directly jump into Machine Learning and then get stuck in Python basics, NumPy, Pandas, and project implementation.",
    chips: [
      "BTech CSE AIML Student",
      "Python + AI/ML Learner",
      "Student-focused teaching",
      "No fake job promises"
    ],
    note:
      "This is not a magic shortcut. You still have to practice. The kit simply removes confusion and gives you a proper order."
  },
  warningSection: {
    title: "Don’t Start AI/ML With Weak Python Basics",
    copy:
      "Before learning Machine Learning, TensorFlow, or LLM projects, students must understand Python basics, data structures, functions, file handling, NumPy, Pandas, and basic visualization.",
    checklist: [
      "Variables and data types",
      "Conditions and loops",
      "Functions",
      "Lists and dictionaries",
      "File handling",
      "Error handling",
      "Basic OOP",
      "NumPy basics",
      "Pandas basics",
      "Matplotlib basics",
      "Mini projects",
      "Interview preparation"
    ].map((label) => ({ label })) satisfies ChecklistItem[],
    cta: "Check What’s Inside the Kit"
  },
  bonusesSection: {
    title: "Launch Bonuses Included",
    items: [
      {
        title: "Before AI/ML Checklist PDF",
        description: "A quick self-check before you start bigger AI/ML topics."
      },
      {
        title: "Beginner Mistakes Guide PDF",
        description: "Common mistakes students make before ML and how to avoid them."
      },
      {
        title: "GitHub Upload Guide",
        description: "A simple guide to putting your beginner project files on GitHub."
      },
      {
        title: "15-Day Study Plan",
        description: "A simple path to help you actually use the kit instead of letting it sit in downloads."
      },
      {
        title: "Free Python for AI/ML Roadmap PDF",
        description: "The same roadmap you can also request separately through the lead form."
      }
    ] satisfies CopyCard[],
    cta: "Claim Starter Kit + Bonuses for ₹99"
  },
  audienceSection: {
    title: "Who Should Get This?",
    items: [
      "First-year and second-year BTech students",
      "Complete Python beginners",
      "Students interested in AI/ML",
      "Students preparing for internships",
      "Students who want beginner GitHub projects",
      "Students confused about what to learn before ML"
    ]
  },
  notForSection: {
    title: "This Is NOT For You If...",
    items: [
      "You already know Python, NumPy, Pandas, and ML basics deeply",
      "You expect a full video course",
      "You want guaranteed jobs or internships",
      "You do not want to practice",
      "You are looking for advanced deep learning content"
    ]
  },
  pricingSection: {
    title: "Get the Complete Starter Kit Today",
    product: "Python for AI/ML Beginner Starter Kit",
    launchPrice: "₹99",
    originalPrice: "₹299",
    cta: "Buy Now for ₹99",
    note:
      "Manual access delivery in v1. No instant automatic delivery yet. After UPI payment, send your screenshot on Instagram DM, Telegram, or email for verification.",
    included: [
      "Python Basics Notes PDF",
      "50 Python Interview Q&A",
      "10 Practice Problems",
      "3 Mini Projects with Source Code",
      "AI/ML Roadmap",
      "GitHub-ready Code Files",
      "Before AI/ML Checklist",
      "Beginner Mistakes Guide",
      "15-Day Study Plan",
      "Free Roadmap PDF"
    ].map((label) => ({ label })) satisfies PricingFeature[],
    deliverySteps: [
      "Click Buy Now",
      "Complete UPI payment",
      "Send payment screenshot on Instagram DM, Telegram, or email",
      "Get Google Drive access after verification"
    ]
  },
  roadmapLead: {
    title: "Not Ready to Buy? Download the Free Roadmap",
    offer: "Free Python for AI/ML Roadmap PDF",
    copy:
      "Get the free Python for AI/ML Roadmap first. It shows what to learn before starting AI/ML and helps you avoid random learning.",
    successMessage: "Success! You can access your free bundle using the link below.",
    submitLabel: "Get Free Roadmap",
    levels: ["Complete Beginner", "Basic Python", "Intermediate"] satisfies LeadLevel[],
    interests: ["Python", "AI/ML", "Interview Prep", "Projects"] satisfies LeadInterest[]
  },
  faqSection: {
    title: "FAQ",
    items: [
      {
        question: "Is this a full course?",
        answer:
          "No. This is a starter kit, not a full video course. It is designed to help beginners start faster with notes, practice, interview questions, and projects."
      },
      {
        question: "Is this useful for complete beginners?",
        answer: "Yes. It starts from Python basics and then gives a roadmap toward AI/ML."
      },
      {
        question: "Will I get videos?",
        answer: "No. Version 1 is a PDF + code bundle. A video course may come later."
      },
      {
        question: "How will I receive the product?",
        answer:
          "After payment verification, the product link will be shared through email. You can send your payment screenshot on Instagram DM, Telegram, or email for verification."
      },
      {
        question: "Is there a refund?",
        answer:
          "Since this is a digital product, refunds are not available after delivery. Support will be provided if there is an access issue."
      },
      {
        question: "Is this enough to learn full AI/ML?",
        answer:
          "No. This is the foundation step before AI/ML. It helps you become ready to start AI/ML properly."
      },
      {
        question: "Do I need coding experience?",
        answer: "No advanced coding experience is required. Basic computer usage is enough."
      },
      {
        question: "Can I use this for interview preparation?",
        answer:
          "Yes, it includes beginner Python interview questions and answers, but it does not replace deep DSA or advanced ML interview preparation."
      },
      {
        question: "Who owns/publishes this product?",
        answer:
          "This product is published under Vishal AI Academy by V.M. AI Technologies Private Limited."
      }
    ] satisfies FaqItem[]
  },
  finalCta: {
    title: "You Have Two Options",
    optionOne: "Keep watching random videos and stay confused.",
    optionTwo: "Follow one structured Python foundation path and start AI/ML properly.",
    primaryCta: "Get Starter Kit for ₹99",
    secondaryCta: "Download Free Roadmap"
  },
  footer: {
    disclaimer:
      "This product is for educational purposes. It does not guarantee internship, job, exam result, or income."
  },
  stickyBar: {
    text: "Python for AI/ML Starter Kit — ₹99",
    cta: "Buy Now"
  },
  thankYou: {
    title: "Thanks for your interest.",
    body: "Please check your email for the next update from Vishal AI Academy.",
    reminder:
      "If you purchased the kit, send your payment screenshot on Instagram DM, Telegram, or email for verification.",
    primaryCta: "Back to Home",
    secondaryCta: "Contact Support"
  },
  support: {
    title: "Support",
    body:
      "Share your question or access issue below. Support requests are checked manually, so include enough detail for a faster reply.",
    successMessage: "Support request received.",
    submitLabel: "Send Support Request"
  }
} as const;
