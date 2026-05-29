// ============================================================
// KRISH OS — Portfolio Data  (sourced from resume + codebase)
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
// SKILL CATEGORIES (from resume — accurate)
// ============================================================
export const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    color: "#7C3AED",
    skills: [
      { name: "JavaScript", level: 88 },
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "C++", level: 65 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    color: "#3B82F6",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vite", level: 82 },
      { name: "React Router", level: 85 },
      { name: "Three.js", level: 70 },
      { name: "Axios", level: 85 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#06B6D4",
    skills: [
      { name: "Node.js", level: 84 },
      { name: "Express.js", level: 82 },
      { name: "Flask (Python)", level: 80 },
      { name: "Spring Boot", level: 72 },
      { name: "REST APIs", level: 88 },
      { name: "JWT / Auth", level: 82 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    color: "#10B981",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "SQLite", level: 78 },
      { name: "H2 Database", level: 70 },
      { name: "DBMS Fundamentals", level: 80 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    color: "#F59E0B",
    skills: [
      { name: "AWS Basics", level: 70 },
      { name: "Azure Basics", level: 65 },
      { name: "GCP Basics", level: 60 },
      { name: "Linux", level: 72 },
      { name: "Virtualization", level: 68 },
      { name: "Git / GitHub", level: 90 },
    ],
  },
  {
    id: "ml",
    label: "Data & ML",
    color: "#EF4444",
    skills: [
      { name: "Scikit-learn", level: 75 },
      { name: "Data Analysis", level: 78 },
      { name: "Data Visualization", level: 80 },
      { name: "ML Model Building", level: 72 },
      { name: "Pandas / NumPy", level: 76 },
    ],
  },
];

// ============================================================
// TECH STACK (marquee)
// ============================================================
export const techStack = [
  "React.js", "Node.js", "Python", "JavaScript", "Java",
  "Flask", "Spring Boot", "MongoDB", "MySQL", "Express.js",
  "Tailwind CSS", "Three.js", "Scikit-learn", "Vite",
  "Git", "Linux", "AWS", "JWT", "Axios", "C++",
];

// ============================================================
// PROJECTS (accurate from resume)
// ============================================================
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  challenges: string;
  techStack: string[];
  category: string[];
  status: "live" | "in-progress" | "completed";
  github?: string;
  demo?: string;
  image: string;
  accent: string;
  year: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "fitness-analyzer",
    title: "Fitness Analyzer",
    tagline: "Flask + ML fitness intelligence app with cinematic UI",
    description:
      "A Flask-based fitness intelligence application combining machine learning predictions, health tracking tools, and analytics with a cinematic, animated frontend experience.",
    problem:
      "Generic fitness apps track steps and calories but can't predict injury risk, recommend personalised workout loads, or explain what the data means for your health long-term.",
    solution:
      "Built an ML-powered fitness engine using Scikit-learn to analyse user fitness data — BMI, workout frequency, heart rate trends — and generate personalised health recommendations alongside interactive dashboards.",
    architecture:
      "Python Flask web server → Scikit-learn ML models for predictions → Pandas for data processing → Jinja2 templating with animated CSS frontend → Chart.js for health metric visualisation → Deployed on cloud.",
    features: [
      "ML-powered personalised health & workout recommendations",
      "Interactive dashboards for health metrics (BMI, VO2, HR)",
      "Fitness goal tracking with progress visualisation",
      "Animated, cinematic frontend UI",
      "User authentication and profile management",
      "Data export and historical trend analysis",
    ],
    challenges:
      "Handling noisy, self-reported fitness data — implemented outlier detection and data normalisation pipelines before feeding into the ML model to maintain prediction accuracy.",
    techStack: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "Chart.js", "HTML5", "CSS3", "Jinja2"],
    category: ["ML", "Full Stack"],
    status: "completed",
    github: "https://github.com/COZYkrish",
    image: "/images/project images/fitness analyzer image (1).png",
    accent: "#10B981",
    year: "2025",
    featured: true,
  },
  {
    id: "shopzone",
    title: "ShopZone",
    tagline: "Production-ready full-stack e-commerce platform with admin dashboard",
    description:
      "A scalable MERN-stack e-commerce platform featuring a complete shopping experience for customers and a powerful admin dashboard — built to real-world industry standards.",
    problem:
      "Most e-commerce demos lack real production patterns: no proper cart state management, no admin workflow, no order lifecycle, and no scalable product catalogue.",
    solution:
      "Engineered a full MERN-stack platform with JWT authentication, role-based access (user/admin), a fully featured product catalogue with search and filters, and a live admin dashboard for inventory and order management.",
    architecture:
      "React.js + React Router DOM frontend → Axios for API layer → Node.js / Express.js REST backend → MongoDB database → JWT-based auth with refresh tokens → Tailwind CSS for styling.",
    features: [
      "Full product catalogue with search, filter, and sort",
      "Shopping cart with persistent state (localStorage + DB sync)",
      "Secure checkout flow with order management",
      "Admin dashboard: inventory, orders, user management",
      "JWT authentication with role-based access control",
      "Responsive mobile-first design with Tailwind CSS",
      "Product image management",
    ],
    challenges:
      "Keeping cart state consistent across guest and authenticated sessions — solved by merging localStorage cart into the database cart on login with deduplication logic.",
    techStack: ["React.js", "Tailwind CSS", "Axios", "React Router DOM", "Node.js", "Express.js", "MongoDB", "JWT"],
    category: ["Full Stack", "E-Commerce"],
    status: "completed",
    github: "https://github.com/COZYkrish",
    image: "/images/project images/shopzone imge (1).png",
    accent: "#7C3AED",
    year: "2025",
    featured: true,
  },
  {
    id: "online-banking",
    title: "Online Banking System",
    tagline: "Secure full-stack banking simulation with RBAC and transactions",
    description:
      "A professional full-stack web application simulating real-world banking operations with secure role-based access control for users and administrators.",
    problem:
      "Understanding production-grade security patterns for financial systems — authentication, transaction integrity, and admin oversight — is hard without a real reference implementation.",
    solution:
      "Built a complete banking platform with JWT auth, bcrypt-hashed credentials, role-based dashboards for users and admins, and ACID-compliant transaction management with rollback protection.",
    architecture:
      "JavaScript frontend → Node.js / Express.js REST API → MySQL database with transaction-level locking → JWT authentication middleware → Role-based route protection → Deployed with cloud hosting.",
    features: [
      "Secure registration and login with JWT",
      "User dashboard: balance, transactions, transfers",
      "Admin dashboard: user management, audit logs",
      "Fund transfer with transaction rollback on failure",
      "Transaction history with advanced filtering",
      "Role-based access control (user / admin)",
      "Account statement generation",
    ],
    challenges:
      "Ensuring concurrent transactions don't cause double-spend issues — implemented database-level row locking and a balance-check-then-debit pattern inside a single transaction.",
    techStack: ["JavaScript", "Node.js", "Express.js", "MySQL", "JWT", "bcrypt", "HTML5", "CSS3"],
    category: ["Full Stack", "Security"],
    status: "completed",
    github: "https://github.com/COZYkrish",
    image: "/images/project images/online banking system image (1).png",
    accent: "#3B82F6",
    year: "2024",
    featured: true,
  },
  {
    id: "luminablog",
    title: "LuminaBlog",
    tagline: "MERN-stack blog platform with analytics, comments, and Cloudinary media",
    description:
      "A modern, production-style blogging platform built with the MERN stack. Supports authentication, blog publishing, comments, likes, bookmarks, analytics, Cloudinary image uploads, search, and filters — with a premium dark UI.",
    problem:
      "Simple blog demos skip the features that make a platform real: media uploads, engagement (likes/comments), author analytics, and a polished content discovery experience.",
    solution:
      "Engineered a full-featured publishing platform with Cloudinary-powered image uploads, JWT auth with Bcrypt, nested comments, like/bookmark systems, a reader dashboard with search/filters, and author analytics.",
    architecture:
      "React.js + Vite frontend → Axios API layer → Node.js / Express.js backend → MongoDB + Mongoose ODM → JWT + Bcryptjs auth → Multer + Cloudinary for media → Dashboard analytics.",
    features: [
      "Full blog CRUD with rich text editor",
      "Cloudinary image uploads via Multer",
      "Nested comments with like system",
      "Bookmarks and reading list",
      "Author analytics dashboard",
      "Search with category and tag filters",
      "JWT authentication with secure password hashing",
      "Animated premium dark UI",
    ],
    challenges:
      "Managing Cloudinary upload failures gracefully — implemented a retry queue and stored image references only after confirmed cloud upload, preventing orphaned DB records.",
    techStack: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Bcryptjs", "Multer", "Cloudinary", "Axios"],
    category: ["Full Stack", "MERN"],
    status: "completed",
    github: "https://github.com/COZYkrish",
    image: "/images/project images/luminablog image (1).png",
    accent: "#F59E0B",
    year: "2025",
    featured: false,
  },
  {
    id: "taskflow-pro",
    title: "TaskFlow Pro",
    tagline: "Production-grade Task Management SaaS with real-time WebSocket updates",
    description:
      "A full-stack Task Management SaaS application with real-time notifications, WebSocket live updates, JWT auth, and a modern kanban-style interface.",
    problem:
      "Most task manager tutorials are single-user, have no real-time updates, and don't model real production backend patterns like WebSocket events or proper ORM usage.",
    solution:
      "Built a multi-user task management platform with Node.js/Express backend, real-time WebSocket notifications for task updates, SQLite database with JWT auth, and a Vite-powered React frontend.",
    architecture:
      "React + Vite frontend → Axios for REST calls → WebSocket client for real-time events → Node.js / Express.js backend → SQLite database → JWT authentication → WebSocket server for push notifications.",
    features: [
      "Kanban board with drag-and-drop task management",
      "Real-time task updates via WebSocket",
      "User authentication with JWT",
      "Task assignment, priorities, and due dates",
      "Live notifications for task changes",
      "Project-level task organisation",
      "Activity log and task history",
    ],
    challenges:
      "Keeping WebSocket connections stable across network interruptions — implemented an exponential backoff reconnection strategy on the client and connection heartbeat pings on the server.",
    techStack: ["React.js", "Vite", "Axios", "Node.js", "Express.js", "SQLite", "JWT", "WebSocket"],
    category: ["Full Stack", "SaaS"],
    status: "completed",
    github: "https://github.com/COZYkrish",
    image: "/images/project images/taskflow pro image (1).png",
    accent: "#EF4444",
    year: "2025",
    featured: false,
  },
  {
    id: "data-viz-dashboard",
    title: "Data Visualization Dashboard",
    tagline: "Futuristic analytics dashboard with 3D visuals and AI insights",
    description:
      "An interactive analytics dashboard for exploring CSV data with modern charts, 3D visuals powered by Three.js, and AI-powered insights — built with React, Vite, and Tailwind CSS.",
    problem:
      "Data analysts deal with raw CSV files and static Excel charts that offer no interactivity, no 3D perspective, and zero AI interpretation of what the data actually means.",
    solution:
      "Built a browser-based analytics platform where users upload CSVs and instantly get interactive charts, 3D data visualisations via Three.js, and AI-generated text insights that explain patterns in plain English.",
    architecture:
      "React + Vite SPA → Three.js for 3D scene rendering → Chart.js / D3 for 2D charts → Papa Parse for CSV parsing → AI API for insight generation → Tailwind CSS for responsive layout.",
    features: [
      "CSV upload and instant visualisation",
      "Multiple chart types (bar, line, scatter, pie)",
      "3D data visualisation with Three.js",
      "AI-powered data insights and summaries",
      "Column filtering and data transformation",
      "Dark futuristic UI with smooth animations",
      "Export charts as PNG",
    ],
    challenges:
      "Rendering large datasets (100k+ rows) without freezing the browser — implemented WebWorker-based CSV parsing and viewport-culled Three.js instanced mesh rendering.",
    techStack: ["React.js", "Vite", "Tailwind CSS", "Three.js", "Chart.js", "Papa Parse", "AI API"],
    category: ["Data", "Full Stack", "3D"],
    status: "completed",
    github: "https://github.com/COZYkrish",
    image: "/images/project images/data visualization dashboard image (1).png",
    accent: "#06B6D4",
    year: "2025",
    featured: false,
  },
  {
    id: "complaint-management",
    title: "Complaint Management System",
    tagline: "Spring Boot MVC complaint portal with JPA and RESTful tracking",
    description:
      "A Spring Boot-based complaint management system with full MVC architecture, JPA integration, and database persistence using H2. Handles complaint submission, tracking, and status updates via RESTful endpoints.",
    problem:
      "Manual complaint handling in organisations is slow, untraceable, and unaccountable — there's no clear chain of custody, no automated routing, and no real-time status visibility.",
    solution:
      "Engineered a structured complaint lifecycle system in Java Spring Boot with MVC separation of concerns, JPA entity management, and REST endpoints for submit/track/update workflows.",
    architecture:
      "Spring Boot MVC → Spring Data JPA → H2 in-memory database → REST Controller layer → Service layer with business logic → Repository layer for persistence → Thymeleaf templating.",
    features: [
      "Complaint submission with category classification",
      "Real-time status tracking (Submitted / In-Progress / Resolved)",
      "RESTful API endpoints for full CRUD",
      "JPA entity relationships and persistence",
      "Admin panel for complaint management",
      "MVC architecture with clean separation of concerns",
    ],
    challenges:
      "Designing the JPA entity relationships to support complaint threads (a complaint having multiple status updates) — solved with a one-to-many Status entity linked to the Complaint entity.",
    techStack: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "H2 Database", "REST API", "Thymeleaf"],
    category: ["Full Stack", "Java"],
    status: "completed",
    github: "https://github.com/COZYkrish",
    image: "/images/project images/complaint portal image (1).png",
    accent: "#8B5CF6",
    year: "2024",
    featured: false,
  },
  {
    id: "fintech-dashboard",
    title: "Fintech Dashboard",
    tagline: "Animated expense tracker with dark/light mode and cloud deployment",
    description:
      "A modern expense tracker web app built with Python Flask, featuring animated charts, user authentication, dark/light mode, and cloud deployment capabilities.",
    problem:
      "Tracking personal finances with spreadsheets is tedious and provides no visual feedback — users can't see spending trends, category breakdowns, or month-on-month changes at a glance.",
    solution:
      "Built a Flask web app with user auth, animated Chart.js expense dashboards, category-based budgeting, transaction history, and dark/light theme — deployed with cloud hosting for accessibility anywhere.",
    architecture:
      "Python Flask web server → SQLite/MySQL backend → Chart.js for animated charts → Jinja2 templates → User session auth → Dark/light theme toggle → Cloud deployment.",
    features: [
      "Expense tracking with category tagging",
      "Animated bar, pie, and line charts",
      "Monthly and yearly spending breakdowns",
      "User authentication and session management",
      "Dark / light mode toggle",
      "Budget goal setting with progress tracking",
      "Transaction history with edit/delete",
    ],
    challenges:
      "Making chart animations feel smooth on first load without layout shift — pre-computed server-side totals and rendered skeleton chart containers before injecting real data via JS.",
    techStack: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "Chart.js", "SQLite", "Jinja2"],
    category: ["Full Stack", "Fintech"],
    status: "completed",
    github: "https://github.com/COZYkrish",
    image: "/images/project images/fintech dashboard image (1).png",
    accent: "#3B82F6",
    year: "2024",
    featured: false,
  },
];

// ============================================================
// CERTIFICATIONS (from resume — accurate)
// ============================================================
export const certifications = [
  {
    id: "iot",
    title: "IoT-Network Specialist Certificate Programme",
    issuer: "Reliance Foundation Skilling Academy",
    platform: "Skill India Digital Hub | NSDC",
    date: "Mar 2026",
    duration: "60 Hours",
    description: "Specialised programme covering IoT networking architectures, device communication protocols, and network integration for IoT deployments.",
    accent: "#06B6D4",
    icon: "📡",
  },
  {
    id: "ai-thinking",
    title: "Critical Thinking in the AI Era",
    issuer: "HP LIFE",
    platform: "HP Foundation",
    date: "Feb 2026",
    description: "Covered AI content evaluation, bias mitigation, fact-checking strategies, and responsible AI usage in professional contexts.",
    accent: "#7C3AED",
    icon: "🤖",
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    issuer: "HP LIFE",
    platform: "HP Foundation",
    date: "Feb 2026",
    description: "Covered data science practices, methodologies, tools, and data-driven business decision-making approaches.",
    accent: "#F59E0B",
    icon: "📊",
  },
];

// ============================================================
// HACKATHONS (from resume — accurate)
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
    description:
      "Competed as Team SegFault, building a real-world technical solution under time constraints. Demonstrated full-stack development, problem-solving, and collaborative engineering skills.",
    accent: "#EF4444",
    icon: "⚡",
  },
];

// ============================================================
// TIMELINE (career journey — based on resume)
// ============================================================
export const timelineEvents = [
  {
    id: 1,
    year: "2022",
    title: "10th Standard Completed",
    description:
      "Completed Secondary education at Dalmia Vidya Mandir. Got my first exposure to computers and realised this was the field I wanted to build my life in.",
    icon: "🎓",
    type: "education",
  },
  {
    id: 2,
    year: "2023",
    title: "First Lines of Code",
    description:
      "Started self-teaching Python and JavaScript from online tutorials. Built my first HTML/CSS webpage and immediately knew I wanted to go deeper. The dopamine hit of seeing something render in the browser was real.",
    icon: "💻",
    type: "learning",
  },
  {
    id: 3,
    year: "2024",
    title: "12th Standard & BCA Entry",
    description:
      "Completed Higher Secondary at Dalmia Vidya Mandir and joined Centurion University of Technology and Management for BCA — Computer Programming. The formal journey began.",
    icon: "🚀",
    type: "education",
  },
  {
    id: 4,
    year: "2024",
    title: "First Backend Project",
    description:
      "Built the Online Banking System — my first serious full-stack project with Node.js, MySQL, JWT auth, and role-based access control. Deployed it and felt what 'production-grade' actually meant.",
    icon: "🏦",
    type: "project",
  },
  {
    id: 5,
    year: "2024",
    title: "Java & Spring Boot",
    description:
      "Explored backend engineering with Java — built the Complaint Management System using Spring Boot MVC and Spring Data JPA. Understood enterprise architecture patterns for the first time.",
    icon: "☕",
    type: "learning",
  },
  {
    id: 6,
    year: "2025",
    title: "ML & Data Science",
    description:
      "Dived into machine learning with Python and Scikit-learn. Built the Fitness Analyzer — my first app that combined real ML predictions with a production Flask backend and animated frontend.",
    icon: "🤖",
    type: "learning",
  },
  {
    id: 7,
    year: "2025",
    title: "Full-Stack Velocity",
    description:
      "Shipped ShopZone (MERN e-commerce), LuminaBlog (MERN blog platform with Cloudinary), TaskFlow Pro (WebSocket SaaS), and the Data Viz Dashboard (Three.js + AI). Built 5 production-grade apps in one year.",
    icon: "⚡",
    type: "milestone",
  },
  {
    id: 8,
    year: "Feb 2026",
    title: "HP LIFE Certifications",
    description:
      "Earned two HP Foundation certifications: Critical Thinking in the AI Era and Data Science & Analytics. Validated formal knowledge in AI evaluation and data-driven decision making.",
    icon: "📜",
    type: "certification",
  },
  {
    id: 9,
    year: "Feb 2026",
    title: "Codenexus Hackathon",
    description:
      "Competed at FESTRONIX 2K26 as Team SegFault at GIFT Autonomous, Bhubaneswar. Built a real-world solution under 24-hour time pressure — first competitive hackathon experience.",
    icon: "🏆",
    type: "achievement",
  },
  {
    id: 10,
    year: "Mar 2026",
    title: "IoT Specialist Certificate",
    description:
      "Completed a 60-hour IoT-Network Specialist programme through Reliance Foundation / Skill India Digital Hub / NSDC. Expanded into networking and embedded systems territory.",
    icon: "📡",
    type: "certification",
  },
  {
    id: 11,
    year: "2026",
    title: "Now — Ready for Impact",
    description:
      "Year 2 of BCA, 8+ shipped projects, 3 certifications. Looking for internships and collaborative opportunities in software development, cloud computing, and data science. Ready to contribute to real teams.",
    icon: "🎯",
    type: "milestone",
    current: true,
  },
];

// ============================================================
// STATS
// ============================================================
export const stats = [
  { label: "Projects Shipped", value: 8, suffix: "+" },
  { label: "Technologies Used", value: 25, suffix: "+" },
  { label: "Certifications", value: 3, suffix: "" },
  { label: "Hackathons", value: 1, suffix: "" },
];

// ============================================================
// CLOUD / TECH KNOWLEDGE
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
    skills: ["Python", "JavaScript", "Java", "DBMS", "ML", "Cloud Computing", "React", "HTML/CSS", "Unity", "Blender"],
  },
  {
    degree: "Higher Secondary (12th Standard)",
    institution: "Dalmia Vidya Mandir",
    period: "2024",
    status: "Completed",
    skills: [],
  },
  {
    degree: "Secondary (10th Standard)",
    institution: "Dalmia Vidya Mandir",
    period: "2022",
    status: "Completed",
    skills: [],
  },
];
