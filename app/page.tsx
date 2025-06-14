
import AboutMe from "@/components/About";
import Achievements from "@/components/Achievements";
import ContactPage from "@/components/Contact";
import Extracurriculars from "@/components/Extracurricular";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
// import Projects from "@/components/Projects";
import ProjectsSection from "@/components/ProjectsSection";
import { FloatingNav } from "@/components/ui/floating-navbar";


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
      <AboutMe/>
      <ProjectsSection />
      <Extracurriculars/>
      <Achievements/>
      <ContactPage/>
      <Footer/>
    </main>
  );
}
