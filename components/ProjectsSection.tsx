import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { ProjectCardProps } from './ui/ProjectCard';

const projects: ProjectCardProps[] = [
  {
    title: 'Project A',
    description: 'A feature-rich web app for real-time collaboration and task management.',
    link: 'https://github.com/user/project-a'
  },
  {
    title: 'Project B',
    description: 'A full-stack application for food delivery with live tracking.',
    link: 'https://github.com/user/project-b'
  },
  {
    title: 'Project C',
    description: 'AI-powered chatbot built with React and GPT integration.',
    link: 'https://github.com/user/project-c'
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <motion.section
      className="w-full px-4 py-16 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      id="projects"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          My Projects
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          A selection of things I’ve built to show my skills and interests.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} delay={idx * 0.2} />
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
