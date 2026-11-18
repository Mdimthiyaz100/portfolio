import { useEffect, useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { personal } from "../data/personal";

const navigationItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
] as const;

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);

        if (visibleSections[0]) setActiveSection(visibleSections[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );

    navigationItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <a className="brand-mark" href="#home" aria-label="Mohamed Imthiyaz home" onClick={closeMenu}>
          MI<span>.</span>
        </a>

        <div id="primary-navigation" className={`nav-links${menuOpen ? " nav-links--open" : ""}`}>
          {navigationItems.map(({ label, id }) => (
            <a
              key={id}
              className={`nav-link${activeSection === id ? " nav-link--active" : ""}`}
              href={`#${id}`}
              aria-current={activeSection === id ? "page" : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a className="nav-cv nav-cv--mobile" href={personal.resumeFile} download>
            <ArrowDownToLine size={14} aria-hidden="true" />
            Download CV
          </a>
        </div>

        <div className="nav-actions">
          <a className="nav-cv nav-cv--desktop" href={personal.resumeFile} download>
            <ArrowDownToLine size={13} aria-hidden="true" />
            Download CV
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
