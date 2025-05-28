"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      className="w-full py-16 px-4 bg-gray-900 text-white"
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300">
          I'm a passionate full-stack developer with a strong foundation in both frontend and backend technologies. I love solving problems, building impactful projects, and continuously learning new things in tech!
        </p>
      </div>
    </motion.section>
  );
}
