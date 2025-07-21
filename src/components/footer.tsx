export default function Footer() {
  return (
    <footer className="bg-ocean-dark border-t border-ocean-outline py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <i className="fas fa-code text-laravel-red text-xl"></i>
            <span className="font-mono font-bold text-xl">artfred.dev</span>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="mailto:artfred16delacruz@gmail.com"
              className="text-slate-400 hover:text-ocean-primary transition-colors"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/artfred-dela-cruz-983437177"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-ocean-primary transition-colors"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://github.com/artfred16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-ocean-primary transition-colors"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-ocean-outline text-center">
          <p className="text-slate-400">
            <span className="font-mono text-sm">© 2024 Artfred Dela Cruz. All rights reserved.</span>
          </p>
          <p className="text-slate-500 font-mono text-sm mt-2">
            Built with <span className="text-laravel-red">♥</span> using Laravel principles
          </p>
        </div>
      </div>
    </footer>
  );
}
