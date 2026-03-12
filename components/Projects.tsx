"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Bindu Premium",
    label: "Social Media Campaign Management",
    description:
      "Social media campaign management focused on positioning, creative direction, and audience engagement for a premium consumer brand.",
    image: "/project-bindu.svg"
  },
  {
    title: "The Sunnah Store",
    label: "SEO + CRM Optimization",
    description:
      "SEO and CRM optimization to strengthen product discoverability, retention flow, and performance tracking across the customer lifecycle.",
    image: "/project-sunnah.svg"
  },
  {
    title: "My Instructor",
    label: "Marketing Growth Platform",
    description:
      "Marketing growth platform initiatives spanning campaign strategy, funnel support, and audience acquisition for an education business.",
    image: "/project-instructor.svg"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="section-kicker">Featured Projects</p>
          <h2 className="section-title">
            Selected work shaped by strategy, experimentation, and measurable
            growth.
          </h2>
        </motion.div>

        <div className="mt-14 space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#1b082f] p-4 shadow-panel">
                <div className="absolute inset-0 bg-orbital-glow opacity-80 blur-3xl transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,231,255,0.08),transparent_35%,rgba(163,98,255,0.14))]" />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={750}
                  className="relative z-10 w-full rounded-[1.35rem] border border-white/10 transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="surface-panel relative overflow-hidden p-8">
                <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-peach/10 blur-3xl" />
                <p className="text-sm uppercase tracking-[0.35em] text-lavender-soft">
                  Featured Project
                </p>
                <h3 className="mt-3 font-display text-3xl text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-cyan">
                  {project.label}
                </p>
                <p className="mt-5 leading-8 text-white/72">
                  {project.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-lavender/25 bg-lavender/10 px-4 py-2 text-sm text-lavender-soft">
                    Strategy
                  </span>
                  <span className="rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm text-cyan">
                    Growth
                  </span>
                  <span className="rounded-full border border-peach/25 bg-peach/10 px-4 py-2 text-sm text-peach">
                    Optimization
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
