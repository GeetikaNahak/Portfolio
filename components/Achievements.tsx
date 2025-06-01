// components/Achievements.tsx
"use client";

import React from "react";

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
      className="bg-gradient-to-b from-slate-900 to-black text-white py-16 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">🏆 Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 p-4 rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md mb-4 border border-white/10"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
