import React from 'react';
import { motion } from 'framer-motion';

export type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  delay?: number;
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, delay = 0 }) => (
  <motion.div
    className="card h-full bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-sm text-white"
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5, delay }}
  >
    <h5 className="text-xl font-semibold mb-2">{title}</h5>
    <p className="text-sm text-gray-400 mb-4">{description}</p>
    {link && (
      <a
        href={link}
        className="text-indigo-400 hover:underline text-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project →
      </a>
    )}
  </motion.div>
);

export default ProjectCard;
