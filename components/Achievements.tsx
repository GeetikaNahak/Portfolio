// components/Achievements.tsx
"use client";

import React from "react";
import { motion } from 'framer-motion';
const achievements = [
  {
    title: "TCS CodeVita Qualifier",
    image: "/cert.png",
    description: "Qualified Round 2 in TCS CodeVita Global Coding Contest 2024",
  },
  {
    title: "CodeRush 1st Prize Winner",
    image: "/winning.jpg",
    description: "Won 1st prize in college-wide coding competition CodeRush",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="bg-gradient-to-b min-h-screen from-slate-950 to-black text-white py-16 px-4"
    ><motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-4 relative  "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Achievements
              <span className="block h-1 w-20 mx-auto mt-2 bg-gradient-to-r from-indigo-500 to-blue-400 rounded"></span>
            </motion.h2>
      <div
    className="rounded-2xl p-6 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/winning.jpg')", 
    }}
  >
    <div className="flex flex-col md:flex-row">
      
      <div className="md:w-1/3 w-full bg-slate-900  text-white p-6 rounded-2xl shadow-lg">

        {/* Achievement 1 */}
        <div className="mb-6">
          <p className="text-sm text-gray-400">2024</p>
          <h5 className="text-lg font-semibold text-white">Code Rush Winner</h5>
          <p className="text-sm text-gray-400">Organized by Coding Club @VIIT</p>
        </div>

        {/* Achievement 2 */}
        <div className="mb-6">
          <p className="text-sm text-gray-400">2024</p>
          <h5 className="text-lg font-semibold text-white">Finalist – Sushacks Hackathon</h5>
          <p className="text-sm text-gray-400">Conducted @Sushacks</p>
        </div>

        {/* Achievement 3 */}
        <div className="mb-6">
          <p className="text-sm text-gray-400">2023</p>
          <h5 className="text-lg font-semibold text-white">App Design Winner</h5>
          <p className="text-sm text-gray-400">VISTA Technical Fest @VIIT</p>
        </div>

        {/* Achievement 4 */}
        <div className="mb-2">
          <p className="text-sm text-gray-400">2023</p>
          <h5 className="text-lg font-semibold text-white">Coding Contest Winner</h5>
          <p className="text-sm text-gray-400">VISTA Technical Fest @VIIT</p>
        </div>
      </div>
    </div>
  </div>
    </section>
  );
};

export default Achievements;
