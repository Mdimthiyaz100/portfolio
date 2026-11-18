import { technologyCatalog, type TechnologyId } from "../data/skills";
import { TechIcon } from "./TechIcon";

interface TechBadgeProps {
  technology: TechnologyId;
  compact?: boolean;
}

export function TechBadge({ technology, compact = false }: TechBadgeProps) {
  return (
    <span
      className={`tech-badge${compact ? " tech-badge--compact" : ""}`}
      style={{ color: technologyCatalog[technology].color }}
    >
      <TechIcon name={technology} />
      <span>{technologyCatalog[technology].label}</span>
    </span>
  );
}
