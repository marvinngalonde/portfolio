import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Full Stack Engineer",
    company: "Valhko",
    location: "UK (Remote)",
    period: "September 2025 – Present",
    description: "Primary role in developing the frontend and assisting in the creation and management of cloud infrastructure on AWS and OVH Cloud for containerized apps.",
    stack: ["Next.js", "FastAPI", "React Query", "Jest", "Terraform", "AWS", "OVH Cloud"]
  },
  {
    id: 2,
    role: "Mobile App Developer",
    company: "CyberSeIp Incorporation",
    location: "Harare, Zimbabwe",
    period: "October 2024 – February 2025 (Part-time)",
    description: "Developed a mobile POS application using FlutterFlow and Supabase. Managed integration and linking with Supabase backend, optimizing data synchronization and user experience.",
    stack: ["Flutter", "FlutterFlow", "Supabase"]
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "Kimtronix Global",
    location: "Harare, Zimbabwe",
    period: "January 2023 – January 2025 (On-Site)",
    description: "Developed and maintained cross-platform web and mobile applications using Next.js, Python, React Native and both SQL and NoSQL databases. Designed robust front-end and back-end logic, addressing real-world business challenges.",
    stack: ["Next.js", "Python", "React Native", "SQL", "NoSQL"]
  },
  {
    id: 4,
    role: "Full Stack Engineer",
    company: "Verdsoft Private Limited",
    location: "Harare, Zimbabwe",
    period: "January 2021 – January 2025 (Remote)",
    description: "Worked as Front-end, Backend and DevOps Engineer on various custom software projects for client companies. Gained vast development experience across multiple domains and technologies.",
    stack: ["React", "Node.js", "DevOps", "Custom Solutions"]
  }
];

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto font-mono">
      <div className="mb-8 pb-4 border-b border-gray-800">
        <h2 className="text-2xl text-white mb-2 flex items-center">
          <span className="text-terminal-green mr-2">tail -f</span>
          <span>work_history.log</span>
        </h2>
        <div className="text-gray-500 text-sm">
          Displaying last 4 entries...
        </div>
      </div>

      <div className="relative border-l border-gray-800 ml-2 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-6 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-terminal-green ring-4 ring-[#0d1117]"></div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl text-white font-bold">{exp.role}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
                <Calendar size={14} className="mr-1" />
                <span>{exp.period}</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center text-terminal-blue mb-1">
                <Briefcase size={14} className="mr-2" />
                <span className="font-semibold">@{exp.company}</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin size={14} className="mr-2" />
                <span>{exp.location}</span>
              </div>
            </div>

            <div className="bg-[#161b22] p-4 rounded border border-gray-800 mb-3">
              <p className="text-gray-300 leading-relaxed text-sm">
                <span className="text-green-500 mr-2">$</span>
                {exp.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-[#1f2428] text-xs text-gray-400 border border-gray-700 rounded hover:text-white hover:border-gray-500 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="ml-2 md:ml-6 mt-12 pt-4 border-t border-gray-800 text-gray-500 text-sm animate-pulse">
        <span className="text-terminal-green">_</span> Awaiting next command...
      </div>
    </div>
  );
};

export default Experience;
