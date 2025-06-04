
"use client";

import React from "react";
import { motion } from 'framer-motion';
const achievements = [
  {
    title: "TCS CodeVita Qualifier",
    year: "2025",
    desc: "Qualified Round 2 in TCS CodeVita Global Coding Contest 2024",
  },
  {
    title: "CodeRush 1st Prize Winner",
    year: "2024",
    desc: "Won 1st prize in college-wide coding competition CodeRush",
  },
  {
    title: "3* Coder On CodeChef",
    year:"",
    desc:"Achieved 3* Rating on Code Chef Coding Platform"
  },
  {
    title: "500+ Problems Solved",
    year:"",
    desc:"Solved 500+ problems on CodeChef, Leetcode and GeeksforGeeks"
  },
  {
    title: "Top Performer in College Level Coding Contests",
    desc:"Always Stayed in Top 10 in the Contests held in the College",
  }
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

        {
          achievements.map(({year,title,desc},idx)=>(
            <div key={idx} className="mb-6">
              <p className="text-sm text-gray-400">{year}</p>
              <h5 className="text-lg font-semibold text-white">{title}</h5>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))
        }
        
      </div>
    </div>
  </div>
    </section>
  );
};

export default Achievements;
