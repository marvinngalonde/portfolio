import React from 'react';
import { Folder, FileCode, Mail, Cpu, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  activeFile: string;
  setActiveFile: (file: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeFile, setActiveFile }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const files = [
    { name: 'home.tsx', icon: <FileCode size={18} className="text-blue-400" />, id: 'home' },
    { name: 'projects.json', icon: <FileCode size={18} className="text-yellow-400" />, id: 'projects' },
    { name: 'experience.log', icon: <FileCode size={18} className="text-gray-400" />, id: 'experience' },
    { name: 'skills.config', icon: <Cpu size={18} className="text-purple-400" />, id: 'skills' },
    { name: 'certifications.yaml', icon: <FileCode size={18} className="text-orange-400" />, id: 'certifications' },
    { name: 'education.md', icon: <FileCode size={18} className="text-cyan-400" />, id: 'education' },
    { name: 'contact.sh', icon: <Mail size={18} className="text-green-400" />, id: 'contact' },
  ];

  return (
    <div className="flex h-screen w-full bg-terminal-black text-gray-300 overflow-hidden relative">
      <div className="scanline"></div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden absolute top-4 right-4 z-50 text-gray-400 hover:text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            className="w-64 h-full bg-[#090c10] border-r border-gray-800 flex flex-col absolute md:relative z-40"
          >
            <div className="p-4 border-b border-gray-800 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-xs text-gray-500">DEV_EXPLORER</span>
            </div>

            <div className="p-2">
              <div className="flex items-center space-x-2 px-2 py-1 text-gray-400 text-sm font-bold mb-2">
                <Folder size={16} />
                <span>My Portfolio</span>
              </div>
              <div className="space-y-1">
                {files.map((file) => (
                  <button
                    key={file.id}
                    onClick={() => {
                      setActiveFile(file.id);
                      if (window.innerWidth < 768) setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-2 px-4 py-2 text-sm rounded-sm transition-colors ${activeFile === file.id
                      ? 'bg-[#1f2428] text-white border-l-2 border-terminal-green'
                      : 'text-gray-500 hover:bg-[#1f2428] hover:text-gray-300'
                      }`}
                  >
                    {file.icon}
                    <span>{file.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-auto p-4 border-t border-gray-800 text-xs text-gray-600">
              <p>Status: ONLINE</p>
              <p>Branch: main</p>
              <p>V: 1.0.0</p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        {/* Tab Bar */}
        <div className="hidden md:flex h-10 bg-[#0d1117] border-b border-gray-800 items-center px-4 space-x-1 overflow-x-auto">
          {files.map((file) => (
            <button
              key={file.id}
              onClick={() => setActiveFile(file.id)}
              className={`flex items-center space-x-2 px-4 py-2 text-xs border-r border-gray-800 min-w-fit ${activeFile === file.id
                ? 'bg-[#1f2428] text-white border-t-2 border-t-terminal-green'
                : 'text-gray-500 hover:bg-[#1f2428]'
                }`}
            >
              {file.icon}
              <span>{file.name}</span>
            </button>
          ))}
        </div>

        {/* Breadcrumbs / Path */}
        <div className="h-8 bg-[#0d1117] border-b border-gray-800 flex items-center px-4 text-xs text-gray-500">
          <span>portfolio-v1</span>
          <span className="mx-2">/</span>
          <span>src</span>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{files.find(f => f.id === activeFile)?.name}</span>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4 md:p-8 relative">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
