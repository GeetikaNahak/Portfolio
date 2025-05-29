"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ui/Project-card-new';

const projects = [
  {
    title: 'Project A',
    image: '/unnamed.png',
    githubLink: 'https://github.com/user/project-a',
    liveLink: 'https://yourdomain.com/project-a'
  },
  {
    title: 'Project B',
    image: '/amazon.jpg',
    githubLink: 'https://github.com/user/project-b',
    liveLink: 'https://yourdomain.com/project-b'
  },
  {
    title: 'Project C',
    image: '/chatter.jpg',
    githubLink: 'https://github.com/user/project-c',
    liveLink: 'https://yourdomain.com/project-c'
  },
  {
    title: 'Project B',
    image: '/amazon.jpg',
    githubLink: 'https://github.com/user/project-b',
    liveLink: 'https://yourdomain.com/project-b'
  },
  {
    title: 'Project C',
    image: '/chatter.jpg',
    githubLink: 'https://github.com/user/project-c',
    liveLink: 'https://yourdomain.com/project-c'
  },
  {
    title: 'Project B',
    image: '/amazon.jpg',
    githubLink: 'https://github.com/user/project-b',
    liveLink: 'https://yourdomain.com/project-b'
  },
  {
    title: 'Project C',
    image: '/chatter.jpg',
    githubLink: 'https://github.com/user/project-c',
    liveLink: 'https://yourdomain.com/project-c'
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <div
      className="w-full px-4 py-16 bg-gradient-to-b from-slate-950 to-black"
      id="projects"
    >
      <div className="max-w-6xl mx-auto text-center mb-12 ">
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
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.2, duration: 0.6, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
