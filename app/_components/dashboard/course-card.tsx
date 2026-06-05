import { motion } from "framer-motion";
import { BentoTile } from "./BentoTile";
import { Course } from "@/app/types/course";
import { iconMap } from "@/app/lib/icon-map";
import { BookOpen } from "lucide-react";
// import { resolveIcon } from "@/app/lib/icon-map";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const Icon = iconMap[course.icon_name as keyof typeof iconMap] ?? BookOpen;

  return (
    <BentoTile>
      {/* Subtle abstract gradient mesh behind content */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-40 blur-3xl glow-gradient"
      />
      <div className="relative flex h-full flex-col gap-5">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl border border-border bg-secondary/60 text-primary">
            <Icon className="size-5" />
          </span>
          <h3 className="text-base font-semibold leading-tight">
            {course.title}
          </h3>
        </div>

        <div className="mt-auto">
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span className="font-semibold text-foreground">
              {course.progress}%
            </span>
          </div>
          {/* Custom animated progress bar: 0% -> value, transform only */}
          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full origin-left rounded-full glow-gradient"
              initial={{ transform: "scaleX(0)" }}
              animate={{ transform: `scaleX(${course.progress / 100})` }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
              }}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </BentoTile>
  );
}
