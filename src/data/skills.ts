export const technologyCatalog = {
  react: { label: "React", color: "#61dafb" },
  typescript: { label: "TypeScript", color: "#5b9ef5" },
  javascript: { label: "JavaScript", color: "#f0d95c" },
  tailwind: { label: "Tailwind CSS", color: "#54c8e8" },
  vite: { label: "Vite", color: "#a78bfa" },
  node: { label: "Node.js", color: "#83c77a" },
  express: { label: "Express.js", color: "#d4d4d8" },
  hono: { label: "Hono", color: "#ff815c" },
  mysql: { label: "MySQL", color: "#75a9d8" },
  postgresql: { label: "PostgreSQL", color: "#7fa7eb" },
  cloudflareD1: { label: "Cloudflare D1", color: "#f5a65b" },
  cloudflareWorkers: { label: "Cloudflare Workers", color: "#f5a65b" },
  git: { label: "Git", color: "#f07862" },
  github: { label: "GitHub", color: "#d4d4d8" },
  wrangler: { label: "Wrangler", color: "#c084fc" },
  claude: { label: "Claude", color: "#e49a74" },
  codex: { label: "Codex", color: "#c084fc" },
  antigravity: { label: "Antigravity", color: "#a78bfa" },
  promptEngineering: { label: "Prompt Engineering", color: "#c084fc" },
} as const;

export type TechnologyId = keyof typeof technologyCatalog;

export const heroTechnologies = [
  "react",
  "typescript",
  "node",
  "cloudflareWorkers",
] as const satisfies readonly TechnologyId[];

export const skillGroups = [
  {
    name: "Frontend",
    technologies: ["react", "typescript", "javascript", "tailwind", "vite"],
  },
  {
    name: "Backend",
    technologies: ["node", "express", "hono"],
  },
  {
    name: "Database",
    technologies: ["mysql", "postgresql", "cloudflareD1"],
  },
  {
    name: "Cloud & Tools",
    technologies: ["cloudflareWorkers", "git", "github", "wrangler"],
  },
  {
    name: "AI Tools",
    technologies: ["claude", "codex", "antigravity", "promptEngineering"],
  },
] as const satisfies readonly {
  name: string;
  technologies: readonly TechnologyId[];
}[];

export const expertiseAreas = [
  "Full-Stack Development",
  "API Development & Integration",
  "Database Design & Optimization",
  "Cloud Deployment",
  "AI-Assisted Development",
] as const;
