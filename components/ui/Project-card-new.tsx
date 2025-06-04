import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  image: string;
  projectDescription?: string;
  githubLink: string;
  liveLink: string;
  onContactClick?: () => void;
};

const ProjectCard = ({
  title,
  image,
  projectDescription = "Short description of your amazing project!",
  githubLink,
  liveLink,
}: ProjectCardProps) => {
  return (
    <div className="relative group bg-slate-900 border border-slate-700 rounded-xl shadow-md overflow-hidden max-w-sm w-full transition-transform duration-300 hover:scale-[1.02]">
      {/* Image Section */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4">
          <p className="text-white text-sm text-center">{projectDescription}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-2">
        <h3 className="text-xl font-semibold text-white mb-3 ">
          {title}
        </h3>
        <div className="flex justify-between text-white-100">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200 flex items-center gap-2"
          >
            <FaGithub /> Code
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200 flex items-center gap-2"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;