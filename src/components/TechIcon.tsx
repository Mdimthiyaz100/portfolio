import type { ReactNode } from "react";
import {
  Code2,
  Database,
  MessageSquareCode,
  Orbit,
  Terminal,
} from "lucide-react";
import {
  SiCloudflare,
  SiExpress,
  SiGithub,
  SiGit,
  SiHono,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiClaude,
} from "react-icons/si";
import type { TechnologyId } from "../data/skills";

const icons: Record<TechnologyId, ReactNode> = {
  react: <SiReact aria-hidden="true" />,
  typescript: <SiTypescript aria-hidden="true" />,
  javascript: <SiJavascript aria-hidden="true" />,
  tailwind: <SiTailwindcss aria-hidden="true" />,
  vite: <SiVite aria-hidden="true" />,
  node: <SiNodedotjs aria-hidden="true" />,
  express: <SiExpress aria-hidden="true" />,
  hono: <SiHono aria-hidden="true" />,
  mysql: <SiMysql aria-hidden="true" />,
  postgresql: <SiPostgresql aria-hidden="true" />,
  cloudflareD1: <Database aria-hidden="true" />,
  cloudflareWorkers: <SiCloudflare aria-hidden="true" />,
  git: <SiGit aria-hidden="true" />,
  github: <SiGithub aria-hidden="true" />,
  wrangler: <Terminal aria-hidden="true" />,
  claude: <SiClaude aria-hidden="true" />,
  codex: <Code2 aria-hidden="true" />,
  antigravity: <Orbit aria-hidden="true" />,
  promptEngineering: <MessageSquareCode aria-hidden="true" />,
};

interface TechIconProps {
  name: TechnologyId;
}

export function TechIcon({ name }: TechIconProps) {
  return <span className="tech-icon">{icons[name]}</span>;
}
