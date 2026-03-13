import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { navItems, profile } from "@/data/site";

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-2 sm:px-6 lg:px-8">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(107,179,255,0.14),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(255,149,103,0.12),transparent_22%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.75fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted-foreground)]">{profile.name}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">CEO & Co-Founder, {profile.agency}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted-foreground)] sm:text-[15px]">Helping businesses grow with SEO, digital strategy, and scalable web solutions.</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted-foreground)]">Quick Links</p>
              <div className="mt-4 grid gap-3 text-sm text-white/85">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted-foreground)]">Contact</p>
              <div className="mt-4 grid gap-4 text-sm text-white/85">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 transition hover:text-white">
                  <Mail className="h-4 w-4 text-[#8cc4ff]" />
                  <span>{profile.email}</span>
                </a>
                <a href={profile.linkedIn} target="_blank" rel="noreferrer" className="transition hover:text-white">
                  LinkedIn Profile
                </a>
                <a href={profile.website} target="_blank" rel="noreferrer" className="transition hover:text-white">
                  {profile.website.replace(/^https?:\/\//, "")}
                </a>
                <div className="grid gap-2 text-white/85">
                  {profile.phoneNumbers.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 transition hover:text-white">
                      <Phone className="h-4 w-4 text-[#ffb18b]" />
                      <span>{phone}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 flex flex-col gap-3 border-t border-white/8 pt-5 text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {profile.name}. All rights reserved.</p>
            <p>Built with Next.js, Framer Motion, and Three.js</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
