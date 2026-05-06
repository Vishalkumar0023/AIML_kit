"use client";

import { platformNavItems } from "@/lib/platform-content";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-2 shadow-md"
            whileHover={{ scale: 1.03, boxShadow: "0 22px 42px rgba(15, 23, 42, 0.12)" }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/vishal-ai-academy-logo.svg"
              alt="Vishal AI Academy"
              width={44}
              height={44}
              className="h-11 w-11"
              priority
            />
          </motion.div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Learning Platform
            </p>
            <p className="text-lg font-bold text-slate-950">Vishal AI Academy</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {platformNavItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-underline rounded-full px-4 py-2 text-sm font-medium transition",
                  active
                    ? "bg-slate-950 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                )}
                data-active={active}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/product/ai-ml-free-roadmap"
            className="glow-button rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition duration-300 hover:scale-105 hover:border-slate-400 hover:bg-slate-50"
          >
            Free Download
          </Link>
          <Link
            href="/products"
            className="glow-button rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-amber-500"
          >
            Explore Products
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-800 md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      <div className={cn("border-t border-slate-200 bg-white md:hidden", menuOpen ? "block" : "hidden")}>
        <div className="section-shell flex flex-col gap-3 py-4">
          {platformNavItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium transition duration-300",
                  active
                    ? "bg-slate-950 text-white"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                )}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/product/ai-ml-free-roadmap"
            className="rounded-2xl border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition duration-300 hover:scale-[1.02] hover:bg-slate-50"
            onClick={() => setMenuOpen(false)}
          >
            Free Download
          </Link>
          <Link
            href="/products"
            className="rounded-2xl bg-amber-400 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-amber-500"
            onClick={() => setMenuOpen(false)}
          >
            Explore Products
          </Link>
        </div>
      </div>
    </header>
  );
}
