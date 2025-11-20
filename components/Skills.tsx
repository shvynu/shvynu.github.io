import React from 'react';
import { Terminal, Database, BarChart3, Cloud, Cpu, Code2 } from 'lucide-react';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Gen-AI & LLMs',
      icon: <Cpu className="text-indigo-400" />,
      skills: ['Llama', 'Google AI Studio', 'Agentic Workflows', 'RAG Pipelines', 'NLP']
    },
    {
      name: 'Machine Learning',
      icon: <BrainIcon className="text-cyan-400" />,
      skills: ['Python (Pandas, NumPy)', 'Scikit-learn', 'Regression Models', 'Classification', 'Time Series Forecasting']
    },
    {
      name: 'Data & Databases',
      icon: <Database className="text-emerald-400" />,
      skills: ['SQL (MySQL, MSSQL)', 'MongoDB', 'Vector Databases', 'Data Extraction', 'Preprocessing']
    },
    {
      name: 'Cloud & Tools',
      icon: <Cloud className="text-blue-400" />,
      skills: ['AWS (S3, EC2)', 'Docker', 'Git & GitHub', 'Microsoft Excel', 'Automation']
    },
    {
      name: 'BI & Visualization',
      icon: <BarChart3 className="text-orange-400" />,
      skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Looker Studio']
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Technical <span className="text-indigo-400">Skills</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/30 transition-colors group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-800/80 transition-colors">
                {category.icon}
              </div>
              <h3 className="font-bold text-slate-200">{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-slate-800/50 border border-slate-700 rounded-md hover:text-indigo-300 hover:border-indigo-500/30 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency Visualization */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
        <h3 className="text-lg font-bold text-white mb-6">Domain Proficiency</h3>
        <div className="space-y-4">
          {[
            { label: 'AI & Machine Learning', width: '95%' },
            { label: 'Data Engineering & Automation', width: '90%' },
            { label: 'Business Intelligence (BI)', width: '85%' },
            { label: 'Cloud Infrastructure', width: '75%' },
          ].map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">{item.label}</span>
                <span className="text-slate-500">{item.width}</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full relative" 
                  style={{ width: item.width }}
                >
                    <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] skew-x-[-20deg]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Custom Brain icon helper since it was used in the config but not imported from lucide above
const BrainIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

export default Skills;