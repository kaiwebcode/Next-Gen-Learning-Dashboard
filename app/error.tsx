"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="grid min-h-screen place-items-center bg-background px-6">
      <div
        role="alert"
        className="max-w-md rounded-3xl border border-red-500/40 bg-card p-8 text-center"
      >
        <h2 className="text-lg font-semibold text-foreground">
          Couldn&apos;t load your dashboard
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          We had trouble reaching the database.
          Please refresh to try again.
        </p>

        <p className="mt-4 text-xs text-muted-foreground/70">
          {error.message}
        </p>

        <button
          onClick={reset}
          className="mt-6 rounded-xl bg-violet-600 px-4 py-2 text-white"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}