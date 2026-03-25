export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
] as const;

export const profile = {
  name: "Farhad Hossain",
  role: "CEO & Co-Founder · Digital Marketing Expert",
  headline: "Driving Business Growth Through Data-Driven Marketing Strategies",
  summary:
    "Farhad Hossain is a digital marketing specialist and entrepreneur with expertise in SEO, e-commerce, and digital marketing tools. As the co-founder of The Digital Dude, he has successfully delivered web solutions and marketing strategies that help businesses scale locally and internationally. Passionate about technology, analytics, and creative solutions, he thrives on turning insights into measurable results.",
  email: "info@digitaldude.co.uk",
  location: "Bangladesh",
  agency: "The Digital Dude",
  linkedIn: "https://www.linkedin.com/in/neiloy-farhad/",
  website: "https://digitaldude.co.uk/",
  phoneNumbers: ["+880 1820015876", "+8801701003664"]
};

export const metrics = [
  { label: "Role", value: "CEO & Co-Founder" },
  { label: "Agency", value: "The Digital Dude" },
  { label: "Focus", value: "SEO + Systems" }
] as const;

export type AboutHighlight = {
  label: string;
  value: string;
  detail: string;
};

export type ExperienceTimelineItem = {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: string;
  glow: string;
  featured?: boolean;
};

export const aboutHighlights: readonly AboutHighlight[] = [
  {
    label: "Role",
    value: "CEO & Co-Founder",
    detail: "Founder-led digital execution through The Digital Dude."
  },
  {
    label: "Core focus",
    value: "SEO + eCommerce + CRM",
    detail: "Growth strategy supported by website and systems thinking."
  },
  {
    label: "Reach",
    value: "Local + international",
    detail: "Supporting businesses across markets with scalable digital solutions."
  }
] as const;

export const aboutExperience = [
  "CEO & Co-Founder - The Digital Dude",
  "Social Media & Website Manager - Bindu",
  "Customer Relationship Senior Executive - The Sunnah Store"
] as const;

export const experienceTimeline: readonly ExperienceTimelineItem[] = [
  {
    company: "The Digital Dude",
    role: "CEO & Co-Founder",
    duration: "Jul 2020 - Present",
    description:
      "Leading a digital solutions agency delivering web development, SaaS, ERP, CRM, and HRM systems alongside growth-focused digital strategy for businesses locally and internationally.",
    logo: "/images/companies/the-digital-dude.svg",
    glow: "shadow-[0_0_42px_rgba(255,149,103,0.42)]",
    featured: true
  },
  {
    company: "Bindu",
    role: "Social Media & Website Manager",
    duration: "Feb 2025 - Present",
    description:
      "Managing Bindu Premium's website and social media presence, implementing SEO improvements, developing content strategies, and analyzing marketing performance to drive brand visibility and growth.",
    logo: "/images/companies/bindu.svg",
    glow: "shadow-[0_0_30px_rgba(255,140,91,0.35)]"
  },
  {
    company: "STYLETECK INNOVATIONS LTD",
    role: "Web & Digital Marketing Executive",
    duration: "Aug 2024 - Sep 2024",
    description:
      "Developed digital marketing strategies, managed website updates and SEO improvements, ran social media campaigns, and analyzed marketing performance data.",
    logo: "/images/companies/styleteck-innovations.svg",
    glow: "shadow-[0_0_30px_rgba(76,211,255,0.35)]"
  },
  {
    company: "The Sunnah Store",
    role: "Customer Relationship Executive to Senior Executive",
    duration: "Dec 2023 - Jul 2024",
    description:
      "Managed CRM systems, improved SEO and marketing strategies, and helped enhance customer satisfaction and engagement.",
    logo: "/images/companies/the-sunnah-store.svg",
    glow: "shadow-[0_0_30px_rgba(47,132,107,0.35)]"
  },
  {
    company: "Innovate Wave",
    role: "Marketing Lead",
    duration: "May 2023 - Dec 2023",
    description:
      "Led marketing strategies for client growth including SEO, social media marketing, and digital campaigns.",
    logo: "/images/companies/innovate-wave.svg",
    glow: "shadow-[0_0_30px_rgba(124,98,255,0.32)]"
  }
] as const;

export const skillCategories = [
  {
    title: "SEO",
    skills: [
      { name: "SEO", level: 95 },
      { name: "Keyword Research", level: 92 },
      { name: "Content Strategy", level: 90 }
    ]
  },
  {
    title: "Digital Marketing",
    skills: [
      { name: "Digital Marketing", level: 93 },
      { name: "E-commerce", level: 88 },
      { name: "CRM", level: 86 }
    ]
  },
  {
    title: "Marketing Analytics",
    skills: [
      { name: "Marketing Analytics", level: 89 },
      { name: "Google Analytics", level: 88 },
      { name: "Google Ads", level: 84 }
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "Web Development", level: 82 },
      { name: "WordPress", level: 90 },
      { name: "WooCommerce", level: 86 }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Elementor", level: 85 },
      { name: "Canva", level: 88 },
      { name: "WooCommerce", level: 86 }
    ]
  }
] as const;

export const highlightedSkills = [
  "SEO",
  "Digital Marketing",
  "E-commerce",
  "CRM",
  "Marketing Analytics",
  "Web Development",
  "WordPress",
  "Elementor",
  "Google Ads",
  "Google Analytics",
  "Canva",
  "WooCommerce"
] as const;
