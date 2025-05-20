"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { projects, type Project } from "@/data/projectsData";

// Add global styles for scrollbar
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    height: 8px;
    display: block;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #F9E8D0;
    border: 1px solid black;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: black;
    border: 1px solid black;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #333;
  }
`;

// Project Card Component
interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => (
  <div 
    key={project.id} 
    className="bg-[#F9E8D0] flex-none w-[380px] border-2 border-black shadow-[4px_4px_0_#000]"
  >
    <div className="bg-[#EECDBA] px-3 py-2 border-b-2 border-black flex justify-between items-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full border border-black"></div>
        <div className="w-3 h-3 rounded-full border border-black"></div>
      </div>
      <span className="text-sm text-black">{project.date}</span>
    </div>
    
    <div className="p-4 bg-[#F9E8D0] flex flex-col h-[220px]">
      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
      <p className="mb-4 flex-grow">{project.description}</p>
      <div className="mt-auto">
        <button 
          onClick={() => onSelect(project)}
          className="bg-[#EECDBA] inline-block px-4 py-2 border-2 border-black shadow-[2px_2px_0_#000] hover:bg-black hover:text-white transition"
        >
          View project
        </button>
      </div>
    </div>
  </div>
);

// Modal component for detailed project view
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const modalContent = (
    <div className="fixed inset-0 bg-transparent z-[1000] flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white border-2 border-black shadow-[8px_8px_0_#000] max-w-2xl w-full p-8 relative animate-fadeIn text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar with window controls */}
        <div className="absolute top-0 left-0 right-0 bg-[#EECDBA] px-3 py-2 border-b-2 border-black flex justify-between items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full border border-black"></div>
            <div className="w-3 h-3 rounded-full border border-black"></div>
            <div className="w-3 h-3 rounded-full border border-black"></div>
          </div>
          <span className="text-sm text-black">{project.title}.project</span>
          <button 
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center border border-black hover:bg-black hover:text-white transition"
          >
            ×
          </button>
        </div>
        
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4 text-black">{project.title}</h3>
          
          <div className="flex flex-col md:flex-row gap-8 mb-6">
            <div className="md:w-2/3">
              <h4 className="font-bold mb-2 text-black">Project Description:</h4>
              <p className="mb-4 text-black">{project.description}</p>
              <p className="mb-4 text-black">{project.details?.fullDescription}</p>
              
              <h4 className="font-bold mb-2 text-black">Key Features:</h4>
              <ul className="list-disc ml-5 mb-4 text-black">
                {project.details?.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/3 bg-[#F9E8D0] border-2 border-black p-4 text-black">
              <h4 className="font-bold mb-2 text-black">Project Details</h4>
              <div className="mb-4">
                <p><span className="font-bold text-black">Date:</span> <span className="text-black">{project.date}</span></p>
                <p><span className="font-bold text-black">Status:</span> <span className="text-black">{project.details?.status || "Completed"}</span></p>
              </div>
              
              <h4 className="font-bold mb-2 text-black">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-[#EECDBA] text-sm border border-black text-black">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#EECDBA] w-full block text-center px-4 py-2 border-2 border-black shadow-[2px_2px_0_#000] hover:bg-black hover:text-white transition text-black"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Use createPortal to render the modal at the document body level
  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isBrowser, setIsBrowser] = useState(false);
  
  // This ensures hydration matching between server and client
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <section id="projects" className="bg-[#d6ddeb] px-16 md:px-24 lg:px-32 py-30">
      <style>{scrollbarStyles}</style>
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      
      <div className="overflow-x-scroll custom-scrollbar pb-4">
        <div className="flex space-x-6" style={{ minWidth: "min-content" }}>
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {isBrowser && selectedProject && (
        <ProjectModal
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects; 