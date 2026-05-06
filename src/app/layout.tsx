import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vishal AI Academy | Learn Python, AI & Machine Learning",
  description:
    "Welcome to Vishal AI Academy — your destination to learn Artificial Intelligence, Machine Learning, Python, Deep Learning, Data Science, and future-ready tech skills in a simple, practical, and project-based way.",
  keywords: [
    "Artificial Intelligence",
    "Machine Learning",
    "Python Programming",
    "Deep Learning",
    "Data Science",
    "AI Engineer Roadmap",
    "Vishal AI Academy",
    "Learn AI Online"
  ],
  openGraph: {
    title: "Vishal AI Academy | Learn Python, AI & Machine Learning",
    description:
      "Welcome to Vishal AI Academy — your destination to learn Artificial Intelligence, Machine Learning, Python, Deep Learning, Data Science, and future-ready tech skills in a simple, practical, and project-based way.",
    images: ["/og-image.png"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal AI Academy | Learn Python, AI & Machine Learning",
    description:
      "Welcome to Vishal AI Academy — your destination to learn Artificial Intelligence, Machine Learning, Python, Deep Learning, Data Science, and future-ready tech skills in a simple, practical, and project-based way.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
