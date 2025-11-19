"use client";

const Greeting = () => (
  <section id="home" className="bg-[#FBEAE6] flex flex-col md:flex-row items-center justify-between px-16 md:px-24 lg:px-32 py-12 pb-16 border-b-2 border-black">
    <div>
      <h1 className="text-4xl font-extrabold mb-5">Hello!</h1>
      <h1 className="text-5xl font-extrabold mb-10">I&apos;m Gnyani Enugandula</h1>
      <h2 className="text-xl font-semibold mb-4">Software Engineer | Data & AI</h2>
      <p className="mb-4 text-justify">
      I&apos;m Gnyani (pronounced gyaa-ni), I&apos;m a software engineer who enjoys working with data and AI.
      I have a Master&apos;s in Information Systems from Syracuse University and  I'm currently a Software Developer at RELI Group Inc., spending a lot of time in Databricks, trying out POCs and training ML models.
      I&apos;ve worked across backend development, data lakehouses, and building RAG pipelines, and I enjoy picking up new tech to see how it can actually help us in real projects
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