import Navbar from "../components/Navbar";
import Greeting from "../components/Greeting";
import QuickLinks from "../components/QuickLinks";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-grid-pattern bg-grid bg-[#FBEAE6] text-black border-2 border-black shadow-[8px_8px_0_#ccc] pt-24">
      <Navbar />
      <Greeting />

      <div className="bg-[#d6ddeb]">
      <QuickLinks />
      <Projects />
      </div>
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
}
