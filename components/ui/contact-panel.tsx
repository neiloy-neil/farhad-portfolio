"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Linkedin, Mail, Phone, Send } from "lucide-react";
import { profile } from "@/data/site";
import { Button } from "@/components/ui/button";

 type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  message: ""
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Message should be at least 20 characters.";
  }

  return errors;
}

export function ContactPanel() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const contactLinks = useMemo(
    () => [
      {
        label: "LinkedIn",
        value: "linkedin.com/in/neiloy-farhad",
        href: profile.linkedIn,
        icon: Linkedin
      },
      {
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
        icon: Mail
      },
      {
        label: "Website",
        value: "digitaldude.co.uk",
        href: profile.website,
        icon: Globe
      },
      {
        label: "Phone",
        value: profile.phoneNumbers.join(" / "),
        href: `tel:${profile.phoneNumbers[0].replace(/\s+/g, "")}`,
        icon: Phone
      }
    ],
    []
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);

    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
    const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`);

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(7,15,28,0.95),rgba(11,23,42,0.92)_45%,rgba(22,15,36,0.92))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_15%_20%,rgba(107,179,255,0.18),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(255,149,103,0.14),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(146,121,255,0.12),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:4rem_4rem]" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="max-w-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--muted-foreground)]">
            Contact
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
            Start a conversation about growth, SEO, or digital execution.
          </h3>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            Reach out for SEO strategy, e-commerce growth, CRM systems, or custom digital product collaboration.
          </p>

          <div className="mt-8 grid gap-4">
            {contactLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group flex items-center gap-4 rounded-[1.4rem] border border-white/10 bg-white/6 px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-[#9fd1ff] shadow-[0_0_28px_rgba(107,179,255,0.18)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white group-hover:text-white/95">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6 backdrop-blur-2xl sm:p-8"
        >
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm text-[var(--muted-foreground)]">
              Name
              <input
                value={values.name}
                onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
                className="rounded-[1.1rem] border border-white/10 bg-black/10 px-4 py-3 text-white outline-none transition focus:border-white/25 focus:bg-white/6"
                placeholder="Your name"
              />
              {errors.name ? <span className="text-xs text-rose-300">{errors.name}</span> : null}
            </label>

            <label className="grid gap-2 text-sm text-[var(--muted-foreground)]">
              Email
              <input
                type="email"
                value={values.email}
                onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
                className="rounded-[1.1rem] border border-white/10 bg-black/10 px-4 py-3 text-white outline-none transition focus:border-white/25 focus:bg-white/6"
                placeholder="you@example.com"
              />
              {errors.email ? <span className="text-xs text-rose-300">{errors.email}</span> : null}
            </label>

            <label className="grid gap-2 text-sm text-[var(--muted-foreground)]">
              Message
              <textarea
                rows={6}
                value={values.message}
                onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
                className="rounded-[1.1rem] border border-white/10 bg-black/10 px-4 py-3 text-white outline-none transition focus:border-white/25 focus:bg-white/6"
                placeholder="Tell me about your project, role, or growth objective."
              />
              {errors.message ? <span className="text-xs text-rose-300">{errors.message}</span> : null}
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" className="gap-2 self-start">
                Send Message
                <Send className="h-4 w-4" />
              </Button>
              {submitted ? (
                <span className="text-sm text-emerald-300">
                  Validation passed. Opening your email client.
                </span>
              ) : null}
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
