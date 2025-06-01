import React from "react";

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
    duration: "2022 - Present",
    description:
      "Guiding DSA learning sessions and organizing CodeChef contests for the campus.",
  },
  {
    role: "Sushacks Hackathon Organizer",
    organization: "Sushacks",
    duration: "2023",
    description:
      "Coordinated and managed the hackathon event, fostering innovation and teamwork.",
  },
  {
    role: "GFG CP Head",
    organization: "GeeksforGeeks",
    duration: "2023 - Present",
    description:
      "Leading the Competitive Programming community, organizing contests and workshops.",
  },
];

const TimelineDot = () => (
  <div className="w-5 h-5 bg-indigo-500 rounded-full border-2 border-white shadow-md"></div>
);

const TimelineLine = () => (
  <div className="w-1 bg-indigo-600 flex-grow mx-auto"></div>
);

const ExtracurricularsTimeline: React.FC = () => {
  return (
    <section
      id="extracurriculars"
      className="w-full px-4 py-16 bg-gradient-to-b from-slate-950 to-black"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Extracurricular Activities
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-12">
          Here’s a timeline of some leadership roles and activities I've been
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
                className="bg-slate-800 rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-indigo-300 mb-1">{role}</h3>
                <p className="text-pink-300 font-medium">{organization}</p>
                <p className="text-purple-400 text-sm italic mb-4">{duration}</p>
                <p className="text-indigo-200 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularsTimeline;
