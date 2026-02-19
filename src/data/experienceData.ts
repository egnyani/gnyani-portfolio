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
        text: "Architecting large-scale AI automation ecosystems supporting multi-team operations, integrating predictive analytics, semantic search, and workflow orchestration to accelerate business-intelligence delivery."
      },
      {
        id: "reli-2",
        text: "Engineering production-grade microservice platforms using Python, FastAPI, SQL, Docker, and AWS EKS, enabling horizontally scalable, low-latency data pipelines handling multi-million-record workloads."
      },
      {
        id: "reli-3",
        text: "Implementing enterprise-level RAG (Retrieval-Augmented Generation) pipelines powered by FAISS, LangChain, and LLM APIs, achieving near-real-time contextual retrieval with 90%+ precision on contract analytics."
      },
      {
        id: "reli-4",
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
        text: "Spearheaded design of a Contract Intelligence Platform leveraging Spring Boot, Redis, Kafka, and Hugging Face Transformers, delivering 1,000+ real-time document inferences/day while reducing query latency by 70%."
      },
      {
        id: "intern-reli-3",
        text: "Devised and productionized a multi-agent RAG architecture (FAISS, Sentence Transformers, LangChain, OpenAI API) achieving 89% top-3 recall, directly elevating bid-win probability and proposal velocity."
      },
      {
        id: "intern-reli-4",
        text: "Established container-native CI/CD pipelines through GitHub Actions and Jenkins, enabling zero-downtime deployments and proactive telemetry on Azure Kubernetes Service (AKS) clusters."
      }
    ]
  },
  {
    id: "acmesia",
    role: "Software Engineer Intern",
    company: "Acmesia Consultants LLP",
    location: "Mumbai, India",
    period: "May 2020 – July 2023",
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
        text: "Championed DevOps excellence through Agile, TDD, and performance-tuning sprints, hardening CI/CD pipelines and accelerating feature delivery velocity by 45%."
      }
    ]
  }
];
