import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { motion } from 'framer-motion';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [activeFile, setActiveFile] = useState('home');
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsBooting(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isBooting) {
    return (
      <div className="h-screen w-full bg-black text-green-500 font-mono flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full">
          <p className="mb-2">Initialize BIOS...</p>
          <p className="mb-2">Checking Memory... OK</p>
          <p className="mb-2">Loading Kernel... OK</p>
          <p className="mb-2">Mounting Volumes... OK</p>
          <motion.div
            className="h-2 bg-green-900 mt-4 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="h-full bg-green-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5 }}
            />
          </motion.div>
          <p className="mt-2 text-xs animate-pulse">_System Ready</p>
        </div>
      </div>
    );
  }

  return (
    <Layout activeFile={activeFile} setActiveFile={setActiveFile}>
      <motion.div
        key={activeFile}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {activeFile === 'home' && <Home setActiveFile={setActiveFile} />}
        {activeFile === 'projects' && <Projects />}
        {activeFile === 'experience' && <Experience />}
        {activeFile === 'skills' && <Skills />}
        {activeFile === 'certifications' && <Certifications />}
        {activeFile === 'education' && <Education />}
        {activeFile === 'contact' && <Contact />}
      </motion.div>
    </Layout>
  );
}

export default App;
