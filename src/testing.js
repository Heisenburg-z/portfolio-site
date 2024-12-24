import React from 'react';
import { ChevronDown } from 'lucide-react';

const AnimatedText = ({ children, delay = '0s' }) => (
  <div className="overflow-hidden">
    <div 
      className="animate-slideUp" 
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  </div>
);

const HeroSection = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden"
    >
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-4 h-4 bg-blue-500 rounded-full animate-float top-1/4 left-1/4 opacity-20"></div>
        <div className="absolute w-6 h-6 bg-blue-400 rounded-full animate-float top-3/4 left-1/3 opacity-20" 
             style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-float top-1/2 right-1/4 opacity-20"
             style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center px-4 relative z-10">
        {/* Profile image with animated ring */}
        <div className="relative w-48 h-48 mx-auto mb-6 animate-fadeIn">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-900 to-blue-900"></div>
          <img 
            src="/api/placeholder/192/192"
            alt="Thapelo Ndlovu" 
            className="relative w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-2xl animate-fadeIn"
          />
          <div className="absolute -inset-2 rounded-full border-2 border-blue-500 opacity-50 animate-ping"></div>
        </div>

        {/* Animated text sections */}
        <AnimatedText delay="0.5s">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Hi, I'm Thapelo Ndlovu
          </h1>
        </AnimatedText>

        <AnimatedText delay="0.7s">
          <p className="text-xl md:text-2xl mb-6 text-blue-50">
            A driven Computer Science student specializing in software design, web development, 
            and computer applications, with expertise in parallel computing, machine learning, 
            and operating systems. Leveraging a solid foundation in applied mathematics to 
            solve complex problems and create innovative solutions. Passionate about translating 
            theoretical concepts into impactful real-world applications.
          </p>
        </AnimatedText>

        {/* Animated buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn" 
             style={{ animationDelay: '1s' }}>
          <button 
            onClick={() => scrollToSection('projects')}
            className="group bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View Projects 
            <ChevronDown className="ml-2 group-hover:animate-bounce" />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// Add these custom animations to your global CSS or Tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes slideUp {
    from { transform: translateY(100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-spin-slow {
    animation: spin-slow 10s linear infinite;
  }

  .animate-slideUp {
    animation: slideUp 1s ease-out forwards;
  }
`;
document.head.appendChild(style);