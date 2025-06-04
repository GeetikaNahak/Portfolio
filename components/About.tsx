"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
const AboutMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"skills" | "education">("skills");
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillsHeight = skillsRef.current?.offsetHeight || 0;
    const educationHeight = educationRef.current?.offsetHeight || 0;
    const maxHeight = Math.max(skillsHeight, educationHeight);

    if (containerRef.current) {
      containerRef.current.style.minHeight = `${maxHeight}px`;
    }
  }, []);

  const skills = [
    "Full Stack Development",
    "React, Node.js, MongoDB",
    "C++, Java, Python",
    "DSA & Competitive Coding",
    "REST APIs, Firebase, Docker",
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Vignan's Institute of Information Technology",
      duration: "2022 - 2026",
      achievement: "CGPA : 9.4",
    },
    {
      degree: "Intermediate (12th)",
      institution: "St. Joseph's College For Women(A)",
      duration: "2020 - 2022",
      achievement: "Percentage : 86",
    },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen px-6 py-16 bg-gradient-to-b from-slate-950 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Centered About Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          About Me
          <span className="block h-1 w-20 mx-auto mt-2 bg-gradient-to-r from-indigo-500 to-blue-400 rounded"></span>
        </motion.h2>

        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 w-full space-y-6 mt-4">
            <p className="text-gray-300 leading-relaxed">
              I’m a passionate Full Stack Developer and Competitive Coder who
              loves building web applications and solving algorithmic challenges.
              I enjoy working on impactful projects and taking on leadership roles
              in communities and hackathons.
            </p>

            {/* Tabs */}
            <div className="flex gap-4 mt-4">
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-4 py-2 text-sm font-medium transition-all ${
                activeTab === "skills"
                  ? "border-b-2 text-white"
                  : " text-gray-300"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 py-2 text-sm font-medium transition-all ${
                activeTab === "education"
                  ? "border-b-2 text-white"
                  : " text-gray-300"
              }`}
            >
              Education
            </button>
          </div>

          {/* Fixed Height Container */}
          <div ref={containerRef} className="relative transition-all duration-300 overflow-hidden mt-4">
            {/* Skills Tab */}
            <div
              ref={skillsRef}
              className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${
                activeTab === "skills" ? "opacity-100 relative" : "opacity-0 pointer-events-none absolute"
              }`}
            >
              <ul className="list-disc list-inside text-indigo-200 space-y-1">
                {skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Education Tab */}
            <div
              ref={educationRef}
              className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${
                activeTab === "education" ? "opacity-100 relative" : "opacity-0 pointer-events-none absolute"
              }`}
            >
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className=" p-4 rounded-lg shadow">
                    <h4 className="text-indigo-300 font-semibold">{edu.degree}</h4>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                    <p className="text-gray-500 text-xs italic">{edu.duration}</p>
                    <p className="text-gray-300 text-sm mt-1">{edu.achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-2 bg-slate-900 blur-md opacity-40 rounded-xl z-0"></div>
            <img
              src="/PortfolioImg.png"
              alt="Your Profile"
              className="relative rounded-xl h-[400px] w-auto object-cover shadow-[0_25px_50px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500 z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
