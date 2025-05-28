"use client";

import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/magic-button";
import { AnimatePresence, motion } from "framer-motion";
import ProjectsSection from "./ProjectsSection";

const TEXTS = [
  {
    word: "amazing",
    className: "bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]",
  },
  {
    word: "stunning",
    className: "bg-clip-text text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]",
  },
  {
    word: "fantastic",
    className: "bg-clip-text text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]",
  },
  {
    word: "attractive",
    className: "bg-clip-text text-transparent bg-gradient-to-r from-[#2ecc70] to-[#1ca085]",
  },
];

const SPEED = 2000; // 2 seconds

const variants = {
  enter: { y: 20, opacity: 0 },
  center: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TEXTS.length);
    }, SPEED);
    return () => clearInterval(timer);
  }, []);

  const currentText = TEXTS[currentIndex];

  return (
    <div className="pb-20 pt-36 w-full h-full bg-black">
      <div>
        <Spotlight
          className="-top-50 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-auto" fill="blue" />
      </div>

      <BackgroundBeams />

      <div className="flex flex-col items-center justify-center relative my-20 z-10 px-4 text-center">
        <TextGenerateEffect
          className="text-[48px] md:text-7xl lg:text-8xl font-bold tracking-wider leading-tight"
          words="Hi, I'm Geetika"
        />
        <p className="text-white md:tracking-wider mb-4 text-xl md:text-xl lg:text-2xl">
  A Full Stack Web Developer, building{" "}
  <AnimatePresence mode="wait">
    <motion.span
      key={currentIndex}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.5 }}
      className={`inline-block font-semibold ${currentText.className}`}
    >
      {currentText.word}
    </motion.span>
  </AnimatePresence>{" "}
  webApps and Competitive Programmer
</p>


        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#about">
            <MagicButton title="View my Work" icon position="right" />
          </a>
          <a
            href="https://drive.google.com/your-resume-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton title="Get in touch" icon position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
