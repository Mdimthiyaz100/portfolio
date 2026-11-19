import { ArrowDownToLine, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { personal } from "../data/personal";
import { heroTechnologies } from "../data/skills";
import { AbstractDeveloperVisual } from "../components/AbstractDeveloperVisual";
import { AvailabilityBadge } from "../components/AvailabilityBadge";
import { TechBadge } from "../components/TechBadge";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero-section container" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy"
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
        }}
      >
        <motion.div variants={revealItem(reduceMotion)}><AvailabilityBadge /></motion.div>
        <motion.h1 id="hero-title" variants={revealItem(reduceMotion)}>
          Hi, I&apos;m{" "}
          <span className="hero-name">{personal.name}.</span>
        </motion.h1>
        <motion.p className="hero-role" variants={revealItem(reduceMotion)}>{personal.role}</motion.p>
        <motion.p className="hero-description" variants={revealItem(reduceMotion)}>
          {personal.heroDescription}
        </motion.p>
        <motion.div className="hero-tech-list" aria-label="Core technologies" variants={revealItem(reduceMotion)}>
          {heroTechnologies.map((technology) => <TechBadge key={technology} technology={technology} />)}
        </motion.div>
        <motion.div className="hero-actions" variants={revealItem(reduceMotion)}>
          <a className="button button--primary" href="#contact">
            Get in Touch <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a className="button button--outline" href="#projects">
            <ArrowDownRight size={16} aria-hidden="true" /> View Projects
          </a>
          <a className="button button--outline" href={personal.resumeFile} download>
            <ArrowDownToLine size={16} aria-hidden="true" /> Download CV
          </a>
        </motion.div>
      </motion.div>
      <div className="hero-visual-wrap">
        <AbstractDeveloperVisual />
      </div>
    </section>
  );
}

function revealItem(reduceMotion: boolean | null): Variants | undefined {
  if (reduceMotion) return undefined;
  return {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
}
