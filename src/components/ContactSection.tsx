import { ArrowUpRight, Send } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { personal } from "../data/personal";
import { SocialLinks } from "./SocialLinks";

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="contact"
      className="contact-section container"
      aria-labelledby="contact-title"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-art" aria-hidden="true">
        <span className="contact-art__line contact-art__line--one" />
        <span className="contact-art__line contact-art__line--two" />
        <span className="contact-art__orb" />
      </div>
      <div className="contact-emblem"><Send size={25} strokeWidth={1.6} aria-hidden="true" /></div>
      <div className="contact-copy">
        <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
        <h2 id="contact-title">Have a project in mind?</h2>
        <p>{personal.contactDescription}</p>
        {personal.email && (
          <a className="contact-email" href={`mailto:${personal.email}`}>
            {personal.email}
          </a>
        )}
      </div>
      <div className="contact-action">
        {personal.email ? (
          <motion.a
            className="button button--light"
            href={`mailto:${personal.email}`}
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            Contact Me <ArrowUpRight size={16} aria-hidden="true" />
          </motion.a>
        ) : (
          <>
            <button
              className="button button--light"
              type="button"
              disabled
              title="Add your email in src/data/personal.ts to enable contact."
            >
              Contact Me <ArrowUpRight size={16} aria-hidden="true" />
            </button>
            <span className="contact-note">Add an email address to enable this button.</span>
          </>
        )}
        <SocialLinks />
      </div>
    </motion.section>
  );
}
