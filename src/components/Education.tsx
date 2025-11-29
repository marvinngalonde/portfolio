import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto font-mono">
            <div className="mb-8 pb-4 border-b border-gray-800">
                <h2 className="text-2xl text-white mb-2 flex items-center">
                    <span className="text-terminal-green mr-2">ls -la</span>
                    <span>~/education</span>
                </h2>
                <div className="text-gray-500 text-sm">
                    Academic background and qualifications
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#0d1117] border border-gray-800 hover:border-terminal-green transition-colors duration-300 rounded-md overflow-hidden"
            >
                {/* Header Bar */}
                <div className="bg-[#161b22] px-4 py-2 border-b border-gray-800 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <GraduationCap size={16} className="text-blue-400" />
                        <span className="text-xs text-gray-400 font-mono">education.degree</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-8">
                    <div className="mb-6">
                        <h3 className="text-2xl text-white font-bold mb-2">Diploma in Networking and PC Engineering</h3>
                        <div className="flex items-center text-terminal-blue text-lg mb-4">
                            <GraduationCap size={18} className="mr-2" />
                            <span className="font-semibold">Midlands State University</span>
                        </div>
                    </div>

                    <div className="bg-[#161b22] p-4 rounded border border-gray-800 mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center text-gray-400">
                                <MapPin size={14} className="mr-2 text-terminal-green" />
                                <span>Zimbabwe</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <Calendar size={14} className="mr-2 text-terminal-green" />
                                <span>Completed</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 text-sm">
                        <div className="text-gray-400">
                            <span className="text-purple-400">field:</span> <span className="text-green-400">"Networking and PC Engineering"</span>
                        </div>
                        <div className="text-gray-400">
                            <span className="text-purple-400">qualification:</span> <span className="text-green-400">"Diploma"</span>
                        </div>
                        <div className="text-gray-400">
                            <span className="text-purple-400">institution:</span> <span className="text-green-400">"Midlands State University"</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="mt-8 text-gray-500 text-sm animate-pulse">
                <span className="text-terminal-green">_</span> Continuous learning and skill development
            </div>
        </div>
    );
};

export default Education;
