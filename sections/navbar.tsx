"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems, profile } from "@/data/site";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const sectionIds = useMemo(() => navItems.map((item) => item.href), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = sectionIds
      .map((href) => document.querySelector(href))
      .filter((element): element is Element => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7]
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 pt-4"
    >
      <Container>
        <motion.div
          animate={{
            backgroundColor: scrolled ? "rgba(10, 18, 32, 0.84)" : "rgba(255, 255, 255, 0.08)",
            borderColor: scrolled ? "rgba(255, 255, 255, 0.16)" : "rgba(255, 255, 255, 0.1)",
            boxShadow: scrolled
              ? "0 24px 80px rgba(5, 10, 20, 0.36)"
              : "0 20px 60px rgba(11, 18, 35, 0.12)"
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-full border px-4 py-3 backdrop-blur-2xl"
        >
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/12 text-sm font-semibold text-white">
                FH
              </span>
              <div className="hidden sm:block">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
                  Portfolio
                </p>
                <p className="text-sm font-medium tracking-[-0.02em]">{profile.name}</p>
              </div>
            </a>

            <nav className="hidden items-center rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
              {navItems.map((item) => {
                const active = activeSection === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group relative rounded-full px-4 py-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-white"
                  >
                    {active ? (
                      <motion.span
                        layoutId="apple-nav-pill"
                        className="absolute inset-0 rounded-full bg-white/12"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-white/65 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#contact"
                className="hidden rounded-full border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-white/90 lg:inline-flex"
              >
                Let&apos;s Talk
              </a>
              <button
                type="button"
                aria-label="Toggle navigation"
                onClick={() => setOpen((value) => !value)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 backdrop-blur-2xl lg:hidden"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="mt-3 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[rgba(10,18,32,0.86)] p-3 shadow-floating shadow-black/20 backdrop-blur-2xl lg:hidden"
            >
              {navItems.map((item) => {
                const active = activeSection === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-sm transition ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-[var(--muted-foreground)] hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
