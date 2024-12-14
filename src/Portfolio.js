import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Code, 
  User, 
  Award, 
  MessageCircle, 
  GitBranch, 
  Twitch, 
  ChevronDown,
  Send,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon
} from 'lucide-react';

// Profile Image (replace with actual image path)
const PROFILE_IMAGE = '/api/placeholder/400/400';

// Project Data with more details
const PROJECTS = [
  {
    name: 'Event & Activities Subsystem',
    description: 'MERN-stack project with "Liked Events" feature and Codecov integration',
    technologies: ['MERN Stack', 'Codecov', 'Vercel'],
    githubLink: 'https://github.com/TumeloMkwambe/eWits',
    demoLink: 'https://ewits-front.vercel.app/',
    imageUrl: '/api/placeholder/600/400'
  },
  {
    name: 'Maze 3D',
    description: '3D game simulating Maze Navigation and collectables collection',
    technologies: ['Three.js', 'WebGL', 'Physics Simulation'],
    githubLink: 'https://github.com/dashboard',
    demoLink: 'https://lamp.ms.wits.ac.za/~spixelwavesyndicates/',
    imageUrl: '/api/placeholder/600/400'
  },
  {
    name: 'CampusTrade App',
    description: 'Online marketplace for students to buy and sell items',
    technologies: ['React.js', 'MongoDB', 'Express'],
    githubLink: 'https://github.com/Heisenburg-z/CampusTrade',
    demoLink: 'https://github.com/Heisenburg-z/CampusTrade',
    imageUrl: './images/me.HEIC'
  }
];

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null)
  };

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic
    alert('Message sent! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const NavBar = () => (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-white"
        >
          Thapelo Ndlovu
        </motion.div>
        <div className="flex space-x-6 text-white">
          {[
            { icon: Home, name: 'Home', section: 'home' },
            { icon: User, name: 'About', section: 'about' },
            { icon: Code, name: 'Projects', section: 'projects' },
            { icon: Award, name: 'Skills', section: 'skills' },
            { icon: MessageCircle, name: 'Contact', section: 'contact' }
          ].map(({ icon: Icon, name, section }) => (
            <motion.button 
              key={section}
              onClick={() => scrollToSection(section)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 hover:text-blue-400 transition 
                ${activeSection === section ? 'text-blue-500' : ''}`}
            >
              <Icon size={20} />
              <span className="hidden md:inline">{name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );

  const HeroSection = () => (
    <motion.div 
      ref={sectionRefs.home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white"
    >
      <div className="text-center">
        <motion.img 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={PROFILE_IMAGE} 
          alt="Thapelo Ndlovu" 
          className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-2xl"
        />
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm Thapelo Ndlovu
        </motion.h1>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl mb-6"
        >
          Developer, Innovator, and Game Enthusiast
        </motion.p>
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <motion.button 
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full flex items-center"
          >
            View Projects <ChevronDown className="ml-2" />
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );

  const ProjectSection = () => (
    <motion.div 
      ref={sectionRefs.projects}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 py-16"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={project.imageUrl} 
                alt={project.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center text-gray-700 hover:text-black"
                  >
                    <GitBranch className="mr-2" /> GitHub
                  </motion.a>
                  <motion.a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center text-blue-700 hover:text-blue-900"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const ContactSection = () => (
    <motion.div 
      ref={sectionRefs.contact}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-16"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          <motion.form 
            onSubmit={handleFormSubmit}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Name" 
              required
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="Email" 
              required
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              placeholder="Your Message" 
              rows={5}
              required
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg flex items-center justify-center"
            >
              <Send className="mr-2" /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );

  const Footer = () => (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white py-8"
    >
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {[
            { icon: LinkedinIcon, link: 'https://linkedin.com/in/ThapeloNdlovu' },
            { icon: GithubIcon, link: 'https://github.com/ThapeloNdlovu' },
            { icon: TwitterIcon, link: 'https://twitter.com/ThapeloNdlovu' }
          ].map(({ icon: Icon, link }) => (
            <motion.a 
              key={link} 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-blue-400 transition"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
        <p>© 2024 Thapelo Ndlovu. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default PortfolioWebsite;