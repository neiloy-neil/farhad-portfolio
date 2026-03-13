"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  as?: "h1" | "h2" | "p" | "span";
  text: string;
  className?: string;
};

export function AnimatedText({ as = "p", text, className }: AnimatedTextProps) {
  const Component = as;

  return (
    <Component className={cn(className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline-block">
        {text.split(" ").map((word, index) => (
          <span key={`${word}-${index}`} className="mr-[0.32em] inline-block overflow-hidden">
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Component>
  );
}
