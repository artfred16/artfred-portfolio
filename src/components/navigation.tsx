import { useState, useEffect } from "react";
import { useHashLocation } from "wouter/use-hash-location";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [location, navigate] = useHashLocation();

  useEffect(() => {
    const sections = ["home", "experience", "projects", "contact"];
    // Only run scroll detection on home page
    if (location !== "/") {
      const section = location.split("/")[1];
      sections.includes(section) && setActiveSection(section);
      return;
    }
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (sectionId == "home" && location !== "/") {
      navigate('/');
      return;
    }

    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-ocean-dark/95 backdrop-blur-md border-b border-ocean-outline z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <i className="fas fa-code text-laravel-red text-xl"></i>
            </div>
            <button
              onClick={() => window.location.href = "/"}
              className="font-mono font-bold text-xl hover:text-ocean-primary transition-colors"
            >
              artfred.dev
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`nav-link transition-colors ${
                  activeSection === link.id
                    ? "text-ocean-primary"
                    : "text-slate-300 hover:text-ocean-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-ocean-primary"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-ocean-outline">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left transition-colors ${
                    activeSection === link.id
                      ? "text-ocean-primary"
                      : "text-slate-300 hover:text-ocean-primary"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
