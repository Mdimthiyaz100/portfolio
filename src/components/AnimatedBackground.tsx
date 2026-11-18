import { motion, useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="ambient-scene" aria-hidden="true">
      <motion.div
        className="ambient-orb ambient-orb--violet"
        animate={reduceMotion ? undefined : { x: [0, 16, -12, 0], y: [0, -12, 8, 0] }}
        transition={{ duration: 24, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="ambient-orb ambient-orb--blue"
        animate={reduceMotion ? undefined : { x: [0, -14, 14, 0], y: [0, 12, -8, 0] }}
        transition={{ duration: 29, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
