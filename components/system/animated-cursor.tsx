"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedCursor() {
  const x = useSpring(0, { stiffness: 300, damping: 34, mass: 0.22 });
  const y = useSpring(0, { stiffness: 300, damping: 34, mass: 0.22 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer:fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(finePointer.matches && !reducedMotion.matches && window.innerWidth >= 1024);

    update();
    finePointer.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    window.addEventListener("resize", update);

    return () => {
      finePointer.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const flush = () => {
      frame = 0;
      x.set(nextX);
      y.set(nextY);
    };

    const handleMove = (event: MouseEvent) => {
      nextX = event.clientX - 12;
      nextY = event.clientY - 12;

      if (frame === 0) {
        frame = window.requestAnimationFrame(flush);
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);

      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [enabled, x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-6 w-6 rounded-full border border-white/30 bg-white/10 mix-blend-difference backdrop-blur-sm lg:block"
      style={{ x, y }}
    />
  );
}
