// Define interfaces for type safety
export interface NavLink {
  id: string;
  name: string;
  href: string;
}

// Export navigation links data
export const navLinks: NavLink[] = [
  { id: "home", name: "Home", href: "#home" },
  { id: "projects", name: "Projects", href: "#projects" },
  { id: "experience", name: "Experience", href: "#experience" },
  { id: "skills", name: "Skills", href: "#skills" },
  { id: "contact", name: "Contact", href: "#footer" },
];

// Export social link data
export interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: string; // SVG path or icon identifier
}

export const socialLinks: SocialLink[] = [
  { 
    id: "github", 
    name: "GitHub", 
    href: "https://github.com/egnyani", 
    icon: "github" 
  },
  { 
    id: "email", 
    name: "Email", 
    href: "mailto:gnyenug@gmail.com", 
    icon: "email" 
  },
  { 
    id: "linkedin", 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/gnyani-enugandula-6a0149262/", 
    icon: "linkedin" 
  },
]; 