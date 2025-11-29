import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: "ReactJS", level: 95 },
    { name: "TanStack Query", level: 90 },
    { name: "Redux Toolkit", level: 90 },
    { name: "Zustand", level: 85 },
    { name: "TypeScript", level: 95 },
    { name: "TailwindCSS", level: 95 },
    { name: "ShadCN", level: 85 },
  ],
  backend: [
    { name: "Next.js", level: 90 },
    { name: "FastAPI", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "NestJS", level: 80 },
    { name: "Flask", level: 75 },
    { name: "RESTful APIs", level: 95 },
    { name: "Sequelize", level: 85 },
    { name: "SQLAlchemy", level: 85 },
    { name: "Prisma", level: 90 },
    { name: "Drizzle", level: 80 },
  ],
  mobile: [
    { name: "React Native", level: 85 },
    { name: "Flutter", level: 80 },
    { name: "FlutterFlow", level: 85 },
  ],
  database: [
    { name: "MySQL", level: 90 },
    { name: "PostgreSQL", level: 90 },
    { name: "MongoDB", level: 80 },
    { name: "Supabase", level: 85 },
    { name: "Firebase", level: 80 },
    { name: "SQLite", level: 85 },
  ],
  tools: [
    { name: "Docker", level: 85 },
    { name: "Kubernetes", level: 75 },
    { name: "Terraform", level: 70 },
    { name: "AWS", level: 80 },
    { name: "Azure DevOps", level: 75 },
    { name: "Vercel", level: 90 },
    { name: "CI/CD", level: 85 },
    { name: "GitHub Actions", level: 85 },
    { name: "Jenkins", level: 70 },
    { name: "Jest", level: 85 },
    { name: "Testing Library", level: 85 },
    { name: "SwaggerUI", level: 80 },
    { name: "Pytest", level: 80 },
  ]
};

const SkillBar: React.FC<{ name: string; level: number; delay: number }> = ({ name, level, delay }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm font-mono mb-1">
      <span className="text-gray-300">"{name}"</span>
      <span className="text-terminal-gray">{level}%</span>
    </div>
    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, delay }}
        className="h-full bg-terminal-green"
      />
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto font-mono">
      <div className="mb-6 text-gray-400">
        <span className="text-purple-400">export default</span> <span className="text-yellow-400">Config</span> <span className="text-white">=</span> <span className="text-white">{'{'}</span>
      </div>

      <div className="pl-2 md:pl-8 grid grid-cols-1 md:grid-cols-2 gap-x-12">
        <div className="mb-8">
          <h3 className="text-blue-400 mb-4 text-lg">"frontend": {'{'}</h3>
          <div className="pl-4 border-l border-gray-800">
            {skills.frontend.map((skill, idx) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={idx * 0.1} />
            ))}
          </div>
          <div className="text-blue-400">{'}'},</div>
        </div>

        <div className="mb-8">
          <h3 className="text-green-400 mb-4 text-lg">"backend": {'{'}</h3>
          <div className="pl-4 border-l border-gray-800">
            {skills.backend.map((skill, idx) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={0.2 + idx * 0.1} />
            ))}
          </div>
          <div className="text-green-400">{'}'},</div>
        </div>

        <div className="mb-8">
          <h3 className="text-cyan-400 mb-4 text-lg">"mobile": {'{'}</h3>
          <div className="pl-4 border-l border-gray-800">
            {skills.mobile.map((skill, idx) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={0.35 + idx * 0.1} />
            ))}
          </div>
          <div className="text-cyan-400">{'}'},</div>
        </div>

        <div className="mb-8">
          <h3 className="text-orange-400 mb-4 text-lg">"database": {'{'}</h3>
          <div className="pl-4 border-l border-gray-800">
            {skills.database.map((skill, idx) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={0.5 + idx * 0.1} />
            ))}
          </div>
          <div className="text-orange-400">{'}'},</div>
        </div>

        <div className="mb-8">
          <h3 className="text-red-400 mb-4 text-lg">"devtools": {'{'}</h3>
          <div className="pl-4 border-l border-gray-800">
            {skills.tools.map((skill, idx) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={0.7 + idx * 0.1} />
            ))}
          </div>
          <div className="text-red-400">{'}'}</div>
        </div>
      </div>

      <div className="mt-4 text-white">
        <span className="text-white">{'}'};</span>
      </div>
    </div>
  );
};

export default Skills;
