import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight } from 'lucide-react';

interface HomeProps {
  setActiveFile: (file: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveFile }) => {
  const [text, setText] = useState('');
  const fullText = "I am a highly passionate and driven tech enthusiast with a solid foundation in mobile and web development.\nProficient in full-stack development with hands-on experience in building cross-platform applications.\nSkilled in front-end and back-end logic, LLMs Integration, and addressing real-world business challenges.\nEager to leverage expertise in dynamic environments and continuously explore emerging technologies.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="mb-12 relative">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
          <span className="text-terminal-green">&lt;</span>
          Marvin
          <span className="text-terminal-green">/&gt;</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-terminal-gray flex items-center">
          <Terminal className="mr-2" size={24} />
          <span>Full Stack Developer</span>
        </h2>
        <div className="mt-2 text-gray-500 font-mono text-sm">
          Harare, Zimbabwe • 5 Years Experience
        </div>
      </div>

      {/* Code Block Intro */}
      <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-6 font-mono text-sm md:text-base shadow-2xl relative overflow-x-auto group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-terminal-green to-transparent opacity-50"></div>

        <div className="flex space-x-2 mb-4 text-gray-500">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <div className="space-y-2">
          <div className="flex">
            <span className="text-terminal-blue mr-2">const</span>
            <span className="text-yellow-400 mr-2">developer</span>
            <span className="text-white mr-2">=</span>
            <span className="text-purple-400">{'{'}</span>
          </div>
          <div className="pl-4">
            <span className="text-red-400 mr-2">name:</span>
            <span className="text-green-400">"Marvin Ngalonde"</span>,
          </div>
          <div className="pl-4">
            <span className="text-red-400 mr-2">email:</span>
            <span className="text-green-400">"ngalondemarvin@gmail.com"</span>,
          </div>
          <div className="pl-4">
            <span className="text-red-400 mr-2">location:</span>
            <span className="text-green-400">"Harare, Zimbabwe"</span>,
          </div>
          <div className="pl-4">
            <span className="text-red-400 mr-2">skills:</span>
            <span className="text-purple-400">['React', 'Next.js', 'FastAPI', 'TypeScript','NestJS','PostgreSQL', 'AWS', 'Azure', 'Docker', 'Kubernetes']</span>,
          </div>
          <div className="pl-4">
            <span className="text-red-400 mr-2">openToWork:</span>
            <span className="text-orange-400">true</span>,
          </div>
          <div className="pl-4">
            <span className="text-red-400 mr-2">contactMe:</span>
            <span className="text-orange-400">function() {'{'} return "Let's build something amazing!"; {'}'}</span>
          </div>
          <div>
            <span className="text-purple-400">{'}'}</span>;
          </div>
        </div>
      </div>

      {/* Typing Effect Description */}
      <div className="mt-12 font-mono text-gray-300 min-h-[100px]">
        <div className="flex items-start">
          <ChevronRight className="mr-2 text-terminal-green mt-1 flex-shrink-0" size={16} />
          <p className="whitespace-pre-wrap leading-relaxed">
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-5 bg-terminal-green ml-1 align-middle"
            />
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-8 flex space-x-4">
        <button
          onClick={() => setActiveFile('contact')}
          className="px-6 py-3 bg-[#1f2428] border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-all duration-300 font-mono text-sm flex items-center"
        >
          <span className="mr-2">./contact.sh</span>
        </button>
        <button
          onClick={() => setActiveFile('projects')}
          className="px-6 py-3 bg-[#1f2428] border border-gray-700 text-gray-400 hover:border-white hover:text-white transition-all duration-300 font-mono text-sm"
        >
          <span className="mr-2">cat projects.json</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
