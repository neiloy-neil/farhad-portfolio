"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-white/5 bg-[#120427]/70 backdrop-blur-2xl"
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-lavender/30 bg-lavender/10 text-sm font-semibold text-white shadow-neon transition group-hover:scale-105">
            FH
          </span>
          <span className="hidden md:block">
            <span className="block font-display text-lg text-white">
              Farhad Hossain
            </span>
            <span className="block text-xs uppercase tracking-[0.35em] text-white/45">
              Growth Portfolio
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/5 hover:text-lavender"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full border border-lavender/40 bg-lavender/10 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-lavender hover:bg-lavender/20"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </motion.header>
  );
}
