import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Education } from "@/components/portfolio/education";
import { Experience } from "@/components/portfolio/experience";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Testimonials } from "@/components/portfolio/testimonials";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
