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
