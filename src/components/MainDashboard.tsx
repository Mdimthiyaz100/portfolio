import { AnimatedBackground } from "./AnimatedBackground";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { StatsSection } from "./StatsSection";
import { AboutSection } from "../sections/AboutSection";
import { FeaturedProjects } from "../sections/FeaturedProjects";
import { Hero } from "../sections/Hero";

export function MainDashboard() {
  return (
    <div className="site-shell min-h-screen">
      <AnimatedBackground />
      <a className="skip-link" href="#home">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <FeaturedProjects />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
