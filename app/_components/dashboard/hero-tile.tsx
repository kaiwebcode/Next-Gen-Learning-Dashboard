import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { BentoTile } from "./BentoTile";

interface HeroTileProps {
  name: string;
  streak: number;
}

export function HeroTile({ name, streak }: HeroTileProps) {
  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <BentoTile className="md:col-span-2 lg:col-span-2 lg:row-span-1">
      <div className="flex h-full flex-col justify-between gap-6">
        <header>
          <p className="min-h-5 text-sm font-medium text-muted-foreground">
            {today}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome back, <span className="text-gradient">{name}</span>
          </h1>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            You&apos;re on a roll. Keep the momentum going and finish what you
            started today.
          </p>
        </header>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(8px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="inline-flex w-fit items-center gap-3 rounded-2xl border border-border bg-secondary/60 px-4 py-3"
        >
          <span className="grid size-10 place-items-center rounded-xl glow-gradient text-primary-foreground">
            <Flame className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-2xl font-bold">{streak} days</span>
            <span className="block text-xs text-muted-foreground">
              Current learning streak
            </span>
          </span>
        </motion.div>
      </div>
    </BentoTile>
  );
}
