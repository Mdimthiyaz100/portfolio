import { Cloud, Layers3, PanelsTopLeft, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";

const highlightItems = [
  {
    title: "Projects Built",
    description: projects.map((project) => project.name).join(" · "),
    icon: PanelsTopLeft,
    count: String(projects.length).padStart(2, "0"),
  },
  {
    title: "Full-Stack Development",
    description: "Interfaces · APIs · Data",
    icon: Workflow,
  },
  {
    title: "Modern Tech Stack",
    description: "React · TypeScript · Node.js",
    icon: Layers3,
  },
  {
    title: "Cloud Ready Deployment",
    description: "Cloudflare Workers",
    icon: Cloud,
  },
];

export function StatsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="highlights container"
      aria-label="Development highlights"
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      {highlightItems.map(({ title, description, icon: Icon, count }, index) => (
        <div className="highlight-item" key={title}>
          <span className="highlight-icon"><Icon size={20} strokeWidth={1.65} aria-hidden="true" /></span>
          <span className="highlight-copy">
            <span className="highlight-title">{title}</span>
            <span className="highlight-description">{description}</span>
          </span>
          {count && <span className="highlight-count" aria-label={`${projects.length} projects`}>{count}</span>}
          {index < highlightItems.length - 1 && <span className="highlight-divider" aria-hidden="true" />}
        </div>
      ))}
    </motion.section>
  );
}
