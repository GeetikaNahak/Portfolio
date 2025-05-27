"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCardAnimated from './ui/project-card-animated';

const projects = [
  {
    title: 'Project A',
    image: 'https://via.placeholder.com/300x300',
    githubLink: 'https://github.com/user/project-a',
    liveLink: 'https://yourdomain.com/project-a'
  },
  {
    title: 'Project B',
    image: 'https://via.placeholder.com/300x300',
    githubLink: 'https://github.com/user/project-b',
    liveLink: 'https://yourdomain.com/project-b'
  },
  {
    title: 'Project C',
    image: 'https://via.placeholder.com/300x300',
    githubLink: 'https://github.com/user/project-c',
    liveLink: 'https://yourdomain.com/project-c'
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
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="flex justify-center"
          >
            <ProjectCardAnimated {...project} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
