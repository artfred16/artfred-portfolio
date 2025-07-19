import {Project} from "@/lib/types.ts";

export const projects: (Project & {
    longDescription: string;
    features: string[];
    challenges: string[];
    gallery: string[];
    role: string;
    duration?: string;
})[] = [
    {
        id: 1,
        slug: "simply-earth-store",
        title: "Simply Earth Store",
        description: "Full-featured e-commerce platform with subscription management, inventory tracking, and comprehensive analytics dashboard.",
        longDescription: "SimplyEarth is a comprehensive e-commerce platform specializing in essential oils and wellness products. The platform features a sophisticated subscription management system that handles recurring orders, inventory tracking with real-time updates, and a comprehensive analytics dashboard for business intelligence. The system processes thousands of orders monthly and integrates with multiple payment gateways, shipping providers, and marketing automation tools. Built with Laravel for robust backend functionality and Vue.js for dynamic frontend interactions, the platform delivers exceptional performance and user experience.",
        image: "/images/se-preview.png",
        gallery: [
            "/images/se-admin.png",
            "/images/se-preview.png",
            "/images/se-category.png",
            "/images/se-profile.png",
        ],
        technologies: ["Laravel", "Vue.js", "MySQL", "PHP", "ES6", "Tailwind"],
        features: [
            "Subscription Management System",
            "Advanced Analytics Dashboard",
            "Multi-payment Gateway Integration",
            "Automated Marketing Tools",
            "Customer Portal",
            "Order Management System",
            "Shipping Integration"
        ],
        challenges: [
            "Handling high-volume subscription processing",
            "Inventory synchronization",
            "Complex pricing rules and discounts",
            "Integration with multiple third-party services"
        ],
        role: "Full Stack Developer",
        duration: "May 2023 - Present",
        liveUrl: "https://simplyearth.com"
    },
    {
        id: 2,
        slug: "nature-packaged-erp",
        title: "Nature Packaged ERP",
        description: "ERP system for managing inventory, product building with BOM, and external stock syncing.",
        longDescription: "Nature Packaged ERP is a Laravel and Filament-based enterprise system designed to streamline inventory and production processes for natural product businesses. It enables efficient tracking of inventory, supports product assembly using Bills of Materials (BOM), and ensures stock levels stay accurate through seamless syncing with external platforms. The system is built for flexibility, scalability, and smooth backend operations.",
        image: "/images/np-login.png",
        gallery: [
            "/images/np-login.png",
            "/images/np-products.png",
            "/images/np-form.png",
            "/images/np-mobile.png"
        ],
        technologies: ["Laravel", "Filament", "PosgreSQL", "PHP", "MSSQL"],
        features: [
            "Inventory Management",
            "Bill of Materials (BOM)",
            "Product Assembly",
            "External Stock Syncing",
            "Real-Time Inventory Updates",
            "Modular Product Tracking"
        ],
        challenges: [
            "Real-time stock synchronization with external platforms",
            "Dynamic BOM handling during production",
            "Scalable inventory structure for natural products"
        ],
        role: "Full Stack Developer",
        liveUrl: "https://erp.bealionchaser.com"
    },
    {
        id: 3,
        slug: "small-town-ev-admin",
        title: "Small Town EV Admin",
        description: "Admin dashboard for managing EV products, inventory, reservations, warranties, and supplier items.",
        longDescription: "The Small Town EV Admin Page is a backend management system built with Laravel, Filament, and Livewire. It provides administrators with powerful tools to manage electric vehicle products and inventory, reserve carts for customers, process warranties, and handle supplier-based products efficiently. Designed to support a growing EV business, the platform streamlines operations with a clean and user-friendly interface. PostgreSQL is used for robust data handling, ensuring high performance and reliability.",
        image: "/images/ev-login.png",
        gallery: [
            "/images/ev-login.png",
            "/images/ev-manage.png",
            "/images/ev-reserve.png",
            "/images/ev-warranty.png",
        ],
        technologies: ["Laravel", "Filament", "Livewire", "PostgreSQL", "PHP"],
        features: [
            "Product and Inventory Management",
            "Cart Reservation for Customers",
            "Warranty Handling",
            "Supplier Product Management",
            "Real-time Data Interaction with Livewire",
            "Admin-friendly Dashboard"
        ],
        challenges: [
            "Managing real-time cart reservations",
            "Integrating supplier product structures",
            "Optimizing dashboard UX for admin users"
        ],
        role: "Full Stack Developer",
        liveUrl: "https://smalltownev.com"
    },
    {
        id: 7,
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