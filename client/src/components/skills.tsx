import { Skill } from "@/lib/types";

export default function Skills() {
  const skills: Skill[] = [
    // Languages
    { name: "PHP", level: 100, icon: "fab fa-php", category: "language" },
    { name: "JavaScript", level: 85, icon: "fab fa-js", category: "language" },
    { name: "HTML/CSS", level: 100, icon: "fab fa-html5", category: "language" },
    
    // Frameworks
    { name: "Laravel", level: 100, icon: "fab fa-laravel", category: "framework" },
    { name: "Vue.js", level: 85, icon: "fab fa-vuejs", category: "framework" },
    { name: "Tailwind CSS", level: 100, icon: "fab fa-css3-alt", category: "framework" },
    
    // Tools
    { name: "MySQL", level: 100, icon: "fas fa-database", category: "tool" },
    { name: "Git", level: 85, icon: "fab fa-git-alt", category: "tool" },
    { name: "Docker", level: 65, icon: "fab fa-docker", category: "tool" },
  ];

  const getSkillsByCategory = (category: Skill['category']) => {
    return skills.filter(skill => skill.category === category);
  };

  const getProgressWidth = (level: number) => {
    return `${level}%`;
  };

  const getProgressColor = (category: Skill['category']) => {
    switch (category) {
      case 'language':
        return 'bg-ocean-secondary';
      case 'framework':
        return 'bg-laravel-red';
      case 'tool':
        return 'bg-ocean-primary';
      default:
        return 'bg-ocean-primary';
    }
  };

  const getCategoryTitle = (category: Skill['category']) => {
    switch (category) {
      case 'language':
        return 'Languages';
      case 'framework':
        return 'Frameworks';
      case 'tool':
        return 'Tools & Utilities';
      default:
        return '';
    }
  };

  const getCategoryIcon = (category: Skill['category']) => {
    switch (category) {
      case 'language':
        return 'fas fa-code';
      case 'framework':
        return 'fas fa-layer-group';
      case 'tool':
        return 'fas fa-tools';
      default:
        return 'fas fa-code';
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-slate-400 font-mono">// </span>
            <span className="text-slate-100">Tech Stack</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {(['language', 'framework', 'tool'] as const).map((category) => (
            <div key={category} className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
              <div className="flex items-center mb-4">
                <i className={`${getCategoryIcon(category)} text-laravel-red text-xl mr-3`}></i>
                <h3 className="text-xl font-semibold">{getCategoryTitle(category)}</h3>
              </div>
              <div className="space-y-3">
                {getSkillsByCategory(category).map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="flex items-center">
                      <i className={`${skill.icon} mr-2 text-${
                        skill.name === 'PHP' ? 'ocean-secondary' :
                        skill.name === 'JavaScript' ? 'ocean-warning' :
                        skill.name === 'HTML/CSS' ? 'ocean-tertiary' :
                        skill.name === 'Laravel' ? 'laravel-red' :
                        skill.name === 'Vue.js' ? 'ocean-success' :
                        skill.name === 'MySQL' ? 'ocean-primary' :
                        skill.name === 'Git' ? 'ocean-tertiary' :
                        'ocean-primary'
                      }`}></i>
                      {skill.name}
                    </span>
                    <div className="w-16 h-2 bg-ocean-dark rounded-full">
                      <div
                        className={`h-full rounded-full ${getProgressColor(category)}`}
                        style={{ width: getProgressWidth(skill.level) }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
