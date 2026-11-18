import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectList } from "../components/ProjectList";

export function FeaturedProjects() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="projects"
      className="featured-section container"
      aria-labelledby="projects-title"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55 }}
    >
      <div className="featured-intro">
        <p className="eyebrow">FEATURED WORK</p>
        <h2 id="projects-title">Latest Projects</h2>
        <p>A showcase of real-world projects built with modern technologies.</p>
        <a className="button button--outline button--small" href="#projects-grid">
          View All Projects <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
      <div id="projects-grid" className="projects-grid">
        <ProjectList />
      </div>
    </motion.section>
  );
}
