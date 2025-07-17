import ProjectCard from "@/components/project-card";
import { Project } from "@/lib/types";

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard built with Laravel and Vue.js.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Laravel", "Vue.js", "MySQL", "Stripe"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Laravel", "Vue.js", "WebSocket", "Redis"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "RESTful API Service",
      description: "Comprehensive REST API with authentication, rate limiting, and comprehensive documentation. Built for scalability and performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Laravel", "Sanctum", "OpenAPI", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Real-time Chat App",
      description: "Real-time messaging application with file sharing, emoji support, and group chat functionality using WebSockets.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Laravel", "Vue.js", "Pusher", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 5,
      title: "Custom CMS",
      description: "Flexible content management system with role-based permissions, media management, and SEO optimization tools.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Laravel", "Spatie", "Filament", "Elasticsearch"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      description: "Advanced analytics dashboard with real-time data visualization, custom reports, and automated insights for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Laravel", "Vue.js", "Chart.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#"
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
            A showcase of my recent work and contributions to the web development community
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
