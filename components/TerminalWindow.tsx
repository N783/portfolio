"use client";

import React, {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import { motion } from "framer-motion";

interface HistoryItem {
  type: "command" | "output";
  content: string | object;
}

const JsonDisplay = ({ data }: { data: object }) => {
  const jsonString = JSON.stringify(data, null, 2);

  // Simple regex-based syntax highlighting
  const highlighted = jsonString.split("\n").map((line, i) => {
    // Match key-value pair pattern
    const match = line.match(/^(\s*)(".*?")(: )?(.*?)?(,?)$/);

    if (match) {
      const [, indent, key, colon, value, comma] = match;
      return (
        <div
          key={i}
          className="whitespace-pre font-mono break-words text-sm md:text-base"
        >
          {indent}
          <span className="text-[#27c93f]">{key}</span>
          {colon && <span className="text-white">{colon}</span>}
          {value && <span className="text-white break-all">{value}</span>}
          {comma && <span className="text-white">{comma}</span>}
        </div>
      );
    }
    // Fallback for lines that don't match simple key-value (like braces)
    return (
      <div
        key={i}
        className="whitespace-pre text-white font-mono text-sm md:text-base"
      >
        {line}
      </div>
    );
  });

  return <div className="w-full overflow-x-auto">{highlighted}</div>;
};

export const TerminalWindow = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      type: "output",
      content: `Last login: ${new Date().toDateString()} on ttys000`,
    },
    { type: "output", content: 'Type "help" to see available commands.' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: string | object = "";

    switch (trimmedCmd) {
      case "help":
        output =
          "Available commands: help, about, projects, skills, contact, clear";
        break;
      case "about":
        output =
          "I am a Backend Developer specializing in Node.js, AWS, and Microservices Architecture. I architect production-grade systems using Node.js, MongoDB, and Docker.";
        break;
      case "projects":
        output = [
          {
            name: "Tender Search Tool",
            stack: "Node.js, Puppeteer, AWS Textract, OpenAI API, Redis",
            description:
              "AI-powered system to scrape and process government tenders.",
            link: "#",
          },
          {
            name: "QuickShift",
            stack: "Node.js, Socket.io, Uber Direct API, Docker",
            description:
              "Real-time driver tracking and courier assignment backend.",
            link: "#",
          },
          {
            name: "Aptk Nutrition",
            stack: "Node.js, Uber Direct API, AWS EC2, Docker",
            description:
              "Nutrition platform delivery integration with Uber Direct.",
            link: "#",
          },
          {
            name: "bzyDe",
            stack: "Node.js, Stripe, AWS S3",
            description:
              "Event-driven backend for subscription billing automation.",
            link: "#",
          },
        ];
        break;
      case "skills":
        output = {
          backend: ["Node.js", "Express.js", "Socket.io"],
          database: ["MongoDB", "Redis"],
          devops: ["AWS (EC2 & S3 & Textract)", "Docker", "GitHub Actions"],
          tools: ["Puppeteer", "OpenAI API", "Stripe/Razorpay"],
        };
        break;
      case "contact":
        output = {
          email: "nadeemrana7830@gmail.com",
          phone: "+91 7830392576",
          location: "India",
        };
        break;
      case "clear":
        setHistory([]);
        return;
      case "":
        return;
      default:
        output = `Command not found: ${trimmedCmd}`;
    }

    setHistory((prev) => [
      ...prev,
      { type: "command", content: cmd },
      { type: "output", content: output },
    ]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-4xl h-[80vh] md:h-[600px] rounded-xl overflow-hidden shadow-2xl bg-[#0d1117]/80 backdrop-blur-md border border-white/10 flex flex-col font-mono"
      onClick={focusInput}
    >
      {/* Title Bar */}
      <div className="h-8 bg-white/5 flex items-center px-4 space-x-2 border-b border-white/5 flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 cursor-pointer transition-colors" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 cursor-pointer transition-colors" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 cursor-pointer transition-colors" />
      </div>

      {/* Terminal Content */}
      <div className="flex-1 p-4 overflow-y-auto scrollbar-hide space-y-2 text-[#e6edf3]">
        {history.map((item, index) => (
          <div
            key={index}
            className={`${
              item.type === "command" ? "text-white" : "text-[#e6edf3]/80"
            }`}
          >
            {item.type === "command" && (
              <span className="text-[#27c93f] mr-2 text-sm md:text-base">
                visitor@backend-dev:~$
              </span>
            )}
            {typeof item.content === "object" ? (
              <JsonDisplay data={item.content} />
            ) : (
              <span className="text-sm md:text-base">{item.content}</span>
            )}
          </div>
        ))}

        {/* Input Area */}
        <div className="flex items-center">
          <span className="text-[#27c93f] mr-2 text-sm md:text-base flex-shrink-0">
            visitor@backend-dev:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-[#e6edf3] placeholder-white/20 text-sm md:text-base min-w-0"
            autoComplete="off"
            spellCheck="false"
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
};
