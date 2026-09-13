export const portfolioData = {
  personal: {
    name: "Jaishriram PM",
    handle: "@Jaishriram2004",
    title: "BI Specialist & Freelance Developer",
    subtitle: "Business Intelligence specialist and freelance developer with enterprise analytics experience at Genpact and a software engineering background from Amazon. I help teams make confident, data-driven decisions by analyzing trends, driving targeted campaigns, and building interactive dashboards. Alongside BI, I build fast, production-grade web applications and automated tools for clients with the engineering discipline gained at Amazon.",
    location: "Bangalore, India",
    email: "jaishrirampm@gmail.com",
    phone: "+91 9361253908",
    availability: "Available for BI, Data & Developer Roles",
    github: "https://github.com/Jaishriram2004",
    leetcode: "https://leetcode.com/Jai-shri-ram",
    linkedin: "https://linkedin.com/in/jaishriram-pm",
    bio: "I'm driven to build the data infrastructure and analytics systems that power smarter business decisions. With hands-on experience engineering ETL pipelines, automating enterprise workflows at Genpact, and shipping production software at Amazon, I'm now looking to take on roles where I can architect scalable data platforms, design executive-grade dashboards, and bridge the gap between raw data and strategic action — whether that's as a Data Engineer building the backbone or a Business Analyst translating numbers into real-world impact. I thrive at the intersection of engineering and analytics, and I'm eager to join a team where I can own the full data lifecycle from ingestion to insight."
  },
  stats: [
    {
      value: "1+",
      label: "Years Experience",
      detail: "Amazon & Genpact",
      link: "/experience"
    },
    {
      value: "750+",
      label: "Competitive Programming",
      detail: "LeetCode & Algorithms",
      link: "https://leetcode.com/Jai-shri-ram"
    },
    {
      value: "4+",
      label: "Featured Projects",
      detail: "ETL & Distributed AI",
      link: "/projects"
    }
  ],
  principles: [
    {
      title: "Data & Pipeline Engineering",
      description: "Architecting resilient, automated ETL/ELT pipelines, real-time data ingestion, and scalable data warehouses using modern cloud and distributed frameworks."
    },
    {
      title: "Business Intelligence & Analytics",
      description: "Designing executive-grade interactive dashboards, semantic data models, and KPI systems that transform complex data into actionable business strategy."
    },
    {
      title: "Software Engineering Rigor",
      description: "Engineering scalable backend services, performant APIs, and maintainable software architectures with the production standards honed at Amazon."
    },
    {
      title: "Freelance Web & App Development",
      description: "Designing and shipping responsive websites, dynamic full-stack web applications, and tailored digital experiences for global clients with modern UI/UX."
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Business Analyst",
      company: "Genpact",
      period: "October 2025 — Present",
      location: "Hybrid (Bangalore)",
      type: "Full-time",
      highlights: [
        "Developed and automated SAS workflows for enterprise banking, significantly improving data processing speed and reporting accuracy.",
        "Built robust SQL and SAS analytical solutions to process large-scale banking datasets for portfolio performance and risk analytics.",
        "Created interactive Tableau and Power BI dashboards, empowering senior business stakeholders with data-driven decision insights."
      ],
      skills: ["SAS", "SQL", "Tableau", "Power BI", "Banking Analytics", "SAS Enterprise Guide"]
    },
    {
      id: "exp-2",
      role: "Software Development Engineer Intern",
      company: "Amazon",
      period: "January 2025 — July 2025",
      location: "Chennai, India",
      type: "Internship",
      highlights: [
        "Engineered the Kindle Pinnable Content feature using React Native and native C++ modules, enabling readers to pin, organize, and quickly reference important reading sections across active sessions.",
        "Architected resilient cloud data synchronization routines with AWS backend services, ensuring seamless cross-device synchronization of pinned content states.",
        "Optimized AWS-based cloud synchronization workflows and client payload structures, achieving a 40% improvement in overall application latency and performance."
      ],
      skills: ["React Native", "C++", "AWS", "Kindle Pinnable Content", "Cloud Synchronization", "Performance Optimization"]
    }
  ],
  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "PSG College of Technology",
      period: "August 2021 — July 2025",
      grade: "CGPA: 8.04 / 10.0",
      details: "Comprehensive coursework in Data Structures, Database Systems, Software Engineering, Deep Learning, and Post-Quantum Cryptography."
    }
  ],
  publications: [
    {
      title: "Ranking of post-quantum cryptography signature schemes using EDAS",
      publisher: "DOI Publication",
      date: "March 2025",
      description: "Research study applying the EDAS multi-criteria decision-making framework to evaluate and rank post-quantum cryptographic signature schemes."
    }
  ],
  achievements: [
    {
      title: "Excellence in Work Certificate",
      organization: "Samsung Prism Internship",
      description: "Awarded for exceptional engineering contributions and performance during the Samsung Prism internship project."
    },
    {
      title: "Best Project Award — Split Learning",
      organization: "Department of IT, PSG College of Technology",
      description: "Recognized for developing the Resource-Aware Split-Fed Deep Learning framework for edge devices."
    }
  ],
  skills: [
    {
      category: "Languages & Core",
      items: [
        { name: "Python", level: 92 },
        { name: "SQL", level: 95 },
        { name: "SAS", level: 88 },
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 82 }
      ]
    },
    {
      category: "Data Engineering & Analytics",
      items: [
        { name: "Apache Airflow", level: 90 },
        { name: "ETL Pipelines", level: 92 },
        { name: "Pandas / NumPy", level: 90 },
        { name: "PostgreSQL & MySQL", level: 88 },
        { name: "MongoDB", level: 80 },
        { name: "Data Validation & APIs", level: 88 }
      ]
    },
    {
      category: "BI Tools & Infrastructure",
      items: [
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 88 },
        { name: "SAS Enterprise Guide", level: 86 },
        { name: "AWS Cloud", level: 82 },
        { name: "Docker & Containers", level: 84 },
        { name: "GitHub & Version Control", level: 90 }
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Customer Campaign Analytics Platform",
      category: "Data Engineering",
      shortDescription: "End-to-end automated data ingestion, validation, and ETL pipeline loading into a PostgreSQL data warehouse.",
      description: "Engineered an enterprise data pipeline to ingest customer, campaign, and transaction datasets from heterogeneous sources. Applied automated validation rules, data cleaning, and schema transformation before loading into a PostgreSQL data warehouse scheduled via Apache Airflow.",
      metrics: ["100k+ Rows/Batch", "PostgreSQL Star-Schema", "Apache Airflow Orchestrated"],
      tech: ["Python", "SQL", "PostgreSQL", "Pandas", "Apache Airflow", "Docker", "Power BI"],
      githubUrl: "https://github.com/Jaishriram2004",
      liveUrl: "",
      featured: true
    },
    {
      id: "proj-2",
      title: "Resource-Aware Split-Fed Learning",
      category: "AI & Deep Learning",
      shortDescription: "Deep learning framework implementing dynamic layer-splitting to optimize client-server computation.",
      description: "Developed a resource-aware Split-Fed Learning framework designed for resource-constrained edge devices. Implemented dynamic layer-splitting algorithms to balance computational workload between edge clients and central servers while maintaining model accuracy.",
      metrics: ["Best Project Award Winner", "Dynamic Layer Splitting", "PyTorch Framework"],
      tech: ["Python", "PyTorch", "NumPy", "Deep Learning", "Split-Fed Learning"],
      githubUrl: "https://github.com/Jaishriram2004",
      liveUrl: "",
      featured: true
    },
    {
      id: "proj-3",
      title: "Enterprise Banking Risk & Regulatory Engine",
      category: "Data Engineering",
      shortDescription: "Automated SAS and SQL risk analytics engine processing high-volume financial transactions.",
      description: "Built automated SAS macros and complex SQL scripts for Genpact enterprise banking clients. Developed data aggregation models for credit risk assessment, portfolio exposure metrics, and regulatory reporting delivered directly into Power BI dashboards.",
      metrics: ["37x Query Acceleration", "Automated SAS Workflows", "Executive BI Dashboards"],
      tech: ["SAS", "SQL", "PostgreSQL", "Power BI", "Tableau", "Banking Analytics"],
      githubUrl: "https://github.com/Jaishriram2004",
      liveUrl: "",
      featured: true
    },
    {
      id: "proj-4",
      title: "Post-Quantum Signature Evaluator (EDAS)",
      category: "AI & Deep Learning",
      shortDescription: "Decision-making ranking system evaluating post-quantum cryptographic signature schemes.",
      description: "Implemented an automated evaluation framework applying the Evaluation Based on Distance from Average Solution (EDAS) algorithm to rank post-quantum cryptographic signature schemes based on security level, key size, and signature generation speed.",
      metrics: ["Published Research Paper", "EDAS Decision Framework", "Post-Quantum Security"],
      tech: ["Python", "NumPy", "EDAS Algorithm", "Cryptography", "Data Science"],
      githubUrl: "https://github.com/Jaishriram2004",
      liveUrl: "",
      featured: true
    },
    {
      id: "proj-5",
      title: "Enterprise Healthcare Agentic AI Platform",
      category: "Software Development",
      shortDescription: "Production web application implementing Next-Gen Agentic AI for intelligent healthcare workflow automation.",
      description: "Engineered and deployed a full-stack production web application for Healthcare Revenue Cycle Management (RCM). Features automated claims verification, Agentic AI workflow agents, sub-second page loads, and executive analytics dashboards.",
      metrics: ["98+ Lighthouse Score", "< 450ms Load Speed", "Vercel Edge CDN", "Responsive Modern UI"],
      tech: ["React", "Vite", "Agentic AI", "JavaScript", "CSS3", "Vercel"],
      githubUrl: "https://github.com/Jaishriram2004",
      liveUrl: "https://www.labrixx.com/",
      featured: true
    }
  ]
};




