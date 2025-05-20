// Define interfaces for type safety
export interface SkillCategory {
  id: string;
  category: string;
  items: string[];
}

// Export the skills data
export const skills: SkillCategory[] = [
  {
    id: "languages",
    category: "Languages",
    items: ["Python", "R", "SQL"],
  },
  {
    id: "analytics",
    category: "Data Analysis & Visualization",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau", "Streamlit", "Plotly"],
  },
  {
    id: "ml-nlp",
    category: "Machine Learning & NLP",
    items: ["Scikit-learn", "XGBoost", "spaCy", "Hugging Face Transformers", "SHAP", "BERT", "TF-IDF"],
  },
  {
    id: "data-eng",
    category: "ETL & Data Engineering",
    items: ["Apache Airflow", "RESTful APIs", "Excel Macros", "Instaloader"],
  },
  {
    id: "databases",
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Snowflake"],
  },
  {
    id: "cloud-devops",
    category: "Cloud & DevOps",
    items: ["AWS (S3, Lambda, EC2, Redshift)", "Azure", "Docker", "Git", "GitHub"],
  },
  {
    id: "web-dev",
    category: "APIs & Web",
    items: ["FastAPI", "Flask", "D3.js"],
  },
  {
    id: "other",
    category: "Other Tools",
    items: ["Prompt Engineering", "VS Code", "Windows", "Excel", "Google Analytics"],
  }
];
