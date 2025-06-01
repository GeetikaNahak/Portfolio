import React from "react";

const extracurriculars = [
  {
    role: "GFG CP Head",
    organization: "GeeksforGeeks",
    duration: "2023 - Present",
    description:
      "Leading the Competitive Programming community, organizing contests and workshops.",
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
    role: "GSSoC Campus Ambassador",
    organization: "GirlScript Summer of Code",
    duration: "2023",
    description:
      "Represented the program on campus, spreading awareness and encouraging participation.",
  },
];

const Extracurriculars: React.FC = () => {
  return (
    <section className="w-full px-4 py-16 bg-gradient-to-b from-slate-900 to-black" id="extracurriculars">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Extracurricular Activities
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-12">
          Here are some leadership roles and activities I've taken part in outside academics.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {extracurriculars.map(({ role, organization, duration, description }, idx) => (
          <div
            key={idx}
            className="bg-slate-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">{role}</h3>
              <p className="text-gray-300 font-medium">{organization}</p>
              <p className="text-gray-400 text-sm italic mb-4">{duration}</p>
              <p className="text-gray-300 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extracurriculars;
