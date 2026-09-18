export type Project = {
  id: string;
  title: string;
  category: "fullstack" | "frontend" | "tool";
  description: string;
  longDescription: string;
  tech: string[];
  accent: string;
  demo: string;
  github: string | null;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "verseid",
    title: "VerseID",
    category: "fullstack",
    description:
      "Shazam for Bible verses — speak or type any fragment and VerseID finds the exact book, chapter, verse and translation.",
    longDescription:
      "Identifies scripture from a spoken or typed fragment in seconds. Speech is transcribed locally in the browser, then matched against multiple translations (KJV, WEB, DRA, ASV) using fuzzy text matching and semantic search.",
    tech: ["React", "TanStack Start", "Django", "MongoDB", "FAISS", "Web Speech API"],
    accent: "violet",
    demo: "https://verseid.top",
    github: null,
    featured: true,
  },
  {
    id: "uptownlogs",
    title: "UptownLogs",
    category: "fullstack",
    description:
      "A wallet-funded platform for social media growth, airtime/data top-ups, and gift cards, delivered in minutes.",
    longDescription:
      "A Nigerian VTU and SMM reseller platform covering social growth services, airtime and data top-ups, and gift cards, all funded from an in-app wallet. Admin dashboard for order and support management, live order fulfillment via provider APIs, and bank-transfer wallet funding.",
    tech: ["Next.js", "FastAPI", "Python", "MongoDB", "Tailwind CSS"],
    accent: "amber",
    demo: "https://uptownlogs.com.ng",
    github: null,
    featured: true,
  },
  {
    id: "collabflow",
    title: "CollabFlow",
    category: "fullstack",
    description:
      "A modern collaboration workspace designed for teams to organize projects and work together in real time.",
    longDescription:
      "Focuses on productivity and seamless collaboration with clean UI patterns, responsive layouts, and real-time interaction systems, built with scalability and smooth UX in mind.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "PostgreSQL"],
    accent: "mint",
    demo: "https://collabflow-kappa.vercel.app/",
    github: "https://github.com/yungemmy892-maker/Collabflow.git",
    featured: true,
  },
  {
    id: "neuron-markets",
    title: "Neuron Markets",
    category: "frontend",
    description: "A real-time analytics dashboard built with Vue 3, TypeScript, Pinia, and ECharts.",
    longDescription:
      "A production-grade real-time analytics dashboard simulating a live crypto/financial monitoring terminal, with streaming data, interactive charts, and a polished dark UI.",
    tech: ["Vue", "TypeScript", "Tailwind CSS", "Pinia", "ECharts"],
    accent: "violet",
    demo: "https://neuron-markets.vercel.app/",
    github: "https://github.com/yungemmy892-maker/Neuron-Markets.git",
    featured: false,
  },
  {
    id: "querycraft",
    title: "QueryCraft",
    category: "tool",
    description:
      "A browser-based visual SQL query builder — build nested conditions and see the SQL and results update live.",
    longDescription:
      "Explore a dataset schema and build complex, deeply nested AND/OR query conditions visually, without writing SQL by hand. A live SQL preview updates as the query is built.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    accent: "amber",
    demo: "https://query-craft-beta.vercel.app/",
    github: "https://github.com/yungemmy892-maker/Query-Craft.git",
    featured: false,
  },
];

export type Job = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "Full-Stack Developer",
    company: "Hoste Technology Limited",
    location: "Remote",
    start: "2026-08",
    end: "present",
    bullets: [
      "Contribute across frontend and backend development on production web applications.",
      "Build and integrate frontend interfaces with backend services and REST APIs.",
      "Work in JavaScript/Express.js on API development, application logic, and service integration.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "CAYAHQ",
    location: "Remote",
    start: "2026-04",
    end: "2026-07",
    bullets: [
      "Improved website performance via modern JS frameworks — 25% efficiency gain.",
      "Optimized page load speed, cutting bounce rate by 15%.",
      "Paired with UX/UI designers to raise interface usability.",
    ],
  },
];

export const skillGroups = [
  {
    label: "frontend",
    items: ["React", "Next.js", "SvelteKit", "Vue", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "backend",
    items: ["Python", "Django", "FastAPI", "Node.js", "Express", "REST APIs"],
  },
  {
    label: "data",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Prisma"],
  },
  {
    label: "platform",
    items: ["Vercel", "PXXl", "Docker", "Git", "CI/CD"],
  },
];

export const social = [
  { label: "GitHub", href: "https://github.com/yungemmy892-maker", handle: "@yungemmy892-maker" },
  { label: "Twitter", href: "https://twitter.com/CTRL_guy", handle: "@CTRL_guy" },
  { label: "TikTok", href: "https://tiktok.com/in/CTRL_guy", handle: "@CTRL_guy" },
  { label: "Email", href: "mailto:yungemmy892@gmail.com", handle: "yungemmy892@gmail.com" },
];

export const EMAILJS_SERVICE_ID = "service_si7sunn";
export const EMAILJS_TEMPLATE_ID = "template_val0trw";
export const EMAILJS_PUBLIC_KEY = "0Jiz9CJbtld33vmmW";
export const CONTACT_EMAIL = "yungemmy892@gmail.com";
