
import { ContactInfo } from "@/lib/types";

export default function Contact() {
  const contactInfo: ContactInfo = {
    email: "artfred16delacruz@gmail.com",
    phone: "+639154563216",
    linkedin: "https://www.linkedin.com/in/artfred-dela-cruz-983437177",
    github: "https://github.com/artfred16"
  };

  return (
    <section id="contact" className="py-20 px-6 bg-ocean-surface/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-slate-400 font-mono">// </span>
            <span className="text-slate-100">Get In Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-laravel-red/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-envelope text-laravel-red"></i>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-slate-400 hover:text-ocean-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-ocean-success/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-phone text-ocean-success"></i>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-slate-400 hover:text-ocean-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-ocean-primary/20 rounded-lg flex items-center justify-center">
                    <i className="fab fa-linkedin text-ocean-primary"></i>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-ocean-primary transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-ocean-secondary/20 rounded-lg flex items-center justify-center">
                    <i className="fab fa-github text-ocean-secondary"></i>
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-ocean-primary transition-colors"
                    >
                      View my repositories
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
              <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
              <p className="text-slate-300 mb-4">
                I'm always open to new opportunities and meaningful projects. Whether you're looking for a Laravel developer to join your team or want to explore a project idea, feel free to reach out — I'd love to connect.
              </p>
              <div className="flex space-x-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="btn-primary"
                >
                  Send Email
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p className="text-slate-300 mb-4">
              I'm a passionate Laravel developer with a strong background in building scalable and efficient web applications. I specialize in PHP, Laravel, Vue.js, and modern web technologies.
            </p>
            <p className="text-slate-300 mb-4">
              Currently open to new opportunities and exciting collaborations—feel free to reach out if you’d like to connect or discuss a potential project.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-laravel-red/20 text-laravel-red rounded-full text-sm">Laravel Expert</span>
              <span className="px-3 py-1 bg-ocean-success/20 text-ocean-success rounded-full text-sm">Vue.js Developer</span>
              <span className="px-3 py-1 bg-ocean-primary/20 text-ocean-primary rounded-full text-sm">Full Stack</span>
              <span className="px-3 py-1 bg-ocean-secondary/20 text-ocean-secondary rounded-full text-sm">PHP Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
