"use client";
import { socialLinks } from "@/data/navLinks";
import { SocialIcon } from "./Navbar"; // We'll need to export this

// Footer Social Link Component
interface FooterSocialLinkProps {
  link: {
    id: string;
    href: string;
    icon: string;
  };
}

const FooterSocialLink = ({ link }: FooterSocialLinkProps) => (
  <a 
    href={link.href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-1.5 border border-black rounded-full hover:bg-black hover:text-white transition"
  >
    <SocialIcon type={link.icon} size={20} />
  </a>
);

const Footer = () => (
  <footer id="footer" className="px-8 py-8 border-t-2 border-black bg-[#EECDBA]">
    <div className="max-w-2xl mx-auto text-center mb-8">
      <h2 className="text-4xl font-bold mb-4">Pop Into My Inbox!</h2>
      
      <a 
        href="mailto:gnyenug@gmail.com" 
        className="inline-block px-6 py-3 border-2 border-black shadow-[4px_4px_0_#000] hover:bg-black hover:text-white transition font-bold"
      >
        Say Hiii 👋
      </a>
    </div>
    
    <div className="flex justify-center space-x-6 mt-12 mb-2">
      {socialLinks.map(link => (
        <FooterSocialLink key={link.id} link={link} />
      ))}
    </div>
  </footer>
);

export default Footer; 