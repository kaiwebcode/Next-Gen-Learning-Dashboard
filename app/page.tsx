import  { MobileNav, Sidebar } from "./_components/sidebar/sidebar";
import DashboardContent from "./_components/dashboard/DashboardContent";
import { Suspense } from "react";
import { DashboardSkeleton } from "./_components/dashboard/DashboardSkeleton";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 px-4 pb-24 pt-6 sm:px-6 md:pb-8 lg:px-8">
        <Suspense fallback={<DashboardSkeleton/>}>
        <DashboardHeader />
        <DashboardContent />
        </Suspense>
      </main>

      <MobileNav />
    </div>
  );
}
function DashboardHeader() {
  return (
    <header className="mb-6 flex items-center justify-between md:hidden">
      <span className="text-lg font-bold tracking-tight text-gradient">
        Learning-Hub
      </span>
    </header>
  );
}
