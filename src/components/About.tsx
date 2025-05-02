import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo } from "../constants/data";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          About <span className="text-indigo-600">Me</span>
        </h2>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I am a Computer Science Engineering student at Lovely Professional University with a passion for web development 
            and problem-solving. I enjoy creating intuitive, dynamic user experiences and continuously learning new technologies. 
            My goal is to contribute to innovative projects that make a positive impact.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href={`https://${personalInfo.links.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href={`https://${personalInfo.links.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.links.email}`}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href={`tel:${personalInfo.links.mobile}`}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              <Phone size={20} />
              <span>Call</span>
            </a>
          </div>

          <div className="flex justify-center">
            <div className="inline-block relative">
              <div className="h-1 w-20 bg-indigo-600 absolute left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;