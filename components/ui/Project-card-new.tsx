import React from "react";
import { Mail } from "lucide-react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

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
  onContactClick,
}: ProjectCardProps) => {
  return (
    <div className="relative group bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm w-full transform transition-transform duration-300 hover:scale-[1.03]">
      {/* Image Section */}
      <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4">
          <p className="text-white text-sm text-center">{projectDescription}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-2 bg-slate-950 rounded-b-lg text-white">
        <h2 className="text-md font-semibold mb-2">{title}</h2>
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;