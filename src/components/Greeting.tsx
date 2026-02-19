"use client";

const Greeting = () => (
  <section id="home" className="bg-[#FBEAE6] flex flex-col md:flex-row items-center justify-between px-16 md:px-24 lg:px-32 py-12 pb-16 border-b-2 border-black">
    <div>
      <h1 className="text-4xl font-extrabold mb-5">Hello!</h1>
      <h1 className="text-5xl font-extrabold mb-10">I&apos;m Gnyani Enugandula</h1>
      <h2 className="text-xl font-semibold mb-4">Software Developer | Data & AI</h2>
      <p className="mb-4 text-justify">
      I&apos;m Gnyani (pronounced gyaa-ni), a software developer focused on agentic AI, data pipelines, and production systems.
      I have an M.S. in Information Systems from Syracuse University and I&apos;m currently a Software Developer at RELI Group Inc., where I ship agentic AI code-modernization agents, build distributed pipelines in Databricks (Python, PySpark, SQL), develop RAG-powered search and Q&A with FAISS and LLMs, and embed anomaly detection with SHAP/LIME for interpretable risk scoring. I also drive observability with Prometheus, Grafana, and CloudWatch.
      I&apos;ve worked across backend development, RAG and contract intelligence, and cloud-native DevOps—and I enjoy picking up new tech to ship reliable, high-impact solutions.
      </p>
      <a
        href="/assets/docs/G_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 border-2 border-black shadow-[4px_4px_0_#000] hover:bg-black hover:text-white transition"
      >
        View Resume
      </a>
    </div>
    
  </section>
);
export default Greeting; 