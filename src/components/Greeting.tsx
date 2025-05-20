"use client";

const Greeting = () => (
  <section id="home" className="bg-[#FBEAE6] flex flex-col md:flex-row items-center justify-between px-16 md:px-24 lg:px-32 py-12 pb-16 border-b-2 border-black">
    <div>
      <h1 className="text-4xl font-extrabold mb-5">Hello!</h1>
      <h1 className="text-5xl font-extrabold mb-10">I&apos;m Gnyani Enugandula</h1>
      <h2 className="text-xl font-semibold mb-4">Data Engineer | Automation | AI Enthusiast </h2>
      <p className="mb-4 text-justify">
      Hey there! Welcome to my little corner of the internet. I&apos;m Gnyani (pronounced gyaa-ni), a Data Analyst Intern by day and a data nerd by… well, still day, just on my own time.
      <br />
      <br />
      I recently graduated with a Master&apos;s in Information Systems from Syracuse University and have been working as a Data Analyst Intern, where I build ETL pipelines, automate reporting workflows, and bring structure to chaos through dashboards and insights.
      <br />
      When I&apos;m not working, I&apos;m usually tinkering with personal projects — right now, I&apos;m diving into NLP embeddings to help machines better understand context and meaning. I love using data to solve real problems, whether it&apos;s analyzing Instagram engagement, cleaning electoral data, or building AI-powered tools.
      <br /><br />
      I spend my hours exploring numbers, patterns, and real-world problems through code. Right now, I&apos;m diving deep into NLP embeddings because I&apos;ve got a personal project that&apos;s begging to understand language like a human.
      </p>
      <a
        href="/assets/docs/Gnyani_Resume.pdf"
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