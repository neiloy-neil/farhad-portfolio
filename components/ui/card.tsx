import { cn } from "@/lib/utils";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-white/10 bg-white/8 p-6 shadow-floating shadow-black/10 backdrop-blur-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
