import type { LucideIcon } from "lucide-react";
import type { TechnologyId } from "../data/skills";

export interface Project {
  name: string;
  summary: string;
  previewIcon: LucideIcon;
  accent: "violet" | "blue" | "plum";
  artwork?: "deliveryhub" | "eventx";
  technologies: readonly TechnologyId[];
  githubUrl?: string;
  demoUrl?: string;
}
