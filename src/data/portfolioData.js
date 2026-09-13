export const portfolioData = {
  personal: {
    name: "Jaishriram PM",
    handle: "@Jaishriram2004",
    title: "BI Specialist & Freelance Developer",
    subtitle: "Business Intelligence specialist and freelance developer with enterprise analytics experience at Genpact and a software engineering background from Amazon. I help teams make confident, data-driven decisions by analyzing trends, driving targeted campaigns, and building interactive dashboards. Alongside BI, I build fast, production-grade web applications and automated tools for clients with the engineering discipline gained at Amazon.",
    location: "Bangalore, India",
    email: "jaishrirampm@gmail.com",
    phone: "+91 9361253908",
    availability: "Available for BI & Data Roles",
    github: "https://github.com/Jaishriram2004",
    leetcode: "https://leetcode.com/Jai-shri-ram",
    linkedin: "https://linkedin.com/in/jaishriram-pm",
    bio: "I'm driven to build the data infrastructure and analytics systems that power smarter business decisions. With hands-on experience engineering ETL pipelines, automating enterprise workflows at Genpact, and shipping production software at Amazon, I'm now looking to take on roles where I can architect scalable data platforms, design executive-grade dashboards, and bridge the gap between raw data and strategic action — whether that's as a Data Engineer building the backbone or a Business Analyst translating numbers into real-world impact. I thrive at the intersection of engineering and analytics, and I'm eager to join a team where I can own the full data lifecycle from ingestion to insight."
  },
  stats: [
    {
      value: "1.5+",
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
      skills: ["SAS", "SQL", "Tableau", "Power BI", "Banking Analytics", "SAS Enterprise Guide"],
      majorMilestones: [
        {
          title: "Python Campaign Reporting Migration",
          category: "Architecture & Performance Optimization",
          impact: "Workload Reduction & Speed",
          description: "Engineered and migrated the entire campaign reporting infrastructure to Python rather than relying solely on SAS, achieving improved data optimization, faster execution, and significant reduction in computational workload."
        },
        {
          title: "File Posting & Automated Data Transmission",
          category: "Workflow Automation & Scripting",
          impact: "90% Manual Intervention Reduction",
          description: "Created robust Python and Shell scripting pipelines for automating file posting and data transfers, reducing manual interventions in repetitive operational tasks by 90%."
        },
        {
          title: "Multi-Billion Dollar Campaign Automations (Virgin & Verizon)",
          category: "Enterprise Client Impact",
          impact: "8 Core Automations",
          description: "Maintained and managed around 8 mission-critical data automations for both Virgin and Verizon enterprise clients, powering multi-billion dollar marketing campaigns and financial analytics."
        }
      ]
    },
    {
      id: "exp-2",
      role: "Software Development Engineer Intern",
      company: "Amazon",
      period: "January 2025 — July 2025",
      location: "Chennai, India",
      type: "Internship",
      highlights: [
        "Architected low-latency native C++ caching and DOM/EPUB node bridging, delivering smooth 60 FPS scrolling and negligible memory overhead on resource-constrained devices.",
        "Engineered resilient cross-device cloud synchronization protocols with AWS backend services, ensuring real-time state persistence across Kindle e-readers, iOS, and Android clients.",
        "Optimized Kindle's core algorithm workflows (crawling, search, content retrieval) by migrating from legacy MAWS to an internal AWS cloud architecture, reducing overall execution time by 40% and eliminating two core package dependencies."
      ],
      skills: ["React Native", "C++", "AWS", "Cloud Architecture", "Performance Optimization"],
      majorMilestones: [
        {
          title: "Kindle Pinnable Content Production Feature (Sole Ownership)",
          category: "Client Engineering & Native C++ Architecture",
          impact: "Shipped Production Feature to Kindle Readers",
          description: "Independently architected and shipped the complete Kindle Pinnable Content experience from scratch. Built native C++ indexing bridges for fast DOM/EPUB excerpt extraction with an interactive React Native UI overlay, allowing readers to pin, reorder, and review crucial passages with zero rendering lag and sub-15ms lookup speeds."
        },
        {
          title: "Real-Time Cross-Device AWS Cloud Sync Engine",
          category: "Cloud Synchronization & Data Persistence",
          impact: "Sub-200ms Cross-Device State Sync",
          description: "Engineered high-concurrency cloud synchronization routines with AWS backend services to seamlessly synchronize pinned cards, bookmarks, and reader annotations in real time across mobile and dedicated e-reader hardware."
        },
        {
          title: "Kindle Core Algorithm & AWS Cloud Migration",
          category: "Architecture Migration & Cost Optimization",
          impact: "40% Execution Reduction & Dependency Elimination",
          description: "Optimized a high-impact workflow powering Kindle's core algorithms (including crawling, finding, and content indexing) by migrating from the legacy MAWS system to a modern internal AWS-based architecture. Reduced overall execution time by 40%, eliminated dependency on two legacy core packages, significantly reduced cloud operational costs, and elevated entire workflow maintainability."
        }
      ]
    },
    {
      id: "exp-3",
      role: "Research Intern",
      company: "Samsung PRISM",
      period: "May 2024 — October 2024",
      location: "Remote / Bengaluru, India",
      type: "Internship",
      highlights: [
        "Architected and trained a custom Multi-Head Attention Vision Transformer (ViT) model for high-precision attention-seeking behavior recognition and multimodal audio-visual pattern detection.",
        "Curated and engineered primary datasets from 2,000+ participants, expanding the dataset to 20,000+ augmented audio-visual samples for robust attention-seeking training under diverse environments.",
        "Conferred the prestigious Best Project Award and Excellence in Work Certificate by Samsung PRISM in recognition of outstanding model performance, technical innovation, and delivery."
      ],
      skills: ["Vision Transformers (ViT)", "Multi-Head Attention", "Deep Learning", "PyTorch"],
      majorMilestones: [
        {
          title: "Multi-Head Attention Vision Transformer (ViT) Architecture",
          category: "Deep Learning & Transformer Models",
          impact: "Multimodal Attention Tracking",
          description: "Engineered and fine-tuned a custom Vision Transformer architecture integrated with multi-head self-attention mechanisms to model complex spatial and temporal attention cues from multimodal streams with low-latency inference."
        },
        {
          title: "20k+ Augmented Audio-Visual Dataset Pipeline",
          category: "Data Engineering & Augmentation",
          impact: "2,000+ Participants & 20k+ Samples",
          description: "Spearheaded primary data gathering from 2,000+ individuals and engineered an automated data augmentation and balancing pipeline generating 20,000+ audio-visual training instances for attention-seeking classification."
        },
        {
          title: "Samsung PRISM Best Project Award",
          category: "Corporate Recognition & Award",
          impact: "Best Project Award Winner",
          description: "Conferred the Samsung PRISM Best Project Award and Excellence in Work Certificate for pioneering attention-seeking modeling, exceptional experimental benchmarking, and production-grade delivery."
        }
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "PSG College of Technology",
      period: "August 2021 — July 2025",
      grade: "CGPA: 8.04 / 10.0",
      details: "Comprehensive coursework in Data Structures, Database Systems, Software Engineering, Deep Learning, and Post-Quantum Cryptography.",
      highlights: [
        {
          title: "Best Project Awardee — IT Department (2024–2025)",
          description: "Presented the prestigious V Marappan Award by PSG Tech Alumni Association in recognition of the final year project 'Security Enhanced Resource Aware Federated Split Learning for Edge Platforms' (guided by Ms. D Dharani), adjudged as the BEST project across the B.Tech IT Programme.",
          type: "award",
          certificateImage: "/certificates/psg_best_project_award.jpg",
          certificateLabel: "PSG Tech Alumni Association — Certificate of Appreciation (V Marappan Award for Best Project)"
        },
        {
          title: "Winner — National Level Technical Symposium",
          description: "Won 1st prize in the National Level Technical Symposium during the third semester, competing across algorithmic problem solving and technical presentation.",
          type: "competition"
        },
        {
          title: "Class Representative (Third Semester)",
          description: "Elected as Class Representative for the IT cohort during the third semester, serving as key liaison for academic coordination, event planning, and student advocacy.",
          type: "leadership"
        }
      ]
    }
  ],
  publications: [
    {
      title: "Ranking of post-quantum cryptography signature schemes using EDAS",
      publisher: "DOI Publication — MJEE",
      date: "March 2025",
      description: "Research study applying the EDAS multi-criteria decision-making framework to evaluate and rank post-quantum cryptographic signature schemes.",
      url: "https://oiccpress.com/mjee/article/view/10863/12429"
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




