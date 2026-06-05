import type { Variants } from "framer-motion";

// Spring config required by the brief for natural, non-linear motion.
export const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};

// Container staggers children in sequentially after data is rendered.
export const gridContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

// Each tile fades in while translating slightly upward on the Y-axis.
// Only transform + opacity are animated -> no layout shift / repaint.
export const tileItem: Variants = {
  hidden: { opacity: 0, transform: "translateY(24px)" },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: springTransition,
  },
};
