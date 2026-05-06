export default function Loading() {
  return (
    <main className="section-space">
      <div className="section-shell">
        <div className="soft-panel p-8">
          <div className="skeleton-shimmer h-4 w-32 rounded-full" />
          <div className="mt-5 skeleton-shimmer h-12 w-full max-w-3xl rounded-2xl" />
          <div className="mt-4 skeleton-shimmer h-6 w-full max-w-2xl rounded-2xl" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="soft-panel p-6">
                <div className="skeleton-shimmer h-5 w-24 rounded-full" />
                <div className="mt-5 skeleton-shimmer h-8 w-3/4 rounded-2xl" />
                <div className="mt-4 skeleton-shimmer h-20 w-full rounded-2xl" />
                <div className="mt-6 skeleton-shimmer h-11 w-36 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
