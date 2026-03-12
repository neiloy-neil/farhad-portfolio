export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-white/55 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 Farhad Hossain. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:neiloyfarhad@gmail.com"
            className="transition hover:text-lavender-soft"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/neiloy-farhad/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-lavender-soft"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
