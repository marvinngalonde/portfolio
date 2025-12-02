import React from 'react';
import { motion } from 'framer-motion';
import {  Play, Code } from 'lucide-react';
import neo from '../assets/neo.png'
import gym from '../assets/gym.png'
import posy from '../assets/posy.png'
import shop from '../assets/shop.jpg'
import tfcdash from '../assets/tfcdash.png'
import foam from '../assets/foam.png'
import tfcapp from '../assets/tfcapp.png'

const projects = [
  {
    id: 1,
    name: "Neocentric Interiors",
    description: "Modern web application for interior design showcase and portfolio.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    status: "Live",
    repo: "",
    link: "neocentricinteriors.co.zw/",
    image: neo
  },
  {
    id: 2,
    name: "Content Management System",
    description: "Full-featured CMS for content creation and management.",
    tech: ["React", "Supabase", "TypeScript"],
    status: "Live",
    repo: "ministry-hub-admin.onrender.com/dashboard",
    link: "cms.demo.com",
    image: tfcdash
  },
  {
    id: 3,
    name: "Gym Management System",
    description: "Complete solution for gym operations, member management and billing.",
    tech: ["PHP", "Python", "MySQL"],
    status: "Completed",
    repo: "github.com/marvin/gym-system",
    link: "#",
    image: gym
  },
  {
    id: 4,
    name: "Carwash Booking App",
    description: "Mobile application for booking and managing carwash services.",
    tech: ["React Native", "Firebase", "TypeScript"],
    status: "Live",
    repo: "",
    link: "",
    image: foam
  },
  {
    id: 5,
    name: "Mobile POS",
    description: "Cross-platform mobile point-of-sale application with real-time sync.",
    tech: ["Flutter", "Supabase", "Firebase"],
    status: "Live",
    repo: "",
    link: "",
    image: shop
  },
  {
    id: 6,
    name: "Business Management & POS",
    description: "Comprehensive business management and point-of-sale system.",
    tech: ["React", "Next.js", "Redux Toolkit", "MySQL"],
    status: "Live",
    repo: "",
    link: "http://posy.62.169.19.198.sslip.io/",
    image: posy
  },
  {
    id: 7,
    name: "Resource Sharing App",
    description: "Mobile platform for sharing and discovering community resources.",
    tech: ["React Native", "Supabase", "TypeScript"],
    status: "Live",
    repo: "",
    link: "",
    image: tfcapp
  }
];

const Projects: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 flex items-center text-gray-400 text-sm">
        <span className="text-purple-400">const</span>
        <span className="text-yellow-400 mx-2">projects</span>
        <span className="text-white">=</span>
        <span className="text-white mx-2">[</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#0d1117] border border-gray-800 hover:border-terminal-green transition-colors duration-300 rounded-md overflow-hidden flex flex-col"
          >
            {/* Header Bar */}
            <div className="bg-[#161b22] px-4 py-2 border-b border-gray-800 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Code size={14} className="text-blue-400" />
                <span className="text-xs text-gray-400 font-mono">{project.name.replace(/\s+/g, '_')}.{project.tech[0].toLowerCase() === 'flutter' ? 'dart' : 'tsx'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`w-2 h-2 rounded-full ${project.status === 'Live' || project.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                <span className="text-xs text-gray-500 hidden sm:block">{project.status}</span>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative h-48 overflow-hidden border-b border-gray-800 group-hover:border-terminal-green/50 transition-colors">
              <div className="absolute inset-0 bg-terminal-green/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover filter  group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 font-mono flex-1 flex flex-col">
              <div className="text-gray-500 mb-2 text-sm">/**</div>
              <div className="text-gray-400 pl-4 mb-1 text-sm">* {project.description}</div>
              <div className="text-gray-400 pl-4 mb-2 text-sm">* </div>
              <div className="text-gray-400 pl-4 mb-2 text-sm">
                * Tech Stack:
                {project.tech.map(t => (
                  <span key={t} className="text-terminal-green ml-1">@{t}</span>
                ))}
              </div>
              <div className="text-gray-500 text-sm"> */
                
              </div>

              <div className="mt-auto pt-4 pl-4 border-l-2 border-gray-800 group-hover:border-terminal-green transition-colors">
                <div className="flex items-center space-x-4 mt-4">
                  {project.link && (
                    <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-white hover:text-terminal-green transition-colors">
                      <Play size={14} className="mr-1" />
                      <span>Run Preview</span>
                    </a>
                  )}
                  {/* <a href="#" className="flex items-center text-sm text-gray-400 hover:text-white transition-colors cursor-not-allowed opacity-50">
                    <Github size={14} className="mr-1" />
                    <span>Private Repo</span>
                  </a> */}
                </div>
              </div>
            </div>

            {/* Glitch Hover Effect Overlay */}
            <div className="absolute inset-0 bg-terminal-green opacity-0 group-hover:opacity-5 pointer-events-none transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-white text-sm">
        <span className="text-white">];</span>
      </div>
    </div>
  );
};

export default Projects;
