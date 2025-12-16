"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "AWS (EC2 & S3)",
  "Redis",
  "GitHub Actions (CI/CD)",
  "Puppeteer (Automation)",
  "OpenAI API",
  "Socket.io",
  "Stripe/Razorpay",
];

export const Skills = () => {
  return (
    <div className="w-full max-w-4xl mb-12">
      <h3 className="text-[#27c93f] font-mono mb-6 text-lg md:text-xl font-semibold opacity-90">
        &gt; Technical Arsenal
      </h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.1 },
              scale: { duration: 0.5, delay: index * 0.1 },
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 2, // Random delay for organic feel
              },
            }}
            className="px-4 py-2 bg-[#0d1117] border border-[#e6edf3]/20 rounded-full text-[#e6edf3] font-mono text-sm md:text-base shadow-lg hover:border-[#27c93f] transition-colors cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
