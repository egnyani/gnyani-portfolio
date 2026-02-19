// Define interfaces for type safety
export interface SkillCategory {
  id: string;
  category: string;
  items: string[];
}

// Export the skills data (aligned with resume: Languages, Developer/Debugging Tools, Technologies/Frameworks, Other)
export const skills: SkillCategory[] = [
  {
    id: "languages",
    category: "Languages",
    items: ["Python", "C/C++", "Java", "C#", "HTML", "CSS", "JavaScript", "SQL", "PHP", "TypeScript", "Ruby", "Go"],
  },
  {
    id: "developer-tools",
    category: "Developer & Debugging Tools",
    items: ["Visual Studio", "VS Code", "IntelliJ", "Eclipse", "Android Studio", "JUnit", "Mockito"],
  },
  {
    id: "tech-frameworks",
    category: "Technologies & Frameworks",
    items: ["MySQL", "Node.js", "Next.js", "Express.js", "ReactJS", "Jenkins", "GraphQL", "Apache Kafka", "Git", "Oracle", "PostgreSQL", "FastAPI", "Flask", "Django", "Spring Boot", "LangChain", "Hugging Face Transformers"],
  },
  {
    id: "databases",
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Azure SQL", "Redis", "Cassandra"],
  },
  {
    id: "cloud-devops",
    category: "Cloud & DevOps",
    items: ["AWS (EKS, Lambda, S3, RDS, EC2, Kinesis)", "Azure (AKS)", "Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana", "CloudWatch"],
  },
  {
    id: "ml-data",
    category: "ML & Data",
    items: ["NumPy", "Pandas", "FAISS", "RAG", "LLM APIs", "Sentence Transformers", "Spark"],
  },
  {
    id: "other",
    category: "Other",
    items: ["OOP Principles", "Maven", "RESTful APIs", "Agile", "TDD"],
  },
];
