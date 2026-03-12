export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-midnight px-6 text-center text-white">
      <div className="surface-panel max-w-xl p-10">
        <p className="section-kicker">404</p>
        <h1 className="section-title">This page could not be found.</h1>
        <p className="mt-4 text-white/70">
          The link may be broken, or the page may have been moved.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-[linear-gradient(90deg,#a362ff,#7b4fd1)] px-6 py-3 text-sm font-semibold text-white shadow-neon transition hover:-translate-y-0.5"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
