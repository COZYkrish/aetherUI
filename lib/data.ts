// ============================================================
// aetherUI — Cinematic Edition  (sourced from resume)
// ============================================================

export const personalInfo = {
  name: "Krish Sharma",
  handle: "COZYkrish",
  email: "cozykrish2916@gmail.com",
  phone: "+91-6372658336",
  location: "Bhubaneswar, Odisha, India",
  university: "Centurion University of Technology and Management",
  degree: "BCA — Computer Programming",
  degreeYears: "Aug 2024 – Aug 2027",
  taglines: [
    "Full Stack Developer",
    "Cloud Engineer",
    "AI Builder",
    "ML Practitioner",
    "Problem Solver",
  ],
  bio: "BCA student at Centurion University building production-grade applications across full-stack web, cloud infrastructure, and machine learning. I design systems that scale — from REST APIs to ML pipelines.",
  github: "https://github.com/COZYkrish",
  linkedin: "https://www.linkedin.com/in/krish-sharma-710927380/",
  instagram: "https://www.instagram.com/wtf.kid_ish/",
  resume: "/resume/Krish_Sharma_Resume.pdf",
};

// ============================================================
// SKILL CATEGORIES
// ============================================================
export const skillCategories = [
  {
    id: "languages", label: "Languages", color: "#7C3AED",
    skills: [
      { name: "JavaScript", level: 88 }, { name: "Python", level: 85 },
      { name: "Java", level: 75 }, { name: "C++", level: 65 }, { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    id: "frontend", label: "Frontend", color: "#3B82F6",
    skills: [
      { name: "React.js", level: 88 }, { name: "Tailwind CSS", level: 90 },
      { name: "Vite", level: 82 }, { name: "React Router", level: 85 },
      { name: "Three.js", level: 70 }, { name: "Axios", level: 85 },
    ],
  },
  {
    id: "backend", label: "Backend", color: "#06B6D4",
    skills: [
      { name: "Node.js", level: 84 }, { name: "Express.js", level: 82 },
      { name: "Flask (Python)", level: 80 }, { name: "Spring Boot", level: 72 },
      { name: "REST APIs", level: 88 }, { name: "JWT / Auth", level: 82 },
    ],
  },
  {
    id: "databases", label: "Databases", color: "#10B981",
    skills: [
      { name: "MySQL", level: 82 }, { name: "MongoDB", level: 80 },
      { name: "SQLite", level: 78 }, { name: "H2 Database", level: 70 },
      { name: "DBMS Fundamentals", level: 80 },
    ],
  },
  {
    id: "cloud", label: "Cloud & DevOps", color: "#F59E0B",
    skills: [
      { name: "AWS Basics", level: 70 }, { name: "Azure Basics", level: 65 },
      { name: "GCP Basics", level: 60 }, { name: "Linux", level: 72 },
      { name: "Virtualization", level: 68 }, { name: "Git / GitHub", level: 90 },
    ],
  },
  {
    id: "ml", label: "Data & ML", color: "#EF4444",
    skills: [
      { name: "Scikit-learn", level: 75 }, { name: "Data Analysis", level: 78 },
      { name: "Data Visualization", level: 80 }, { name: "ML Model Building", level: 72 },
      { name: "Pandas / NumPy", level: 76 },
    ],
  },
];

export const techStack = [
  "React.js", "Node.js", "Python", "JavaScript", "Java",
  "Flask", "Spring Boot", "MongoDB", "MySQL", "Express.js",
  "Tailwind CSS", "Three.js", "Scikit-learn", "Vite",
  "Git", "Linux", "AWS", "JWT", "Axios", "C++",
];

// ============================================================
// PROJECTS  (with cinematic extra fields)
// ============================================================
export interface Project {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  challenges: string;
  techStack: string[];
  category: string;        // single string for filter tabs
  status: "live" | "in-progress" | "completed";
  github?: string;
  demo?: string;
  image: string;
  accent: string;
  year: string;
  featured: boolean;
  icon: string;
  metrics?: { value: string; label: string }[];
}

export const projects: Project[] = [
  {
    id: "float-ai",
    title: "Float AI",
    tagline: "Voice-controlled desktop AI assistant",
    shortDescription: "Python desktop assistant built around hands-free command execution, contextual voice control, and a floating AI interaction layer.",
    description: "Float AI is a desktop-first assistant that listens, understands, and acts as a voice layer over everyday computer workflows.",
    problem: "Desktop workflows still require constant context switching between keyboard, mouse, search, and app navigation.",
    solution: "Built a Python assistant experience focused on voice commands, lightweight automation, and a floating interaction model for faster hands-free control.",
    architecture: "Python desktop runtime -> speech recognition -> intent handling -> command execution -> floating UI feedback.",
    features: [
      "Voice-first desktop command flow",
      "Hands-free app and workflow control",
      "Floating assistant interaction model",
      "Python automation foundation",
      "Designed for quick command feedback",
    ],
    challenges: "Balancing natural language input with predictable desktop actions required clear intent boundaries and command feedback.",
    techStack: ["Python", "Voice AI", "Desktop Automation", "Speech Recognition", "Assistant UX"],
    category: "AI",
    status: "completed",
    github: "https://github.com/COZYkrish/FLOAT-AI_The-voice-of-your-desktop.",
    image: "/project-photos/float-ai.png",
    accent: "#06B6D4",
    year: "2026",
    featured: true,
    icon: "AI",
    metrics: [{ value: "AI", label: "Assistant" }, { value: "Voice", label: "Control" }],
  },
  {
    id: "smart-complaint-system",
    title: "Smart Complaint System",
    tagline: "Real-time complaint SaaS platform",
    shortDescription: "Production-grade complaint management platform with real-time updates, analytics, and enterprise-style security patterns.",
    description: "Smart Complaint System is a modern service platform for receiving, tracking, analysing, and resolving complaints through a scalable SaaS-style workflow.",
    problem: "Traditional complaint channels are slow, opaque, and difficult to analyse across categories, priorities, and resolution stages.",
    solution: "Built a premium complaint workflow with tracking, analytics, real-time status updates, and an interface shaped around accountability.",
    architecture: "Modern JavaScript frontend -> API layer -> secure complaint lifecycle -> analytics and realtime status views.",
    features: [
      "Complaint intake and lifecycle tracking",
      "Real-time status updates",
      "Advanced analytics dashboard",
      "Enterprise-style security posture",
      "Scalable SaaS-style interface",
    ],
    challenges: "Designing the complaint lifecycle so users see clarity while admins retain enough control for triage and resolution.",
    techStack: ["JavaScript", "React", "API", "Analytics", "Realtime UX", "Security"],
    category: "SaaS",
    status: "completed",
    github: "https://github.com/COZYkrish/Smart-Complaint-Service-Platform",
    demo: "https://smart-complaint-service-platform.vercel.app",
    image: "/project-photos/smart-complaint.png",
    accent: "#F59E0B",
    year: "2026",
    featured: true,
    icon: "CMS",
    metrics: [{ value: "SaaS", label: "Workflow" }, { value: "Live", label: "Updates" }],
  },
  {
    id: "fitness-analyzer",
    title: "Fitness Analyzer",
    tagline: "Flask + ML fitness intelligence app",
    shortDescription: "ML-powered fitness platform with Scikit-learn predictions, health dashboards, and an animated cinematic UI.",
    description: "A Flask-based fitness intelligence application combining machine learning predictions, health tracking tools, and analytics with a cinematic, animated frontend experience.",
    problem: "Generic fitness apps track steps and calories but can't predict injury risk or recommend personalised workout loads.",
    solution: "Built an ML-powered fitness engine using Scikit-learn to analyse user data and generate personalised health recommendations.",
    architecture: "Flask → Scikit-learn ML models → Pandas → Jinja2 → Chart.js → Cloud deploy.",
    features: [
      "ML-powered personalised health & workout recommendations",
      "Interactive dashboards for health metrics (BMI, VO2, HR)",
      "Fitness goal tracking with progress visualisation",
      "Animated cinematic frontend UI",
      "User authentication and profile management",
    ],
    challenges: "Handling noisy self-reported fitness data — implemented outlier detection and normalisation pipelines.",
    techStack: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "Chart.js", "HTML5", "CSS3", "Jinja2"],
    category: "ML",
    status: "completed",
    github: "https://github.com/COZYkrish/FITNESS-ANALYZER",
    demo: "https://fitness-analyzer-two.vercel.app",
    image: "/project-photos/fitness-analyzer.png",
    accent: "#10B981",
    year: "2025",
    featured: true,
    icon: "💪",
    metrics: [{ value: "ML", label: "Predictions" }, { value: "6+", label: "Metrics" }],
  },
  {
    id: "shopzone",
    title: "Ecommerce Web Application",
    tagline: "Production MERN e-commerce platform",
    shortDescription: "Scalable MERN-stack e-commerce with JWT auth, admin dashboard, cart management, and role-based access control.",
    description: "A scalable MERN-stack e-commerce platform featuring a complete shopping experience and powerful admin dashboard.",
    problem: "Most e-commerce demos lack real production patterns: no proper cart management, no admin workflow.",
    solution: "Engineered a full MERN platform with JWT auth, RBAC, product catalogue with search and filters, and live admin dashboard.",
    architecture: "React + React Router → Axios → Node.js / Express.js → MongoDB → JWT → Tailwind.",
    features: [
      "Full product catalogue with search, filter, and sort",
      "Shopping cart with persistent state",
      "Secure checkout flow with order management",
      "Admin dashboard: inventory, orders, users",
      "JWT authentication with role-based access control",
    ],
    challenges: "Keeping cart state consistent across guest and authenticated sessions.",
    techStack: ["React.js", "Tailwind CSS", "Axios", "React Router DOM", "Node.js", "Express.js", "MongoDB", "JWT"],
    category: "Full Stack",
    status: "completed",
    github: "https://github.com/COZYkrish/E-COMMERCE-WEB-APPLICATION",
    image: "/project-photos/ecommerce-web-application.png",
    accent: "#7C3AED",
    year: "2025",
    featured: true,
    icon: "🛒",
    metrics: [{ value: "MERN", label: "Stack" }, { value: "RBAC", label: "Auth" }],
  },
  {
    id: "online-banking",
    title: "Online Banking System",
    tagline: "Secure full-stack banking simulation",
    shortDescription: "Professional banking simulation with RBAC, JWT auth, ACID-compliant transactions, and admin audit logs.",
    description: "A professional full-stack web application simulating real-world banking operations with secure role-based access control.",
    problem: "Understanding production-grade security patterns for financial systems is hard without a real reference implementation.",
    solution: "Built a complete banking platform with JWT, bcrypt, RBAC dashboards, and ACID-compliant transaction management.",
    architecture: "JS frontend → Node.js / Express.js REST API → MySQL → JWT middleware → Role-based routes.",
    features: [
      "Secure registration and login with JWT",
      "User dashboard: balance, transactions, transfers",
      "Admin dashboard: user management, audit logs",
      "Fund transfer with transaction rollback on failure",
      "Role-based access control (user / admin)",
    ],
    challenges: "Ensuring concurrent transactions don't cause double-spend — implemented row locking inside single transactions.",
    techStack: ["JavaScript", "Node.js", "Express.js", "MySQL", "JWT", "bcrypt", "HTML5", "CSS3"],
    category: "Security",
    status: "completed",
    github: "https://github.com/COZYkrish",
    image: "/project-photos/online-banking-system.png",
    accent: "#3B82F6",
    year: "2024",
    featured: false,
    icon: "🏦",
    metrics: [{ value: "ACID", label: "Transactions" }, { value: "RBAC", label: "Access" }],
  },
  {
    id: "luminablog",
    title: "LuminaBlog",
    tagline: "MERN blog platform with Cloudinary",
    shortDescription: "Full-featured publishing platform with Cloudinary media, nested comments, analytics, and a premium dark UI.",
    description: "A modern, production-style blogging platform built with the MERN stack with authentication, blog publishing, comments, analytics, and Cloudinary image uploads.",
    problem: "Simple blog demos skip features that make a platform real: media uploads, engagement, and author analytics.",
    solution: "Engineered a full-featured platform with Cloudinary uploads, JWT, nested comments, bookmarks, and author analytics.",
    architecture: "React + Vite → Axios → Node.js / Express.js → MongoDB + Mongoose → Multer + Cloudinary.",
    features: [
      "Full blog CRUD with rich text editor",
      "Cloudinary image uploads via Multer",
      "Nested comments with like system",
      "Bookmarks and reading list",
      "Author analytics dashboard",
    ],
    challenges: "Managing Cloudinary upload failures gracefully — implemented retry queue and confirmed cloud upload before saving.",
    techStack: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    category: "Full Stack",
    status: "completed",
    github: "https://github.com/COZYkrish/BLOG-PLATFORM",
    image: "/project-photos/lumina-blog.png",
    accent: "#F59E0B",
    year: "2025",
    featured: false,
    icon: "✍️",
  },
  {
    id: "taskflow-pro",
    title: "TaskFlow Pro",
    tagline: "Real-time Task Management SaaS",
    shortDescription: "Multi-user task SaaS with WebSocket live updates, kanban board, JWT auth, and project organisation.",
    description: "A full-stack Task Management SaaS application with real-time notifications, WebSocket live updates, and JWT auth.",
    problem: "Most task manager tutorials are single-user with no real-time updates or production backend patterns.",
    solution: "Built a multi-user platform with WebSocket notifications, SQLite, and a Vite-powered React frontend.",
    architecture: "React + Vite → Axios → WebSocket client → Node.js / Express.js → SQLite → JWT.",
    features: [
      "Kanban board with drag-and-drop",
      "Real-time task updates via WebSocket",
      "User authentication with JWT",
      "Task assignment, priorities, and due dates",
      "Live notifications for task changes",
    ],
    challenges: "WebSocket reconnection stability — implemented exponential backoff and server heartbeat pings.",
    techStack: ["React.js", "Vite", "Axios", "Node.js", "Express.js", "SQLite", "JWT", "WebSocket"],
    category: "SaaS",
    status: "completed",
    github: "https://github.com/COZYkrish/Task-management-system",
    image: "/project-photos/task-management-system.png",
    accent: "#EF4444",
    year: "2025",
    featured: false,
    icon: "✅",
    metrics: [{ value: "WS", label: "Real-time" }],
  },
  {
    id: "data-viz-dashboard",
    title: "Data Viz Dashboard",
    tagline: "3D analytics dashboard with AI insights",
    shortDescription: "Browser-based analytics platform with Three.js 3D visuals, multiple chart types, and AI-generated data insights.",
    description: "An interactive analytics dashboard for exploring CSV data with modern charts, 3D visuals powered by Three.js, and AI-powered insights.",
    problem: "Data analysts deal with raw CSV files and static charts that offer no interactivity or AI interpretation.",
    solution: "Built a browser-based platform where users upload CSVs and get interactive charts, 3D visualisations, and AI text insights.",
    architecture: "React + Vite SPA → Three.js → Chart.js / D3 → Papa Parse → AI API → Tailwind.",
    features: [
      "CSV upload and instant visualisation",
      "Multiple chart types (bar, line, scatter, pie)",
      "3D data visualisation with Three.js",
      "AI-powered data insights and summaries",
      "Export charts as PNG",
    ],
    challenges: "Rendering large datasets without freezing — WebWorker CSV parsing and Three.js instanced mesh rendering.",
    techStack: ["React.js", "Vite", "Tailwind CSS", "Three.js", "Chart.js", "Papa Parse", "AI API"],
    category: "Data",
    status: "completed",
    github: "https://github.com/COZYkrish/Futuristic-Data-Visualization-Dashboard",
    image: "/project-photos/data-visualization-dashboard.png",
    accent: "#06B6D4",
    year: "2025",
    featured: false,
    icon: "📊",
    metrics: [{ value: "3D", label: "Three.js" }, { value: "AI", label: "Insights" }],
  },
  {
    id: "complaint-management",
    title: "Complaint Management",
    tagline: "Spring Boot MVC complaint portal",
    shortDescription: "Java Spring Boot complaint system with JPA, full MVC architecture, RESTful endpoints, and admin lifecycle management.",
    description: "A Spring Boot-based complaint management system with full MVC architecture, JPA integration, and REST endpoints.",
    problem: "Manual complaint handling in organisations is slow, untraceable, and unaccountable.",
    solution: "Engineered a structured complaint lifecycle system in Java Spring Boot with MVC, JPA, and REST submit/track/update workflows.",
    architecture: "Spring Boot MVC → Spring Data JPA → H2 database → REST Controllers → Thymeleaf.",
    features: [
      "Complaint submission with category classification",
      "Real-time status tracking",
      "RESTful API endpoints for full CRUD",
      "JPA entity relationships and persistence",
      "Admin panel for complaint management",
    ],
    challenges: "Designing JPA entity relationships for complaint threads — solved with one-to-many Status entity.",
    techStack: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "H2 Database", "REST API", "Thymeleaf"],
    category: "Java",
    status: "completed",
    github: "https://github.com/COZYkrish/COMPLAINT-PORTAL",
    image: "/project-photos/complaint-portal.png",
    accent: "#8B5CF6",
    year: "2024",
    featured: false,
    icon: "🗂️",
  },
  {
    id: "fintech-dashboard",
    title: "Fintech Dashboard",
    tagline: "Animated expense tracker with Flask",
    shortDescription: "Python Flask expense tracker with animated charts, dark/light mode, category budgeting, and cloud deployment.",
    description: "A modern expense tracker web app built with Python Flask, featuring animated charts, user authentication, and dark/light mode.",
    problem: "Tracking finances with spreadsheets gives no visual feedback on spending trends or category breakdowns.",
    solution: "Built a Flask app with user auth, animated Chart.js dashboards, category budgeting, and dark/light theme.",
    architecture: "Flask → SQLite/MySQL → Chart.js → Jinja2 → Session auth → Cloud deploy.",
    features: [
      "Expense tracking with category tagging",
      "Animated bar, pie, and line charts",
      "Monthly and yearly spending breakdowns",
      "Dark / light mode toggle",
      "Budget goal setting with progress tracking",
    ],
    challenges: "Making chart animations smooth on first load — pre-computed server-side totals before injecting via JS.",
    techStack: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "Chart.js", "SQLite", "Jinja2"],
    category: "Fintech",
    status: "completed",
    github: "https://github.com/COZYkrish/fintech-dashboard",
    image: "/project-photos/fintech-dashboard.png",
    accent: "#3B82F6",
    year: "2024",
    featured: false,
    icon: "💰",
  },
];

export interface GithubProject {
  name: string;
  title: string;
  url: string;
  description: string;
  language: string;
  homepage?: string;
  updated: string;
  type: string;
}

export const githubProjects: GithubProject[] = [
  { name: "aetherUI", title: "AetherUI", url: "https://github.com/COZYkrish/aetherUI", description: "Welcome to aetherUI, a highly interactive, cinematic developer portfolio built with modern web technologies. This project is designed to break away from traditional static resumes and deliver a premium, app-like user experience that showcases technical skills through engaging visuals and buttery-smooth interactions.", language: "TypeScript", updated: "2026-05-29", type: "Portfolio/UI" },
  { name: "COZYkrish", title: "COZYkrish", url: "https://github.com/COZYkrish/COZYkrish", description: "", language: "Markdown", updated: "2026-05-26", type: "Other" },
  { name: "KRISH-s-Portfolio", title: "KRISH S Portfolio", url: "https://github.com/COZYkrish/KRISH-s-Portfolio", description: "Cloud computing enthusiast with strong foundations in Python, Java, and C++. Skilled in cloud fundamentals (IaaS, PaaS, SaaS), virtualization, and basic AWS/Azure/GCP concepts. Experienced in web development, databases, Linux, networking, and system fundamentals.", language: "CSS", homepage: "https://krish-s-portfolio-uv5a.vercel.app", updated: "2026-05-26", type: "Portfolio/UI" },
  { name: "E-COMMERCE-WEB-APPLICATION", title: "E COMMERCE WEB APPLICATION", url: "https://github.com/COZYkrish/E-COMMERCE-WEB-APPLICATION", description: "A production-ready, scalable E-Commerce platform built with the MERN stack. Features a complete shopping experience for users and a powerful admin dashboard — built following real-world industry standards", language: "JavaScript", updated: "2026-05-26", type: "Web" },
  { name: "study-behavior-analysis", title: "Study Behavior Analysis", url: "https://github.com/COZYkrish/study-behavior-analysis", description: "An immersive, ML-powered web application that acts as a Futuristic Academic Intelligence Engine. It analyzes individual student behavior patterns and leverages machine learning models trained on 1,000,000 real student records to predict academic performance, output productivity insights, and classify learners into distinct behavioral archetypes.", language: "HTML", homepage: "https://study-behavior-analysis.vercel.app", updated: "2026-05-26", type: "HTML" },
  { name: "BLOG-PLATFORM", title: "BLOG PLATFORM", url: "https://github.com/COZYkrish/BLOG-PLATFORM", description: "LuminaBlog is a modern, production-style blogging platform built with the MERN stack. It supports authentication, blog publishing, comments, likes, bookmarks, dashboard analytics, Cloudinary image uploads, search, filters, and a premium animated dark UI.", language: "JavaScript", updated: "2026-05-24", type: "Full Stack" },
  { name: "Task-management-system", title: "Task Management System", url: "https://github.com/COZYkrish/Task-management-system", description: "A production-grade, full-stack Task Management SaaS — built like a real startup product.", language: "JavaScript", updated: "2026-05-24", type: "Full Stack" },
  { name: "FLOAT-AI_The-voice-of-your-desktop.", title: "FLOAT AI The Voice Of Your Desktop.", url: "https://github.com/COZYkrish/FLOAT-AI_The-voice-of-your-desktop.", description: "\"Float above the busy work. Let AI drive your desktop.\" \"Listen. Understand. Act. The ultimate hands-free experience.\" \"Your voice, your command. Seamlessly controlling your digital world.\"", language: "Python", updated: "2026-05-16", type: "AI/ML" },
  { name: "Smart-Complaint-Service-Platform", title: "Smart Complaint Service Platform", url: "https://github.com/COZYkrish/Smart-Complaint-Service-Platform", description: " A premium, production-grade SaaS platform for intelligent complaint management with real-time updates, advanced analytics, and enterprise-level security. Built with modern technologies and designed for scalability.", language: "JavaScript", homepage: "https://smart-complaint-service-platform.vercel.app", updated: "2026-05-13", type: "AI/ML" },
  { name: "CINE-ai", title: "CINE Ai", url: "https://github.com/COZYkrish/CINE-ai", description: " The recommendation catalog is built ahead of time from the TMDB credits-style CSV, then served as plain JSON to the frontend. Vercel only needs to host index.html and the generated data files. It does not run Flask or Python in production.", language: "HTML", homepage: "https://cine-ai-xi.vercel.app", updated: "2026-05-05", type: "AI/ML" },
  { name: "COMPLAINT-PORTAL", title: "COMPLAINT PORTAL", url: "https://github.com/COZYkrish/COMPLAINT-PORTAL", description: "Developed a Spring Boot-based Complaint Management System with MVC architecture, JPA integration, and database persistence using H2.", language: "HTML", updated: "2026-05-05", type: "AI/ML" },
  { name: "FITNESS-ANALYZER", title: "FITNESS ANALYZER", url: "https://github.com/COZYkrish/FITNESS-ANALYZER", description: "Kinetic Ether is a Flask-based fitness intelligence application that combines machine learning predictions, health tracking tools, analytics, and a cinematic frontend experience.", language: "HTML", homepage: "https://fitness-analyzer-two.vercel.app", updated: "2026-05-05", type: "AI/ML" },
  { name: "Student-learning-dashboard", title: "Student Learning Dashboard", url: "https://github.com/COZYkrish/Student-learning-dashboard", description: "LearnTrack — Futuristic Student Learning Dashboard LearnTrack is a modern React-based learning productivity dashboard designed to help students track courses, monitor progress, maintain study streaks, and stay productive using tools like a Pomodoro timer and analytics.  This project focuses on clean UI, modern animations, and practical productivity", language: "JavaScript", updated: "2026-05-05", type: "Web" },
  { name: "NeoShort", title: "NeoShort", url: "https://github.com/COZYkrish/NeoShort", description: "NeoShort is a modern, futuristic URL shortener web application built using Python (Flask), HTML, and CSS. It allows users to convert long URLs into short, shareable links with fast redirection and a visually engaging dark-themed UI.", language: "Python", updated: "2026-05-05", type: "Python" },
  { name: "AI-Student-Intelligence-System", title: "AI Student Intelligence System", url: "https://github.com/COZYkrish/AI-Student-Intelligence-System", description: "", language: "CSS", updated: "2026-05-05", type: "AI/ML" },
  { name: "online-banking-system", title: "Online Banking System", url: "https://github.com/COZYkrish/online-banking-system", description: "The Online Banking System is a professional, full-stack web application designed to simulate real-world banking operations. It provides secure, role-based access for users and administrators, enabling functionalities such as account management, fund transfers, transaction tracking, and administrative controls.", language: "JavaScript", updated: "2026-05-05", type: "Full Stack" },
  { name: "modern-expense-tracker", title: "Modern Expense Tracker", url: "https://github.com/COZYkrish/modern-expense-tracker", description: "A modern, responsive, and interactive Expense Tracker web application built using HTML, CSS, and JavaScript. This project helps users track income, expenses, budgets, and financial insights with a clean UI and smooth animations.", language: "HTML", homepage: "https://modern-expense-tracker-tan.vercel.app/", updated: "2026-05-05", type: "HTML" },
  { name: "fintech-dashboard", title: "Fintech Dashboard", url: "https://github.com/COZYkrish/fintech-dashboard", description: "A modern expense tracker web app built with Flask, HTML & CSS featuring animated charts, authentication, dark/light mode, and cloud deployment.", language: "Python", updated: "2026-05-05", type: "Python" },
  { name: "Futuristic-Data-Visualization-Dashboard", title: "Futuristic Data Visualization Dashboard", url: "https://github.com/COZYkrish/Futuristic-Data-Visualization-Dashboard", description: "An interactive analytics dashboard for exploring CSV data with modern charts, 3D visuals, and AI-powered insights.  Live Demo | React + Vite + Tailwind + Three.js", language: "JavaScript", homepage: "https://futuristic-data-visualization-dashb.vercel.app", updated: "2026-05-05", type: "Web" },
  { name: "HOUSE-PRICE-PREDICTION", title: "HOUSE PRICE PREDICTION", url: "https://github.com/COZYkrish/HOUSE-PRICE-PREDICTION", description: "", language: "HTML", homepage: "https://house-price-prediction-two-xi.vercel.app", updated: "2026-04-26", type: "HTML" },
  { name: "Real-Time-AI-Chat-App", title: "Real Time AI Chat App", url: "https://github.com/COZYkrish/Real-Time-AI-Chat-App", description: "", language: "JavaScript", updated: "2026-03-27", type: "AI/ML" },
  { name: "UNIVERSITY-MANAGEMENT-SYSTEM", title: "UNIVERSITY MANAGEMENT SYSTEM", url: "https://github.com/COZYkrish/UNIVERSITY-MANAGEMENT-SYSTEM", description: " A platform to seamlessly browse, book, and organize events with user authentication and management features.", language: "HTML", homepage: "https://university-management-system-mu-three.vercel.app", updated: "2026-03-13", type: "Full Stack" },
  { name: "tictactoe-using-c-", title: "Tictactoe Using C ", url: "https://github.com/COZYkrish/tictactoe-using-c-", description: "This is a classic, two-player Tic-Tac-Toe game implemented in C++ that runs in the command line. It's a simple yet complete project demonstrating fundamental programming concepts like arrays, functions, conditional statements, and loops.", language: "C++", updated: "2026-03-13", type: "C++" },
  { name: "library-management-system-c-", title: "Library Management System C ", url: "https://github.com/COZYkrish/library-management-system-c-", description: "**This is a simple console-based Library Management System built in C++. It allows you to add and display details of books stored in a library.", language: "C++", updated: "2026-03-13", type: "Full Stack" }
];

// ============================================================
// CERTIFICATIONS
// ============================================================
export const certifications = [
  {
    id: "iot",
    title: "IoT-Network Specialist Certificate Programme",
    issuer: "Reliance Foundation Skilling Academy",
    platform: "Skill India Digital Hub | NSDC",
    date: "Mar 2026", duration: "60 Hours",
    description: "Specialised programme covering IoT networking architectures, device communication protocols, and network integration.",
    accent: "#06B6D4", icon: "📡",
  },
  {
    id: "ai-thinking",
    title: "Critical Thinking in the AI Era",
    issuer: "HP LIFE", platform: "HP Foundation",
    date: "Feb 2026",
    description: "Covered AI content evaluation, bias mitigation, fact-checking, and responsible AI usage.",
    accent: "#7C3AED", icon: "🤖",
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    issuer: "HP LIFE", platform: "HP Foundation",
    date: "Feb 2026",
    description: "Covered data science practices, methodologies, tools, and data-driven business decision-making.",
    accent: "#F59E0B", icon: "📊",
  },
];

// ============================================================
// HACKATHONS
// ============================================================
export const hackathons = [
  {
    id: "codenexus",
    title: "Codenexus Hackathon 2K26",
    event: "FESTRONIX 2K26",
    organiser: "GIFT Autonomous, Bhubaneswar",
    team: "SegFault",
    date: "Feb 26–27, 2026",
    sponsor: "Webbocket Software Pvt. Ltd.",
    description: "Competed as Team SegFault, building a real-world technical solution under time constraints.",
    accent: "#EF4444", icon: "⚡",
  },
];

// ============================================================
// TIMELINE
// ============================================================
export const timelineEvents = [
  { id: 1, year: "2022", title: "10th Standard Completed", description: "Completed Secondary at Dalmia Vidya Mandir. Got my first exposure to computers.", icon: "🎓", type: "education" },
  { id: 2, year: "2023", title: "First Lines of Code", description: "Self-taught Python and JavaScript from tutorials. Built my first HTML/CSS webpage. The dopamine hit was real.", icon: "💻", type: "learning" },
  { id: 3, year: "2024", title: "12th Standard & BCA Entry", description: "Completed Higher Secondary and joined Centurion University for BCA — Computer Programming.", icon: "🚀", type: "education" },
  { id: 4, year: "2024", title: "First Backend Project", description: "Built the Online Banking System — first serious full-stack project with Node.js, MySQL, JWT, and RBAC.", icon: "🏦", type: "project" },
  { id: 5, year: "2024", title: "Java & Spring Boot", description: "Explored enterprise backend with Java — built the Complaint Management System using Spring Boot MVC and JPA.", icon: "☕", type: "learning" },
  { id: 6, year: "2025", title: "ML & Data Science", description: "Dived into machine learning. Built Fitness Analyzer — first app combining real ML predictions with a Flask backend.", icon: "🤖", type: "learning" },
  { id: 7, year: "2025", title: "Full-Stack Velocity", description: "Shipped ShopZone, LuminaBlog, TaskFlow Pro, and Data Viz Dashboard. 5 production apps in one year.", icon: "⚡", type: "milestone" },
  { id: 8, year: "Feb 2026", title: "HP LIFE Certifications", description: "Earned two HP Foundation certs: Critical Thinking in the AI Era and Data Science & Analytics.", icon: "📜", type: "certification" },
  { id: 9, year: "Feb 2026", title: "Codenexus Hackathon", description: "Competed at FESTRONIX 2K26 as Team SegFault at GIFT Autonomous, Bhubaneswar.", icon: "🏆", type: "achievement" },
  { id: 10, year: "Mar 2026", title: "IoT Specialist Certificate", description: "Completed 60-hour IoT-Network Specialist programme via Reliance Foundation / Skill India / NSDC.", icon: "📡", type: "certification" },
  { id: 11, year: "2026", title: "Now — Ready for Impact", description: "Year 2 of BCA, 8+ shipped projects, 3 certifications. Looking for internships and collaborations. Ready.", icon: "🎯", type: "milestone", current: true },
];

// ============================================================
// STATS
// ============================================================
export const stats = [
  { label: "Projects", value: 20, suffix: "+" },
  { label: "Skills", value: 45, suffix: "+" },
  { label: "Certificates", value: 4, suffix: "" },
  { label: "Hours Coded", value: 397, suffix: "" },
];

// ============================================================
// CLOUD KNOWLEDGE
// ============================================================
export const cloudKnowledge = {
  paradigms: ["IaaS", "PaaS", "SaaS", "Serverless concepts", "Virtualization"],
  platforms: ["AWS (EC2, S3, Lambda basics)", "Azure Fundamentals", "GCP Basics"],
  os: ["Linux (CLI, scripting)", "Ubuntu", "Windows Server basics"],
  devops: ["Git / GitHub", "GitHub Actions (basics)", "Docker (intro)", "CI/CD concepts"],
  networking: ["HTTP/HTTPS", "REST", "WebSocket", "TCP/IP basics", "IoT Networking"],
};

// ============================================================
// EDUCATION
// ============================================================
export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    specialisation: "Computer Programming",
    institution: "Centurion University of Technology and Management",
    location: "Bhubaneswar, Odisha",
    period: "Aug 2024 – Aug 2027",
    status: "In Progress",
    skills: ["Python", "JavaScript", "Java", "DBMS", "ML", "Cloud Computing", "React", "HTML/CSS"],
  },
  { degree: "Higher Secondary (12th)", institution: "Dalmia Vidya Mandir", period: "2024", status: "Completed", skills: [] },
  { degree: "Secondary (10th)", institution: "Dalmia Vidya Mandir", period: "2022", status: "Completed", skills: [] },
];
