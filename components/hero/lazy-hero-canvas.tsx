"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HeroCanvas = dynamic(
  () => import("@/components/hero/hero-canvas").then((mod) => mod.HeroCanvas),
  { ssr: false }
);

export function LazyHeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = containerRef.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      setShouldRender(true);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let idleId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) {
          return;
        }

        observer.disconnect();

        if ("requestIdleCallback" in window) {
          idleId = window.requestIdleCallback(() => setShouldRender(true), { timeout: 600 });
          return;
        }

        timeoutId = globalThis.setTimeout(() => setShouldRender(true), 160);
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();

      if (timeoutId !== null) {
        globalThis.clearTimeout(timeoutId);
      }

      if (idleId !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0">{shouldRender ? <HeroCanvas /> : null}</div>;
}
