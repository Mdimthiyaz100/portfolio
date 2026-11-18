import { Blocks, BrainCircuit, CloudCog, Database, PanelsTopLeft } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { technologyCatalog, skillGroups } from "../data/skills";
import { TechIcon } from "./TechIcon";

const groupIcons = [PanelsTopLeft, Blocks, Database, CloudCog, BrainCircuit];

export function TechStack() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="tech-groups">
      {skillGroups.map((group, index) => {
        const GroupIcon = groupIcons[index];

        return (
          <motion.section
            className="tech-group"
            key={group.name}
            whileHover={reduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.18 }}
            aria-labelledby={`tech-group-${index}`}
          >
            <h3 id={`tech-group-${index}`}>
              <span><GroupIcon size={15} aria-hidden="true" /></span>
              {group.name}
            </h3>
            <ul className="tech-items">
              {group.technologies.map((technology) => (
                <li className="tech-item" key={technology}>
                  <span className="tech-item__icon" style={{ color: technologyCatalog[technology].color }}>
                    <TechIcon name={technology} />
                  </span>
                  <span>{technologyCatalog[technology].label}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        );
      })}
    </div>
  );
}
