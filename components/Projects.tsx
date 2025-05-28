"use client";
import { motion } from "framer-motion";
import ProjectCardAnimated from "./ui/project-card-animated";

const projects = [
  {
    title: "CollabHub",
    image: "/images/project1.jpg",
    githubLink: "https://github.com/user/collabhub",
    liveLink: "https://collabhub.live"
  },
  {
    title: "Foodies",
    image: "/images/project2.jpg",
    githubLink: "https://github.com/user/foodies",
    liveLink: "https://foodies.live"
  },
  {
    title: "ChatGenie",
    image: "/images/project3.jpg",
    githubLink: "https://github.com/user/chatgenie",
    liveLink: "https://chatgenie.live"
  }
];

export default function Projects() {
  return (
    <motion.section
      className="w-full py-16 px-4 bg-gray-900 text-white"
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, idx) => (
            <ProjectCardAnimated key={idx} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
