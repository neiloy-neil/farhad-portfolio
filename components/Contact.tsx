"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:neiloyfarhad@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">
              Let&apos;s build visibility, growth, and better digital outcomes.
            </h2>
          </div>
          <p className="max-w-xl leading-8 text-white/72">
            I&apos;m currently looking to join a cross-functional team that
            values improving people&apos;s lives through accessible design and
            measurable digital strategy. If you have a project in mind,
            let&apos;s connect.
          </p>
          <div className="grid gap-4 text-white/80">
            <a
              href="mailto:neiloyfarhad@gmail.com"
              className="surface-panel block px-5 py-4 transition hover:border-lavender/30 hover:bg-lavender/10"
            >
              neiloyfarhad@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/neiloy-farhad/"
              target="_blank"
              rel="noreferrer"
              className="surface-panel block px-5 py-4 transition hover:border-lavender/30 hover:bg-lavender/10"
            >
              linkedin.com/in/neiloy-farhad
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          onSubmit={handleSubmit}
          className="surface-panel relative overflow-hidden p-8"
        >
          <div className="pointer-events-none absolute left-0 top-0 h-32 w-32 rounded-full bg-cyan/10 blur-3xl" />
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm text-white/70">
              Name
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-lavender/50 focus:bg-white/10"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/70">
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-lavender/50 focus:bg-white/10"
                placeholder="your@email.com"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/70">
              Message
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                rows={6}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-lavender/50 focus:bg-white/10"
                placeholder="Tell me about your goals, project, or opportunity."
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex w-fit rounded-full bg-lavender px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#8f49f4]"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
