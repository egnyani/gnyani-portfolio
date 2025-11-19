// Define interfaces for type safety
export interface ExperienceBullet {
  id: string;
  text: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: ExperienceBullet[];
}

// Export the experiences data
export const experiences: Experience[] = [
  {
    id: "reli",
    role: "Software Developer",
    company: "RELI Group Inc.",
    period: "September 2025 – Present",
    bullets: [
      {
        id: "reli-1",
        text: "Worked across Databricks and the lakehouse environment to design and refine a series of proof-of-concepts focused on detecting fraud, waste, and abuse. Most of the work involved exploring different ML approaches and understanding how well they behaved on large healthcare datasets."
      },
      {
        id: "reli-2",
        text: "Built end-to-end pipelines on Databricks, starting from raw Bronze ingestion and moving through Silver cleaning to Gold feature engineering. Used AutoML and custom model training workflows to compare approaches and understand which ones were reliable in real-world scenarios."
      },
      {
        id: "reli-3",
        text: "Developed backend components, Spark jobs, and internal data services that supported the ML efforts, while also helping the team test ideas faster by creating small tools to visualize features, inspect anomalies, and compare model outputs side by side."
      }
    ]
  },

  {
    id: "intern-reli",
    role: "Software Developer Intern",
    company: "RELI Group Inc.",
    period: "February 2025 – October 2025",
    bullets: [
      {
        id: "intern-reli-1",
        text: "Helped build a full-stack internal platform using FastAPI, React, Azure SQL, and Docker. The system supported day-to-day workflows across teams and became a stable part of the internal tooling ecosystem."
      },
      {
        id: "intern-reli-2",
        text: "Worked on a contract intelligence platform based on Spring Boot microservices, where I integrated Redis caching, added ML-driven processing steps, and improved how the system handled complex document loads."
      },
      {
        id: "intern-reli-3",
        text: "Designed and iterated on RAG pipelines using FAISS vector stores and different orchestration patterns. Spent a lot of time experimenting with embeddings and retrieval setups to find combinations that were both accurate and production-friendly."
      },
      {
        id: "intern-reli-4",
        text: "Collaborated closely with engineering and product teams, breaking down messy problems into smaller experiments and turning those findings into working components that fit into the broader platform."
      }
    ]
  },

  {
    id: "nexis",
    role: "Software Engineer Intern",
    company: "NEXIS Student Technology Lab",
    period: "May 2024 – May 2025",
    bullets: [
      {
        id: "nexis-1",
        text: "Designed ETL pipelines in Python, SQL, and Apache Spark to clean, validate, and standardize large sets of electoral data. Focused on building a structure that was reproducible, auditable, and easy for analysts to work with."
      },
      {
        id: "nexis-2",
        text: "Built backend services using FastAPI and Spring Boot, including REST APIs and basic anomaly-detection logic to help detect inconsistencies in incoming records."
      },
      {
        id: "nexis-3",
        text: "Implemented containerized workflows using Docker and Jenkins, which allowed the lab to move experiments from notebooks into repeatable CI/CD pipelines."
      },
      {
        id: "nexis-4",
        text: "Worked with researchers and analysts to translate data findings into clear reports and visual summaries, helping non-technical teams understand the story behind the data."
      }
    ]
  },

  {
    id: "acmesia",
    role: "Software Engineer",
    company: "Acmesia Consultants LLP",
    period: "May 2020 – July 2023",
    bullets: [
      {
        id: "acmesia-1",
        text: "Built a full-stack client portal using Flask/Django, React, and MongoDB as part of a microservices setup. The application handled daily client operations and significantly reduced manual coordination across teams."
      },
      {
        id: "acmesia-2",
        text: "Developed Node.js microservices with PostgreSQL and Redis to support real-time dashboards and reporting tools. Focused heavily on reliability, caching strategies, and consistent API behavior under load."
      },
      {
        id: "acmesia-3",
        text: "Designed a serverless backend on AWS using Lambda, API Gateway, and RDS. The system became the backbone for several customer-facing features and helped scale the platform without needing dedicated infrastructure management."
      }
    ]
  },
  {
    id: "verzeo",
    role: "Software Developer Intern",
    company: "Verzeo",
    period: "May 2020 – Aug 2020",
    bullets: [
      {
        id: "verzeo-1",
        text: "Worked on small AI and data projects where I analyzed user behavior patterns using Python, NumPy, and scikit-learn to understand how people interacted with early product features."
      },
      {
        id: "verzeo-2",
        text: "Built simple predictive models and experimented with collaborative filtering techniques, which helped the team test out basic personalization ideas."
      },
      {
        id: "verzeo-3",
        text: "Cleaned and prepared datasets, optimized a few slow scripts, and helped streamline the internal workflow so insights could be generated faster."
      },
    ]
  },
  {
    id: "dezignolics",
    role: "Python Developer Intern",
    company: "Dezignolics Web & Software Solutions",
    period: "May 2019 – Aug 2019",
    bullets: [
      {
        id: "dez-1",
        text: "Built Python automation scripts to collect and process data from websites using libraries like BeautifulSoup and Requests."
      },
      {
        id: "dez-2",
        text: "Helped maintain and improve internal scraping workflows, making them more reliable for repeated daily runs."
      },
      {
        id: "dez-3",
        text: "Assisted in organizing raw scraped data into a structured format so it could be used for simple analytics and client reports."
      }
    ]
  },
  {
    id: "dcodetech",
    role: "Web Developer Intern",
    company: "Dcodetech",
    period: "Jan 2018 – Apr 2018",
    bullets: [
      {
        id: "dc-1",
        text: "Designed and built a small static website using HTML5, CSS3, and vanilla JavaScript as part of the company’s internal training projects."
      },
      {
        id: "dc-2",
        text: "Learned the basics of responsive layouts, navigation flow, and making web pages load faster on lower-end devices."
      },
      {
        id: "dc-3",
        text: "Collaborated with mentors to refine UI components and improve accessibility for users visiting on mobile browsers."
      }
    ]
  }
  
];
