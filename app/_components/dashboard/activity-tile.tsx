import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { useMemo } from "react";
import { BentoTile } from "./BentoTile";

const WEEKS = 18;
const DAYS = 7;

function intensityClass(level: number) {
  switch (level) {
    case 0:
      return "bg-secondary";
    case 1:
      return "bg-primary/30";
    case 2:
      return "bg-primary/55";
    case 3:
      return "bg-primary/80";
    default:
      return "glow-gradient";
  }
}

export function ActivityTile() {
  // Deterministic mock contribution data (stable across SSR + client).
  const cells = useMemo(() => {
    const out: number[] = [];
    for (let i = 0; i < WEEKS * DAYS; i++) {
      const v = (i * 73 + 11) % 17;
      out.push(v < 6 ? 0 : v < 9 ? 1 : v < 12 ? 2 : v < 15 ? 3 : 4);
    }
    return out;
  }, []);

  return (
    <BentoTile className="md:col-span-2 lg:col-span-2">
      <div className="flex h-full flex-col gap-5">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl border border-border bg-secondary/60 text-accent">
              <Activity className="size-5" />
            </span>
            <div>
              <h2 className="text-base font-semibold leading-tight">Activity</h2>
              <p className="text-xs text-muted-foreground">Last 18 weeks of learning</p>
            </div>
          </div>
        </header>

        <div className="flex flex-wrap gap-1.5">
          {cells.map((level, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, transform: "scale(0.6)" }}
              animate={{ opacity: 1, transform: "scale(1)" }}
              transition={{ delay: 0.2 + i * 0.003, duration: 0.25 }}
              className={`size-3 rounded-[4px] ${intensityClass(level)}`}
            />
          ))}
        </div>

        <div className="mt-auto flex items-center justify-end gap-2 text-[11px] text-muted-foreground">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <span key={l} className={`size-3 rounded-[4px] ${intensityClass(l)}`} />
          ))}
          <span>More</span>
        </div>
      </div>
    </BentoTile>
  );
}
