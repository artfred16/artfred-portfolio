import TimelineItem from "@/components/timeline-item";
import { Experience } from "@/lib/types";

export default function ExperiencePage() {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Senior Laravel Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: "Leading development of enterprise-level web applications using Laravel, Vue.js, and MySQL. Architected scalable solutions serving 100k+ users daily.",
      technologies: ["Laravel", "Vue.js", "MySQL", "API Development"],
      icon: "fas fa-briefcase",
      color: "bg-laravel-red"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Agency Pro",
      period: "2021 - 2023",
      description: "Developed custom web applications and e-commerce platforms for clients. Collaborated with design teams to create responsive, user-friendly interfaces.",
      technologies: ["PHP", "JavaScript", "Bootstrap", "WordPress"],
      icon: "fas fa-code",
      color: "bg-code-blue"
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "StartUp Hub",
      period: "2020 - 2021",
      description: "Started my professional journey building simple web applications and learning modern development practices. Focused on Laravel fundamentals and database design.",
      technologies: ["Laravel", "MySQL", "jQuery", "Git"],
      icon: "fas fa-graduation-cap",
      color: "bg-code-green"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-editor-gray/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-slate-400 font-mono">// </span>
            <span className="text-slate-100">Experience Timeline</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My journey as a Laravel developer and the milestones I've achieved
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience) => (
              <TimelineItem key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
