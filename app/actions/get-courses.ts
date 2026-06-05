import { supabase } from "../lib/supabase";
import { Course } from "../types/course";

export async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("id, title, progress, icon_name, created_at")
    .order("created_at", { ascending: true });

  // console.log("DATA:", data);
  // console.log("ERROR:", error);

  if (error) {
    throw new Error(`Failed to load courses: ${error.message}`);
  }

  return (data ?? []) as Course[];
}
