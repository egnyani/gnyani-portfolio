"use client";
import { socialLinks } from "@/data/navLinks";
import Image from "next/image";
import { useState, useEffect } from "react";

// Social Icon Component
export const SocialIcon = ({ type, size = 18 }: { type: string; size?: number }) => {
  switch (type) {
    case 'github':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      );
    case 'email':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      );
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
    default:
      return null;
  }
};

// Social Link Component
interface SocialLinkProps {
  link: {
    id: string;
    href: string;
    icon: string;
  };
}

const SocialLink = ({ link }: SocialLinkProps) => (
  <a 
    href={link.href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-1.5 border border-black rounded-full hover:bg-black hover:text-white transition"
  >
    <SocialIcon type={link.icon} />
  </a>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <nav className={`flex items-center justify-between px-6 py-3 mx-auto max-w-7xl rounded-full border-2 border-black bg-[#A4C4AC] shadow-[4px_4px_0_#000] transition-all duration-300 ${
        scrolled ? 'bg-opacity-95' : 'bg-opacity-100'
      }`}>
        <div className="h-10 w-10 relative">
          <a href="#home">
            <img 
              src="/assets/Subject.PNG" 
              alt="Logo" 
              className="h-full w-full object-cover"
            />
          </a>
        </div>
        <div className="flex space-x-4">
          {socialLinks.map(link => (
            <SocialLink key={link.id} link={link} />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 