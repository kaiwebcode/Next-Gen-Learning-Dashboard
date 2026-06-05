import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { springTransition, tileItem } from "@/app/lib/animation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BentoTileProps {
  children: ReactNode;
  className?: string;
  /** Render as a semantic <article> by default for non-div-soup markup. */
  as?: "article" | "section";
}

/**
 * Reusable Bento tile: staggered entrance + spring hover elevation/glow.
 * Animates transform + opacity only (zero layout shift).
 */
export function BentoTile({
  children,
  className,
  as = "article",
}: BentoTileProps) {
  const MotionTag = as === "section" ? motion.section : motion.article;

  return (
    <MotionTag
      variants={tileItem}
      whileHover={{ transform: "translateY(-2px) scale(1.015)" }}
      transition={springTransition}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card p-6",
        "shadow-[0_0_0_1px_transparent] will-change-transform",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl",
        "before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100",
        "before:[background:radial-gradient(120%_120%_at_50%_-10%,color-mix(in_oklab,var(--glow)_22%,transparent),transparent_60%)]",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-3xl after:p-px",
        "after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100",
        "after:[background:linear-gradient(135deg,color-mix(in_oklab,var(--glow)_60%,transparent),color-mix(in_oklab,var(--glow-2)_60%,transparent))]",
        "after:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] after:[mask-composite:exclude]",
        className,
      )}
    >
      <div className="relative z-10 h-full">{children}</div>
    </MotionTag>
  );
}
