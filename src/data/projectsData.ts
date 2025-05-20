// Define interfaces for type safety
export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  link: string;
  techStack: string[];
  githubLink: string;
  details?: {
    status: string;
    features: string[];
    fullDescription: string;
  };
}

// Export the projects data
export const projects: Project[] = [
  /* ─────────────────────────────
     1. RELI Group – GovWin ETL & Opportunity Scoring
  ───────────────────────────── */
  {
    id: "govwin_etl",
    title: "GovWin Opportunity Tracker & Scoring Engine",
    date: "2025",
    description: "End-to-end ETL pipeline plus TF-IDF–based relevance scorer for federal contract bids.",
    techStack: ["Python", "Pandas", "Airflow", "PostgreSQL", "Power BI"],
    githubLink: "#",          // internal code – make private repo or demo fragment
    link: "#",
    details: {
      status: "In Production",
      features: [
        "Scheduled Airflow DAGs ingesting daily GovWin API feeds",
        "Data-quality rules (Pandas, NumPy) hitting 99.5 % accuracy",
        "TF-IDF & heuristics → auto-rank opportunities vs. capability statements",
        "Self-service Power BI dashboard for BD teams (20 % faster bid/no-bid)",
        "Reusable Python SDK for downstream analytics"
      ],
      fullDescription: "Built for RELI Group Inc, this pipeline slashes manual download time by 80 %, cleans & normalizes 10 k+ rows/day, and surfaces a weighted score so capture managers can pounce on the best-fit contracts first."
    }
  },

  /* ─────────────────────────────
     2. NEXIS Lab – Misinformation Sentiment Dashboard
  ───────────────────────────── */
  {
    id: "misinfo_dashboard",
    title: "Real-time Misinformation & Sentiment Monitor",
    date: "2025",
    description: "Transformer-powered NLP pipeline with interactive Streamlit interface.",
    techStack: ["Python", "Hugging Face", "BERT", "Streamlit", "Docker", "AWS EC2"],
    githubLink: "https://github.com/egnyani/misinfo-monitor",
    link: "#",
    details: {
      status: "Completed",
      features: [
        "Fine-tuned DistilBERT on 10 k labelled tweets (92 % F1)",
        "Apache Kafka stream → live classification & keyword heat-maps",
        "Explainability panel using SHAP to surface top tokens",
        "Role-based access (Azure AD) for researchers & journalists",
        "Dockerized deployment → <5 min spin-up on any EC2 instance"
      ],
      fullDescription: "This tool helps disinformation researchers track narrative spikes in real time and slice results by geography, hashtag, or platform, cutting manual triage hours by 40 %."
    }
  },

  /* ─────────────────────────────
     3. Ballotpedia – Electoral Anomaly Detection
  ───────────────────────────── */
  {
    id: "election_anomaly",
    title: "Electoral Data Anomaly Detection System",
    date: "2025",
    description: "XGBoost-based model and D3.js visuals to flag suspicious audit records.",
    techStack: ["Python", "XGBoost", "SQL", "R", "D3.js"],
    githubLink: "#",       // sensitive; show demo notebook instead
    link: "#",
    details: {
      status: "Completed",
      features: [
        "Feature-engineered 30+ audit fields → 25 % error-reduction vs. manual rules",
        "Interactive D3.js choropleth highlighting counties with high anomaly scores",
        "R Markdown pipeline auto-generates public reports in one click",
        "Trigger-based SQL logging to preserve provenance for each flagged record"
      ],
      fullDescription: "Automates cross-checking of 1 k+ electoral entries, surfaces data-quality issues early, and feeds a public-facing dashboard trusted by journalists and policy analysts."
    }
  },

  /* ─────────────────────────────
     4. Instagram Reach Analysis (keep – non-basic, strong metrics)
  ───────────────────────────── */
  {
    id: "instagram",
    title: "Instagram Reach Analysis",
    date: "2025",
    description: "EDA + hybrid ML model predicting post impressions with SHAP explainability.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Plotly", "SHAP"],
    githubLink: "https://github.com/egnyani/instagram-reach",
    link: "#",
    details: {
      status: "Completed",
      features: [
        "Automated media crawl via Instaloader + engagement scraper",
        "PassiveAggressiveRegressor ensemble (94.2 % R²)",
        "SHAP waterfall plots to explain driver metrics (likes, saves, hashtags)",
        "One-click filter panel to simulate caption/hashtag tweaks"
      ],
      fullDescription: "Demonstrates full workflow from data acquisition to model interpretation, driving actionable insights that lifted a test account’s follower-conversion rate by 31 %."
    }
  },

  /* ─────────────────────────────
     5. AI Legal Document Analyzer (keep – advanced NLP)
  ───────────────────────────── */
  {
    id: "legal",
    title: "AI-Powered Legal Document Analyzer",
    date: "2024",
    description: "Clause classification & risk scoring with spaCy + BERT.",
    techStack: ["Python", "spaCy", "BERT", "FastAPI", "Docker"],
    githubLink: "https://github.com/egnyani/legal-analyzer",
    link: "#",
    details: {
      status: "Completed",
      features: [
        "Custom BERT fine-tune → 85 % accuracy across 6 risk levels",
        "NER to extract parties, dates, indemnities → JSON contract maps",
        "REST API (FastAPI) consumed by in-house legal workflow",
        "Batch PDF ingestion with async OCR for scanned docs"
      ],
      fullDescription: "Cuts contract review time by 65 % and standardizes risk language spotting for compliance teams."
    }
  },

  /* ─────────────────────────────
     6. E-commerce Recommendation Engine (keep – showcases rec-sys)
  ───────────────────────────── */
  {
    id: "ecommerce",
    title: "E-commerce Recommendation Engine",
    date: "2022",
    description: "SVD-based collaborative filtering with live demo store.",
    techStack: ["Python", "Surprise", "Flask", "MongoDB", "Docker-Compose"],
    githubLink: "https://github.com/egnyani/recommendation-engine",
    link: "#",
    details: {
      status: "Completed",
      features: [
        "Implicit feedback matrix factorization → top-N recs (MAP@10 ↑ 18 %)",
        "Real-time user profile updates via WebSocket events",
        "AB test harness to compare collaborative vs. content-based models"
      ],
      fullDescription: "Served as the personalization backbone for Picky With Picks, boosting conversion by 18 % during pilot."
    }
  }
]
