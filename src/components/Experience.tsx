import React from "react";
import { Briefcase } from "lucide-react";
import { experiences, certificates } from "../constants/data";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Experience & <span className="text-indigo-600">Certificates</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Briefcase className="mr-3 text-indigo-600" size={24} />
              Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-indigo-200 pb-8 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{exp.title}</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-gray-600 text-sm leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3 text-indigo-600 text-2xl">🏆</span>
              Certificates
            </h3>

            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <div 
                  key={index} 
                  className="p-4 border border-gray-100 rounded-lg transition-all hover:border-indigo-200 hover:shadow-sm"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-md font-semibold text-gray-800">{cert.title}</h4>
                      <p className="text-gray-600 text-sm">{cert.issuer}</p>
                    </div>
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-md">
                      {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;