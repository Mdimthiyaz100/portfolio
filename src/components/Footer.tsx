import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer container">
      <a className="footer-brand" href="#home">MI<span>.</span></a>
      <p>Building thoughtful software. Growing as an engineer.</p>
      <a className="back-to-top" href="#home">
        Back to top <ArrowUp size={13} aria-hidden="true" />
      </a>
      <span className="footer-copyright">© {new Date().getFullYear()} Mohamed Imthiyaz</span>
    </footer>
  );
}
