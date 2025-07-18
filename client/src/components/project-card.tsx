import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card group">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-code-blue transition-colors"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          )}
        </div>
        <p className="text-slate-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 rounded text-sm ${
                tech === 'Laravel' ? 'bg-laravel-red/20 text-laravel-red' :
                tech === 'Vue.js' ? 'bg-code-green/20 text-code-green' :
                tech === 'MySQL' ? 'bg-code-blue/20 text-code-blue' :
                tech === 'Stripe' ? 'bg-code-purple/20 text-code-purple' :
                tech === 'WebSocket' ? 'bg-code-yellow/20 text-code-yellow' :
                tech === 'Redis' ? 'bg-code-purple/20 text-code-purple' :
                tech === 'Sanctum' ? 'bg-code-blue/20 text-code-blue' :
                tech === 'OpenAPI' ? 'bg-code-green/20 text-code-green' :
                tech === 'PostgreSQL' ? 'bg-code-purple/20 text-code-purple' :
                tech === 'Pusher' ? 'bg-code-yellow/20 text-code-yellow' :
                tech === 'Socket.io' ? 'bg-code-purple/20 text-code-purple' :
                tech === 'Spatie' ? 'bg-code-blue/20 text-code-blue' :
                tech === 'Filament' ? 'bg-code-green/20 text-code-green' :
                tech === 'Elasticsearch' ? 'bg-code-purple/20 text-code-purple' :
                tech === 'Chart.js' ? 'bg-code-blue/20 text-code-blue' :
                tech === 'MongoDB' ? 'bg-code-green/20 text-code-green' :
                'bg-code-blue/20 text-code-blue'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-code-blue transition-colors"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-code-blue transition-colors"
              >
                <i className="fas fa-globe"></i>
              </a>
            )}
          </div>
          <button
            onClick={() => window.location.href = `/project/${project.id}`}
            className="text-ocean-primary hover:text-ocean-primary/80 transition-colors text-sm font-medium"
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}
