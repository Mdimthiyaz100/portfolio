import type { Project } from "../types";
import { BriefcaseBusiness, CalendarDays, PackageCheck } from "lucide-react";

export const projects = [
  {
    name: "DeliveryHub",
    summary: "A delivery management and live tracking platform.",
    previewIcon: PackageCheck,
    accent: "blue",
    technologies: ["react", "node", "mysql"],
    githubUrl: "https://github.com/Mdimthiyaz100/DeliveryHub",
    demoUrl: "https://deliveryhub-feh3.onrender.com/",
  },
  {
    name: "EventX",
    summary: "An event management platform.",
    previewIcon: CalendarDays,
    accent: "violet",
    technologies: ["react", "typescript", "hono"],
    githubUrl: "https://github.com/Mdimthiyaz100/EventX",
    demoUrl: "https://eventx-1-iuzj.onrender.com/",
  },
  {
    name: "CareerGo",
    summary: "Career and job management platform.",
    previewIcon: BriefcaseBusiness,
    accent: "plum",
    technologies: ["react", "typescript", "hono"],
  },
] as const satisfies readonly Project[];
