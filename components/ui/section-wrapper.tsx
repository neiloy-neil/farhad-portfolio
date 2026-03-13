import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type SectionWrapperProps = {
  id?: string;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export function SectionWrapper({
  id,
  className,
  eyebrow,
  title,
  description,
  children
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative py-16 sm:py-20 lg:py-24", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted-foreground)]">
                {eyebrow}
              </p>
            ) : null}
            {title ? <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{title}</h2> : null}
            {description ? (
              <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
