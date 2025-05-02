import React from "react";
import { skills } from "../constants/data";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-indigo-200 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-indigo-100 rounded-md text-indigo-600 mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium transition-colors hover:bg-indigo-100 hover:text-indigo-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          My <span className="text-indigo-600">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            title="Languages"
            skills={skills.languages}
            icon={<span className="text-lg">💻</span>}
          />
          <SkillCard
            title="Frameworks"
            skills={skills.frameworks}
            icon={<span className="text-lg">🛠️</span>}
          />
          <SkillCard
            title="Tools & Platforms"
            skills={skills.tools}
            icon={<span className="text-lg">⚙️</span>}
          />
          <SkillCard
            title="Soft Skills"
            skills={skills.soft}
            icon={<span className="text-lg">🤝</span>}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;