import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(135deg,rgba(94,162,255,0.98),rgba(60,104,255,0.88))] px-5 py-3 text-white shadow-glow hover:-translate-y-0.5 hover:brightness-105",
        ghost:
          "border border-white/15 bg-white/5 px-5 py-3 text-[var(--foreground)] hover:border-white/30 hover:bg-white/10"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  ...props
}: ButtonProps) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}
