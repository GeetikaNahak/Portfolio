"use client";
import { motion } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiMongodb, SiFirebase,
  SiGit, SiAwslambda, SiDocker
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "AWS", icon: <SiAwslambda className="text-orange-300" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> }
];

export default function SkillsSection() {
  return (
    <div
      className="w-full py-16 px-4 bg-gradient-to-b from-slate-950 to-black text-white"
      id="skills"
      
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl shadow-lg transition"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <span className="text-sm text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
