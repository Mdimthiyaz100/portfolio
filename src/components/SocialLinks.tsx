import { socialLinks } from "../data/socialLinks";

export function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Social media links">
      {socialLinks.map(({ name, url, icon: Icon, ariaLabel }) => (
        <a
          key={name}
          className="social-link-card"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          <Icon aria-hidden="true" />
          <span>{name}</span>
        </a>
      ))}
    </nav>
  );
}
