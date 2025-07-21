import ProjectCard from "@/components/project-card";
import {ScrollToTop} from "@/components/helpers/scroller.tsx";
import {Fragment} from "react";
import {projects} from "@/data/projects.ts";

export default function Projects() {

  return (
    <Fragment>
      <ScrollToTop/>
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-slate-400 font-mono">// </span>
              <span className="text-slate-100">Featured Projects</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A showcase of my professional work and contributions across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project}/>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}