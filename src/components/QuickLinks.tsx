"use client";
import { navLinks } from "@/data/navLinks";

const QuickLinks = () => (
  <div className="flex justify-center -mt-6 relative z-20">
    <div className="flex bg-[#d6ddeb] rounded-full" >
    
      {navLinks.map(link => (
        <a
          key={link.id}
          href={link.href}
          className="px-6 py-2 bg-[#d6ddeb] border-2 border-black text-center font-medium hover:bg-black hover:text-white transition"
        >
          {link.name}
        </a>
      ))}
    </div>
  </div>
);

export default QuickLinks; 