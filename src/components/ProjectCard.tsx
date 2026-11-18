import type { Project } from "../types";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { TechBadge } from "./TechBadge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const PreviewIcon = project.previewIcon;

  return (
    <motion.article
      className={`project-card project-card--${project.accent}`}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <div className="project-preview" aria-hidden="true">
        <span className="project-preview__grid" />
        <span className="project-preview__orbit project-preview__orbit--one" />
        <span className="project-preview__orbit project-preview__orbit--two" />
        <span className="project-preview__monogram">{project.name.slice(0, 2).toUpperCase()}</span>
        <span className="project-preview__mark"><PreviewIcon size={25} strokeWidth={1.5} /></span>
        <span className="project-preview__glow" />
      </div>
      <div className="project-card__body">
        <div className="project-card__heading">
          <h3>{project.name}</h3>
          {!project.githubUrl && !project.demoUrl && (
            <span className="project-card__link-placeholder" title="No project link provided" aria-label={`${project.name} links not provided`}>
              <ExternalLink size={15} aria-hidden="true" />
            </span>
          )}
        </div>
        <p className="project-card__summary">{project.summary}</p>
        <ul className="project-card__technologies" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}><TechBadge technology={technology} compact /></li>
          ))}
        </ul>
        {(project.githubUrl || project.demoUrl) && (
          <div className="project-card__links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} GitHub repository`}
              >
                <FaGithub aria-hidden="true" />
                <span>GitHub</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live demo`}
              >
                <span>Live Demo</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
