import {Project} from "@/lib/types.ts";

export const projects: (Project & {
    longDescription: string;
    features: string[];
    challenges: string[];
    gallery: string[];
    role: string;
    year: number;
    duration?: string;
})[] = [
    {
        id: 1,
        year: 2023,
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
        year: 2024,
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
    },
    {
        id: 3,
        year: 2025,
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
    },
    {
        id: 4,
        year: 2021,
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
        year: 2022,
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
        year: 2020,
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
    },
    {
        id: 7,
        year: 2026,
        slug: "catsnip",
        title: "Catsnip — Screenshot & Annotate",
        description: "Privacy-first Chrome extension (Manifest V3) to capture any region — inside or outside the browser — then crop, annotate, OCR, copy, and save. Everything stays on your device.",
        longDescription: "Catsnip is a Manifest V3 Chrome extension for capturing and marking up anything on screen. It offers four capture modes — drag a region, the visible tab, a full scrollable page (scroll-and-stitch), or any display or app window via the OS picker, even with the browser hidden. The built-in editor lets you crop and annotate with arrows, shapes, freehand pen, highlighter, text, and blur/redact, with full undo/redo and editable elements, then frame snips on gradient backgrounds. Text recognition runs fully offline against a vendored Tesseract engine — either select-to-copy straight off the image (like macOS Live Text) or extract all text to a side panel. Snips can be copied, saved as PNG/JPEG, or exported together as a ZIP. Built privacy-first: no network, no analytics, no remote code — captured pixels never leave the device. Developed solo with AI-assisted (vibe coding) workflows using Claude Code.",
        image: "/images/cs-1.png",
        gallery: [
            "/images/cs-1.png",
            "/images/cs-2.png",
            "/images/cs-3.png",
            "/images/cs-4.png",
        ],
        technologies: ["JavaScript", "Chrome Extension", "Manifest V3", "Canvas API", "Tesseract.js", "OffscreenCanvas", "Claude Code"],
        features: [
            "Four capture modes (region, visible, full page, screen/window)",
            "Annotate: arrows, shapes, pen, highlighter, text, blur/redact",
            "Editable annotations with undo/redo",
            "Offline OCR (vendored Tesseract) with select-to-copy",
            "Background framing with gradient presets",
            "Copy, save PNG/JPEG, or export all as a ZIP",
            "Private by design — nothing leaves the device"
        ],
        challenges: [
            "Capturing a clean region shot without the selection UI in the result",
            "Scroll-and-stitch full-page capture under Chrome's rate limit",
            "Running Tesseract OCR fully offline from vendored local files",
            "Hosting desktop capture in a stable editor tab (popups lose focus)"
        ],
        role: "Solo Developer (AI-assisted with Claude Code)",
        duration: "2026",
        liveUrl: "https://chromewebstore.google.com/detail/catsnip/nifgllnmdmdcichojnikejecmgllmbkg",
        githubUrl: "https://github.com/artfred16/catsnip"
    },
    {
        id: 8,
        year: 2026,
        slug: "tabbyshot",
        title: "Tabbyshot — Multi-Viewport Screenshots",
        description: "Chrome extension (Manifest V3) that screenshots any page across multiple device viewports in one click, then exports them as separate images, a ZIP, or a single PDF.",
        longDescription: "Tabbyshot is a Manifest V3 Chrome extension that renders the active tab at multiple device sizes and screenshots each in one click. It ships common viewport presets (iPhone SE, iPhone 14 Pro, Pixel 7, iPad Mini/Pro, Laptop, Full HD, QHD), supports custom viewports, and persists your list via chrome.storage. It captures full-page or visible-area as PNG or JPEG, previews every shot as a thumbnail (rename, include/exclude), and exports as images, a ZIP, or a single PDF — one page per viewport, embedding JPEG when it is smaller. Two capture engines are chosen automatically per page: a high-fidelity hidden engine via chrome.debugger (CDP device emulation), and an iframe fallback in the results tab that re-injects the session cookie so logged-in pages render logged-in even when other extensions block the debugger. It also auto-hides cookie banners and floating bars for clean shots. Developed solo with AI-assisted (vibe coding) workflows using Claude Code.",
        image: "/images/tb-1.png",
        gallery: [
            "/images/tb-1.png",
            "/images/tb-2.png",
            "/images/tb-3.png",
            "/images/tb-4.png",
        ],
        technologies: ["JavaScript", "Chrome Extension", "Manifest V3", "Chrome DevTools Protocol", "pdf-lib", "JSZip", "Claude Code"],
        features: [
            "One-click capture across multiple device viewports",
            "Common presets plus custom viewports (persisted)",
            "Full-page or visible-area, PNG or JPEG",
            "Thumbnail preview with rename and include/exclude",
            "Export as images, a ZIP, or a single PDF",
            "Auto-hide cookie banners and floating bars",
            "Logged-in capture via session-cookie re-injection"
        ],
        challenges: [
            "Two capture engines with automatic per-page fallback",
            "Keeping pages logged-in when the debugger is blocked by other extensions",
            "Reliable per-viewport widths including real mobile emulation",
            "Packaging multi-page PDFs with per-image JPEG/PNG selection"
        ],
        role: "Solo Developer (AI-assisted with Claude Code)",
        duration: "2026",
        liveUrl: "https://chromewebstore.google.com/detail/tabbyshot/lgggidkebfkfikeegpajhplnenilkoda",
        githubUrl: "https://github.com/artfred16/tabbyshot-extension"
    },
    {
        id: 9,
        year: 2026,
        slug: "meowdo",
        title: "Meowdo — To-dos & Reminders",
        description: "Privacy-first Chrome extension (Manifest V3) for fast to-do lists: organize into lists, see what's left on the toolbar badge, and get optional reminders — all on your device.",
        longDescription: "Meowdo is a Manifest V3 Chrome extension that keeps your tasks one click away in the toolbar. Capture a task in a keystroke, group tasks into as many lists as you like (Work, Home, Shopping…) or view all at once, and see how many are left right on the toolbar badge. Complete tasks, filter by All / Active / Done, edit in place, and clear completed. Any task can carry an optional reminder — pick a preset (in 30 minutes, 1 hour, this evening, tomorrow) or an exact date/time — and when it's due Meowdo delivers three cues: a system notification (with Mark done / Snooze), a prominent on-screen alert window, and a built-in Web Audio chime that sounds the same on Windows, Linux, and macOS. Because alarms persist and wake the service worker, a reminder that falls due while Chrome is closed is delivered on next start. Built privacy-first: no account, no sync server, no analytics, no remote code — tasks live in chrome.storage.local on-device only. Developed solo with AI-assisted (vibe coding) workflows using Claude Code.",
        image: "/images/md-1.png",
        gallery: [
            "/images/md-1.png",
            "/images/md-2.png",
            "/images/md-3.png",
        ],
        technologies: ["JavaScript", "Chrome Extension", "Manifest V3", "chrome.storage", "chrome.alarms", "Web Audio API", "Claude Code"],
        features: [
            "Quick capture with a live toolbar badge count",
            "Multiple lists — switch or view all at once",
            "Complete, filter (All / Active / Done), clear completed",
            "Edit tasks in place",
            "Optional reminders — presets or an exact date/time",
            "System notification + on-screen alert + cross-platform chime",
            "Reminders fire even if Chrome was closed",
            "Private by design — nothing leaves the device"
        ],
        challenges: [
            "Reliable reminders via persistent chrome.alarms waking the service worker",
            "Playing a cross-platform chime from a worker through an offscreen document",
            "Keeping popup and worker in sync on one chrome.storage.local model",
            "On-screen alert window as a fallback when OS notifications are blocked"
        ],
        role: "Solo Developer (AI-assisted with Claude Code)",
        duration: "2026",
        liveUrl: "https://chromewebstore.google.com/detail/meowdo/bhoaeifoimadipicbhhlicognnfiecmh",
        githubUrl: "https://github.com/artfred16/meowdo"
    },
];