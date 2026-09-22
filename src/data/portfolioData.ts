import type { PersonalInfo, Project, SkillCategory, Education, Achievement, Certification } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "B M Shubhank",
  role: "Computer Science Engineering Student",
  subRole: "Aspiring Software Developer & AI Systems Enthusiast",
  status: "Open to Software Engineering Internships & Roles",
  bio: "Computer Science Engineering student with strong algorithmic foundations and a passion for engineering scalable web applications and intelligent data-driven systems.",
  aboutText: [
    "I am a Computer Science Engineering student driven by curiosity for how large-scale software systems operate. My technical interests span full-stack development, distributed architecture, and the intersection of modern web platforms with intelligent AI services.",
    "Through rigorous coursework in Data Structures & Algorithms, Operating Systems, Computer Networks, and DBMS, I focus on writing performant, maintainable, and type-safe code.",
    "I actively turn theoretical computing principles into practical software—such as developing WeatherGPT for the Smart India Hackathon (SIH), creating an intelligent conversational interface over real-time climate data streams."
  ],
  location: "Bengaluru, Karnataka, India",
  email: "bmshubhank8210@gmail.com",
  github: "https://github.com/bmshubhank",
  linkedin: "https://www.linkedin.com/in/b-m-shubhank",
  leetcode: "https://leetcode.com/u/Shubhank_20",
  resumeUrl: "#" // Replace with direct PDF link or public resume URL
};

export const projects: Project[] = [
  {
    id: "weather-gpt",
    title: "WeatherGPT",
    tagline: "AI-Powered Weather Intelligence & Climate Decision Platform",
    description: "An intelligent meteorological assistant developed for the Smart India Hackathon (SIH). WeatherGPT integrates natural language query understanding with multi-source meteorological APIs to deliver hyper-localized forecasts, agricultural impact recommendations, and early extreme-weather alerts through a conversational interface.",
    featured: true,
    hackathonTag: "Smart India Hackathon (SIH)",
    tags: [
      "Python",
      "FastAPI / Flask",
      "React.js",
      "TypeScript",
      "LLM / Generative AI",
      "OpenWeather / Radar APIs",
      "Data Analytics"
    ],
    highlights: [
      "Translates natural language questions into structured spatial and temporal meteorological queries.",
      "Synthesizes live weather telemetry (precipitation, humidity, UV index, wind dynamics, radar data).",
      "Generates contextual risk warnings for farmers, logistics planners, and civic disaster preparation.",
      "Clean, responsive dashboard with intuitive conversational flow and visual weather widgets."
    ],
    metrics: [
      { label: "Hackathon Event", value: "Smart India Hackathon (SIH)" },
      { label: "Core Focus", value: "Generative AI + Climate Intelligence" },
      { label: "Architecture", value: "Hybrid LLM & Live API Pipeline" },
      { label: "Response Time", value: "Real-time Telemetry" }
    ],
    architecture: [
      "1. Natural Language Input Parsing (User Query)",
      "2. Intent & Geo-Spatial Parameter Extraction Engine",
      "3. Live Multi-Station Meteorological API Aggregation",
      "4. AI Synthesis & Agricultural Advisory Generation",
      "5. Interactive React + Tailwind Interface Display"
    ],
    demoUrl: "https://weathergpt-demo.example.com", // [Editable Placeholder]
    githubUrl: "https://github.com/your-username/WeatherGPT" // [Editable Placeholder]
  },
  {
    id: "project-2",
    title: "[Project 2 Name]",
    tagline: "[Full-Stack Web Application / Cloud Service]",
    description: "[Editable Placeholder: Describe the core problem this project solves, architectural choices, and the positive impact or performance metrics achieved.]",
    featured: false,
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "REST APIs"],
    highlights: [
      "[Key technical achievement, e.g., implemented JWT authentication & role-based access control]",
      "[Database optimization or state management solution]",
      "[Responsive UI designed for cross-device performance]"
    ],
    demoUrl: "https://your-project2-demo.example.com",
    githubUrl: "https://github.com/your-username/project-2"
  },
  {
    id: "project-3",
    title: "[Project 3 Name]",
    tagline: "[Systems Tool / Algorithmic Engine / CLI]",
    description: "[Editable Placeholder: Describe a backend system, algorithmic problem solver, or developer utility highlighting your problem-solving depth.]",
    featured: false,
    tags: ["C++ / Java", "Data Structures", "Algorithms", "Concurrency", "Linux"],
    highlights: [
      "[Efficient memory management and algorithmic time complexity]",
      "[Multi-threaded worker pool or robust error handling pipeline]",
      "[Unit tested with automated benchmarking]"
    ],
    demoUrl: "https://your-project3-demo.example.com",
    githubUrl: "https://github.com/your-username/project-3"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code",
    description: "Core languages used for systems, scripting, and application development",
    skills: ["C++", "Java", "Python", "JavaScript (ES6+)", "TypeScript", "SQL"]
  },
  {
    title: "Web & Full-Stack Development",
    iconName: "Layers",
    description: "Modern frameworks and libraries for responsive, performant user interfaces",
    skills: ["React.js", "Node.js", "Express.js", "HTML5 / Semantic Web", "Modern CSS / Glassmorphism", "RESTful APIs", "FastAPI (Basics)"]
  },
  {
    title: "Databases & Developer Tools",
    iconName: "Database",
    description: "Storage, version control, and environments used in day-to-day engineering",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Git & GitHub", "Docker (Basics)", "Postman", "Linux / Bash"]
  },
  {
    title: "Computer Science Fundamentals",
    iconName: "Cpu",
    description: "Foundational academic pillars essential for writing robust software",
    skills: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems Concepts",
      "Computer Networks",
      "System Design Principles (Basics)"
    ]
  }
];

export const educationList: Education[] = [
  {
    institution: "Reva university",
    degree: "Bachelor of Technology (B.Tech) / B.E. in Computer Science & Engineering",
    period: "[2025 - 2029 | Expected Graduation]",
    grade: "[CGPA: 9.19 / 10.0]",
    location: "Bengaluru, India",
    coursework: [
      "Data Structures & Algorithms",
      "Design & Analysis of Algorithms",
      "Operating Systems & Process Scheduling",
      "Database Management Systems (SQL & Normalization)",
      "Computer Networks & Protocols",
      "Software Engineering & Agile Methodologies"
    ]
  }
];

export const achievements: Achievement[] = [
  {
    title: "Smart India Hackathon (SIH)",
    organization: "Ministry of Education, AICTE & Govt. of India",
    date: "[Hackathon Year]",
    badge: "Featured SIH Project: WeatherGPT",
    description: "Developed and architected WeatherGPT—an AI-driven meteorological intelligence and early weather alert system solving agricultural and emergency disaster forecasting challenges.",
    link: "https://www.sih.gov.in/",
    isFeatured: true
  },
  {
    title: "[Hackathon / Coding Competition Name]",
    organization: "[Organizing Institution or Platform]",
    date: "[Month, Year]",
    badge: "[Finalist / Winner / Participant]",
    description: "[Editable Placeholder: Add details regarding your role, challenges tackled, and team achievements during this competition.]",
    isFeatured: false
  },
  {
    title: "[Competitive Programming / LeetCode Milestone]",
    organization: "[LeetCode / CodeChef / HackerRank]",
    date: "[Ongoing]",
    badge: "[X+ Problems Solved / Rank]",
    description: "[Editable Placeholder: Solved algorithmic problems across Arrays, Linked Lists, Trees, Graphs, and Dynamic Programming.]",
    isFeatured: false
  }
];

export const certifications: Certification[] = [
  {
    title: "[Certification Title 1, e.g., Cloud Foundations or Full-Stack Specialization]",
    issuer: "[Issuing Authority, e.g., AWS, Coursera, Meta, Google]",
    date: "[Month, Year]",
    credentialId: "[Credential ID: ABC-12345]",
    skills: ["Cloud Computing", "Architecture", "Best Practices"],
    verifyUrl: "https://example.com/verify-cert-1"
  },
  {
    title: "[Certification Title 2, e.g., Problem Solving (Data Structures & Algorithms)]",
    issuer: "[Issuing Authority, e.g., HackerRank, Coursera, Udemy]",
    date: "[Month, Year]",
    credentialId: "[Credential ID: XYZ-67890]",
    skills: ["Data Structures", "Algorithms", "Optimization"],
    verifyUrl: "https://example.com/verify-cert-2"
  }
];
