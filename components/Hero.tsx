"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const text =
    "Backend Developer specializing in Node.js, AWS, and Microservices Architecture.";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 50); // Typing speed

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mb-8 font-mono text-center md:text-left">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-[#e6edf3] mb-4"
      >
        Moh Nadeem Ahasan
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl md:text-2xl text-[#27c93f] mb-6 font-semibold"
      >
        Building scalable backends & AI-driven automation.
      </motion.h2>

      <div className="h-16 md:h-12 mb-6 text-[#e6edf3]/80 text-lg">
        <span>{displayText}</span>
        {isTyping && <span className="animate-pulse">|</span>}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }} // Delay until typing finishes roughly
        className="text-[#e6edf3]/70 mb-8 max-w-2xl leading-relaxed"
      >
        I architect production-grade systems using Node.js, MongoDB, and Docker.
        From integrating Uber Direct APIs to building AI-powered tender scraping
        tools, I focus on performance, fault tolerance, and maintainability.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <a
          href="/resume.pdf"
          download
          className="inline-block px-6 py-3 border border-[#27c93f] text-[#27c93f] hover:bg-[#27c93f] hover:text-[#0d1117] transition-all duration-300 rounded font-bold"
        >
          Download CV
        </a>
      </motion.div>
    </div>
  );
};
