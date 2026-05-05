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
  decisions?: { title: string; body: string }[]
  challenges?: { title: string; body: string }[]
  outcome?: string
  role?: string
  retrospective?: string
}

export const projects: Project[] = [
  {
    slug: "customer-feedback-intelligence",
    title: "Customer Feedback Intelligence System",
    tagline: "LLM-powered complaint classification and routing at scale.",
    description:
      "Built and deployed a production LLM-based customer complaint classification and routing system processing 100k+ historical enquiries at Jetstar Airways. Combined the Claude API with KNN clustering to identify complaint categories, achieving 92% classification coverage — replacing a brittle rule-based approach and materially improving routing accuracy and resolution efficiency. Designed a RAG-based architecture integrating internal knowledge sources, evaluating trade-offs across latency, cost, and model performance.",
    tags: ["Generative AI", "NLP", "LLMs", "Production ML"],
    techStack: ["Python", "Claude API", "LightGBM", "RAG", "KNN clustering", "LangChain", "Snowflake", "MLOps"],
    featured: true,
    employer: "Jetstar Airways",
    period: "2023 – Present",
    summary: "Production LLM system that classifies and routes 100k+ customer complaints, replacing a brittle rule-based pipeline.",
    problem:
      "Jetstar's customer complaint routing relied on a fragile rule-based system that struggled with the natural language variability of real customer enquiries. Rerouting between teams was identified as the primary choke point causing resolution delays. The business had articulated a vague need for a better way to handle complaints and internal discovery work was needed to diagnose where the actual breakdown was occurring.",
    approach:
      "Built a production classification and routing system combining the Claude API with KNN clustering across 100k+ historical customer enquiries. A RAG-based architecture was designed to integrate internal knowledge sources. NPS scores were found to be inconsistent with written feedback text, so scores were deprioritised and a LightGBM model was trained to reclassify sentiment directly from the text signal. Classification confidence thresholds were determined using the elbow method and silhouette scoring. Delivered in collaboration with a Data Engineer, Data BA, Data Scientist, and Power BI Analyst, with SME consultation throughout.",
    decisions: [
      {
        title: "Build vs buy",
        body: "Third-party vendors including Qualtrics, Hightouch, and Amazon Comprehend were evaluated through a structured PoC. The decision to build was made after comparing results against cost across each vendor, and factored in engineering buy-in which strongly favoured an internal build for long-term maintainability.",
      },
      {
        title: "Model approach",
        body: "Three approaches were considered: traditional NLP with advanced feature engineering, prompt-engineered LLMs, and fine-tuned LLMs. Prompt-engineered LLMs via the Claude API were selected based on PoC performance, speed to production, and cost profile relative to fine-tuning.",
      },
      {
        title: "Confidence thresholds",
        body: "Classification boundaries were set empirically using the elbow method and silhouette scoring to identify the optimal number of complaint clusters.",
      },
    ],
    challenges: [
      {
        title: "Data quality",
        body: "Customer language was often non-specific, and NPS scores frequently contradicted the sentiment expressed in the written text. The score signal was deprioritised in favour of the text, and a LightGBM model was introduced to reclassify scores from the text directly, cleaning the signal upstream before it reached the classifier.",
      },
      {
        title: "Governance timing",
        body: "The Data Governance Council process was not engaged during the PoC phase in order to accelerate early delivery. This created friction prior to productionisation and added time to the final release. Engaging governance earlier in future projects is a direct takeaway.",
      },
      {
        title: "Stakeholder approach",
        body: "Leadership wanted a fail-fast approach to identify the best path forward quickly. The structured PoC across vendor and build options directly addressed this, providing clear evidence to support the final recommendation.",
      },
    ],
    outcome:
      "92% classification coverage achieved across complaint categories. Replaced the rule-based routing system entirely in production. Materially improved routing accuracy and resolution efficiency across the complaints function.",
    role: "Owned the project end-to-end, from discovery and problem framing through architecture, vendor evaluation, team coordination, and production handover. Identified rerouting as the core problem through internal research, defined the technical approach, and presented the build vs buy recommendation to stakeholders.",
    retrospective:
      "I would have engaged the Data Governance Council earlier in the process, during the PoC rather than after. Skipping this to accelerate early delivery created a bottleneck before productionisation that cost more time than it saved. I would also have sought richer data sources from the outset to improve signal quality upstream.",
  },
  {
    slug: "maintenance-log-classification",
    title: "Maintenance Log Classification and Fault Forecasting",
    tagline: "NLP pipeline for aircraft maintenance logs with predictive fault detection.",
    description:
      "Designed and delivered an NLP pipeline for automated classification of aircraft maintenance and engineering logs at Jetstar Airways, where unclear technician-written entries previously required manual expert review. Extended the system to forecast recurring fault patterns across the fleet — reducing mean time to identify faults by 30% and enabling proactive maintenance scheduling. The system handles noisy, domain-specific language with high accuracy across a diverse range of fault types.",
    tags: ["NLP", "Classical ML", "Forecasting", "Production ML"],
    techStack: ["Python", "NLTK", "TF-IDF", "TextBlob", "LightGBM", "Snowflake", "Power BI", "SkyWise"],
    featured: true,
    employer: "Jetstar Airways",
    period: "2023 – Present",
    summary: "NLP pipeline that classifies aircraft maintenance logs and forecasts recurring fault patterns, reducing mean time to identify faults by 30%.",
    problem:
      "Aircraft maintenance and engineering logs were entered manually by technicians using domain-specific shorthand, making automated classification impractical without significant domain expertise. Unclear entries previously required manual expert review, creating bottlenecks in maintenance scheduling. The Operations Lead identified this as a high-value area for data science, with a well-defined problem scope from the outset.",
    approach:
      "Designed and delivered an NLP pipeline for automated classification of aircraft maintenance logs, enriched with advanced feature engineering. Structured features were extracted from unstructured log text and connected to the fault code repository. Pre-processing involved text normalisation, stopword removal including aviation-specific terms using NLTK, and TF-IDF vectorisation with bigram features across a maximum of 10,000 features. Data augmentation was performed using TextBlob back-translation to convert technician shorthand into plain English, introducing linguistic variation and improving robustness across underrepresented fault categories such as runway debris and micro fractures. The classification system was extended to forecast recurring fault patterns using LightGBM, enabling proactive maintenance scheduling with parts in stock and operational spare aircraft available before faults occurred. Delivered in collaboration with SkyWise developers and a Data Visualisation Analyst who built the Power BI reporting layer.",
    decisions: [
      {
        title: "NLP approach",
        body: "A RAG-based architecture was not sanctioned for this project given its vintage. Instead, the pipeline was built on classical NLP enriched with advanced feature engineering, connecting to the fault code repository and applying domain-specific preprocessing informed heavily by SME input from aircraft engineers.",
      },
      {
        title: "Handling domain-specific language",
        body: "Technician shorthand presented a significant vocabulary challenge. Back-translation via TextBlob was introduced to normalise tech-speak into standard English, effectively bridging the gap between unstructured log entries and a classifiable text format.",
      },
      {
        title: "Fault forecasting architecture",
        body: "LightGBM was selected for the forecasting component given its strong performance on tabular data and interpretability for operational stakeholders. The model was scoped specifically to predict scheduled maintenance windows, directly informing parts procurement and spare aircraft planning.",
      },
    ],
    challenges: [
      {
        title: "Engineer availability",
        body: "Aircraft engineers are operationally constrained and difficult to schedule for data science input. To work around this, preliminary analysis was run to group similar fault code complaints, allowing engineers to classify batches of complaints rather than individual entries — significantly reducing the time burden on their end.",
      },
      {
        title: "Unlabelled and inconsistent data",
        body: "The dataset was almost entirely unlabelled and contained inconsistent entries with mismatched fault codes due to freeform manual entry. Once a subset of labels was identified, these were used to reverse engineer labelling across the broader dataset, effectively converting an unsupervised learning problem into a semi-supervised one.",
      },
      {
        title: "Stakeholder buy-in",
        body: "Early engagement with engineers was difficult. As model performance improved and engineers saw tangible uplift, their willingness to provide higher quality input increased organically, creating a positive feedback loop between model quality and SME engagement.",
      },
    ],
    outcome:
      "Reduced mean time to identify faults by 30%. Enabled proactive maintenance scheduling with parts in stock and operational spare aircraft available ahead of predicted faults. Replaced manual expert review of ambiguous log entries with an automated classification pipeline.",
    role: "Took full ownership of the solution design from a well-defined operational brief. Designed the entire NLP and forecasting architecture, oversaw development in collaboration with SkyWise developers, and coordinated the Power BI reporting layer with a Data Visualisation Analyst.",
    retrospective:
      "This project was an important learning milestone. It deepened my understanding of operational processes and how aircraft engineers think and work, which directly shaped how I approach domain-heavy problems. The delivery went smoothly and the experience built my confidence in taking ownership of future projects and identifying where data science can add genuine operational value.",
  },
  {
    slug: "operational-knowledge-assistant",
    title: "Operational Knowledge Assistant",
    tagline: "Amazon Bedrock-powered internal policy retrieval assistant.",
    description:
      "Architected and built an internal LLM-powered knowledge assistant using Amazon Bedrock, trained on operational manuals and staff travel policy documents. The system enables accurate, instant retrieval of policy information — reducing staff onboarding time by over 95% with near-100% accuracy in seat allocation decisions. Built on a RAG architecture with careful chunking and retrieval strategies optimised for long-form policy documents. Currently in final pre-production validation.",
    tags: ["Generative AI", "Agentic AI", "RAG", "Production ML", "AWS"],
    techStack: ["Amazon Bedrock", "Claude Sonnet", "Strands Agents", "RAG", "Bedrock Knowledge Base", "Bedrock Data Automation", "S3", "MCP", "AgentCore Gateway", "Navitaire NewSkies", "Python", "Datadog"],
    featured: true,
    employer: "Jetstar Airways",
    period: "2024 – Present",
    summary: "Amazon Bedrock-powered agentic system that automates staff traveller seat allocation, reducing per-flight processing from manual manifest review to a 1.6-second runtime.",
    problem:
      "The Airport Experience team was responsible for checking in and assigning seats to staff travellers across every flight. Jetstar's expectation was roughly 30 seconds per staff traveller — a target that was increasingly difficult to meet due to the manual nature of the process. Staff had to retrieve a flight manifest and manually work through seat allocation against complex, document-heavy policy and procedures. With an average of 4–5 staff travellers per flight, this created a consistent operational bottleneck at check-in.",
    approach:
      "Conducted a comprehensive RFI across multiple LLM providers before selecting Amazon Bedrock, which was already an established Qantas Group partner — reducing procurement friction and satisfying data governance requirements. Designed a RAG architecture against a Bedrock Knowledge Base connected via Bedrock Data Automation to S3 buckets containing the full policy document set. A qualifier guardrail was implemented upfront to filter out-of-scope queries, ambiguous inputs, and hallucinated responses — enforcing a genuine answer or a clean 'no' when the correct information could not be retrieved. The core system uses a hybrid deterministic-agentic approach: a curated decision flowchart handles straightforward cases deterministically, failing over to a Claude Sonnet-powered multi-agent orchestration layer for any flight with more than 3 staff travellers or multiple staff on the same booking. The agent layer was built and deployed using Strands Agents in a supervisor pattern, consisting of five specialised agents — Disruption Handler, Priority Manager, Seating Optimisation, Business Rules, and Explanation — coordinated by an Orchestrator agent. The Business Rules agent queries the Bedrock Knowledge Base directly for policy retrieval. External system integration is handled via MCP and an AgentCore Gateway connected to Navitaire NewSkies. The Explanation agent generates a human-readable summary of the decision flow for Airport Experience staff.",
    decisions: [
      {
        title: "Amazon Bedrock over alternative providers",
        body: "A formal RFI process evaluated multiple LLM providers. Bedrock was selected primarily because AWS was already an established Qantas Group partner, which satisfied data governance requirements and removed the need for a lengthy new vendor procurement process. This was a deliberate risk reduction decision, not purely a technical one.",
      },
      {
        title: "Hybrid deterministic-agentic architecture",
        body: "A purely agentic approach would have been slower, more expensive, and harder to validate for the majority of straightforward cases. A deterministic flowchart handles simple allocations instantly, with the multi-agent layer invoked only when complexity thresholds are met — more than 3 staff travellers or multiple staff on the same booking. This kept the PoC cost-effective and reliable while still demonstrating genuine agentic capability.",
      },
      {
        title: "Scoping down to a barebones PoC",
        body: "The initial proposal involved a more expansive pilot that would have been expensive and slow to deliver. Given that leadership had never deployed anything agentic in the organisation, the priority was a fast, reliable, accurate, and cost-effective proof of concept. Cutting scope to the highest-ROI use case allowed the PoC to be delivered in partnership with AWS via a shadow build, reducing delivery risk significantly.",
      },
    ],
    challenges: [
      {
        title: "Data Governance Council engagement",
        body: "Applying learnings from earlier projects, the Data Governance Council was engaged from the earliest possible stage. Getting access to Kiro and non-sanctioned LLM models within the organisation required navigating this process carefully — early engagement prevented the blockers that had slowed prior initiatives.",
      },
      {
        title: "Deploying agentic AI for the first time in the organisation",
        body: "Leadership had no prior exposure to agentic systems, which created understandable hesitancy. The PoC had to simultaneously demonstrate reliability, accuracy, and cost-effectiveness while also building internal confidence in the approach. The shadow build model with AWS allowed the team to develop in-house capability while maintaining delivery momentum.",
      },
      {
        title: "Policy complexity and test case design",
        body: "The staff traveller on-boarding policy is genuinely complex — enough that thorough test case design was non-negotiable. Significant effort went into designing test cases that covered edge cases across the policy space, which was critical for validating both the deterministic and agentic paths.",
      },
    ],
    outcome:
      "Reduced seat allocation runtime from a manual manifest review process targeting 30 seconds per staff traveller to approximately 1.6 seconds for an entire flight — covering an average of 4–5 staff travellers. Near-100% accuracy in seat allocation decisions. Currently in final pre-production validation.",
    role: "Scoped the PoC from a broader pilot proposal to a focused, high-ROI delivery. Managed the AWS relationship throughout the shadow build. Designed the test case suite and authored Secure By Design documents and NFRs for the PoC. Mentored a Senior Robotics Engineer through the build process. Supported Data Governance Council engagement from project initiation.",
    retrospective:
      "This was the most carefully curated delivery of the three Jetstar AI projects, benefiting directly from the fail-fast learnings of earlier PoCs. If I were to repeat it, I would ensure the Data Governance and procurement pathway was documented from day one — much of the early phase involved waiting on responses from multiple stakeholders to understand the process. That documentation now exists and will accelerate future agentic initiatives in the organisation.",
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

export type Article = {
  title: string
  url: string
  description: string
  publication: string
  date: string
}

export const articles: Article[] = [
  {
    title: "I Built a RAG Evaluation Framework from Scratch. Here's What Broke It.",
    url: "https://medium.com/@sakshamnagp/i-built-a-rag-evaluation-framework-from-scratch-heres-what-broke-it-762767228f06",
    description:
      "A controlled experiment across chunk size, overlap, and top-k retrieval using 30 aviation safety reports — and what the results actually revealed.",
    publication: "Medium",
    date: "May 2026",
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
