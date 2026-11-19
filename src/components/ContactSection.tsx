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
        <p className="eyebrow">OPEN TO JOB OPPORTUNITIES</p>
        <h2 id="contact-title">Looking for a Dedicated Software Engineer?</h2>
        <p>{personal.contactDescription}</p>
        <p className="contact-availability">Available for full-time Software Engineer / Full Stack Developer opportunities.</p>
        {personal.email && (
          <a className="contact-email" href={`mailto:${personal.email}`}>
            {personal.email}
          </a>
        )}
      </div>
      <div className="contact-action">
        {personal.email ? (
          <a
            className="button button--light"
            href="mailto:mimthiyaz100@gmail.com?subject=Job%20Opportunity%20-%20Mohamed%20Imthiyaz"
          >
            Send Me an Email <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ) : (
          <>
            <button
              className="button button--light"
              type="button"
              disabled
              title="Add your email in src/data/personal.ts to enable contact."
            >
              Send Me an Email <ArrowUpRight size={16} aria-hidden="true" />
            </button>
            <span className="contact-note">Add an email address to enable this button.</span>
          </>
        )}
        <SocialLinks />
      </div>
    </motion.section>
  );
}
