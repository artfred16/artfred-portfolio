import ProjectCard from "@/components/project-card";
import { Project } from "@/lib/types";

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "SimplyEarth E-Commerce Platform",
      description: "Full-featured e-commerce platform with subscription management, inventory tracking, and comprehensive analytics dashboard. Built with Laravel backend and Vue.js frontend for optimal performance.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Laravel", "Vue.js", "PostgreSQL", "Stripe", "Analytics", "Livewire"],
      liveUrl: "https://simplyearth.com"
    },
    {
      id: 2,
      title: "Solgen Power Mobile Application",
      description: "Cross-platform mobile application for solar power management with real-time monitoring, energy analytics, and customer portal. Optimized for performance using Ionic framework.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Laravel", "Vue.js", "Ionic", "MySQL", "PHP"],
      githubUrl: "https://github.com/artfred16"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare application for clinical specialists with patient management, appointment scheduling, and GraphQL API integration for seamless data flow.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Angular", "GraphQL", "JavaScript", "Healthcare", "API Integration"],
      githubUrl: "https://github.com/artfred16"
    },
    {
      id: 4,
      title: "Payment Gateway Integration System",
      description: "Robust payment processing system with multi-gateway support, bill payments, e-loading services, and comprehensive transaction management for trading operations.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Laravel", "PHP", "RESTful APIs", "Payment Gateways", "MySQL"],
      githubUrl: "https://github.com/artfred16"
    },
    {
      id: 5,
      title: "API Library Development Platform",
      description: "Production-grade API libraries built with Java and Groovy framework, featuring comprehensive documentation, testing suites, and seamless integration capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Java", "Groovy", "API Development", "Libraries", "Documentation"],
      githubUrl: "https://github.com/artfred16"
    },
    {
      id: 6,
      title: "Laravel Filament Admin Dashboard",
      description: "Modern admin dashboard built with Laravel Filament featuring role-based permissions, advanced filtering, bulk operations, and comprehensive reporting system.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by11YWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Laravel", "Filament", "MySQL", "TailwindCSS", "PHP"],
      githubUrl: "https://github.com/artfred16"
    }
  ];

  return (
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}