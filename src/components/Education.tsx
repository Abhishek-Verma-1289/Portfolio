import React from "react";
import { GraduationCap } from "lucide-react";
import { education, achievements } from "../constants/data";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Education & <span className="text-indigo-600">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <GraduationCap className="mr-3 text-indigo-600" size={24} />
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 border-l-2 border-indigo-200 pb-8 last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                  <div className="mb-1">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mt-2">{edu.institution}</h4>
                  <p className="text-gray-600 mt-1">{edu.degree}</p>
                  <p className="text-gray-500 text-sm mt-1">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3 text-indigo-600 text-2xl">🏅</span>
              Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="p-4 border border-gray-100 rounded-lg flex items-start gap-4 transition-all hover:border-indigo-200 hover:shadow-sm"
                >
                  <div className="min-w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{achievement.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;