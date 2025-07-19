import ProjectCard from "@/components/project-card";
import { Project } from "@/lib/types";

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      slug: "simply-earth-store",
      title: "Simply Earth Store",
      description: "Full-featured e-commerce platform with subscription management, inventory tracking, and comprehensive analytics dashboard. Built with Laravel backend and Vue.js frontend for optimal performance.",
      image: "/images/se-preview.png",
      technologies: ["Laravel", "Vue.js", "Inertia.js", "Tailwind", "PHP"],
      liveUrl: "https://simplyearth.com"
    },
    {
      id: 2,
      slug: "nature-packaged-erp",
      title: "Nature Packaged ERP (Simply Earth)",
      description: "Nature Packaged ERP is a Laravel and Filament-based system for managing inventory, building products with BOM, and syncing stock with external platforms—built for efficient, scalable operations.",
      image: "/images/np-login.png",
      technologies: ["Laravel", "Livewire", "Filament", "PosgreSQL", "PHP"],
      liveUrl: "https://erp.bealionchaser.com"
    },
    {
      id: 3,
      slug: "small-town-ev-admin",
      title: "Small Town EV Admin",
      description: "Admin dashboard for managing EV products, inventory, customer reservations, warranty processing, and supplier-managed items. Built to streamline backend operations and support efficient electric vehicle retail and logistics workflows.",
      image: "/images/ev-manage.png",
      technologies: ["Laravel", "Filament", "Livewire", "PostgreSQL", "PHP"],
      liveUrl: "https://smalltownev.com"
    },
    // {
    //   id: 7,
    //   title: "Healthcare Management System",
    //   description: "Comprehensive healthcare application for clinical specialists with patient management, appointment scheduling, and GraphQL API integration for seamless data flow.",
    //   image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    //   technologies: ["Angular", "GraphQL", "JavaScript", "Healthcare", "API Integration"],
    //   githubUrl: "https://github.com/artfred16"
    // },
    // {
    //   id: 4,
    //   title: "Payment Gateway Integration System",
    //   description: "Robust payment processing system with multi-gateway support, bill payments, e-loading services, and comprehensive transaction management for trading operations.",
    //   image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    //   technologies: ["Laravel", "PHP", "RESTful APIs", "Payment Gateways", "MySQL"],
    //   githubUrl: "https://github.com/artfred16"
    // },
    // {
    //   id: 5,
    //   title: "API Library Development Platform",
    //   description: "Production-grade API libraries built with Java and Groovy framework, featuring comprehensive documentation, testing suites, and seamless integration capabilities.",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    //   technologies: ["Java", "Groovy", "API Development", "Libraries", "Documentation"],
    //   githubUrl: "https://github.com/artfred16"
    // },
    // {
    //   id: 6,
    //   title: "Laravel Filament Admin Dashboard",
    //   description: "Modern admin dashboard built with Laravel Filament featuring role-based permissions, advanced filtering, bulk operations, and comprehensive reporting system.",
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by11YWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    //   technologies: ["Laravel", "Filament", "MySQL", "TailwindCSS", "PHP"],
    //   githubUrl: "https://github.com/artfred16"
    // }
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