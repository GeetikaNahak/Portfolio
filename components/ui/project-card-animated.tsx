import React from 'react';
import Image from '../assets/next.svg'
export default function ProjectCardAnimated({ title, image, githubLink, liveLink }:{title:string; image:string; githubLink:string; liveLink:string}) {
  return (
    <div className="relative w-[400px] h-[200px] overflow-hidden shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] transition-all duration-[1s] ease-in-out rounded-[30px] border-2 border-white hover:scale-110 bg-gray-300 group">
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-black" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
      
      {/* Background Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 object-cover w-full h-full opacity-30 mix-blend-overlay"
        />
      )}

      {/* Title */}
      <div className="absolute right-2/4 bottom-2/4 translate-x-2/4 translate-y-2/4 transition-all duration-[0.6s] ease-in-out text-[1.3em] font-semibold text-white tracking-[3px] group-hover:translate-x-[70px] group-hover:translate-y-[-52px] group-hover:tracking-[0px]">
        {title}
      </div>

      {/* GitHub Link */}
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <div className="absolute w-[70%] h-[70%] bottom-[-70%] left-[-70%] text-right shadow-[rgba(100,100,111,0.364)_-7px_7px_29px_0px] origin-bottom-left transition-all duration-[1s] ease-in-out p-2.5 rounded-[10%_13%_42%_0%/10%_12%_75%_0%] border-r-white border-t-2 border-t-white border-solid border-r bg-[rgba(255,255,255,0.389)] group-hover:bottom-px group-hover:left-px before:content-[''] before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-[0.5s] before:ease-in-out before:rounded-[inherit] before:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#ff53d4_60%,#62c2fe_90%)]">
            <span className="inline-block w-5 h-5">
              {/* GitHub Icon */}
              <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="fill-[rgba(255,255,255,0.797)] w-full transition-all duration-[0.5s] ease-in-out group-hover:fill-white" style={{ filter: "drop-shadow(0 0 5px white)" }}>
                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
              </svg>
            </span>
          </div>
        </a>
      )}

      {/* Live Link */}
      {liveLink && (
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <div className="absolute w-6/12 h-3/6 -left-2/4 -bottom-2/4 delay-[0.2s] text-right shadow-[rgba(100,100,111,0.364)_-7px_7px_29px_0px] origin-bottom-left transition-all duration-[1s] ease-in-out p-2.5 rounded-[10%_13%_42%_0%/10%_12%_75%_0%] border-r-white border-t-2 border-t-white border-solid border-r bg-[rgba(255,255,255,0.389)] group-hover:bottom-px group-hover:left-px before:content-[''] before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-[0.5s] before:ease-in-out before:rounded-[inherit] before:bg-[radial-gradient(circle_at_30%_107%,#91e9ff_0%,#00acee_90%)]">
            <span className="inline-block w-5 h-5">
              {/* Live Icon */}
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="fill-[rgba(255,255,255,0.797)] w-full transition-all duration-[0.5s] ease-in-out group-hover:fill-white" style={{ filter: "drop-shadow(0 0 5px white)" }}>
                <path d="M459.37 151.716c.325 4.548..." />
              </svg>
            </span>
          </div>
        </a>
      )}

      {/* Decoration Circle (optional) */}
      <div className="absolute w-[10%] h-[10%] bottom-[-10%] left-[-10%] delay-[0.6s] group-hover:bottom-px group-hover:left-px" />
    </div>
  );
}
