'use client'

import React from "react";
import { motion } from 'framer-motion';
const extracurriculars = [
  {
    role: "GSSoC Campus Ambassador",
    organization: "GirlScript Summer of Code",
    duration: "2023",
    description:
      "Represented the program on campus, spreading awareness and encouraging participation.",
  },
  {
    role: "CodeChef DSA Lead",
    organization: "CodeChef Chapter",
    duration: "2024 - Present",
    description:
      "Guiding DSA learning sessions and organizing CodeChef contests for the campus.",
  },
  {
    role: "Sushacks Hackathon Organizer",
    organization: "Sushacks",
    duration: "2025",
    description:
      "Coordinated and managed the hackathon event, fostering innovation and teamwork.",
  },
  {
    role: "GFG CP Head",
    organization: "GeeksforGeeks",
    duration: "2024 - Present",
    description:
      "Leading the Competitive Programming community, organizing contests and workshops.",
  },
];

const TimelineDot = () => (
  <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
);

const TimelineLine = () => (
  <div className="w-1 bg-blue-600 flex-grow mx-auto"></div>
);

const ExtracurricularsTimeline: React.FC = () => {
  return (
    <section
      id="extracurriculars"
      className="w-full px-4 py-16 bg-gradient-to-b from-slate-950 to-black"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Extracurriculars
          <span className="block h-1 w-20 mx-auto mt-2 bg-gradient-to-r from-indigo-500 to-blue-400 rounded"></span>
        </motion.h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-12">
          Here&apos;s a timeline of some leadership roles and activities I&apos;ve been
          proud to take part in outside academics.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-10">
          {/* Vertical timeline line */}
          <div className="hidden md:flex flex-col items-center">
            <TimelineDot />
            <TimelineLine />
            <TimelineDot />
            <TimelineLine />
            <TimelineDot />
            <TimelineLine />
            <TimelineDot />
            <TimelineLine />
          </div>

          <div className="flex flex-col space-y-12 md:space-y-16">
            {extracurriculars.map(({ role, organization, duration, description }, idx) => (
              <div
                key={idx}
                className="bg-slate-900 rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white-200 mb-1">{role}</h3>
                <p className="text-pink-300 font-medium">{organization}</p>
                <p className="text-white-200 text-sm italic mb-4">{duration}</p>
                <p className="text-gray-300 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularsTimeline;
