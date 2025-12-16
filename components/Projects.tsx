"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Truck, Leaf, Database, Github } from "lucide-react";

const projects = [
  {
    title: "Tender Search Tool",
    description:
      "AI-powered system to scrape and process government tenders. Uses Puppeteer & 2Captcha to bypass captchas and AWS Textract/OpenAI to parse PDFs.",
    stack: ["Node.js", "Puppeteer", "AWS Textract", "OpenAI API", "Redis"],
    icon: <Bot className="w-8 h-8 text-[#27c93f]" />,
  },
  {
    title: "QuickShift",
    description:
      "Real-time driver tracking backend using Socket.io and MongoDB change streams. Integrated Uber Direct API for courier assignment.",
    stack: ["Node.js", "Socket.io", "Uber Direct API", "Docker"],
    icon: <Truck className="w-8 h-8 text-[#27c93f]" />,
  },
  {
    title: "Aptk Nutrition",
    description:
      "Nutrition platform backend integrated with Uber Direct for real-time delivery scheduling and cost estimation. Monitored via CloudWatch.",
    stack: ["Node.js", "Uber Direct API", "AWS EC2", "Docker"],
    icon: <Leaf className="w-8 h-8 text-[#27c93f]" />,
  },
  {
    title: "bzyBe",
    description:
      "Event-driven backend using RabbitMQ for async notifications and Stripe for subscription billing automation.",
    stack: ["Node.js",  "Stripe", "AWS S3"],
    icon: <Database className="w-8 h-8 text-[#27c93f]" />,
  },
];

export const Projects = () => {
  return (
    <div className="w-full max-w-4xl mb-12">
      <h3 className="text-[#27c93f] font-mono mb-6 text-lg md:text-xl font-semibold opacity-90">
        &gt; Deployed Operations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-6 bg-[#0d1117]/50 border border-[#e6edf3]/10 rounded-xl hover:border-[#27c93f]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#27c93f]/10 flex flex-col"
          >
            <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg group-hover:bg-[#27c93f]/10 transition-colors">
              {project.icon}
            </div>

            <h4 className="text-xl font-bold text-[#e6edf3] mb-2">
              {project.title}
            </h4>
            <p className="text-[#e6edf3]/70 text-sm leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono text-[#27c93f] bg-[#27c93f]/10 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center text-sm font-bold text-[#e6edf3] hover:text-[#27c93f] transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
