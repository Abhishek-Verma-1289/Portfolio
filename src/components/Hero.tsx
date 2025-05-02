import React from "react";
import { ChevronDown } from "lucide-react";
import { personalInfo } from "../constants/data";

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 tracking-tight">
              Hello, I am{" "}
              <span className="text-indigo-600">{personalInfo.name.split(" ")[0]}</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6">
              {personalInfo.role}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about creating innovative solutions with modern technologies.
              Let's build something amazing together.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium transition-all hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              >
                Contact Me
              </a>
              <a 
                href="#projects"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md font-medium transition-all hover:bg-indigo-50 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="w-60 h-60 md:w-80 md:h-80 mx-auto overflow-hidden rounded-full border-8 border-white shadow-lg transform transition-all duration-500 hover:scale-105">
                <img 
                  src={personalInfo.photo} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg">
                <span className="font-bold">CS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-indigo-600" />
      </button>
    </section>
  );
};

export default Hero;