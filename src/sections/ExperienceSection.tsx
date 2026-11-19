import { CalendarDays, Check, ExternalLink, Layers3, ListChecks } from "lucide-react";
import { TechIcon } from "../components/TechIcon";
import { technologyCatalog, type TechnologyId } from "../data/skills";

const experiences: {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
  responsibilities: string[];
  technologies: TechnologyId[];
}[] = [
  {
    company: "Faaz Tech Solutions Pvt Ltd",
    role: "Software Engineer",
    period: "Current",
    current: true,
    description: "Working on full-stack web applications, building scalable features and contributing to the development of Cafe4x, a multi-tenant office cafe management platform.",
    responsibilities: [
      "Develop and maintain full-stack web applications.",
      "Build modern frontend interfaces using React, TypeScript and Tailwind CSS.",
      "Develop REST APIs using Hono and Cloudflare Workers.",
      "Work with Cloudflare D1 databases and database architecture.",
      "Implement authentication, authorization and API integrations.",
      "Develop and improve Cafe4x, a multi-tenant office cafe platform.",
      "Participate in code reviews, debugging and application improvements.",
      "Use AI-assisted development tools to improve productivity.",
    ],
    technologies: ["react", "typescript", "javascript", "tailwind", "hono", "cloudflareWorkers", "cloudflareD1", "git", "github", "claude", "codex", "antigravity"],
  },
  {
    company: "Maskan Technologies",
    role: "Intern",
    period: "4 Months",
    description: "Worked on web development projects and gained hands-on experience in building and maintaining web applications using modern technologies.",
    responsibilities: [
      "Assisted in developing and maintaining web applications.",
      "Wrote clean and reusable code following best practices.",
      "Worked with the development team to fix bugs and improve features.",
      "Learned and applied modern web technologies.",
    ],
    technologies: ["javascript", "react", "github"],
  },
];

export function ExperienceSection() {
  return (
    <section className="experience-section container" id="experience" aria-labelledby="experience-title">
      <div className="experience-heading">
        <p className="eyebrow">WORK EXPERIENCE</p>
        <h2 id="experience-title">My Professional <span>Journey</span></h2>
        <p>My experience building modern web applications, developing backend systems and contributing to real-world software projects.</p>
      </div>
      <div className="experience-timeline">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.company}>
            <div className="experience-overview">
              <div className={`experience-company-logo ${experience.current ? "experience-company-logo--faaz" : "experience-company-logo--maskan"}`} role="img" aria-label={`${experience.company} logo`} />
              <div className="experience-company-content">
                <h3>{experience.company} <ExternalLink size={15} aria-hidden="true" /></h3>
                <p className="experience-role">{experience.role}</p>
                <span className={`experience-period${experience.current ? " experience-period--current" : ""}`}><CalendarDays size={14} />{experience.period}</span>
                <p className="experience-description">{experience.description}</p>
              </div>
            </div>
            <div className="experience-responsibilities">
              <h4><ListChecks size={20} /> Key Responsibilities</h4>
              <ul>{experience.responsibilities.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
            </div>
            <div className="experience-technologies">
              <h4><Layers3 size={20} /> Technologies</h4>
              <ul>{experience.technologies.map((id) => <li key={id}><TechIcon name={id} /><span>{technologyCatalog[id].label}</span></li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
