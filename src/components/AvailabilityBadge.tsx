import { personal } from "../data/personal";

export function AvailabilityBadge() {
  return (
    <p className="availability-badge">
      <span className="availability-badge__dot" aria-hidden="true" />
      {personal.availability}
    </p>
  );
}
