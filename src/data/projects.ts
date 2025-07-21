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
        description: "Full-featured e-commerce platform with subscription management, inventory tracking, and comprehensive analytics dashboard. Built with Laravel backend and Vue.js frontend for optimal performance.",
        longDescription: "SimplyEarth is a comprehensive e-commerce platform specializing in essential oils and wellness products. The platform features a sophisticated subscription management system that handles recurring orders, inventory tracking with real-time updates, and a comprehensive analytics dashboard for business intelligence. The system processes thousands of orders monthly and integrates with multiple payment gateways, shipping providers, and marketing automation tools. Built with Laravel for robust backend functionality and Vue.js for dynamic frontend interactions, the platform delivers exceptional performance and user experience.",
        image: "/images/se-preview.png",
        gallery: [
            "/images/se-admin.png",
            "/images/se-preview.png",
            "/images/se-category.png",
            "/images/se-profile.png",
        ],
        technologies: ["Laravel", "Vue.js", "MySQL", "PHP", "ES6", "Tailwind", "Inertia.js"],
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
        title: "Nature Packaged ERP (Simply Earth)",
        description: "Nature Packaged ERP is a Laravel and Filament-based system for managing inventory, building products with BOM, and syncing stock with external platforms—built for efficient, scalable operations.",
        longDescription: "Nature Packaged ERP is a Laravel and Filament-based enterprise system designed to streamline inventory and production processes for natural product businesses. It enables efficient tracking of inventory, supports product assembly using Bills of Materials (BOM), and ensures stock levels stay accurate through seamless syncing with external platforms. The system is built for flexibility, scalability, and smooth backend operations.",
        image: "/images/np-login.png",
        gallery: [
            "/images/np-login.png",
            "/images/np-products.png",
            "/images/np-form.png",
            "/images/np-mobile.png"
        ],
        technologies: ["Laravel", "Filament", "PosgreSQL", "PHP", "MSSQL", "Livewire"],
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
        description: "Admin dashboard for managing EV products, inventory, customer reservations, warranty processing, and supplier-managed items. Built to streamline backend operations and support efficient electric vehicle retail and logistics workflows.",
        longDescription: "The Small Town EV Admin Page is a backend management system built with Laravel, Filament, and Livewire. It provides administrators with powerful tools to manage electric vehicle products and inventory, reserve carts for customers, process warranties, and handle supplier-based products efficiently. Designed to support a growing EV business, the platform streamlines operations with a clean and user-friendly interface. PostgreSQL is used for robust data handling, ensuring high performance and reliability.",
        image: "/images/ev-manage.png",
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
        id: 4,
        title: "Natural Creator School",
        slug: "natural-creator-school",
        description: "Educational platform for essential oil creators, built with WordPress and Divi for a user-friendly learning experience.",
        longDescription: "Natural Creator School is an educational website built using WordPress and the Divi theme by Elegant Themes. It serves as an online learning platform tailored for essential oil enthusiasts and influencers. The site features a clean, responsive design, custom landing pages, course content structure, and intuitive navigation to enhance the learning experience. It supports blog posts, video embeds, and sign-up flows to onboard new creators into the Simply Earth ecosystem.",
        image: "/images/nc-home.png",
        gallery: [
            "/images/nc-home.png",
            "/images/nc-course.png",
            "/images/nc-form.png",
            "/images/nc-team.png"
        ],
        technologies: ["WordPress", "Divi", "PHP", "HTML", "CSS"],
        features: [
            "Custom Page Design using Divi Builder",
            "Responsive Layout",
            "Online Learning Structure",
            "Blog and Video Integration",
            "Lead Capture and Onboarding Flow",
            "SEO-Friendly Architecture"
        ],
        challenges: [
            "Designing a learning platform within WordPress constraints",
            "Customizing Divi components for brand alignment",
            "Ensuring mobile responsiveness and performance"
        ],
        role: "Web Designer & Developer",
        liveUrl: "https://simplyearthcreatorschool.com/"
    },
    {
        id: 5,
        slug: "beacon-mobile-app",
        title: "Beacon Mobile App",
        description: "Mobile marketing app for Solgen with rankings, team stats, video training, and real-time updates.",
        longDescription: "Beacon is a cross-platform mobile application built for Solgen’s marketing team to track performance, access training materials, and stay engaged. Developed using Vue.js, Ionic, and Capacitor for the frontend and powered by a Laravel backend, the app delivers a native-like experience on both iOS and Android. Users can view their current rankings, monitor team performance, and access structured video courses. The app also features a built-in calendar for events, real-time notifications, and a leaderboard to encourage motivation and team engagement. Designed to enhance productivity and training among Solgen’s sales force, Beacon brings together learning, metrics, and communication in one seamless platform.",
        image: "/images/sg-home.png",
        gallery: [
            "/images/sg-home.png",
            "/images/sg-stats.png",
            "/images/sg-news.png",
            "/images/sg-course.png"
        ],
        technologies: ["Vue.js", "Ionic", "Capacitor", "Laravel", "PHP"],
        features: [
            "Personal and Team Ranking Stats",
            "Video Training Courses",
            "Event Calendar",
            "Push Notifications",
            "Team Leaderboards",
            "Cross-Platform Mobile Support"
        ],
        challenges: [
            "Integrating real-time stats from the Laravel backend connected to Salesforce",
            "Building training and category modules with search functionality",
            "Handling API interface changes to maintain backward compatibility",
            "Ensuring smooth performance across devices"
        ],
        role: "Full Stack Developer",
    },
    {
        id: 6,
        slug: "treat-anyone-app",
        title: "TreatAnyone App",
        description: "Web application for mental health professionals to manage consultations, scheduling, referrals, and reports.",
        longDescription: "TreatAnyone is a feature-rich web application designed for mental health practitioners to manage every aspect of their practice in one place. Built using Angular, TypeScript, GraphQL, and Bootstrap, the platform offers a modern and responsive interface that simplifies day-to-day operations for clinics and solo practitioners. Key features include consultation tracking, appointment scheduling, staff and referral management, and the ability to generate detailed clinical reports. The system also allows seamless internal collaboration and improves patient care workflows by integrating essential administrative and clinical tools. The use of GraphQL ensures efficient data fetching and updates, while Angular and Bootstrap provide a dynamic and mobile-friendly user experience.",
        image: "/images/ta-login.png",
        gallery: [
            "/images/ta-login.png",
            "/images/ta-tasks.png",
            "/images/ta-calendar.png",
            "/images/ta-form.png",
        ],
        technologies: ["Angular", "TypeScript", "GraphQL", "Bootstrap"],
        features: [
            "Consultation Management",
            "Appointment Scheduling",
            "Staff and Referral Management",
            "Clinical Report Generation",
            "Responsive UI for Desktop and Mobile",
            "GraphQL Data Integration"
        ],
        challenges: [
            "Converting static templates to Angular components efficiently",
            "Creating reusable polymorphic components for complex UI logic",
            "Building a flexible and dynamic custom report builder"
        ],
        role: "Frontend Developer",
        liveUrl: "https://uat.treatanyone.com"
    },
];