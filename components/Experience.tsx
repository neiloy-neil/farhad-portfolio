"use client";

import { motion } from "framer-motion";

const experienceItems = [
  {
    company: "Bindu",
    role: "Social Media Manager",
    period: "2025 - Present"
  },
  {
    company: "The Sunnah Store",
    role: "CRM and SEO Specialist",
    period: "Dec 2023 - Jul 2024"
  },
  {
    company: "My Instructor PTY Ltd",
    role: "Marketing Executive",
    period: "Sep 2022 - May 2023"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">
            Work history built around visibility, conversion, and brand growth.
          </h2>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan/0 via-lavender/70 to-peach/0 md:block" />
          <div className="space-y-8">
            {experienceItems.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative md:pl-16"
              >
                <div className="absolute left-[7px] top-10 hidden h-4 w-4 rounded-full border border-lavender/40 bg-lavender shadow-[0_0_24px_rgba(163,98,255,0.7)] md:block" />
                <div className="surface-panel relative overflow-hidden p-8">
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-[linear-gradient(180deg,rgba(124,231,255,0.08),transparent_30%,rgba(255,179,138,0.08))]" />
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-lavender-soft">
                        {item.period}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                        {item.company}
                      </h3>
                      <p className="mt-2 text-white/75">{item.role}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/70 backdrop-blur-sm">
                      Growth-focused contribution
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
