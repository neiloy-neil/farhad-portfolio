"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Code2,
  ExternalLink,
  FolderKanban,
  Mail,
  Megaphone,
  Search,
  Sparkles,
  Wrench,
  Zap
} from "lucide-react";
import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/footer";
import { LazyHeroCanvas } from "@/components/hero/lazy-hero-canvas";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { AnimatedText } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FloatingCard } from "@/components/ui/floating-card";
import { caseStudies as caseStudyPages } from "@/data/case-studies";
import { demoProjects } from "@/data/demo-projects";
import {
  aboutExperience,
  aboutHighlights,
  experienceTimeline,
  highlightedSkills,
  metrics,
  profile,
  skillCategories
} from "@/data/site";

const ContactPanel = dynamic(
  () => import("@/components/ui/contact-panel").then((mod) => mod.ContactPanel),
  {
    loading: () => <div className="h-[34rem] rounded-[2rem] border border-white/10 bg-white/6" />
  }
);

const categoryIcons = {
  SEO: Search,
  "Digital Marketing": Megaphone,
  "Marketing Analytics": BarChart3,
  "Web Development": Code2,
  Tools: Wrench
} as const;

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[var(--bg)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(107,179,255,0.16),transparent_26%),radial-gradient(circle_at_85%_12%,rgba(255,149,103,0.12),transparent_18%),linear-gradient(180deg,transparent,rgba(255,255,255,0.02))]" />
      <Navbar />

      <section id="home" className="relative pt-8 sm:pt-12 lg:pt-16">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(5,11,20,0.96),rgba(8,16,30,0.88))] px-6 py-8 shadow-[0_24px_72px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:4rem_4rem]" />
            <div className="pointer-events-none absolute -left-12 top-14 h-52 w-52 rounded-full bg-[#6bb3ff]/20 blur-[72px]" />
            <div className="pointer-events-none absolute bottom-10 right-0 h-56 w-56 rounded-full bg-[#ff9f73]/18 blur-[84px]" />
            <div className="pointer-events-none absolute inset-0">
              <LazyHeroCanvas />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(255,255,255,0.1),transparent_24%),linear-gradient(90deg,rgba(5,11,20,0.82)_0%,rgba(5,11,20,0.48)_42%,rgba(5,11,20,0.12)_72%,rgba(5,11,20,0.44)_100%)]" />

            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr]">
              <div className="max-w-2xl">
                <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                  <Sparkles className="h-3.5 w-3.5" />
                  CEO & Co-Founder, The Digital Dude
                </motion.div>
                <AnimatedText as="h1" text={profile.name} className="mt-6 text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl" />
                <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="mt-5 max-w-2xl text-lg tracking-[-0.03em] text-slate-300 sm:text-2xl">
                  {profile.role}
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.14 }} className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                  {profile.headline}
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 flex flex-wrap gap-4">
                  <a href="#case-studies"><Button className="gap-2">View Case Studies<ArrowRight className="h-4 w-4" /></Button></a>
                  <a href="#contact"><Button variant="ghost" className="gap-2 border-white/15 bg-white/6 text-white hover:bg-white/10"><Mail className="h-4 w-4" />Contact Me</Button></a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.26 }} className="mt-10 grid gap-4 sm:grid-cols-3">
                  {metrics.map((item) => (
                    <Card key={item.label} className="border-white/10 bg-white/6 p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                      <p className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">{item.value}</p>
                    </Card>
                  ))}
                </motion.div>
              </div>

              <div className="relative min-h-[13rem] sm:min-h-[17rem] lg:min-h-[38rem]">
                <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.85, delay: 0.12 }} className="absolute right-0 top-4 hidden w-44 rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-2xl lg:block">
                  <div className="flex items-start gap-3"><BadgeCheck className="mt-1 h-5 w-5 text-[#8cc4ff]" /><div><p className="text-sm font-medium text-white">SEO + Growth Systems</p><p className="mt-2 text-sm leading-7 text-slate-400">Search, CRM, and execution aligned around measurable business outcomes.</p></div></div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.85, delay: 0.22 }} className="absolute bottom-8 left-0 hidden w-44 rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-2xl lg:block">
                  <div className="flex items-start gap-3"><Zap className="mt-1 h-5 w-5 text-[#ff9f73]" /><div><p className="text-sm font-medium text-white">Founder-Led Delivery</p><p className="mt-2 text-sm leading-7 text-slate-400">Blending digital strategy with web systems and product-minded execution.</p></div></div>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionWrapper id="about" eyebrow="About Me" title="Digital marketing, SEO, and business systems delivered with a founder's operating mindset." description={profile.summary}>
        <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-[#6bb3ff]/16 blur-2xl" />
            <div className="absolute -bottom-4 right-0 h-36 w-36 rounded-full bg-[#ff9f73]/14 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-floating shadow-black/15 backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_24%,transparent_78%,rgba(8,17,31,0.18))]" />
              <Image src="/images/farhad-profile.jpeg" alt="Portrait of Farhad Hossain" width={720} height={900} priority sizes="(max-width: 1024px) 100vw, 32rem" className="h-[32rem] w-full rounded-[1.5rem] object-cover object-[center_18%]" />
            </div>
            <FloatingCard className="absolute -right-4 top-8 hidden w-44 lg:block"><div><p className="text-xs uppercase tracking-[0.28em] text-[var(--muted-foreground)]">Profession</p><p className="mt-3 text-sm font-medium leading-6">Co-Founder & Digital Marketing Expert</p></div></FloatingCard>
            <FloatingCard className="absolute -left-6 bottom-10 hidden w-48 lg:block"><div><p className="text-xs uppercase tracking-[0.28em] text-[var(--muted-foreground)]">Agency</p><p className="mt-3 text-sm font-medium leading-6">The Digital Dude builds web apps, SaaS, ERP, CRM, and HRM systems globally.</p></div></FloatingCard>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-4 md:grid-cols-3">
              {aboutHighlights.map((item) => (
                <Card key={item.label} className="p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">{item.label}</p>
                  <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white">{item.value}</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{item.detail}</p>
                </Card>
              ))}
            </div>
            <Card className="p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted-foreground)]">Experience Snapshot</p>
              <div className="mt-5 grid gap-4">
                {aboutExperience.map((item, index) => (
                  <motion.div key={item} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.08 }} className="flex items-center gap-4 rounded-[1.2rem] border border-white/10 bg-black/10 px-4 py-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">0{index + 1}</span>
                    <p className="text-sm font-medium leading-6 sm:text-base">{item}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="skills" eyebrow="Skills" title="Core capabilities across SEO, growth strategy, e-commerce, analytics, and web delivery." description="The stack is intentionally limited to the tools and disciplines that match Farhad's real operating experience.">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-5">
            {skillCategories.map((category, index) => {
              const Icon = categoryIcons[category.title];
              return (
                <motion.div key={category.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.06 }}>
                  <Card className="group rounded-[1.8rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
                    <div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(107,179,255,0.28),rgba(255,255,255,0.04))] text-[#9fd1ff] shadow-[0_0_35px_rgba(107,179,255,0.16)]"><Icon className="h-5 w-5" /></div><div><p className="text-lg font-semibold tracking-[-0.03em]">{category.title}</p><p className="text-sm text-[var(--muted-foreground)]">Specialized capability layer</p></div></div>
                    <div className="mt-6 grid gap-4">
                      {category.skills.map((skill) => (
                        <div key={`${category.title}-${skill.name}`}><div className="mb-2 flex items-center justify-between text-sm"><span className="text-white/90">{skill.name}</span><span className="text-[var(--muted-foreground)]">{skill.level}%</span></div><div className="h-2 overflow-hidden rounded-full bg-white/8"><motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="h-full rounded-full bg-[linear-gradient(90deg,#6bb3ff,#9ad0ff_60%,#ffb18b)] shadow-[0_0_24px_rgba(107,179,255,0.35)]" /></div></div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          <div className="relative min-h-[34rem]"><div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(107,179,255,0.12),transparent_26%),radial-gradient(circle_at_80%_80%,rgba(255,149,103,0.1),transparent_22%)]" /><div className="grid gap-4 sm:grid-cols-2 lg:absolute lg:inset-0 lg:grid-cols-2">{highlightedSkills.map((skill, index) => (<motion.div key={skill} initial={{ opacity: 0, y: 24, rotate: 0 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -10, rotate: index % 2 === 0 ? -2 : 2, scale: 1.02 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.04 }} className={`${index % 3 === 0 ? "lg:translate-y-4" : ""} ${index % 4 === 0 ? "lg:-translate-y-3" : ""}`}><div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-floating shadow-black/10 backdrop-blur-2xl"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-[#9fd1ff] shadow-[0_0_30px_rgba(107,179,255,0.18)]"><Sparkles className="h-4 w-4" /></div><div><p className="text-base font-medium tracking-[-0.02em]">{skill}</p><p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">Active skill</p></div></div></div></motion.div>))}</div></div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="case-studies" eyebrow="Case Studies" title="Selected projects where marketing, product thinking, and systems execution came together." description="Only real projects and founder-led work are shown here, replacing the earlier placeholder portfolio content.">
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudyPages.map((study, index) => (
            <motion.div key={study.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.06 }}>
              <Link href={`/case-studies/${study.slug}`} className="block h-full">
                <Card className="group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted-foreground)]">0{index + 1}</p>
                  <p className="mt-4 text-lg font-medium tracking-[-0.03em]">{study.client}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">{study.industry}</p>
                  <p className="mt-4 text-sm leading-7 text-white/80">{study.summary}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-white">Open case study<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="demo-lab"
        eyebrow="Demo Lab"
        title="A growing library of landing page demos across SaaS, eCommerce, AI, real estate, fintech, and portfolio niches."
        description="These are prompt-driven concept builds used to demonstrate UI range, conversion thinking, motion, and fast execution across multiple verticals. They are intentionally separated from the real client case studies above."
      >
        <div className="mb-8 grid gap-4 lg:grid-cols-[0.72fr_0.28fr]">
          <Card className="p-6 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.26em] text-[var(--muted-foreground)]">
                  <FolderKanban className="h-3.5 w-3.5" />
                  Portfolio demos
                </div>
                <p className="mt-4 text-lg leading-8 text-white/82">
                  These entries show design range and build speed: dark SaaS systems, vibrant product pages, premium portfolios, lead-gen funnels, fintech surfaces, cyber-sec concepts, and real-estate presentation work.
                </p>
              </div>
              <div className="grid gap-3 sm:min-w-[12rem]">
                <div className="rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">Demo builds</p>
                  <p className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white">{demoProjects.length}</p>
                </div>
              </div>
            </div>
          </Card>
          <Card className="p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">Coverage</p>
            <p className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white">SaaS, AI, lead-gen, DTC, fitness, fintech, Web3, cyber-sec, and real estate.</p>
          </Card>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {demoProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <Card className="group relative h-full overflow-hidden rounded-[1.8rem] p-0 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
                <div className={`absolute inset-x-0 top-0 h-36 bg-gradient-to-br ${project.gradient} opacity-90`} />
                <div className="absolute inset-x-6 top-6 h-24 rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(5,11,20,0.86),rgba(8,16,30,0.58))] backdrop-blur-2xl">
                  <div className="flex h-full items-end justify-between gap-3 px-4 pb-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.28em] text-white/52">{project.niche}</p>
                      <p className="mt-2 text-base font-medium tracking-[-0.03em] text-white">{project.title}</p>
                    </div>
                    <div className="grid gap-1">
                      <div className="h-2.5 w-14 rounded-full bg-white/18" />
                      <div className="h-2.5 w-10 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>
                <div className="relative pt-36">
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted-foreground)]">{project.stack}</p>
                    <p className="mt-4 text-xl font-semibold tracking-[-0.04em] text-white">{project.title}</p>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">{project.summary}</p>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-5">
                      <span className="text-sm text-white/84">Live preview and source</span>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-white/90"
                        >
                          Live
                          <ExternalLink className="h-4 w-4" />
                        </a>
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
                        >
                          Source
                          <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="experience" eyebrow="Experience" title="A founder-led career path across SEO, digital execution, CRM, and business growth." description="Presented as a vertical timeline with glowing milestones and real company history only.">
        <div className="relative grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="relative hidden lg:block">
            <FloatingCard className="ml-6 w-32"><div className="flex items-center justify-center"><Image src="/images/companies/bindu.svg" alt="Bindu logo" width={72} height={72} sizes="72px" className="h-16 w-16" /></div></FloatingCard>
            <FloatingCard className="mt-8 w-32 lg:ml-20"><div className="flex items-center justify-center"><Image src="/images/companies/styleteck-innovations.svg" alt="STYLETECK INNOVATIONS LTD logo" width={72} height={72} sizes="72px" className="h-16 w-16" /></div></FloatingCard>
            <FloatingCard className="mt-8 w-32 lg:ml-10"><div className="flex items-center justify-center"><Image src="/images/companies/the-digital-dude.svg" alt="The Digital Dude logo" width={72} height={72} sizes="72px" className="h-16 w-16" /></div></FloatingCard>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-px bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(107,179,255,0.55),rgba(255,149,103,0.24),rgba(255,255,255,0))] sm:left-8" />
            <div className="grid gap-8">
              {experienceTimeline.map((item, index) => (
                <motion.article key={`${item.company}-${item.role}`} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }} className="relative pl-14 sm:pl-20">
                  <div className={`absolute left-[11px] top-10 h-6 w-6 rounded-full border border-white/20 bg-[radial-gradient(circle,#dff1ff,#6bb3ff)] sm:left-[20px] ${item.glow}`} />
                  <Card className={`group overflow-hidden rounded-[1.8rem] p-6 transition duration-300 hover:-translate-y-1 sm:p-7 ${item.featured ? "border-[#ffb18b]/35 bg-[linear-gradient(180deg,rgba(255,177,139,0.14),rgba(255,255,255,0.05))] shadow-[0_0_0_1px_rgba(255,177,139,0.12),0_24px_90px_rgba(255,149,103,0.18)] hover:border-[#ffb18b]/50 hover:bg-[linear-gradient(180deg,rgba(255,177,139,0.18),rgba(255,255,255,0.06))]" : "hover:border-white/20 hover:bg-white/10"}`}>
                    <div className={`absolute inset-y-0 right-0 w-24 opacity-0 transition duration-300 group-hover:opacity-100 ${item.featured ? "bg-[linear-gradient(180deg,rgba(255,177,139,0.16),transparent_38%,rgba(255,149,103,0.14))]" : "bg-[linear-gradient(180deg,rgba(107,179,255,0.08),transparent_38%,rgba(255,149,103,0.08))]"}`} />
                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-16 w-16 items-center justify-center rounded-[1.3rem] border bg-white/8 ${item.featured ? "border-[#ffb18b]/30 shadow-[0_0_36px_rgba(255,149,103,0.16)]" : "border-white/10"}`}>
                          <Image src={item.logo} alt={`${item.company} logo`} width={72} height={72} sizes="72px" className="h-11 w-11" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted-foreground)]">Role</p>
                          <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">{item.company}</h3>
                          <p className="mt-1 text-sm text-white/85 sm:text-base">{item.role}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        {item.featured ? (
                          <div className="inline-flex items-center gap-2 rounded-full border border-[#ffb18b]/35 bg-[linear-gradient(180deg,rgba(255,177,139,0.16),rgba(255,149,103,0.08))] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#ffd7c0] shadow-[0_0_28px_rgba(255,149,103,0.18)]">
                            <Sparkles className="h-3.5 w-3.5" />
                            Founder
                          </div>
                        ) : null}
                        <div className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.24em] ${item.featured ? "border border-[#ffb18b]/25 bg-black/20 text-[#ffd7c0]" : "border border-white/10 bg-black/10 text-[var(--muted-foreground)]"}`}>{item.duration}</div>
                      </div>
                    </div>
                    <div className="relative mt-5 border-t border-white/8 pt-5">
                      <p className="max-w-3xl text-sm leading-7 text-[var(--muted-foreground)] sm:text-[15px]">{item.description}</p>
                    </div>
                  </Card>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact" className="pb-24 sm:pb-28 lg:pb-32">
        <ContactPanel />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
