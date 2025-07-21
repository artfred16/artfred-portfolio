import { Experience } from "@/lib/types";

interface TimelineItemProps {
  experience: Experience;
}

export default function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative flex items-start">
      <div className={`flex-shrink-0 w-16 h-16 rounded-full md:flex md:items-center justify-center border-4 border-ocean-dark ${experience.color} hidden`}>
        <i className={`${experience.icon} text-white`}></i>
      </div>
      <div className="md:ml-8 bg-ocean-surface rounded-lg p-6 border border-ocean-outline flex-1">
        <div className="flex md:flex-row flex-col items-center md:justify-between mb-2">
          <h3 className="text-xl font-semibold md:text-left text-center">{experience.title}</h3>
          <span className="text-sm text-slate-400 font-mono">{experience.period}</span>
        </div>
        <p className="text-ocean-primary font-medium mb-3 md:text-left text-center">{experience.company}</p>
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
                tech === 'Analytics' ? 'bg-ocean-tertiary/20 text-ocean-tertiary' :
                tech === 'Ionic' ? 'bg-cyan-500/20 text-cyan-500' :
                tech === 'E-commerce' ? 'bg-green-500/20 text-green-500' :
                tech === 'GraphQL' ? 'bg-pink-500/20 text-pink-500' :
                tech === 'Healthcare' ? 'bg-red-500/20 text-red-500' :
                tech === 'RESTful APIs' ? 'bg-blue-500/20 text-blue-500' :
                tech === 'Payment Gateways' ? 'bg-purple-500/20 text-purple-500' :
                tech === 'C/C++' ? 'bg-blue-600/20 text-blue-600' :
                tech === 'Java' ? 'bg-orange-500/20 text-orange-500' :
                tech === 'Teaching' ? 'bg-emerald-500/20 text-emerald-500' :
                tech === 'Groovy' ? 'bg-indigo-500/20 text-indigo-500' :
                tech === 'API Development' ? 'bg-ocean-secondary/20 text-ocean-secondary' :
                tech === 'Libraries' ? 'bg-teal-500/20 text-teal-500' :
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
