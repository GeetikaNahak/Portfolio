import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import ProjectCard from "@/components/ui/ProjectCard";

import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="w-full h-full">
      <FloatingNav
        navItems={[
          { name: "About", link: "#about" },
          { name: "Skills", link: "#skills" },
          { name: "Projects", link: "#projects" },
          { name: "Extracurricular", link: "#extracurricular" },
          { name: "Contact", link: "#contact" },
        ]}
      />
      <Hero />
      <ProjectsSection/>
      <SkillsSection/>
      <ProjectsSection/>
      
    </main>
  );
}
