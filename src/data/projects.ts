import type { Project } from "../types";
import { CalendarDays, PackageCheck } from "lucide-react";

export const projects = [
  {
    name: "DeliveryHub",
    summary: "Enterprise electronics ordering platform for mobiles, laptops and accessories.",
    previewIcon: PackageCheck,
    accent: "blue",
    artwork: "deliveryhub",
    technologies: ["react", "node", "mysql"],
    githubUrl: "https://github.com/Mdimthiyaz100/DeliveryHub",
    demoUrl: "https://deliveryhub-feh3.onrender.com/",
  },
  {
    name: "EventX",
    summary: "An event management platform.",
    previewIcon: CalendarDays,
    accent: "violet",
    artwork: "eventx",
    technologies: ["react", "typescript", "hono"],
    githubUrl: "https://github.com/Mdimthiyaz100/EventX",
    demoUrl: "https://eventx-1-iuzj.onrender.com/",
  },
] as const satisfies readonly Project[];
