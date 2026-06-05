// Pulsing skeleton loaders shown while course data is fetched.
function SkeletonTile({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-3xl border border-border bg-card p-6 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="size-11 rounded-xl bg-secondary" />
        <div className="h-4 w-2/3 rounded-full bg-secondary" />
      </div>
      <div className="mt-8 space-y-3">
        <div className="h-2 w-full rounded-full bg-secondary" />
        <div className="h-2 w-1/2 rounded-full bg-secondary" />
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <SkeletonTile className="md:col-span-2 h-70" />
      <SkeletonTile className="md:col-span-2 h-70" />
      <SkeletonTile className="h-44" />
      <SkeletonTile className="h-44" />
      <SkeletonTile className="h-44" />
      <SkeletonTile className="h-44" />
    </div>
  );
}
