import { languages, tools } from "@/data/tech-stack.ts";

export default function Skills() {

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
                  {lang.imageIcon ? (
                    <img 
                      src={lang.imageIcon} 
                      alt={lang.name}
                      className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <i className={`${lang.icon} text-4xl ${lang.color} mb-3 group-hover:scale-110 transition-transform`}></i>
                  )}
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
                  {tool.imageIcon ? (
                    <img 
                      src={tool.imageIcon} 
                      alt={tool.name}
                      className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <i className={`${tool.icon} text-4xl ${tool.color} mb-3 group-hover:scale-110 transition-transform`}></i>
                  )}
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
