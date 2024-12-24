import React from 'react';
import { 
  Book, 
  Trophy, 
  Gamepad, 
  Brain, 
  Code, 
  Play,
  GraduationCap,
  Briefcase,
  Wrench
} from 'lucide-react';

const EducationSection = () => (
  <div className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">University of Witwatersrand</h3>
          <p className="text-lg font-medium mb-2">Bachelor of Science</p>
          <p className="text-gray-600 mb-4">Computer Science and Applied Mathematics</p>
          
          <div className="space-y-2">
            <h4 className="font-medium">Majors:</h4>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Mathematics</li>
              <li>Computer Science</li>
              <li>Applied Mathematics</li>
            </ul>
            
            <h4 className="font-medium mt-4">Key Modules:</h4>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Physics</li>
              <li>Computer Applications</li>
              <li>Advanced Mathematics</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">Centre of Science and Technology</h3>
          <p className="text-lg font-medium mb-2">Matriculation (Grade 8-12)</p>
          <p className="text-gray-600">Focus Areas: Mathematics, Physical Sciences, Biology, Information Technology, English, Life Orientation, and Xhosa</p>
        </div>
      </div>
    </div>
  </div>
);

const HobbiesSection = () => {
  const hobbies = [
    {
      icon: Brain,
      title: "Chess Streaming",
      description: "Host and stream chess games online, engaging with a global audience and demonstrating analytical thinking in competitive matches."
    },
    {
      icon: Gamepad,
      title: "Game Development",
      description: "Passionate about creating interactive 3D games using Three.js, including soccer-themed games and space-themed projects with physics-based dynamics."
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Active contributor to open-source projects, focusing on web applications using MERN stack and maintaining modular codebases on GitHub."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Hobbies & Interests</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <hobby.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">{hobby.title}</h3>
              <p className="text-gray-600">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TechnicalExpertiseSection = () => {
  const expertise = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Python", "C", "Java", "C++", "C#", "Kotlin", "Swift", "Ruby", "Go", "Rust", "SQL"]
    },
    {
      category: "Frameworks",
      skills: ["MERN Stack", "Three.js", "FreeGLUT"]
    },
    {
      category: "Web Technologies",
      skills: ["HTML", "CSS", "TypeScript", "PHP", "Ruby on Rails", "Django", "Flask", "Spring", "ASP.NET"]
    },
    {
      category: "Tools & Platforms",
      skills: ["GitHub", "Azure Functions", "Codecov", "GitBook"]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {expertise.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => (
  <div className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
      <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-lg p-6">
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-2xl font-semibold mb-2">Project 90 Intern</h3>
          <p className="text-gray-600 mb-2">2022</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Contributed to climate change initiatives</li>
            <li>Developed team coordination skills</li>
            <li>Enhanced public communication abilities</li>
            <li>Participated in environmental awareness projects</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// Export all sections as a single component for easy integration
const AdditionalSections = () => (
  <>
    <EducationSection />
    <ExperienceSection />
    <TechnicalExpertiseSection />
    <HobbiesSection />
  </>
);

export default AdditionalSections;