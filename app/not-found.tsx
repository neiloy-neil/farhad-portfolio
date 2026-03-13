import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-6 text-[var(--foreground)]">
      <div className="glass-panel max-w-xl rounded-[2rem] p-10 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[var(--muted-foreground)]">
          404
        </p>
        <h1 className="mt-4 font-display text-5xl">Page not found</h1>
        <p className="mt-4 text-[var(--muted-foreground)]">
          The page you requested is not available in this portfolio.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm transition hover:border-white/30 hover:bg-white/10"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
