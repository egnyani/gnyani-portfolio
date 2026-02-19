// Define interfaces for type safety
export interface ExperienceBullet {
  id: string;
  text: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: ExperienceBullet[];
}

// Export the experiences data
export const experiences: Experience[] = [
  {
    id: "reli",
    role: "Software Developer",
    company: "RELI Group Inc.",
    location: "Syracuse, New York",
    period: "October 2024 – Present",
    bullets: [
      {
        id: "reli-1",
        text: "Designed and shipped agentic AI code modernization agents using Claude, tool calling, and orchestration workflows to analyze legacy codebases and automate multi-step refactors from ingestion to validated output."
      },
      {
        id: "reli-2",
        text: "Built and optimized distributed data pipelines in Databricks using Python, PySpark, and SQL to process 50M+ healthcare claims records, enabling scalable analytics for revenue leakage and compliance risk detection."
      },
      {
        id: "reli-3",
        text: "Embedded anomaly detection (Isolation Forest, LOF) into production pipelines and exposed interpretable risk scoring via SHAP and LIME for downstream APIs and internal tooling."
      },
      {
        id: "reli-4",
        text: "Developed RAG-powered search and Q&A services using FAISS vector indexing, structured data models, and LLM reasoning to deliver accurate, explainable responses over documents and analytics at scale."
      },
      {
        id: "reli-5",
        text: "Leveraged LLM-assisted developer tooling (Cursor Composer) to accelerate SQL development, data exploration, code refactoring, and feature delivery while maintaining code quality."
      },
      {
        id: "reli-6",
        text: "Driving system reliability and observability initiatives via Prometheus, Grafana, and CloudWatch, cutting incident response times by 40% and boosting service uptime to 99.99%."
      }
    ]
  },
  {
    id: "intern-reli",
    role: "Software Developer Intern",
    company: "RELI Group Inc.",
    location: "Syracuse, New York",
    period: "February 2025 – September 2025",
    bullets: [
      {
        id: "intern-reli-1",
        text: "Conceived and deployed a full-stack Skills Intelligence Platform (FastAPI, React.js, Azure SQL, Docker) adopted by 2,000+ employees, automating talent discovery and slashing manual allocation time by 60%."
      },
      {
        id: "intern-reli-2",
        text: "Built and deployed serverless backend microservices on Azure Function Apps to power REST APIs and event-driven pipelines, using FastAPI, JWT-based authentication, RBAC, async processing, retries, caching, and structured logging."
      },
      {
        id: "intern-reli-3",
        text: "Implementing enterprise-level RAG (Retrieval-Augmented Generation) pipelines powered by FAISS, LangChain, and LLM APIs, achieving near-real-time contextual retrieval with 90%+ precision on contract analytics."
      },
      {
        id: "intern-reli-4",
        text: "Deployed and managed scalable applications on Azure using Function Apps, App Service, Blob Storage, and Azure Kubernetes Service, while building container-native CI/CD pipelines with GitHub Actions and Jenkins to support backend processing, zero-downtime deployments, and proactive telemetry."
      }
    ]
  },
  {
    id: "acmesia",
    role: "Software Engineer Intern",
    company: "Acmesia Consultants LLP",
    location: "Mumbai, India",
    period: "May 2022 – July 2023",
    bullets: [
      {
        id: "acmesia-1",
        text: "Led end-to-end architecture and delivery of a cloud-native client portal (Flask/Django, React.js, MongoDB), automating manual workflows and cutting operational latency by 70%."
      },
      {
        id: "acmesia-2",
        text: "Developed high-throughput Node.js microservices backed by PostgreSQL, achieving sub-100ms response times for analytics dashboards consumed by executive leadership."
      },
      {
        id: "acmesia-3",
        text: "Orchestrated a serverless computing environment on AWS Lambda, API Gateway, S3, and RDS, guaranteeing 99.9% uptime while lowering infrastructure spend by 30% through elastic scaling."
      },
      {
        id: "acmesia-4",
        text: "Demonstrated DevOps excellence by leveraging Agile methodologies, Test-Driven Development (TDD), and targeted performance-tuning sprints to strengthen CI/CD pipelines and achieve a 45% increase in feature delivery velocity."
      }
    ]
  }
];
