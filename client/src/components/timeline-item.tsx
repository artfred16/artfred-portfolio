import { Experience } from "@/lib/types";

interface TimelineItemProps {
  experience: Experience;
}

export default function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative flex items-start">
      <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-4 border-ocean-dark ${experience.color}`}>
        <i className={`${experience.icon} text-white`}></i>
      </div>
      <div className="ml-8 bg-ocean-surface rounded-lg p-6 border border-ocean-outline flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{experience.title}</h3>
          <span className="text-sm text-slate-400 font-mono">{experience.period}</span>
        </div>
        <p className="text-ocean-primary font-medium mb-3">{experience.company}</p>
        <p className="text-slate-300 mb-4">{experience.description}</p>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-sm ${
                tech === 'Laravel' ? 'bg-laravel-red/20 text-laravel-red' :
                tech === 'Vue.js' ? 'bg-ocean-success/20 text-ocean-success' :
                tech === 'MySQL' ? 'bg-ocean-primary/20 text-ocean-primary' :
                tech === 'PHP' ? 'bg-ocean-secondary/20 text-ocean-secondary' :
                tech === 'JavaScript' ? 'bg-ocean-warning/20 text-ocean-warning' :
                tech === 'API Development' ? 'bg-ocean-secondary/20 text-ocean-secondary' :
                tech === 'Bootstrap' ? 'bg-ocean-success/20 text-ocean-success' :
                tech === 'WordPress' ? 'bg-ocean-secondary/20 text-ocean-secondary' :
                tech === 'jQuery' ? 'bg-ocean-warning/20 text-ocean-warning' :
                tech === 'Git' ? 'bg-ocean-success/20 text-ocean-success' :
                'bg-ocean-primary/20 text-ocean-primary'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
