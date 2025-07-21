import Hero from "@/components/hero";
import Skills from "@/components/skills";
import ExperiencePage from "@/pages/experience";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <ExperiencePage />
      <Projects />
      <Contact />
    </div>
  );
}