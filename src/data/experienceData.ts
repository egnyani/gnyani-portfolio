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
export const experiences: Experience[] =[
  {
    id: "reli",
    role: "Data Analyst Intern",
    company: "RELI Group Inc.",
    period: "February 2025 – Present",
    bullets: [
      {
        id: "reli-1",
        text: "Developed and automated an ETL pipeline to extract and load GovWin data into structured formats, reducing manual effort by 80% and ensuring timely data reporting."
      },
      {
        id: "reli-2",
        text: "Enhanced data validation and error handling using Excel macros, Pandas, and NumPy, achieving 99.5% data accuracy and cutting data processing time by 50%."
      },
      {
        id: "reli-3",
        text: "Collaborated with business intelligence teams to optimize reporting dashboards in Power BI and Streamlit, boosting data visualization quality and speeding up decision-making by 40%."
      },
      {
        id: "reli-4",
        text: "Built a keyword-scoring engine using TF-IDF and custom rules to auto-rank government opportunities based on relevance to internal capability statements."
      },
      {
        id: "reli-5",
        text: "Created reusable Python scripts and API connectors to automate weekly refresh of business reports, eliminating repetitive tasks for multiple departments."
      },
      {
        id: "reli-6",
        text: "Coordinated with project managers to design a scoring logic for prioritizing GovWin bids, integrating historical win-loss analysis for strategic decision-making."
      }
    ]
  },
  {
    id: "nexis",
    role: "AI Researcher",
    company: "NEXIS Lab, Syracuse University",
    period: "February 2025 – May 2025",
    bullets: [
      {
        id: "nexis-1",
        text: "Utilized Hugging Face’s distilbert-base-uncased model for sentiment analysis on 10,000+ social media posts, achieving 92% accuracy and reducing manual labeling by 60%."
      },
      {
        id: "nexis-2",
        text: "Built a responsive Streamlit dashboard to visualize sentiment trends, keyword frequency, and model predictions in real time, reducing stakeholder review time by 40%."
      },
      {
        id: "nexis-3",
        text: "Integrated BERT-based NLP pipelines into the research workflow, reducing manual text tagging by 40 hours per week and improving research efficiency."
      },
      {
        id: "nexis-4",
        text: "Fine-tuned DistilBERT using domain-specific data to enhance the model's understanding of misinformation and improve classification of harmful content."
      },
      {
        id: "nexis-5",
        text: "Designed a comparative study of transformer models versus traditional ML techniques (Logistic Regression, SVM) to advocate for scalable AI deployment."
      },
      {
        id: "nexis-6",
        text: "Conducted error analysis on false positives to iteratively improve NLP pipeline thresholds, increasing precision by 8% across critical misinformation categories."
      }
    ]
  },
  {
    id: "ballot",
    role: "Research Fellow",
    company: "Ballotpedia",
    period: "January 2025 – March 2025",
    bullets: [
      {
        id: "ballot-1",
        text: "Led data validation projects by analyzing and cross-referencing 1,000+ electoral records using SQL and R, improving accuracy to 95%+ and speeding up retrieval by 30%."
      },
      {
        id: "ballot-2",
        text: "Built automated research scripts in Python and Pandas for data extraction and processing, reducing manual verification time by 20%."
      },
      {
        id: "ballot-3",
        text: "Collaborated with data scientists to deploy XGBoost-based anomaly detection models, identifying inconsistencies and reducing public-facing data errors by 25%."
      },
      {
        id: "ballot-4",
        text: "Designed a reproducible R Markdown workflow to automate report generation and visual summaries for public election data."
      },
      {
        id: "ballot-5",
        text: "Worked closely with policy analysts to interpret data-driven findings and translate them into publicly digestible narratives and infographics."
      },
      {
        id: "ballot-6",
        text: "Developed SQL-based triggers and logging mechanisms to track and flag inconsistencies in new electoral data entries for audit purposes."
      }
    ]
  },
  {
    id: "pwp",
    role: "Founder & Data Analyst",
    company: "Picky With Picks",
    period: "March 2022 – May 2023",
    bullets: [
      {
        id: "pwp-1",
        text: "Conducted customer segmentation using K-means clustering, Python, and SQL, increasing email campaign CTR by 35% and conversions by 18%."
      },
      {
        id: "pwp-2",
        text: "Designed and deployed over 5 interactive Tableau dashboards for retail clients, automating KPIs and saving 40 hours/month in manual reporting."
      },
      {
        id: "pwp-3",
        text: "Cleaned and transformed customer record datasets using SQL and Excel, enhancing reporting reliability and improving data accuracy by 28%."
      },
      {
        id: "pwp-4",
        text: "A/B tested landing pages and content strategy using Google Analytics, optimizing for bounce rate and increasing user engagement time by 22%."
      },
      {
        id: "pwp-5",
        text: "Implemented recommendation logic using collaborative filtering techniques to personalize product suggestions on the platform."
      },
      {
        id: "pwp-6",
        text: "Built backend automation scripts for order processing and inventory tracking, reducing manual work and improving fulfillment accuracy."
      }
    ]
  }
];
