"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type FloatingCardProps = {
  className?: string;
  children: React.ReactNode;
};

export function FloatingCard({ className, children }: FloatingCardProps) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className={cn(className)}
    >
      <Card>{children}</Card>
    </motion.div>
  );
}
