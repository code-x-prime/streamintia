function CardSkeleton() {
  return (
    <div
      className="blog-surface overflow-hidden rounded-2xl"
      aria-hidden="true"
    >
      <div className="blog-skel aspect-[16/9] rounded-none!" />
      <div className="grid gap-3 p-5">
        <div className="flex justify-between gap-4">
          <div className="blog-skel h-5 w-24" />
          <div className="blog-skel h-4 w-12" />
        </div>
        <div className="blog-skel h-6 w-full" />
        <div className="blog-skel h-6 w-3/4" />
        <div className="blog-skel h-4 w-full" />
        <div className="blog-skel h-4 w-5/6" />
        <div className="mt-2 flex items-center gap-2.5">
          <div className="blog-skel h-8 w-8 rounded-full!" />
          <div className="blog-skel h-4 w-28" />
        </div>
      </div>
    </div>
  );
}

export default function BlogLoading() {
  return (
    <div
      className="px-(--home-gutter) pt-[clamp(2.5rem,5vw,4rem)] pb-[clamp(4rem,8vw,6rem)]"
      role="status"
      aria-label="Loading articles"
    >
      <div className="home-container">
        <div className="blog-skel h-4 w-36" aria-hidden="true" />
        <div
          className="blog-skel mt-4 h-16 w-48 min-[640px]:h-20"
          aria-hidden="true"
        />
        <div
          className="blog-skel mt-5 h-5 w-full max-w-xl"
          aria-hidden="true"
        />

        <div
          className="blog-surface mt-10 grid overflow-hidden rounded-3xl lg:grid-cols-[1.15fr_1fr]"
          aria-hidden="true"
        >
          <div className="blog-skel aspect-[16/10] rounded-none! lg:aspect-auto lg:min-h-[24rem]" />
          <div className="grid content-start gap-4 p-8">
            <div className="blog-skel h-5 w-28" />
            <div className="blog-skel h-9 w-full" />
            <div className="blog-skel h-9 w-4/5" />
            <div className="blog-skel h-4 w-full" />
            <div className="blog-skel h-4 w-11/12" />
            <div className="blog-skel h-4 w-2/3" />
          </div>
        </div>

        <div className="mt-14 grid gap-5 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
        <span className="sr-only">Loading articles…</span>
      </div>
    </div>
  );
}
