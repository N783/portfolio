"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <footer className="w-full max-w-4xl mt-12 mb-8 pt-8 border-t border-[#e6edf3]/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[#e6edf3]/70 font-mono text-sm">
        <div className="flex items-center gap-2 hover:text-[#27c93f] transition-colors cursor-pointer">
          <Mail className="w-4 h-4" />
          <a href="mailto:nadeemrana7830@gmail.com">nadeemrana7830@gmail.com</a>
        </div>

        <div className="flex items-center gap-2 hover:text-[#27c93f] transition-colors cursor-pointer">
          <Phone className="w-4 h-4" />
          <a href="tel:+917830392576">+91 7830392576</a>
        </div>

        <div className="flex items-center gap-2 hover:text-[#27c93f] transition-colors cursor-default">
          <MapPin className="w-4 h-4" />
          <span>India</span>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-[#e6edf3]/30">
        © {new Date().getFullYear()} Moh Nadeem Ahasan. All systems operational.
      </div>
    </footer>
  );
};
