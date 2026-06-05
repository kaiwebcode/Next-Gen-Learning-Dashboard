export interface Course {
    id: string;
    title: string;
    progress: number; // Progress percentage (0-100)
    icon_name: string; // Name of the icon to be used for the course
    created_at: string; // ISO date string
}