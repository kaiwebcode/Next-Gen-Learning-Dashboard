"use client";

import { motion } from "framer-motion";
import { gridContainer } from "@/app/lib/animation";
// import ActivityTile from "./activity-tile";
// import CourseCard from "./course-card";
import { HeroTile } from "./hero-tile";
import { Course } from "@/app/types/course";
import { ActivityTile } from "./activity-tile";
import { CourseCard } from "./course-card";

interface DashboardGridProps {
  courses: Course[];
}

export function DashboardGrid({
  courses,
}: DashboardGridProps) {
  return (
    <motion.div
      variants={gridContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      <HeroTile name="Kaif" streak={12} />

      <ActivityTile />

      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </motion.div>
  );
}