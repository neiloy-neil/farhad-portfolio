"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute left-[8%] top-28 h-32 w-32 rounded-full border border-cyan/20 bg-cyan/10 blur-2xl" />
      <div className="pointer-events-none absolute bottom-16 right-[10%] h-44 w-44 rounded-full border border-peach/20 bg-peach/10 blur-3xl" />
      <div className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <p className="mb-5 inline-flex rounded-full border border-lavender/30 bg-white/5 px-4 py-2 text-sm text-lavender-soft backdrop-blur-md">
            SEO Specialist & Digital Marketing Strategist
          </p>
          <h1 className="max-w-4xl font-display text-4xl leading-[1.02] text-white sm:text-5xl lg:text-[4.4rem]">
            Search visibility,
            <span className="bg-[linear-gradient(90deg,#ffffff_10%,#c9a7ff_48%,#7ce7ff_100%)] bg-clip-text text-transparent">
              {" "}
              conversion strategy,
            </span>
            <br className="hidden sm:block" /> and campaigns built to perform.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            I help brands grow with search visibility, conversion-focused
            content, campaign strategy, and performance marketing that connects
            data with real customer action.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[linear-gradient(90deg,#a362ff,#7b4fd1)] px-6 py-3 text-sm font-semibold text-white shadow-neon transition hover:-translate-y-0.5 hover:brightness-110"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/85 transition hover:border-lavender/40 hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            <div className="surface-panel p-5">
              <p className="text-3xl font-semibold text-white">3+</p>
              <p className="mt-2 text-sm text-white/60">
                Years in growth and marketing
              </p>
            </div>
            <div className="surface-panel p-5">
              <p className="text-3xl font-semibold text-white">8+</p>
              <p className="mt-2 text-sm text-white/60">
                Core digital growth skills
              </p>
            </div>
            <div className="surface-panel p-5">
              <p className="text-3xl font-semibold text-white">3</p>
              <p className="mt-2 text-sm text-white/60">
                Featured company engagements
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-x-8 top-10 h-52 rounded-full bg-orbital-glow blur-3xl" />
          <div className="absolute inset-0 mx-auto h-[22rem] w-[22rem] rounded-full border border-lavender/10 bg-lavender/5 blur-2xl sm:h-[26rem] sm:w-[26rem]" />
          <div className="absolute left-1/2 top-12 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full border border-white/10 opacity-60" />
          <div className="absolute left-1/2 top-20 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full border border-white/5 opacity-40" />
          <div className="relative flex h-[22rem] w-[19rem] items-end justify-center rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-4 shadow-panel backdrop-blur-xl sm:h-[25rem] sm:w-[21rem]">
            <div className="absolute inset-0 rounded-[2.25rem] bg-[linear-gradient(180deg,rgba(124,231,255,0.08),transparent_28%,rgba(163,98,255,0.08))]" />
            <div className="absolute left-1/2 top-4 h-16 w-16 -translate-x-1/2 rounded-full border border-lavender/30 bg-lavender/10 blur-2xl" />
            <div className="absolute -left-6 top-8 rounded-full border border-lavender/20 bg-[#1f0b3c]/90 px-4 py-2 text-xs text-lavender-soft shadow-neon">
              Analytics + SEO
            </div>
            <div className="absolute -right-6 bottom-12 rounded-full border border-cyan/20 bg-[#102236]/80 px-4 py-2 text-xs text-cyan shadow-[0_0_30px_rgba(124,231,255,0.18)]">
              Strategy + Growth
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/35 px-5 py-3 text-center text-xs text-white/70 backdrop-blur-md">
              Organic growth with measurable business impact
            </div>
            <Image
              src="/avatar.svg"
              alt="Portrait illustration of Farhad Hossain"
              width={320}
              height={380}
              priority
              className="relative z-10 h-auto w-full rounded-[1.5rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
