"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  GraduationCap,
  BarChart3,
  Trophy,
  Settings,
  PanelLeftClose,
  PanelLeft,
  Book,
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "Courses", icon: GraduationCap },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "settings", label: "Settings", icon: Settings },
];

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("dashboard");

  return (
    <motion.aside
      animate={{ width: collapsed ? 76 : 248 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 hidden h-screen shrink-0 flex-col gap-2 border-r border-border bg-surface/60 p-4 backdrop-blur md:flex"
    >
      <div className="flex items-center gap-3 px-2 py-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-xl glow-gradient text-primary-foreground">
          <Book className="size-5" />
        </span>
        {!collapsed && (
          <span className="truncate text-lg font-bold tracking-tight">
            Learning-Hub
          </span>
        )}
      </div>

      <nav className="mt-2 flex flex-1 flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={cn(
                "relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="sidebar-active"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute inset-0 rounded-xl border border-border bg-secondary"
                />
              )}
              <item.icon className="relative z-10 size-5 shrink-0" />
              {!collapsed && (
                <span className="relative z-10 truncate">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      <button
        onClick={() => setCollapsed((c) => !c)}
        className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {collapsed ? (
          <PanelLeft className="size-5" />
        ) : (
          <PanelLeftClose className="size-5" />
        )}
        {!collapsed && <span>Collapse</span>}
      </button>
    </motion.aside>
  );
}

export function MobileNav() {
  const [active, setActive] = useState("dashboard");
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-around border-t border-border bg-surface/90 px-2 py-2 backdrop-blur md:hidden">
      {NAV_ITEMS.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            aria-label={item.label}
            className={cn(
              "relative grid place-items-center rounded-xl px-4 py-2 transition-colors duration-200 cursor-pointer",
              isActive ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="mobile-active"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute inset-0 rounded-xl bg-secondary"
              />
            )}
            <item.icon className="relative z-10 size-5 cursor-pointer" />
          </button>
        );
      })}
    </nav>
  );
}
