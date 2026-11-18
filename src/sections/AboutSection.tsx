import { Check, Code2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { expertiseAreas } from "../data/skills";
import { TechStack } from "../components/TechStack";

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      className="about-section container"
      aria-labelledby="about-title"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55 }}
    >
      <div className="about-copy">
        <p className="eyebrow">ABOUT ME</p>
        <h2 id="about-title">More About Me</h2>
        <p className="about-description">
          I&apos;m a Software Engineer with a strong focus on full-stack development,
          building scalable and user-friendly web applications using modern technologies.
        </p>
        <ul className="expertise-list" aria-label="Areas of expertise">
          {expertiseAreas.map((area) => (
            <li key={area}>
              <span><Check size={13} strokeWidth={2.2} aria-hidden="true" /></span>
              {area}
            </li>
          ))}
        </ul>
        <span className="about-watermark" aria-hidden="true"><Code2 /></span>
      </div>
      <section id="skills" className="tech-stack-section" aria-labelledby="skills-title">
        <div className="tech-stack-heading">
          <div>
            <h2 id="skills-title">Tech Stack</h2>
            <p>Tools and technologies I work with.</p>
          </div>
        </div>
        <TechStack />
      </section>
    </motion.section>
  );
}
