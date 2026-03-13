"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SESSION_KEY = "fh-loader-seen";

export function PageLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = window.sessionStorage.getItem(SESSION_KEY) === "1";

    if (reducedMotion || seen) {
      return;
    }

    setLoading(true);
    window.sessionStorage.setItem(SESSION_KEY, "1");

    const timeout = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[var(--bg)]"
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute h-24 w-24 animate-pulseRing rounded-full border border-white/15" />
            <span className="glass-panel flex h-20 w-20 items-center justify-center rounded-[1.75rem] text-lg font-semibold">
              FH
            </span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
