import { Experience } from "@/lib/types";

interface TimelineItemProps {
  experience: Experience;
}

export default function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative flex items-start">
      <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-4 border-editor-dark ${experience.color}`}>
        <i className={`${experience.icon} text-white`}></i>
      </div>
      <div className="ml-8 bg-editor-gray rounded-lg p-6 border border-editor-lighter flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{experience.title}</h3>
          <span className="text-sm text-slate-400 font-mono">{experience.period}</span>
        </div>
        <p className="text-code-blue font-medium mb-3">{experience.company}</p>
        <p className="text-slate-300 mb-4">{experience.description}</p>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-sm ${
                tech === 'Laravel' ? 'bg-laravel-red/20 text-laravel-red' :
                tech === 'Vue.js' ? 'bg-code-green/20 text-code-green' :
                tech === 'MySQL' ? 'bg-code-blue/20 text-code-blue' :
                tech === 'PHP' ? 'bg-code-purple/20 text-code-purple' :
                tech === 'JavaScript' ? 'bg-code-yellow/20 text-code-yellow' :
                tech === 'API Development' ? 'bg-code-purple/20 text-code-purple' :
                tech === 'Bootstrap' ? 'bg-code-green/20 text-code-green' :
                tech === 'WordPress' ? 'bg-code-purple/20 text-code-purple' :
                tech === 'jQuery' ? 'bg-code-yellow/20 text-code-yellow' :
                tech === 'Git' ? 'bg-code-green/20 text-code-green' :
                'bg-code-blue/20 text-code-blue'
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
