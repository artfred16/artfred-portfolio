import { useLocation } from "wouter";
import { Project } from "@/lib/types";
import { useState } from "react";

interface ProjectPreviewProps {
  projectId: string;
}

export default function ProjectPreview() {
  const [location] = useLocation();
  const projectId = location.split('/').pop();
  
  // Extended project data with more details
  const projects: (Project & { 
    longDescription: string; 
    features: string[]; 
    challenges: string[];
    gallery: string[];
    role: string;
    duration: string;
  })[] = [
    {
      id: 1,
      title: "SimplyEarth E-Commerce Platform",
      description: "Full-featured e-commerce platform with subscription management, inventory tracking, and comprehensive analytics dashboard.",
      longDescription: "SimplyEarth is a comprehensive e-commerce platform specializing in essential oils and wellness products. The platform features a sophisticated subscription management system that handles recurring orders, inventory tracking with real-time updates, and a comprehensive analytics dashboard for business intelligence. The system processes thousands of orders monthly and integrates with multiple payment gateways, shipping providers, and marketing automation tools. Built with Laravel for robust backend functionality and Vue.js for dynamic frontend interactions, the platform delivers exceptional performance and user experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ],
      technologies: ["Laravel", "Vue.js", "PostgreSQL", "Stripe", "Analytics", "Livewire"],
      features: [
        "Subscription Management System",
        "Real-time Inventory Tracking",
        "Advanced Analytics Dashboard",
        "Multi-payment Gateway Integration",
        "Automated Marketing Tools",
        "Customer Portal",
        "Order Management System",
        "Shipping Integration"
      ],
      challenges: [
        "Handling high-volume subscription processing",
        "Real-time inventory synchronization",
        "Complex pricing rules and discounts",
        "Integration with multiple third-party services"
      ],
      role: "Full Stack Developer",
      duration: "May 2023 - Present",
      liveUrl: "https://simplyearth.com"
    },
    {
      id: 2,
      title: "Solgen Power Mobile Application",
      description: "Cross-platform mobile application for solar power management with real-time monitoring and energy analytics.",
      longDescription: "Solgen Power mobile application is a comprehensive solution for solar energy management, providing users with real-time monitoring of their solar installations, detailed energy analytics, and a customer portal for account management. The application features interactive dashboards showing energy production, consumption patterns, and cost savings. Built using Vue.js and Ionic framework for cross-platform compatibility, the app delivers native-like performance on both iOS and Android devices. The backend Laravel API handles complex calculations for energy metrics and integrates with various solar monitoring hardware.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      gallery: [
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ],
      technologies: ["Laravel", "Vue.js", "Ionic", "MySQL", "PHP"],
      features: [
        "Real-time Solar Monitoring",
        "Energy Production Analytics",
        "Cost Savings Calculator",
        "Customer Account Portal",
        "Push Notifications",
        "Offline Data Sync",
        "Interactive Charts",
        "Hardware Integration"
      ],
      challenges: [
        "Cross-platform mobile optimization",
        "Real-time data synchronization",
        "Complex energy calculations",
        "Hardware integration compatibility"
      ],
      role: "Full Stack Developer Contractor",
      duration: "October 2022 - April 2023",
      githubUrl: "https://github.com/artfred16"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare application for clinical specialists with patient management and GraphQL API integration.",
      longDescription: "A sophisticated healthcare management system designed specifically for clinical specialists to streamline patient care and administrative tasks. The system features comprehensive patient management, appointment scheduling, medical records management, and billing integration. Built with Angular for a responsive frontend and GraphQL for efficient API communication, the application ensures HIPAA compliance and data security. The system integrates with various medical devices and laboratory systems, providing clinicians with a unified view of patient data and enabling better decision-making through advanced analytics and reporting.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      gallery: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ],
      technologies: ["Angular", "GraphQL", "JavaScript", "Healthcare", "API Integration"],
      features: [
        "Patient Management System",
        "Appointment Scheduling",
        "Medical Records Management",
        "HIPAA Compliant Security",
        "Laboratory Integration",
        "Billing System Integration",
        "Advanced Reporting",
        "Mobile Responsive Design"
      ],
      challenges: [
        "HIPAA compliance implementation",
        "Complex medical workflow management",
        "Integration with legacy systems",
        "Real-time data synchronization"
      ],
      role: "Front End Developer",
      duration: "February 2020 - October 2022",
      githubUrl: "https://github.com/artfred16"
    },
    {
      id: 4,
      title: "Payment Gateway Integration System",
      description: "Robust payment processing system with multi-gateway support and comprehensive transaction management.",
      longDescription: "A comprehensive payment processing system designed for trading operations, featuring multi-gateway support, bill payments, e-loading services, and advanced transaction management. The system handles various payment methods including credit cards, bank transfers, digital wallets, and cryptocurrency payments. Built with Laravel and PHP, the platform ensures PCI DSS compliance and implements advanced fraud detection mechanisms. The system processes thousands of transactions daily and provides real-time reporting, reconciliation tools, and automated settlement processes for business operations.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      gallery: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ],
      technologies: ["Laravel", "PHP", "RESTful APIs", "Payment Gateways", "MySQL"],
      features: [
        "Multi-Gateway Payment Processing",
        "Bill Payment Services",
        "E-loading Integration",
        "Fraud Detection System",
        "Real-time Transaction Monitoring",
        "Automated Reconciliation",
        "PCI DSS Compliance",
        "Advanced Reporting Dashboard"
      ],
      challenges: [
        "PCI DSS compliance implementation",
        "Multi-gateway integration complexity",
        "Real-time fraud detection",
        "High-volume transaction processing"
      ],
      role: "Full Stack Developer",
      duration: "February 2017 - February 2020",
      githubUrl: "https://github.com/artfred16"
    },
    {
      id: 5,
      title: "API Library Development Platform",
      description: "Production-grade API libraries built with Java and Groovy framework with comprehensive documentation.",
      longDescription: "A sophisticated API library development platform built with Java and Groovy framework, designed to create production-grade API libraries with comprehensive documentation, testing suites, and seamless integration capabilities. The platform features automated code generation, extensive testing frameworks, and interactive documentation systems. The libraries support various integration patterns including REST, GraphQL, and WebSocket connections. The platform includes continuous integration pipelines, automated testing, and deployment processes that ensure high-quality, reliable API libraries for enterprise use.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ],
      technologies: ["Java", "Groovy", "API Development", "Libraries", "Documentation"],
      features: [
        "Automated Code Generation",
        "Comprehensive Testing Suites",
        "Interactive Documentation",
        "Multiple Integration Patterns",
        "Continuous Integration Pipeline",
        "Version Management System",
        "Performance Monitoring",
        "Enterprise-grade Security"
      ],
      challenges: [
        "Complex library architecture design",
        "Automated testing implementation",
        "Documentation generation automation",
        "Version compatibility management"
      ],
      role: "Associate Software Engineer",
      duration: "May 2015 - October 2015",
      githubUrl: "https://github.com/artfred16"
    },
    {
      id: 6,
      title: "Laravel Filament Admin Dashboard",
      description: "Modern admin dashboard built with Laravel Filament featuring role-based permissions and advanced reporting.",
      longDescription: "A comprehensive admin dashboard built with Laravel Filament, featuring advanced role-based permissions, sophisticated filtering capabilities, bulk operations, and comprehensive reporting systems. The dashboard provides administrators with powerful tools for managing users, content, and system configurations. Built with modern Laravel practices and Filament's component-based architecture, the system offers exceptional performance and user experience. The dashboard includes advanced features like real-time notifications, audit logging, data export capabilities, and customizable widgets for different user roles.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ],
      technologies: ["Laravel", "Filament", "MySQL", "TailwindCSS", "PHP"],
      features: [
        "Role-based Permission System",
        "Advanced Data Filtering",
        "Bulk Operations Support",
        "Comprehensive Reporting",
        "Real-time Notifications",
        "Audit Logging System",
        "Data Export Capabilities",
        "Customizable Widgets"
      ],
      challenges: [
        "Complex permission system design",
        "Performance optimization for large datasets",
        "Custom component development",
        "Advanced filtering implementation"
      ],
      role: "Full Stack Developer",
      duration: "Recent Project",
      githubUrl: "https://github.com/artfred16"
    }
  ];

  const project = projects.find(p => p.id === parseInt(projectId || '1'));
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <a href="/projects" className="btn-primary">Back to Projects</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ocean-dark text-slate-100 pt-20">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-ocean-primary transition-colors">Home</a>
            <span>/</span>
            <a href="/#projects" className="hover:text-ocean-primary transition-colors">Projects</a>
            <span>/</span>
            <span className="text-slate-300">{project.title}</span>
          </nav>
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-slate-400 text-lg">{project.description}</p>
            </div>
            <div className="flex space-x-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <i className="fab fa-github mr-2"></i>
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
              <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
              
              {/* Main Image */}
              <div className="mb-4">
                <img
                  src={project.gallery[selectedImage]}
                  alt={`${project.title} - Image ${selectedImage + 1}`}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg transition-all ${
                      selectedImage === index 
                        ? 'ring-2 ring-ocean-primary' 
                        : 'hover:opacity-80'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Thumbnail ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Long Description */}
            <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-slate-300 leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Features */}
            <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-ocean-primary rounded-full flex-shrink-0"></div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
              <h2 className="text-2xl font-semibold mb-4">Technical Challenges</h2>
              <div className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ocean-warning rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-slate-300">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-slate-400 text-sm">Role</span>
                  <p className="text-slate-100 font-medium">{project.role}</p>
                </div>
                <div>
                  <span className="text-slate-400 text-sm">Duration</span>
                  <p className="text-slate-100 font-medium">{project.duration}</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
              <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm ${
                      tech === 'Laravel' ? 'bg-laravel-red/20 text-laravel-red' :
                      tech === 'Vue.js' ? 'bg-ocean-success/20 text-ocean-success' :
                      tech === 'MySQL' || tech === 'PostgreSQL' ? 'bg-ocean-primary/20 text-ocean-primary' :
                      tech === 'PHP' ? 'bg-ocean-secondary/20 text-ocean-secondary' :
                      tech === 'JavaScript' ? 'bg-ocean-warning/20 text-ocean-warning' :
                      tech === 'Stripe' ? 'bg-purple-500/20 text-purple-400' :
                      tech === 'Ionic' ? 'bg-cyan-500/20 text-cyan-400' :
                      tech === 'Angular' ? 'bg-red-500/20 text-red-400' :
                      tech === 'GraphQL' ? 'bg-pink-500/20 text-pink-400' :
                      tech === 'Java' ? 'bg-orange-500/20 text-orange-400' :
                      tech === 'Groovy' ? 'bg-indigo-500/20 text-indigo-400' :
                      tech === 'Filament' ? 'bg-amber-500/20 text-amber-400' :
                      tech === 'TailwindCSS' ? 'bg-teal-500/20 text-teal-400' :
                      'bg-ocean-primary/20 text-ocean-primary'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="bg-ocean-surface rounded-lg p-6 border border-ocean-outline">
              <h3 className="text-xl font-semibold mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-ocean-primary hover:text-ocean-primary/80 transition-colors"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    <span>View Live Project</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-ocean-secondary hover:text-ocean-secondary/80 transition-colors"
                  >
                    <i className="fab fa-github"></i>
                    <span>View Source Code</span>
                  </a>
                )}
                <a
                  href="/#contact"
                  className="flex items-center space-x-3 text-ocean-success hover:text-ocean-success/80 transition-colors"
                >
                  <i className="fas fa-envelope"></i>
                  <span>Discuss This Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Projects */}
        <div className="mt-12 text-center">
          <a href="/#projects" className="btn-secondary">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to All Projects
          </a>
        </div>
      </div>
    </div>
  );
}