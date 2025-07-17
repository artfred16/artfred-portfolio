import ContactForm from "@/components/contact-form";
import { ContactInfo } from "@/lib/types";

export default function Contact() {
  const contactInfo: ContactInfo = {
    email: "artfred16delacruz@gmail.com",
    phone: "+639154563216",
    linkedin: "https://www.linkedin.com/in/artfred-dela-cruz-983437177",
    github: "https://github.com/artfred16"
  };

  return (
    <section id="contact" className="py-20 px-6 bg-editor-gray/30">
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
            <div className="bg-editor-gray rounded-lg p-6 border border-editor-lighter">
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
                      className="text-slate-400 hover:text-code-blue transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-code-green/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-phone text-code-green"></i>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-slate-400 hover:text-code-blue transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-code-blue/20 rounded-lg flex items-center justify-center">
                    <i className="fab fa-linkedin text-code-blue"></i>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-code-blue transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-code-purple/20 rounded-lg flex items-center justify-center">
                    <i className="fab fa-github text-code-purple"></i>
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-code-blue transition-colors"
                    >
                      View my repositories
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-editor-gray rounded-lg p-6 border border-editor-lighter">
              <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
              <p className="text-slate-300 mb-4">
                I'm always interested in new opportunities and exciting projects.
                Whether you need a Laravel developer for your team or want to discuss
                a project idea, I'd love to hear from you.
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
          
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
