import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, Building2, CalendarDays, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${study.client} | Case Study`,
    description: study.summary
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(107,179,255,0.16),transparent_28%),radial-gradient(circle_at_85%_14%,rgba(255,149,103,0.12),transparent_20%)]" />
      <Container className="py-10 sm:py-14 lg:py-16">
        <Link href="/#case-studies" className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to case studies
        </Link>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(5,11,20,0.96),rgba(8,16,30,0.9))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-10 lg:p-12">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--muted-foreground)]">Case Study</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">{study.client}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">{study.summary}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="border-white/10 bg-white/6 p-5">
              <div className="flex items-center gap-3 text-[#8cc4ff]">
                <Building2 className="h-5 w-5" />
                <span className="text-sm uppercase tracking-[0.24em] text-[var(--muted-foreground)]">Client</span>
              </div>
              <p className="mt-4 text-lg font-semibold text-white">{study.client}</p>
            </Card>
            <Card className="border-white/10 bg-white/6 p-5">
              <div className="flex items-center gap-3 text-[#6bf0c7]">
                <BriefcaseBusiness className="h-5 w-5" />
                <span className="text-sm uppercase tracking-[0.24em] text-[var(--muted-foreground)]">Industry</span>
              </div>
              <p className="mt-4 text-lg font-semibold text-white">{study.industry}</p>
            </Card>
            <Card className="border-white/10 bg-white/6 p-5">
              <div className="flex items-center gap-3 text-[#ffb18b]">
                <CalendarDays className="h-5 w-5" />
                <span className="text-sm uppercase tracking-[0.24em] text-[var(--muted-foreground)]">Duration</span>
              </div>
              <p className="mt-4 text-lg font-semibold text-white">{study.duration}</p>
            </Card>
          </div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card className="p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted-foreground)]">Problem</p>
            <p className="mt-5 text-base leading-8 text-[var(--foreground)]">{study.problem}</p>
          </Card>
          <Card className="p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted-foreground)]">Strategy</p>
            <p className="mt-5 text-base leading-8 text-[var(--foreground)]">{study.strategy}</p>
          </Card>
        </section>

        <section className="mt-8">
          <Card className="p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted-foreground)]">Execution</p>
            <div className="mt-5 grid gap-4">
              {study.execution.map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-[1.2rem] border border-white/10 bg-black/10 px-4 py-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                      0{index + 1}
                    </span>
                    <p className="text-sm font-medium sm:text-base">{item}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[var(--muted-foreground)]" />
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="mt-8">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[var(--muted-foreground)]">Outcomes</p>
          <div className="grid gap-4 md:grid-cols-3">
            {study.results.map((item) => (
              <Card key={item.label} className="border-white/10 bg-white/6 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">{item.label}</p>
                <p className="mt-3 text-lg font-semibold leading-7 text-white">{item.value}</p>
              </Card>
            ))}
          </div>
        </section>

        {study.links?.length ? (
          <section className="mt-8">
            <Card className="p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted-foreground)]">Live Links</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {study.links.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-[1.2rem] border border-white/10 bg-black/10 px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">{item.label}</p>
                      <p className="mt-2 text-sm font-medium text-white">{item.href}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-[var(--muted-foreground)] transition group-hover:text-white" />
                  </a>
                ))}
              </div>
            </Card>
          </section>
        ) : null}
      </Container>
    </main>
  );
}
