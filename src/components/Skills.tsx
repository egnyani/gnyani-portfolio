"use client";
import { skills, type SkillCategory } from "@/data/skillsData";

// Skill Card Component
interface SkillCardProps {
  skillCategory: SkillCategory;
}

const SkillCard = ({ skillCategory }: SkillCardProps) => (
  <div key={skillCategory.id} className="bg-[#F9E8D0] border-2 border-black shadow-[4px_4px_0_#000] p-4 w-60">
    <h3 className="font-bold mb-2 text-lg font-geist-sans text-black">{skillCategory.category}</h3>
    <ul className="list-disc ml-4 text-base font-geist-sans text-black">
      {skillCategory.items.map(item => <li key={item}>{item}</li>)}
    </ul>
  </div>
);

const Skills = () => (
  <section id="skills" className="bg-[#D6DDEB] px-16 md:px-24 lg:px-32 py-30 border-b-2 border-black">
    <h2 className="text-4xl font-bold mb-12 text-center font-geist-sans text-black">Skills</h2>
    <div className="flex flex-wrap gap-6 justify-center">
      {skills.map((skillCategory) => (
        <SkillCard key={skillCategory.id} skillCategory={skillCategory} />
      ))}
    </div>
  </section>
);

export default Skills; 