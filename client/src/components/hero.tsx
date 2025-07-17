export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="font-mono text-sm text-code-blue">
                <span className="text-slate-400">const</span>{" "}
                <span className="text-code-yellow">developer</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-code-green">{"{"}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-slate-100">Artfred</span>
                <br />
                <span className="text-laravel-red">Dela Cruz</span>
              </h1>
              <div className="font-mono text-sm text-slate-400 ml-6">
                <div>
                  name: <span className="text-code-green">"Artfred Dela Cruz"</span>,
                </div>
                <div>
                  role: <span className="text-code-green">"Laravel Developer"</span>,
                </div>
                <div>
                  passion: <span className="text-code-green">"Building Web Solutions"</span>
                </div>
              </div>
              <div className="font-mono text-sm text-code-green">{"}"}</div>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Passionate Laravel developer specializing in building robust web applications
              with modern PHP frameworks and cutting-edge technologies. I create scalable,
              maintainable solutions that drive business growth.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </div>
            
            <div className="flex space-x-6 pt-4">
              <a
                href="mailto:artfred16delacruz@gmail.com"
                className="text-slate-400 hover:text-code-blue transition-colors"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/artfred-dela-cruz-983437177"
                className="text-slate-400 hover:text-code-blue transition-colors"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="https://github.com/artfred16"
                className="text-slate-400 hover:text-code-blue transition-colors"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Code Animation */}
          <div className="bg-editor-gray rounded-lg p-6 border border-editor-lighter">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-slate-400 text-sm ml-4">artfred.php</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div>
                <span className="text-code-purple">&lt;?php</span>
              </div>
              <div className="ml-4">
                <span className="text-code-purple">namespace</span>{" "}
                <span className="text-code-yellow">App\Developer</span>
                <span className="text-slate-400">;</span>
              </div>
              <div className="ml-4">
                <span className="text-code-purple">class</span>{" "}
                <span className="text-code-blue">ArtfredDelaCruz</span>
              </div>
              <div className="ml-4 text-slate-400">{"{"}</div>
              <div className="ml-8">
                <span className="text-code-purple">public function</span>{" "}
                <span className="text-code-yellow">getSkills</span>
                <span className="text-slate-400">(): </span>
                <span className="text-code-blue">array</span>
              </div>
              <div className="ml-8 text-slate-400">{"{"}</div>
              <div className="ml-12">
                <span className="text-code-purple">return</span>{" "}
                <span className="text-slate-400">[</span>
              </div>
              <div className="ml-16">
                <span className="text-code-green">'PHP'</span>
                <span className="text-slate-400">,</span>{" "}
                <span className="text-code-green">'Laravel'</span>
                <span className="text-slate-400">,</span>
              </div>
              <div className="ml-16">
                <span className="text-code-green">'Vue.js'</span>
                <span className="text-slate-400">,</span>{" "}
                <span className="text-code-green">'MySQL'</span>
              </div>
              <div className="ml-12 text-slate-400">];</div>
              <div className="ml-8 text-slate-400">{"}"}</div>
              <div className="ml-4 text-slate-400">{"}"}</div>
              <div>
                <span className="text-code-purple">?&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
