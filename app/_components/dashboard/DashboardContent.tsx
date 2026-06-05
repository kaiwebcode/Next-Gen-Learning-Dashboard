import { getCourses } from "@/app/actions/get-courses";
import { DashboardGrid } from "./DashboardGrid";

export default async function DashboardContent() {
  const courses = await getCourses();

  if(!courses.length) {
    throw new Error("No courses found");
  }

  return <DashboardGrid courses={courses} />;
}