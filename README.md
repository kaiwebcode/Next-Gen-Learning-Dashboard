# Learning-Hub Dashboard

A futuristic student dashboard built with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase

## Features

- Bento grid layout
- Dynamic courses from Supabase
- Animated progress bars
- Activity heatmap
- Responsive sidebar
- Mobile navigation
- Dark futuristic UI

## Environment Variables

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase

## Architecture

- Server Components used for data fetching
- Supabase stores course data
- DashboardGrid renders Bento layout
- Course cards are dynamically generated from database data

## Animations

- Staggered entrance animations
- Spring hover effects
- Animated progress bars
- Sidebar navigation transitions

## Challenges

- Setting up Supabase RLS policies
- Dynamic icon rendering
- Maintaining zero-layout-shift animations