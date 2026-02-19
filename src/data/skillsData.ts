// Define interfaces for type safety
export interface SkillCategory {
  id: string;
  category: string;
  items: string[];
}

// Export the skills data (aligned with resume)
export const skills: SkillCategory[] = [
  {
    id: "languages",
    category: "Languages",
    items: ["Python", "C#", "JavaScript", "TypeScript", "Go", "SQL"],
  },
  {
    id: "backend",
    category: "Backend",
    items: ["FastAPI", "Flask", "Node.js", "REST APIs", "Microservices Architecture", "API Design", "WebSockets", "Celery", "Redis", "Kafka"],
  },
  {
    id: "web-frameworks",
    category: "Web and Frameworks",
    items: ["React", "Next.js", "Express.js", "HTML5", "CSS3", "JavaScript", "Frontend–Backend Integration"],
  },
  {
    id: "cloud",
    category: "Cloud and Platform",
    items: ["AWS (EC2, S3, Lambda, DynamoDB)", "Azure (Functions, Monitor)", "Kubernetes", "API Gateway", "CloudWatch"],
  },
  {
    id: "databases",
    category: "Databases",
    items: ["PostgreSQL", "SQL Server", "MongoDB", "DynamoDB", "Databricks", "Snowflake", "ETL Pipelines", "Data Modeling", "Query Optimization"],
  },
  {
    id: "devops",
    category: "DevOps & Delivery",
    items: ["Docker", "Git", "CI/CD", "Grafana", "Prometheus", "System Design", "Jira", "Agile / Scrum", "Jenkins"],
  },
  {
    id: "ai-ml",
    category: "AI / ML & LLM Systems",
    items: ["RAG", "LLMs", "LangChain", "Prompt Engineering", "Hugging Face", "PyTorch", "scikit-learn", "Embeddings", "Similarity Search", "Vector DB", "Text Classification", "Model Evaluation", "A/B Testing", "Rule Based Validation"],
  },
];
