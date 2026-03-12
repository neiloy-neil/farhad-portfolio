"use client";

import { motion } from "framer-motion";

const skills = [
  "SEO",
  "WordPress",
  "Google Ads",
  "Google Analytics",
  "WooCommerce",
  "Technical SEO",
  "Social Media Marketing",
  "Canva"
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-kicker">cross-functional</p>
          <h2 className="section-title mx-auto max-w-2xl">
            Strategic marketing skills arranged like a connected growth system.
          </h2>
          <p className="mt-4 text-white/70">
            Every channel works better when content, SEO, reporting, and
            campaign execution are built to support each other.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative flex min-h-32 flex-col items-center justify-center overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(40,17,77,0.98),rgba(19,6,39,0.98))] px-4 py-6 text-center shadow-panel"
              >
                <div className="absolute inset-0 rounded-[1.9rem] bg-card-sheen opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-cyan/10 blur-2xl opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-lavender/30 bg-lavender/10 text-sm font-semibold text-lavender-soft shadow-neon">
                  {index + 1}
                </div>
                <p className="relative z-10 mt-4 text-sm font-medium text-white sm:text-base">
                  {skill}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="pointer-events-none relative mx-auto mt-16 flex h-[26rem] max-w-5xl items-end justify-center">
            <div className="absolute bottom-0 h-48 w-[92%] rounded-full border border-lavender/30" />
            <div className="absolute bottom-5 h-40 w-[78%] rounded-full border border-lavender/20" />
            <div className="absolute bottom-10 h-32 w-[64%] rounded-full border border-lavender/15" />
            <div className="absolute bottom-2 h-48 w-[70%] bg-orbital-glow blur-3xl" />
            <div className="absolute bottom-20 h-52 w-52 rounded-full border border-lavender/20" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 mb-12 flex h-44 w-44 items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,#9168e7,#7127ba_55%,#5d199e)] shadow-glow"
            >
              <div className="absolute inset-[-14%] animate-pulseSoft rounded-full border border-lavender/20" />
              <span className="font-display text-6xl text-white">Σ</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
