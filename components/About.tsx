"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">About</p>
          <h2 className="section-title">
            A marketer with a systems mindset and a growth-first perspective.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="surface-panel relative grid gap-8 overflow-hidden p-8"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-lavender/20 blur-3xl" />
          <div className="grid gap-2">
            <p className="text-sm uppercase tracking-[0.35em] text-lavender-soft">
              Farhad Hossain
            </p>
            <p className="text-2xl font-semibold text-white sm:text-3xl">
              SEO Specialist & Digital Marketing Strategist
            </p>
          </div>
          <p className="max-w-3xl text-base leading-8 text-white/75">
            I am an SEO specialist with expertise in e-commerce, social media,
            and digital marketing. With a computer science background and
            experience working with brands like The Sunnah Store and My
            Instructor, I help businesses grow through data-driven strategies.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <p className="text-sm text-lavender-soft">Focus</p>
              <p className="mt-2 text-lg font-semibold text-white">
                Organic Growth
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <p className="text-sm text-lavender-soft">Industry Strength</p>
              <p className="mt-2 text-lg font-semibold text-white">
                E-commerce & Education
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <p className="text-sm text-lavender-soft">Approach</p>
              <p className="mt-2 text-lg font-semibold text-white">
                Data-led execution
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
