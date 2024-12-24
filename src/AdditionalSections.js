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
  Wrench,
  ChevronRight
} from 'lucide-react';

const EducationSection = () => (
  <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Education Journey</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-start gap-4">
            <GraduationCap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3">University of Witwatersrand</h3>
              <div className="inline-block bg-blue-50 px-4 py-1 rounded-full text-blue-700 text-sm font-medium mb-4">
                Bachelor of Science
              </div>
              <p className="text-gray-600 mb-6">Computer Science and Applied Mathematics</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Majors</h4>
                  <ul className="space-y-2">
                    {['Mathematics', 'Computer Science', 'Applied Mathematics'].map((major, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                        {major}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Key Modules</h4>
                  <ul className="space-y-2">
                    {['Physics', 'Computer Applications', 'Advanced Mathematics'].map((module, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-start gap-4">
            <Book className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3">Centre of Science and Technology</h3>
              <div className="inline-block bg-blue-50 px-4 py-1 rounded-full text-blue-700 text-sm font-medium mb-4">
                Matriculation (Grade 8-12)
              </div>
              <p className="text-gray-600">Focus Areas: Mathematics, Physical Sciences, Biology, Information Technology, English, Life Orientation, and Xhosa</p>
            </div>
          </div>
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
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Hobbies & Interests</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-xl transform transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative bg-white rounded-xl p-8 border border-gray-100 transform transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2">
                <hobby.icon className="w-12 h-12 mx-auto mb-6 text-blue-600" />
                <h3 className="text-xl font-bold mb-4 text-gray-800">{hobby.title}</h3>
                <p className="text-gray-600 leading-relaxed">{hobby.description}</p>
              </div>
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
      icon: Code,
      category: "Programming Languages",
      skills: ["JavaScript", "Python", "C", "Java", "C++", "C#", "Kotlin", "Swift", "Ruby", "Go", "Rust", "SQL"]
    },
    {
      icon: Wrench,
      category: "Frameworks",
      skills: ["MERN Stack", "Three.js", "FreeGLUT", "Next.js", "Vue.js", "Svelte", "Nuxt.js", "TailwindCSS", "GraphQL", "Gatsby", "WebGL", "Astro", "D3.js", "Prisma", "Socket.io", "Jest", "React Native", "TypeScript", "Redux", "AWS/Firebase"]
    },
    {
      icon: Trophy,
      category: "Web Technologies",
      skills: ["HTML", "CSS", "TypeScript", "PHP", "Ruby on Rails", "Django", "Flask", "Spring", "ASP.NET"]
    },
    {
      icon: Briefcase,
      category: "Tools & Platforms",
      skills: ["GitHub", "Azure Functions", "Codecov", "GitBook"]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {expertise.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <category.icon className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors duration-200"
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
  <div className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Professional Experience</h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-start gap-4">
            <Briefcase className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Project 90 Intern</h3>
              <div className="inline-block bg-blue-50 px-4 py-1 rounded-full text-blue-700 text-sm font-medium mb-6">2022</div>
              <ul className="space-y-3">
                {[
                  'Contributed to climate change initiatives',
                  'Developed team coordination skills',
                  'Enhanced public communication abilities',
                  'Participated in environmental awareness projects'
                ].map((point, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AdditionalSections = () => (
  <>
    <EducationSection />
    <ExperienceSection />
    <TechnicalExpertiseSection />
    <HobbiesSection />
  </>
);

export default AdditionalSections;