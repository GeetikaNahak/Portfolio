import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

type Props = {
  title: string;
  image: string;
  githubLink: string;
  liveLink: string;
};

export default function ProjectCardAnimated({ title, image, githubLink, liveLink }: Props) {
  return (
    <div className="relative w-[400px] h-[200px] overflow-hidden shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] transition-all duration-[1s] ease-in-out rounded-[30px] border-2 border-white hover:scale-110 bg-gray-300 group">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-black"
        // style={{
        // backgroundColor: `black`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   opacity: 0.3
        // }}
      />

      {/* Title */}
      <div className="absolute right-2/4 bottom-2/4 translate-x-2/4 translate-y-2/4 transition-all duration-[0.6s] ease-in-out text-[1.3em] font-semibold text-white tracking-[3px] group-hover:translate-x-[70px] group-hover:translate-y-[-52px] group-hover:tracking-[0px]">
        {title}
      </div>

      {/* GitHub Link */}
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <div className="absolute w-[70%] h-[70%] bottom-[-70%] left-[-70%] text-right shadow-[rgba(100,100,111,0.364)_-7px_7px_29px_0px] origin-bottom-left transition-all duration-[1s] ease-in-out p-2.5 rounded-[10%_13%_42%_0%/10%_12%_75%_0%] border-r-white border-t-2 border-t-white border-solid border-r bg-[#001A6E] group-hover:bottom-px group-hover:left-px before:content-[''] before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-[0.5s] before:ease-in-out before:rounded-[inherit] before:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#ff53d4_60%,#62c2fe_90%)]">
            <FaGithub className="w-6 h-6 text-black" />
          </div>
        </a>
      )}

      {/* Live Link */}
      {liveLink && (
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <div className="absolute w-6/12 h-3/6 -left-2/4 -bottom-2/4 delay-[0.2s] text-right shadow-[rgba(100,100,111,0.364)_-7px_7px_29px_0px] origin-bottom-left transition-all duration-[1s] ease-in-out p-2.5 rounded-[10%_13%_42%_0%/10%_12%_75%_0%] border-r-white border-t-2 border-t-white border-solid border-r bg-blue-400 group-hover:bottom-px group-hover:left-px before:content-[''] before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-[0.5s] before:ease-in-out before:rounded-[inherit] before:bg-[radial-gradient(circle_at_30%_107%,#91e9ff_0%,#00acee_90%)]">
            <FiExternalLink className="w-6 h-6 text-black" />
          </div>
        </a>
      )}
    </div>
  );
}
