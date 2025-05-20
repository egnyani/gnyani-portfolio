"use client";
import { useState, useRef, useEffect } from "react";
import { experiences, type Experience } from "@/data/experienceData";

// Add global styles for scrollbar
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    display: block;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #F9E8D0;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: black;
    border: 1px solid black;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #333;
  }
`;

// Company Button Component
interface CompanyButtonProps {
  index: number;
  company: string;
  isSelected: boolean;
  onClick: () => void;
}

const CompanyButton = ({ index, company, isSelected, onClick }: CompanyButtonProps) => (
  <button 
    className={`w-full text-left px-4 py-3 font-mono text-base border-b border-black transition-all duration-200 ${
      isSelected 
        ? "bg-black text-white font-bold" 
        : "bg-[#F9E8D0] hover:bg-[#EECDBA]"
    }`}
    onClick={onClick}
    aria-selected={isSelected}
    role="tab"
  >
    {index + 1}. {company}
  </button>
);

// Experience Detail Component
interface ExperienceDetailProps {
  experience: Experience;
}

const ExperienceDetail = ({ experience }: ExperienceDetailProps) => (
  <div className="animate-fadeIn">
    <div className="flex flex-col mb-4 pb-4 border-b-2 border-dashed border-black">
      <h3 className="text-2xl font-bold">{experience.role}</h3>
      <p className="font-mono text-sm mt-1">{experience.period}</p>
    </div>
    
    <ul className="space-y-4 mt-6">
      {experience.bullets.map((bullet) => (
        <li key={bullet.id} className="flex items-start">
          <div className="flex-shrink-0 w-4 h-4 mt-1 mr-3 flex items-center justify-center">
            <div className="w-2 h-2 bg-black transform rotate-45 border border-black"></div>
          </div>
          <p className="flex-1">{bullet.text}</p>
        </li>
      ))}
    </ul>
  </div>
);

// Window Container Component
interface WindowContainerProps {
  title: string;
  children: React.ReactNode;
}

const WindowContainer = ({ title, children }: WindowContainerProps) => (
  <div className="bg-[#F9E8D0] border-2 border-black shadow-[4px_4px_0_#000] overflow-hidden h-[450px] flex flex-col">
    <style>{scrollbarStyles}</style>
    <div className="bg-[#EECDBA] px-3 py-2 border-b-2 border-black flex justify-between items-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full border border-black"></div>
        <div className="w-3 h-3 rounded-full border border-black"></div>
        <div className="w-3 h-3 rounded-full border border-black"></div>
      </div>
      <span className="text-sm font-bold">{title}</span>
    </div>
    {children}
  </div>
);

const Experience = () => {
  // Track the currently selected company
  const [selectedCompany, setSelectedCompany] = useState<string>(experiences[0].company);
  const experienceDetailsRef = useRef<HTMLDivElement>(null);
  
  // Find the selected experience
  const selectedExperience = experiences.find(exp => exp.company === selectedCompany) || experiences[0];

  // Reset scroll position when company changes
  useEffect(() => {
    if (experienceDetailsRef.current) {
      experienceDetailsRef.current.scrollTop = 0;
    }
  }, [selectedCompany]);
  
  return (
    <section id="experience" className="bg-[#d6ddeb] px-16 md:px-24 lg:px-32 py-30">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>
      
      <div className="flex flex-col md:flex-row gap-10">
        {/* Company list container */}
        <div className="md:w-1/3">
          <WindowContainer title="companies.txt">
            <div className="overflow-y-scroll custom-scrollbar flex-grow">
              {experiences.map((exp, index) => (
                <CompanyButton
                  key={exp.id}
                  index={index}
                  company={exp.company}
                  isSelected={exp.company === selectedCompany}
                  onClick={() => setSelectedCompany(exp.company)}
                />
              ))}
            </div>
          </WindowContainer>
        </div>
        
        {/* Experience details container */}
        <div className="md:w-2/3">
          <WindowContainer title="experience.txt">
            <div ref={experienceDetailsRef} className="p-6 overflow-y-scroll custom-scrollbar h-[calc(100%-50px)]">
              <ExperienceDetail experience={selectedExperience} />
            </div>
          </WindowContainer>
        </div>
      </div>
    </section>
  );
};

export default Experience; 