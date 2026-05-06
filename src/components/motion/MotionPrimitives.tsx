"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06
    }
  }
};

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
};

export function FadeInSection({ children, className }: FadeInSectionProps) {
  return (
    <motion.section
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}

type StaggerGridProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerGrid({ children, className }: StaggerGridProps) {
  return (
    <motion.div
      className={className}
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      transition={{ duration: 0.45, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type MotionCardProps = HTMLMotionProps<"article"> & {
  children: ReactNode;
};

export function MotionCard({ children, className, ...props }: MotionCardProps) {
  return (
    <motion.article
      className={cn("will-change-transform", className)}
      variants={fadeUpVariants}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 28px 60px rgba(15, 23, 42, 0.16)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.article>
  );
}

type MotionButtonProps = HTMLMotionProps<"button"> & {
  children: ReactNode;
};

export function MotionButton({ children, className, ...props }: MotionButtonProps) {
  return (
    <motion.button
      className={cn("relative overflow-hidden", className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    >
      {children}
      <span className="pointer-events-none absolute inset-0 ripple-glow opacity-0 transition-opacity duration-200 group-active:opacity-100" />
    </motion.button>
  );
}
