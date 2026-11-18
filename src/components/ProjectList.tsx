import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectList() {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
