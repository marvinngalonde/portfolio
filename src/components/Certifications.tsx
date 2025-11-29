import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
    {
        id: 1,
        provider: "IBM",
        title: "Developing Front-End Apps with React",
        year: "2023"
    },
    {
        id: 2,
        provider: "IBM",
        title: "Developing Back-End Apps with Node.js and Express",
        year: "2023"
    },
    {
        id: 3,
        provider: "IBM",
        title: "Django Application Development with SQL and Databases",
        year: "2023"
    }
];

const Certifications: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto font-mono">
            <div className="mb-8 pb-4 border-b border-gray-800">
                <h2 className="text-2xl text-white mb-2 flex items-center">
                    <span className="text-terminal-green mr-2">cat</span>
                    <span>certifications.json</span>
                </h2>
                <div className="text-gray-500 text-sm">
                    Professional certifications and credentials
                </div>
            </div>

            <div className="space-y-6">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="bg-[#0d1117] border border-gray-800 hover:border-terminal-green transition-colors duration-300 rounded-md overflow-hidden"
                    >
                        {/* Header Bar */}
                        <div className="bg-[#161b22] px-4 py-2 border-b border-gray-800 flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <Award size={14} className="text-yellow-400" />
                                <span className="text-xs text-gray-400 font-mono">{cert.provider}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle size={14} className="text-green-500" />
                                <span className="text-xs text-gray-500">{cert.year}</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 md:p-6">
                            <div className="flex items-start">
                                <span className="text-terminal-blue mr-2 mt-1">▸</span>
                                <div>
                                    <h3 className="text-lg text-white font-semibold mb-2">{cert.title}</h3>
                                    <div className="text-sm text-gray-400">
                                        <span className="text-purple-400">provider:</span> <span className="text-green-400">"{cert.provider}"</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 text-gray-500 text-sm">
                <span className="text-terminal-green">$</span> Total certifications: {certifications.length}
            </div>
        </div>
    );
};

export default Certifications;
