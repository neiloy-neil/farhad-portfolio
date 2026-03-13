export type CaseStudyResult = {
  label: string;
  value: string;
};

export type CaseStudyLink = {
  label: string;
  href: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  duration: string;
  summary: string;
  problem: string;
  strategy: string;
  execution: string[];
  results: CaseStudyResult[];
  links?: CaseStudyLink[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "rentalease",
    client: "RentalEase",
    industry: "Real Estate / Property Management",
    duration: "Live production deployment",
    summary:
      "A full property operations ecosystem delivered by The Digital Dude, combining a public marketing website with a multi-portal CRM for agencies, property managers, technicians, and internal teams.",
    problem:
      "RentalEase needed a unified digital system to connect agencies, property managers, technicians, and internal team members. Jobs, leads, invoices, and technician payments were fragmented across different tools, making operations difficult to track and scale.",
    strategy:
      "The project was structured around a central CRM with role-based access, operational dashboards, and integrated commercial workflows. The goal was to create one ecosystem that could manage properties, jobs, contacts, quotations, invoices, technician payments, and regional oversight from a single platform.",
    execution: [
      "Delivered a public website to position the RentalEase brand and support inbound interest",
      "Built a multi-portal CRM covering Admin, Team Member, Agency, Property Manager, and Technician workflows",
      "Implemented operational modules for jobs, properties, agencies, contacts, reports, and regional dashboards",
      "Integrated quotation management, invoice management, technician payments, and lead handling into the same system"
    ],
    results: [
      { label: "Deployment", value: "Live website + CRM in production" },
      { label: "Operational impact", value: "Unified job, lead, and finance workflows in one ecosystem" },
      { label: "Portal coverage", value: "Five role-based experiences with tailored dashboards" }
    ],
    links: [
      { label: "CRM", href: "https://crm.rentalease.com.au/" },
      { label: "Website", href: "https://www.rentalease.com.au/" }
    ]
  },
  {
    slug: "truckerlink",
    client: "TruckerLink",
    industry: "Logistics / Transportation",
    duration: "6 months",
    summary:
      "A breakdown management platform designed to improve response coordination for drivers and admins through a dedicated mobile-first workflow.",
    problem:
      "Truck breakdown management lacked a proper digital platform, which made response handling inefficient and created friction for both drivers and administrators managing service workflows.",
    strategy:
      "The solution focused on giving drivers and admins a clearer booking, tracking, and dashboard experience so that breakdown requests could be handled faster and with better visibility across the process.",
    execution: [
      "Designed and implemented a mobile app workflow for drivers and admins",
      "Built booking, tracking, and dashboard features to support faster issue handling",
      "Used Flutter, Firebase, WordPress, and Canva to shape the product and supporting web presence"
    ],
    results: [
      { label: "Response time", value: "Reduced by 40%" },
      { label: "User outcome", value: "Improved driver satisfaction" },
      { label: "Delivery stack", value: "Flutter, Firebase, WordPress, Canva" }
    ]
  },
  {
    slug: "the-digital-dude",
    client: "The Digital Dude",
    industry: "Digital Solutions Agency",
    duration: "Jul 2020 - Present",
    summary:
      "A web development and digital solutions agency empowering businesses with custom web apps, SaaS, ERP, CRM, and HRM systems globally.",
    problem:
      "The challenge was building an agency model that could combine technical delivery and growth strategy, helping businesses move beyond basic websites into systems that support operations, automation, and long-term scale.",
    strategy:
      "The Digital Dude was positioned around founder-led execution, combining web delivery, business systems, and digital strategy into a single service model that can support both local and international clients.",
    execution: [
      "Built service delivery around web development, SaaS apps, ERP, CRM, and HRM systems",
      "Combined technical execution with digital marketing thinking to support business growth",
      "Developed solutions for clients needing both product infrastructure and digital visibility"
    ],
    results: [
      { label: "Service scope", value: "Web development, SaaS, ERP, CRM, HRM" },
      { label: "Model", value: "Founder-led agency execution" },
      { label: "Reach", value: "Supporting businesses locally and internationally" }
    ],
    links: [{ label: "Website", href: "https://digitaldude.co.uk/" }]
  }
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
