import { useLocation } from "wouter";
import {Fragment, useState} from "react";
import { projects } from "@/data/projects";
export default function ProjectPreview() {
  const [location, navigate] = useLocation();
  const projectId = location.split('/').pop();

  const project = projects.find(p => p.slug === projectId || p.id === parseInt(projectId || '1'));
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    navigate("/404");
    return;
  }

  return (
    <Fragment>
      <ScrollToTop/>
      <div className="min-h-screen bg-ocean-dark text-slate-100 pt-20">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          {/* Header */}
          <div className="mb-8">
            <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-4">
              <a href="/" className="hover:text-ocean-primary transition-colors">Home</a>
              <span>/</span>
              <a href="/#projects" className="hover:text-ocean-primary transition-colors">Projects</a>
              <span>/</span>
              <span className="text-slate-300">{project.title}</span>
            </nav>

            <div className="flex md:flex-row flex-col items-center justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
                <p className="text-slate-400 text-lg">{project.description}</p>
              </div>
              <div className="flex space-x-4 md:mt-0 mt-4">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex text-center"
                    >
                      <i className="fas fa-external-link-alt mr-2 my-auto"></i>
                      Live Demo
                    </a>
                )}
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                      <i className="fab fa-github mr-2"></i>
                      View Code
                    </a>
                )}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
                <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>

                {/* Main Image */}
                <div className="mb-4">
                  <img
                      src={project.gallery[selectedImage]}
                      alt={`${project.title} - Image ${selectedImage + 1}`}
                      className="w-full md:h-96 h-52 object-cover rounded-lg"
                  />
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-4">
                  {project.gallery.map((image, index) => (
                      <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`relative overflow-hidden rounded-lg transition-all ${
                              selectedImage === index
                                  ? 'ring-2 ring-ocean-primary'
                                  : 'hover:opacity-80'
                          }`}
                      >
                        <img
                            src={image}
                            alt={`${project.title} - Thumbnail ${index + 1}`}
                            className="w-full md:h-20 h-16 object-cover"
                        />
                      </button>
                  ))}
                </div>
              </div>

              {/* Long Description */}
              <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-slate-300 leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Features */}
              <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-ocean-primary rounded-full flex-shrink-0"></div>
                        <span className="text-slate-300">{feature}</span>
                      </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
                <h2 className="text-2xl font-semibold mb-4">Technical Challenges</h2>
                <div className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-ocean-warning rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-slate-300">{challenge}</span>
                      </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-slate-400 text-sm">Role</span>
                    <p className="text-slate-100 font-medium">{project.role}</p>
                  </div>
                  {project.duration && (<div>
                    <span className="text-slate-400 text-sm">Duration</span>
                    <p className="text-slate-100 font-medium">{project.duration}</p>
                  </div>)}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
                <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                      <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-sm ${
                              tech === 'Laravel' ? 'bg-laravel-red/20 text-laravel-red' :
                                  tech === 'Vue.js' ? 'bg-ocean-success/20 text-ocean-success' :
                                      tech === 'MySQL' || tech === 'PostgreSQL' ? 'bg-ocean-primary/20 text-ocean-primary' :
                                          tech === 'PHP' ? 'bg-ocean-secondary/20 text-ocean-secondary' :
                                              tech === 'JavaScript' ? 'bg-ocean-warning/20 text-ocean-warning' :
                                                  tech === 'Stripe' ? 'bg-purple-500/20 text-purple-400' :
                                                      tech === 'Ionic' ? 'bg-cyan-500/20 text-cyan-400' :
                                                          tech === 'Angular' ? 'bg-red-500/20 text-red-400' :
                                                              tech === 'GraphQL' ? 'bg-pink-500/20 text-pink-400' :
                                                                  tech === 'Java' ? 'bg-orange-500/20 text-orange-400' :
                                                                      tech === 'Groovy' ? 'bg-indigo-500/20 text-indigo-400' :
                                                                          tech === 'Filament' ? 'bg-amber-500/20 text-amber-400' :
                                                                              tech === 'TailwindCSS' ? 'bg-teal-500/20 text-teal-400' :
                                                                                  'bg-ocean-primary/20 text-ocean-primary'
                          }`}
                      >
                  {tech}
                </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
                <h3 className="text-xl font-semibold mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.liveUrl && (
                      <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-ocean-primary hover:text-ocean-primary/80 transition-colors"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span>View Live Project</span>
                      </a>
                  )}
                  {project.githubUrl && (
                      <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-ocean-secondary hover:text-ocean-secondary/80 transition-colors"
                      >
                        <i className="fab fa-github"></i>
                        <span>View Source Code</span>
                      </a>
                  )}
                  <a
                      href="/#contact"
                      className="flex items-center space-x-3 text-ocean-success hover:text-ocean-success/80 transition-colors"
                  >
                    <i className="fas fa-envelope"></i>
                    <span>Discuss This Project</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Projects */}
          <div className="mt-12 text-center">
            <a href="/#projects" className="btn-secondary">
              <i className="fas fa-arrow-left mr-2"></i>
              Back to All Projects
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

import {ScrollToTop} from "@/components/helpers/scroller.tsx";

interface ProjectPreviewProps {
  projectId: string;
}
