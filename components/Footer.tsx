"use client";

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-gray-300 py-10 px-6 md:px-12 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <p className="text-base md:text-lg font-medium">
          &copy; {new Date().getFullYear()} Geetika. All rights reserved.
        </p>

        {/* Center: Motivational tagline */}
        <p className="italic text-gray-400 text-lg md:text-xl font-semibold">
          “Keep coding, keep growing.”
        </p>

        {/* Right: Icons and Back to Top */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>

          <button
            onClick={scrollToTop}
            className="hover:text-white transition focus:outline-none"
            aria-label="Back to top"
            title="Back to top"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
