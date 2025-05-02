import React from "react";
import { ArrowUp } from "lucide-react";
import { personalInfo } from "../constants/data";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">
              {personalInfo.name.split(" ")[0]}
              <span className="text-indigo-400">{personalInfo.name.split(" ")[1]}</span>
            </h3>
            <p className="text-gray-400 mt-2">{personalInfo.role}</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 bg-indigo-600 rounded-full mb-4 hover:bg-indigo-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;