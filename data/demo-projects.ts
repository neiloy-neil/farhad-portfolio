export type DemoProject = {
  slug: string;
  title: string;
  niche: string;
  stack: string;
  summary: string;
  repo: string;
  live: string;
  gradient: string;
};

export const demoProjects: DemoProject[] = [
  {
    slug: "saas-dashboard-tool",
    title: "SaaS Dashboard Tool",
    niche: "Productivity SaaS",
    stack: "Next.js + Tailwind CSS",
    summary: "A dark product-led landing page for task and workflow management with hero, dashboard preview, pricing, and FAQ.",
    repo: "https://github.com/neiloy-neil/saas-dashboard-tool",
    live: "https://saas-dashboard-tool.vercel.app",
    gradient: "from-sky-500/30 via-cyan-400/20 to-blue-500/20"
  },
  {
    slug: "ai-writing-tool",
    title: "AI Writing Tool",
    niche: "AI SaaS",
    stack: "React + Tailwind CSS",
    summary: "A high-conversion AI writing page with demo-driven storytelling, use cases, social proof, and CTA architecture.",
    repo: "https://github.com/neiloy-neil/ai-writing-tool",
    live: "https://ai-writing-tool-puce.vercel.app",
    gradient: "from-violet-500/30 via-fuchsia-500/18 to-sky-500/20"
  },
  {
    slug: "startup-mvp-launch-page",
    title: "Startup MVP Launch Page",
    niche: "Early-stage startup",
    stack: "Next.js + Tailwind CSS",
    summary: "A lead-generation launch page focused on email capture, problem-solution framing, and early-access signups.",
    repo: "https://github.com/neiloy-neil/startup-mvp-launch-page",
    live: "https://startup-mvp-launch-page.vercel.app",
    gradient: "from-amber-400/28 via-orange-500/16 to-rose-500/22"
  },
  {
    slug: "digital-marketing-agency",
    title: "Digital Marketing Agency",
    niche: "Service business",
    stack: "React + Tailwind CSS",
    summary: "A colorful agency landing page balancing trust-building content, case studies, testimonials, and conversion-focused contact flow.",
    repo: "https://github.com/neiloy-neil/digital-marketing-agency",
    live: "https://digital-marketing-agency-seven.vercel.app",
    gradient: "from-emerald-400/25 via-cyan-400/16 to-fuchsia-500/18"
  },
  {
    slug: "elite-portfolio",
    title: "Elite Portfolio",
    niche: "Developer personal brand",
    stack: "Next.js + Tailwind CSS",
    summary: "A developer-first portfolio concept with sticky navigation, refined dark-light styling, and interactive project previews.",
    repo: "https://github.com/neiloy-neil/elite-portfolio",
    live: "https://elite-portfolio-two.vercel.app",
    gradient: "from-indigo-500/30 via-sky-400/16 to-white/10"
  },
  {
    slug: "masterclass-elite",
    title: "Masterclass Elite",
    niche: "E-learning",
    stack: "Next.js + Tailwind CSS",
    summary: "A course sales landing page with curriculum accordion, instructor proof, pricing, FAQ, and sticky mobile enrollment CTA.",
    repo: "https://github.com/neiloy-neil/masterclass-elite",
    live: "https://masterclass-elite.vercel.app",
    gradient: "from-indigo-500/30 via-emerald-400/18 to-cyan-400/18"
  },
  {
    slug: "iron-results",
    title: "Iron Results",
    niche: "Fitness coaching",
    stack: "Next.js + Tailwind CSS",
    summary: "A bold dark-theme fitness funnel with urgency messaging, before-after proof, and high-contrast conversion blocks.",
    repo: "https://github.com/neiloy-neil/iron-results",
    live: "https://iron-results-gamma.vercel.app",
    gradient: "from-lime-400/28 via-yellow-400/16 to-orange-500/24"
  },
  {
    slug: "direct-to-consumer-sales-machine",
    title: "Direct-to-Consumer Sales Machine",
    niche: "Single-product eCommerce",
    stack: "React + Tailwind CSS",
    summary: "A premium DTC product page with sticky add-to-cart, purchase pop-up patterns, social proof, and bundle pricing.",
    repo: "https://github.com/neiloy-neil/direct-to-consumer-sales-machine",
    live: "https://direct-to-consumer-sales-machine.vercel.app",
    gradient: "from-zinc-200/24 via-slate-300/14 to-emerald-400/18"
  },
  {
    slug: "enterprise-ai",
    title: "Enterprise AI",
    niche: "AI analytics SaaS",
    stack: "Next.js + Tailwind CSS",
    summary: "A glassmorphism SaaS concept with neon accents, feature tabs, integration surfaces, and enterprise-style CTA hierarchy.",
    repo: "https://github.com/neiloy-neil/enterprise-ai",
    live: "https://enterprise-ai-rust.vercel.app",
    gradient: "from-indigo-500/32 via-purple-500/20 to-cyan-400/18"
  },
  {
    slug: "conversion-catalyst",
    title: "Conversion Catalyst",
    niche: "Lead generation",
    stack: "React + Tailwind CSS",
    summary: "A dark, conversion-driven lead magnet landing page with validation logic, loading state, and interactive preview content.",
    repo: "https://github.com/neiloy-neil/conversion-catalyst",
    live: "https://conversion-catalyst-omega.vercel.app",
    gradient: "from-blue-500/28 via-fuchsia-500/18 to-orange-500/24"
  },
  {
    slug: "nexus-creative-studio",
    title: "Nexus Creative Studio",
    niche: "Creative studio",
    stack: "Next.js + Tailwind CSS",
    summary: "An experimental studio landing page with motion-led UI, premium typography, and a more curated featured-work experience.",
    repo: "https://github.com/neiloy-neil/nexus-creative-studio",
    live: "https://nexus-creative-studio-kohl.vercel.app",
    gradient: "from-fuchsia-500/28 via-violet-500/20 to-cyan-400/18"
  },
  {
    slug: "lumina-finance",
    title: "Lumina Finance",
    niche: "FinTech / Neobank",
    stack: "React + Tailwind CSS",
    summary: "A soft-glass fintech concept with currency conversion mockups, live transaction movement, and depth-heavy card design.",
    repo: "https://github.com/neiloy-neil/lumina-finance",
    live: "https://lumina-finance-black.vercel.app",
    gradient: "from-rose-400/24 via-indigo-400/16 to-sky-400/20"
  },
  {
    slug: "aura-global-estates",
    title: "Aura Global Estates",
    niche: "Luxury real estate",
    stack: "Next.js + Tailwind CSS",
    summary: "A cinematic real-estate concept with immersive hero treatment, property previews, and floor-plan style presentation.",
    repo: "https://github.com/neiloy-neil/aura-global-estates",
    live: "https://aura-global-estates.vercel.app",
    gradient: "from-amber-300/24 via-stone-300/10 to-zinc-200/14"
  },
  {
    slug: "voidshield",
    title: "VoidShield",
    niche: "Cybersecurity SaaS",
    stack: "Next.js + Tailwind CSS",
    summary: "A futuristic cyber-sec landing page with radar visuals, glitch motion, active threat map language, and scanline cards.",
    repo: "https://github.com/neiloy-neil/voidshield",
    live: "https://voidshield.vercel.app",
    gradient: "from-cyan-400/30 via-sky-500/18 to-slate-400/14"
  },
  {
    slug: "web3-nft-hub",
    title: "Web3 NFT Hub",
    niche: "Marketplace / Web3",
    stack: "Next.js + Tailwind CSS",
    summary: "A high-energy NFT marketplace demo with floating assets, animated countdowns, and rainbow-border auction cards.",
    repo: "https://github.com/neiloy-neil/web3-nft-hub",
    live: "https://web3-nft-hub.vercel.app",
    gradient: "from-violet-500/28 via-fuchsia-500/20 to-cyan-400/18"
  },
  {
    slug: "real-estate-dark-template",
    title: "Real Estate Dark Template",
    niche: "Real estate showcase",
    stack: "Next.js + Tailwind CSS",
    summary: "A dark editorial property page inspired by a Figma concept, with refined CTA styling and cinematic listing presentation.",
    repo: "https://github.com/neiloy-neil/real-estate-dark-template",
    live: "https://real-estate-dark-template.vercel.app",
    gradient: "from-amber-300/26 via-neutral-300/10 to-stone-400/16"
  }
];
