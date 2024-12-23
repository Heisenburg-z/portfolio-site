import React, { useState, useRef, useEffect } from 'react';
import { 
  Home, 
  Code, 
  User, 
  Award, 
  MessageCircle, 
  GitBranch, 
  ChevronDown,
  Send,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon
} from 'lucide-react';

// Profile Image (replace with actual image path)
const PROFILE_IMAGE = './images/me.jpg';

// Project Data
const PROJECTS = [
  {
    name: 'Event & Activities Subsystem',
    description: 'MERN-stack project with "Liked Events" feature and Codecov integration for comprehensive test coverage. Implements real-time updates and interactive UI components.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Codecov', 'Vercel'],
    githubLink: 'https://github.com/TumeloMkwambe/eWits',
    demoLink: 'https://ewits-front.vercel.app/',
    imageUrl: '/images/ewits.png'
  },
  {
    name: 'Maze 3D',
    description: 'Interactive 3D game featuring procedurally generated mazes, physics-based movement, and collectible items. Built with Three.js for immersive WebGL rendering.',
    technologies: ['Three.js', 'WebGL', 'JavaScript', 'Physics Engine', 'Procedural Generation'],
    githubLink: 'https://github.com/dashboard',
    demoLink: 'https://lamp.ms.wits.ac.za/~spixelwavesyndicates/',
    imageUrl: '/images/maze.png'
  },
  {
    name: 'CampusTrade App',
    description: 'Full-stack marketplace application enabling students to buy, sell, and trade items. Features real-time chat, secure payments, and responsive design.',
    technologies: ['React.js', 'MongoDB', 'Express', 'Node.js', 'WebSocket', 'Stripe'],
    githubLink: 'https://github.com/Heisenburg-z/CampusTrade',
    demoLink: 'https://github.com/Heisenburg-z/CampusTrade',
    imageUrl: '/images/ctrade.png'
  },
  {
    name: 'Sectional titles and property management',
    description: 'Sectional title describes the separate ownership of a unit within a group-owned complex or development. Simply put, the term refers to a complex with flats, townhouses or apartments that has multiple owners; each owning a section of the overall property. The collective of owners typically elect a body corporate made up of some of the owners to take responsibility for some of the tasks required to maintain the property. This includes overseeing the enforcement of rules and regulations, the security, upkeep and maintenance of the property, and managing communication with the owners, renters and related parties among other things.',
    technologies: ['React.js', 'Firebase', 'Express', 'Node.js', 'WebSocket', 'Azure'],
    githubLink: 'https://github.com/Heisenburg-z/Sectional-titles-property-management',
    demoLink: 'https://witty-plant-0efd7e103.5.azurestaticapps.net/',
    imageUrl: '/images/property.png'
  }
];

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null)
  };

  // Handle scroll-based navigation visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
      
      // Update active section based on scroll position
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (section) => {
    setActiveSection(section);
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  const NavBar = () => (
    <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
      isNavVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="bg-gray-900/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-white hover:text-blue-400 transition cursor-pointer"
               onClick={() => scrollToSection('home')}>
            Thapelo Ndlovu
          </div>
          <div className="flex space-x-6 text-white">
            {[
              { icon: Home, name: 'Home', section: 'home' },
              { icon: User, name: 'About', section: 'about' },
              { icon: Code, name: 'Projects', section: 'projects' },
              { icon: Award, name: 'Skills', section: 'skills' },
              { icon: MessageCircle, name: 'Contact', section: 'contact' }
            ].map(({ icon: Icon, name, section }) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className={`flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200
                  ${activeSection === section ? 'text-blue-500' : ''}`}
              >
                <Icon size={20} />
                <span className="hidden md:inline">{name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );

  const HeroSection = () => (
    <div 
      ref={sectionRefs.home}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white"
    >
      <div className="text-center px-4">
        <div className="relative w-48 h-48 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-blue-500 animate-pulse"></div>
          {<img 
            src={PROFILE_IMAGE} 
            alt="Thapelo Ndlovu" 
            className="relative w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-2xl"
          /> 
          }
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Thapelo Ndlovu
        </h1>
        <p className="text-xl md:text-2xl mb-6">
A driven Computer Science student specializing in software design, web development, and computer applications, with expertise in parallel computing, machine learning, and operating systems. Leveraging a solid foundation in applied mathematics to solve complex problems and create innovative solutions. Passionate about translating theoretical concepts into impactful real-world applications.

        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            View Projects <ChevronDown className="ml-2" />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full transition-colors duration-200"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={project.imageUrl} 
          alt={project.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-60 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-black transition-colors duration-200"
          >
            <GitBranch className="mr-2" /> GitHub
          </a>
          <a 
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-700 hover:text-blue-900 transition-colors duration-200"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );

  const ProjectSection = () => (
    <div 
      ref={sectionRefs.projects}
      className="bg-gray-100 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );

  const ContactSection = () => (
    <div 
      ref={sectionRefs.contact}
      className="bg-gray-900 text-white py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          <form 
            onSubmit={handleFormSubmit}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input 
                id="name"
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input 
                id="email"
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={5}
                required
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              <Send className="mr-2" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {[
            { icon: LinkedinIcon, link: 'https://www.linkedin.com/in/thapelo-ndlovu-1165152aa/', label: 'LinkedIn' },
            { icon: GithubIcon, link: 'https://github.com/Heisenburg-z', label: 'GitHub' },
            { icon: TwitterIcon, link: 'https://twitter.com/ThapeloNdlovu', label: 'Twitter' }
          ].map(({ icon: Icon, link, label }) => (
            <a 
              key={link} 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Thapelo Ndlovu. All Rights Reserved.</p>
      </div>
    </footer>
  );
  const SkillSection = () => {
    const skillCategories = [
      {
        title: "Frontend Development",
        skills: [
          { name: "HTML5", level: 90 },
          { name: "CSS3/SASS", level: 85 },
          { name: "JavaScript (ES6+)", level: 90 },
          { name: "React.js", level: 85 },
          { name: "TypeScript", level: 80 },
          { name: "Tailwind CSS", level: 85 },
          { name: "Redux", level: 75 },
          { name: "Next.js", level: 80 },
          { name: "Responsive Design", level: 90 },
        ]
      },
      {
        title: "Backend Development",
        skills: [
          { name: "Node.js", level: 85 },
          { name: "Express.js", level: 80 },
          { name: "Python/Django", level: 75 },
          { name: "RESTful APIs", level: 85 },
          { name: "GraphQL", level: 70 },
          { name: "MongoDB", level: 80 },
          { name: "PostgreSQL", level: 75 },
          { name: "Firebase", level: 80 },
        ]
      },
      {
        title: "Computer Science Fundamentals",
        skills: [
          { name: "Data Structures", level: 85 },
          { name: "Algorithms", level: 80 },
          { name: "Object-Oriented Programming", level: 90 },
          { name: "System Design", level: 75 },
          { name: "Operating Systems", level: 80 },
          { name: "Computer Networks", level: 75 },
          { name: "Database Management", level: 85 },
        ]
      },
      {
        title: "Tools & DevOps",
        skills: [
          { name: "Git/GitHub", level: 90 },
          { name: "Docker", level: 75 },
          { name: "CI/CD", level: 70 },
          { name: "AWS Basics", level: 70 },
          { name: "Vercel/Netlify", level: 85 },
          { name: "Jest/React Testing Library", level: 80 },
          { name: "Webpack", level: 75 },
        ]
      },
      {
        title: "Theoretical Knowledge",
        skills: [
          { name: "Discrete Mathematics", level: 80 },
          { name: "Computer Architecture", level: 75 },
          { name: "Theory of Computation", level: 75 },
          { name: "Software Engineering", level: 85 },
          { name: "Artificial Intelligence", level: 70 },
          { name: "Machine Learning Basics", level: 70 },
        ]
      },
      {
        title: "Soft Skills",
        skills: [
          { name: "Problem Solving", level: 90 },
          { name: "Team Collaboration", level: 85 },
          { name: "Technical Writing", level: 80 },
          { name: "Project Management", level: 75 },
          { name: "Agile Methodology", level: 80 },
          { name: "Time Management", level: 85 },
        ]
      }
    ];

    return (
      <div 
        ref={sectionRefs.skills}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <ProjectSection />
       <SkillSection />  {/* Added SkillSection */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default PortfolioWebsite;