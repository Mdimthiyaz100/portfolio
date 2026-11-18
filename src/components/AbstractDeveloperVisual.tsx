import { CodeXml } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { personal } from "../data/personal";

export function AbstractDeveloperVisual() {
  const reduceMotion = useReducedMotion();
  const floatAnimation = reduceMotion ? undefined : { y: [0, -9, 0] };

  return (
    <figure className="hero-illustration">
      <div className="illustration-glow illustration-glow--back" aria-hidden="true" />
      <motion.div
        className="hero-sphere"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, -7, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="hero-ribbon hero-ribbon--one"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: [32, 36, 32], y: [0, 6, 0] }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="hero-ribbon hero-ribbon--two"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: [-23, -18, -23], x: [0, 7, 0] }}
        transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="code-float"
        animate={floatAnimation}
        transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity }}
      >
        <div className="code-window">
          <div className="code-window__topbar">
            <div className="window-lights" aria-hidden="true"><i /><i /><i /></div>
            <span>developer.ts</span>
            <span className="code-window__language">TS</span>
          </div>
          <pre aria-label={`const developer = { name: ${personal.name}, role: ${personal.role}, passion: Building Products }`}>
            <code>
              <span className="code-muted">01</span>  <span className="code-purple">const</span> developer = {"{"}{"\n"}
              <span className="code-muted">02</span>    name: <span className="code-green">"{personal.name}"</span>,{"\n"}
              <span className="code-muted">03</span>    role: <span className="code-green">"{personal.role}"</span>,{"\n"}
              <span className="code-muted">04</span>    passion: <span className="code-orange">"Building Products"</span>{"\n"}
              <span className="code-muted">05</span>  {"}"};
            </code>
          </pre>
        </div>
      </motion.div>
      <motion.div
        className="floating-code-mark"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [4, 0, 4] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      >
        <CodeXml size={21} strokeWidth={1.7} />
      </motion.div>
      <div className="illustration-glow illustration-glow--front" aria-hidden="true" />
      <figcaption className="sr-only">
        Abstract purple developer illustration with a floating code editor for {personal.name}.
      </figcaption>
    </figure>
  );
}
