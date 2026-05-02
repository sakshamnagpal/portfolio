export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  tags: string[]
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  // Rich detail fields for individual project pages
  employer?: string
  period?: string
  summary?: string
  problem?: string
  approach?: string
  outcome?: string
}

export const projects: Project[] = [
  {
    slug: "customer-feedback-intelligence",
    title: "Customer Feedback Intelligence System",
    tagline: "LLM-powered complaint classification and routing at scale.",
    description:
      "Built and deployed a production LLM-based customer complaint classification and routing system processing 100k+ historical enquiries at Jetstar Airways. Combined the Claude API with KNN clustering to identify complaint categories, achieving 92% classification coverage — replacing a brittle rule-based approach and materially improving routing accuracy and resolution efficiency. Designed a RAG-based architecture integrating internal knowledge sources, evaluating trade-offs across latency, cost, and model performance.",
    tags: ["Generative AI", "NLP", "LLMs", "Production ML"],
    techStack: ["Python", "Claude API", "RAG", "KNN / Clustering", "LangChain", "Snowflake", "MLOps"],
    featured: true,
    employer: "Jetstar Airways",
    period: "2023 – Present",
    summary: "Production LLM system that classifies and routes 100k+ customer complaints, replacing a brittle rule-based pipeline.",
    problem:
      "Jetstar's customer complaint routing relied on a fragile rule-based system that struggled with the natural language variability of real enquiries — resulting in misrouted complaints, slower resolution times, and limited visibility into complaint trends at scale.",
    approach:
      "Built a production classification and routing system combining the Claude API with KNN clustering to identify complaint categories from 100k+ historical enquiries. Designed a RAG-based architecture integrating internal knowledge sources. Evaluated trade-offs across latency, cost, and model performance to arrive at the production configuration.",
    outcome:
      "Achieved 92% classification coverage across complaint categories. Materially improved routing accuracy and resolution efficiency. Replaced the rule-based system entirely in production.",
  },
  {
    slug: "maintenance-log-classification",
    title: "Maintenance Log Classification & Fault Forecasting",
    tagline: "NLP pipeline for aircraft maintenance logs with predictive fault detection.",
    description:
      "Designed and delivered an NLP pipeline for automated classification of aircraft maintenance and engineering logs at Jetstar Airways, where unclear technician-written entries previously required manual expert review. Extended the system to forecast recurring fault patterns across the fleet — reducing mean time to identify faults by 30% and enabling proactive maintenance scheduling. The system handles noisy, domain-specific language with high accuracy across a diverse range of fault types.",
    tags: ["NLP", "Predictive ML", "Aviation"],
    techStack: ["Python", "spaCy", "scikit-learn", "Snowflake", "PySpark"],
    featured: true,
  },
  {
    slug: "operational-knowledge-assistant",
    title: "Operational Knowledge Assistant",
    tagline: "Amazon Bedrock-powered internal policy retrieval assistant.",
    description:
      "Architected and built an internal LLM-powered knowledge assistant using Amazon Bedrock, trained on operational manuals and staff travel policy documents. The system enables accurate, instant retrieval of policy information — reducing staff onboarding time by over 95% with near-100% accuracy in seat allocation decisions. Built on a RAG architecture with careful chunking and retrieval strategies optimised for long-form policy documents. Currently in final pre-production validation.",
    tags: ["Agentic AI", "RAG", "LLM"],
    techStack: ["Amazon Bedrock", "Python", "RAG", "AWS"],
    featured: true,
  },
  {
    slug: "customer-segmentation-anz",
    title: "Customer Segmentation & Risk Modelling",
    tagline: "ML-driven segmentation models serving 5M+ retail banking customers.",
    description:
      "Led the customer segmentation modelling workstream at ANZ Bank, coordinating analysis across a team of analysts and presenting outcomes directly to senior stakeholders. Designed controlled experiments to evaluate credit risk and segmentation models serving approximately 5 million retail banking customers. Identified feature drift and model degradation patterns that informed quarterly retraining cycles, maintaining accuracy within agreed SLA thresholds.",
    tags: ["ML", "Experimentation", "Financial Services"],
    techStack: ["Python", "scikit-learn", "SQL", "Tableau"],
    featured: false,
  },
  {
    slug: "melbourne-property-research-agent",
    title: "Melbourne Property Research Agent",
    tagline: "Agentic AI tool for suburb-level property research and investment analysis.",
    description:
      "A fully agentic React + FastAPI application that autonomously researches Melbourne suburbs for property investment decisions. Built on a LangGraph state graph with conditional edges and real-time streaming SSE — the agent selects tools dynamically with visible reasoning steps. Powered by live data sources: property prices and median sale stats from Victorian Valuer General (VGV) sales data, and suburb demographics from the ABS 2021 Census DataPack covering population, median income, household composition, and owner vs. renter split. Price trend queries render an inline Recharts chart directly in the chat UI. A Haiku-based query guardrail classifies and short-circuits irrelevant queries before they reach the agent loop. Amenities integration in progress. Backend deployed on Railway, frontend on Vercel.",
    tags: ["Agentic AI", "Full-Stack", "Property"],
    techStack: ["Python", "FastAPI", "LangGraph", "Claude API", "ABS Census Data", "VGV Sales Data", "React", "Vite", "Recharts", "Railway", "Vercel"],
    liveUrl: "https://melbourne-property-tool.vercel.app",
    githubUrl: "https://github.com/sakshamnagpal/melbourne-property-tool",
    featured: true,
  },
  {
    slug: "aus-super-calculator",
    title: "Australian Superannuation Calculator",
    tagline: "Interactive super growth projector encoding Australian tax rules.",
    description:
      "A fully client-side superannuation growth calculator built for Australian professionals. Encodes ATO rules for FY2025–26 including the Superannuation Guarantee rate, concessional contribution caps, Division 293 tax for high earners, and the Low Income Super Tax Offset (LISTO). Features scenario comparison mode, inflation-adjusted projections, a year-by-year breakdown table, and reactive input validation. Built with React, Tailwind CSS, and Chart.js — deployed on Vercel with no backend dependency.",
    tags: ["Personal Finance", "React", "Data Viz"],
    techStack: ["React", "Vite", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://aus-super-calculator.vercel.app",
    githubUrl: "https://github.com/sakshamnagpal/super-calculator",
    featured: false,
  },
]

export type SkillCategory = {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    skills: ["Python", "scikit-learn", "LLMs", "RAG", "Prompt Engineering",
             "Claude API", "OpenAI API", "Amazon Bedrock", "Hugging Face",
             "LangChain", "spaCy", "NLTK", "KNN / Clustering"],
  },
  {
    category: "Data Engineering",
    skills: ["Snowflake", "PySpark", "SQL", "SQL Server", "ETL/ELT Pipelines",
             "AWS", "GCP"],
  },
  {
    category: "Visualisation & Delivery",
    skills: ["Power BI", "Tableau", "Streamlit", "Jupyter"],
  },
  {
    category: "ML Engineering",
    skills: ["MLOps", "Model Monitoring", "CI/CD", "Containerisation",
             "GitHub Copilot"],
  },
  {
    category: "Certifications",
    skills: ["SnowPro Core — Snowflake (2025)",
             "Master of Data Science — Monash University",
             "Bachelor of Technology (CS) — Federation University"],
  },
]

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  summary: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    role: "AI Implementation Lead & Senior Data Scientist",
    company: "Jetstar Airways",
    location: "Melbourne, Australia",
    period: "Oct 2023 – Present",
    summary: "Leading delivery of AI and Generative AI solutions across operations, driving adoption of scalable, production-ready ML systems and mentoring cross-functional teams.",
    highlights: [
      "Built production LLM complaint classification system processing 100k+ enquiries, achieving 92% classification coverage",
      "Delivered NLP pipeline for aircraft maintenance log classification, reducing mean fault identification time by 30%",
      "Architected internal knowledge assistant on Amazon Bedrock, reducing staff onboarding time by over 95%",
      "Established standardised ML experimentation frameworks, reducing iteration cycles by ~30%",
      "Built reusable data and ML pipelines in Snowflake across multiple production use cases",
    ],
  },
  {
    role: "Data Scientist",
    company: "Australia and New Zealand Bank (ANZ)",
    location: "Melbourne, Australia",
    period: "Dec 2019 – Oct 2023",
    summary: "Led customer segmentation modelling and credit risk analysis across ~5M retail banking customers.",
    highlights: [
      "Led customer segmentation modelling workstream, presenting outcomes to senior business stakeholders",
      "Designed controlled experiments evaluating credit risk models serving ~5M retail banking customers",
      "Identified feature drift and degradation patterns informing quarterly retraining cycles",
      "Built dashboards and analytical tools to communicate insights across cross-functional stakeholders",
    ],
  },
  {
    role: "Data Analyst / Senior Student Systems Analyst",
    company: "Wesley College",
    location: "Melbourne, Australia",
    period: "Dec 2017 – Dec 2019",
    summary: "Analysed large datasets to drive student performance outcomes and automated reporting processes.",
    highlights: [
      "Identified improvement opportunities contributing to a 15% increase in student performance outcomes",
      "Automated reporting processes, improving efficiency across the analytics function",
    ],
  },
]
