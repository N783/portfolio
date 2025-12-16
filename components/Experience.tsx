"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Backend Developer",
    company: "Dev Story",
    date: "Apr 2025 - Present",
    points: [
      "Architected production-ready backends using Node.js & Microservices.",
      "Built CI/CD pipelines with GitHub Actions, Docker, and PM2 on AWS EC2.",
      "Integrated Uber Direct API for dispatch and delivery tracking.",
      "Reduced API response time by 40% using aggregation pipelines and caching.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company: "Brilliants Web",
    date: "Feb 2024 - Mar 2025",
    points: [
      "Built modular APIs for authentication (JWT/RBAC) and product management.",
      "Integrated Stripe & Razorpay for secure multi-currency payments.",
      "Created Docker-based staging environments for consistent deployments.",
    ],
  },
];

export const Experience = () => {
  return (
    <div className="w-full max-w-4xl mb-12">
      <h3 className="text-[#27c93f] font-mono mb-6 text-lg md:text-xl font-semibold opacity-90">
        &gt; Career History
      </h3>
      <div className="relative border-l border-[#e6edf3]/20 ml-3 md:ml-6 space-y-8 md:space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-[#27c93f] rounded-full ring-4 ring-[#0d1117]" />

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h4 className="text-xl font-bold text-[#e6edf3]">{exp.title}</h4>
              <span className="font-mono text-sm text-[#e6edf3]/60">
                {exp.date}
              </span>
            </div>

            <div className="text-[#27c93f] font-medium mb-4">{exp.company}</div>

            <ul className="space-y-2">
              {exp.points.map((point, idx) => (
                <li
                  key={idx}
                  className="text-[#e6edf3]/80 text-sm md:text-base leading-relaxed flex items-start"
                >
                  <span className="mr-2 text-[#27c93f] mt-1.5 md:mt-1">
                    &gt;
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
