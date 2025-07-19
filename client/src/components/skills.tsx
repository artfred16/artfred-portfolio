export default function Skills() {
  const languages = [
    { name: "Laravel", icon: "fab fa-laravel", color: "text-red-500", url: "https://laravel.com" },
    { name: "Vue.js", icon: "fab fa-vuejs", color: "text-green-500", url: "https://vuejs.org" },
    { name: "React", icon: "fab fa-react", color: "text-blue-400", url: "https://reactjs.org" },
    { name: "Angular", icon: "fab fa-angular", color: "text-red-600", url: "https://angular.io" },
    { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "ES6", icon: "fab fa-js-square", color: "text-yellow-400", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
    { name: "MySQL", icon: "fas fa-database", color: "text-blue-400", url: "https://www.mysql.com" },
    { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-600", url: "https://www.postgresql.org" },
    { name: "MSSQL", icon: "fas fa-server", color: "text-gray-400", url: "https://www.microsoft.com/en-us/sql-server" },
    { name: "SQLite", icon: "fas fa-database", color: "text-green-600", url: "https://www.sqlite.org" },
    { name: "Nuxt.js", icon: "fab fa-vuejs", color: "text-green-400", url: "https://nuxtjs.org" },
    { name: "TailwindCSS", icon: "fas fa-wind", color: "text-cyan-400", url: "https://tailwindcss.com" },
    { name: "Sass", icon: "fab fa-sass", color: "text-pink-500", url: "https://sass-lang.com" },
    { name: "jQuery", icon: "fab fa-js", color: "text-blue-400", url: "https://jquery.com" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-500", url: "https://getbootstrap.com" },
    { name: "PHP", icon: "fab fa-php", color: "text-indigo-400", url: "https://www.php.net" },
    { name: "Livewire", icon: "fas fa-bolt", color: "text-pink-400", url: "https://laravel-livewire.com" },
    { name: "Inertia.js", icon: "fas fa-rocket", color: "text-purple-400", url: "https://inertiajs.com" },
    { name: "Ionic", icon: "fas fa-mobile-alt", color: "text-blue-500", url: "https://ionicframework.com" },
    { name: "Filament", icon: "fas fa-layer-group", color: "text-amber-500", url: "https://filamentphp.com" }
  ];

  const tools = [
    { name: "Github", icon: "fab fa-github", color: "text-slate-300", url: "https://github.com" },
    { name: "Bitbucket", icon: "fab fa-bitbucket", color: "text-blue-600", url: "https://bitbucket.org" },
    { name: "Figma", icon: "fab fa-figma", color: "text-pink-500", url: "https://www.figma.com" },
    { name: "Jira", icon: "fab fa-jira", color: "text-blue-500", url: "https://www.atlassian.com/software/jira" },
    { name: "Zapier", icon: "fas fa-bolt", color: "text-orange-500", url: "https://zapier.com" },
    { name: "Laravel Forge", icon: "fas fa-server", color: "text-red-500", url: "https://forge.laravel.com" },
    { name: "Envoyer", icon: "fas fa-rocket", color: "text-green-500", url: "https://envoyer.io" },
    { name: "Bugsnag", icon: "fas fa-bug", color: "text-red-400", url: "https://www.bugsnag.com" },
    { name: "Laravel Nova", icon: "fas fa-gem", color: "text-emerald-400", url: "https://nova.laravel.com" },
    { name: "Redis", icon: "fas fa-memory", color: "text-red-600", url: "https://redis.io" },
    { name: "Docker", icon: "fab fa-docker", color: "text-blue-500", url: "https://www.docker.com" }
  ];



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
        
        <div className="space-y-16">
          {/* Languages and Frameworks */}
          <div>
            <div className="flex items-center mb-8">
              <i className="fas fa-code text-laravel-red text-xl mr-3"></i>
              <h3 className="text-2xl font-semibold">Languages And Frameworks</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {languages.map((lang) => (
                <a 
                  key={lang.name} 
                  href={lang.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer group"
                >
                  <i className={`${lang.icon} text-4xl ${lang.color} mb-3 group-hover:scale-110 transition-transform`}></i>
                  <span className="text-sm text-slate-300 text-center w-full group-hover:text-ocean-primary transition-colors">{lang.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <div className="flex items-center mb-8">
              <i className="fas fa-tools text-laravel-red text-xl mr-3"></i>
              <h3 className="text-2xl font-semibold">Tools I Utilize</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {tools.map((tool) => (
                <a 
                  key={tool.name} 
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer group"
                >
                  <i className={`${tool.icon} text-4xl ${tool.color} mb-3 group-hover:scale-110 transition-transform`}></i>
                  <span className="text-sm text-slate-300 text-center w-full group-hover:text-ocean-primary transition-colors">{tool.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
