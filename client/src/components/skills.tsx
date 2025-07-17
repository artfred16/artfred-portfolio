export default function Skills() {
  const languages = [
    { name: "Laravel", icon: "fab fa-laravel", color: "text-red-500" },
    { name: "Vue.js", icon: "fab fa-vuejs", color: "text-green-500" },
    { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500" },
    { name: "MySQL", icon: "fas fa-database", color: "text-blue-400" },
    { name: "Nuxt.js", icon: "fab fa-vuejs", color: "text-green-400" },
    { name: "TailwindCSS", icon: "fas fa-wind", color: "text-cyan-400" },
    { name: "jQuery", icon: "fab fa-js", color: "text-blue-400" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-500" },
    { name: "PHP", icon: "fab fa-php", color: "text-indigo-400" },
    { name: "Livewire", icon: "fas fa-bolt", color: "text-pink-400" },
    { name: "Inertia.js", icon: "fas fa-rocket", color: "text-purple-400" }
  ];

  const tools = [
    { name: "Github", icon: "fab fa-github", color: "text-slate-300" },
    { name: "Bitbucket", icon: "fab fa-bitbucket", color: "text-blue-600" },
    { name: "Figma", icon: "fab fa-figma", color: "text-pink-500" },
    { name: "Canva", icon: "fas fa-palette", color: "text-cyan-400" },
    { name: "Jira", icon: "fab fa-jira", color: "text-blue-500" },
    { name: "Zapier", icon: "fas fa-bolt", color: "text-orange-500" },
    { name: "Filament", icon: "fas fa-layer-group", color: "text-amber-500" },
    { name: "Omnisend", icon: "fas fa-envelope", color: "text-slate-400" },
    { name: "Klaviyo", icon: "fas fa-chart-line", color: "text-slate-200" },
    { name: "Nova", icon: "fas fa-gem", color: "text-emerald-400" },
    { name: "Stripe", icon: "fab fa-stripe", color: "text-purple-500" },
    { name: "PayPal", icon: "fab fa-paypal", color: "text-blue-600" },
    { name: "Notion", icon: "fas fa-sticky-note", color: "text-slate-300" },
    { name: "Docker", icon: "fab fa-docker", color: "text-blue-500" },
    { name: "ChatGPT", icon: "fas fa-robot", color: "text-green-400" }
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
                <div key={lang.name} className="flex flex-col items-center hover:scale-105 transition-transform">
                  <i className={`${lang.icon} text-4xl ${lang.color} mb-3`}></i>
                  <span className="text-sm text-slate-300 text-center w-full">{lang.name}</span>
                </div>
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
                <div key={tool.name} className="flex flex-col items-center hover:scale-105 transition-transform">
                  <i className={`${tool.icon} text-4xl ${tool.color} mb-3`}></i>
                  <span className="text-sm text-slate-300 text-center w-full">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
