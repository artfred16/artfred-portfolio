import TimelineItem from "@/components/timeline-item";
import { Experience } from "@/lib/types";

export default function ExperiencePage() {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "SimplyEarth",
      period: "May 2023 - Present",
      description: "Providing ongoing maintenance and support for e-commerce and inventory management systems. Leveraging analytical tools to monitor sales performance and implement optimization strategies.",
      technologies: ["Laravel", "Vue.js", "Tailwind", "Posgresql", "Analytics", "Livewire", "Filament", "Inertiajs"],
      icon: "fas fa-briefcase",
      color: "bg-ocean-error"
    },
    {
      id: 2,
      title: "Full Stack Developer Contractor",
      company: "Solgen Power",
      period: "October 2022 - April 2023",
      description: "Created and optimized mobile applications using Vue.js and Ionic framework. Designed optimized queries in Laravel and maintained comprehensive test cases.",
      technologies: ["Laravel", "Vue.js", "Ionic", "PHP"],
      icon: "fas fa-code",
      color: "bg-ocean-primary"
    },
    {
      id: 3,
      title: "Consultant",
      company: "SimplyEarth",
      period: "September 2021 - 2022",
      description: "Provided maintenance and support for e-commerce platform. Implemented new features for market expansion and integrated analytical tools for data-driven decisions.",
      technologies: ["Laravel", "Vue.js", "Analytics", "E-commerce"],
      icon: "fas fa-chart-line",
      color: "bg-ocean-success"
    },
    {
      id: 4,
      title: "Front End Developer",
      company: "TreatAnyone Inc",
      period: "February 2020 - October 2022",
      description: "Designed tailored software applications for clinical specialists. Created intuitive front-end workflows and integrated APIs using GraphQL for healthcare settings.",
      technologies: ["Angular", "GraphQL", "JavaScript", "Healthcare"],
      icon: "fas fa-heartbeat",
      color: "bg-ocean-secondary"
    },
    {
      id: 5,
      title: "Full Stack Developer",
      company: "Aunicaj Int. Trading Corp",
      period: "February 2017 - February 2020",
      description: "Designed custom software applications and deployed robust online services using RESTful APIs. Engineered third-party integrations for payments, e-loading, and ticketing systems.",
      technologies: ["Laravel", "PHP", "RESTful APIs", "Payment Gateways", "MySQL"],
      icon: "fas fa-globe",
      color: "bg-ocean-tertiary"
    },
    {
      id: 6,
      title: "Part-time IT Instructor",
      company: "ISI, CLSU",
      period: "January 2016 - December 2016",
      description: "Introduced programming concepts and guided students through C/C++, Java OOP principles, and PHP web development. Taught Management Information Systems concepts.",
      technologies: ["C/C++", "Java", "PHP", "Teaching"],
      icon: "fas fa-chalkboard-teacher",
      color: "bg-ocean-warning"
    },
    {
      id: 7,
      title: "Associate Software Engineer",
      company: "TORO.IO",
      period: "May 2015 - October 2015",
      description: "Utilized Java programming and Groovy framework to develop production-grade API libraries. Created online implementations and maintained production libraries.",
      technologies: ["Java", "Groovy", "API Development", "Libraries"],
      icon: "fas fa-graduation-cap",
      color: "bg-ocean-error"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-ocean-surface/30">
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
