import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'AI Engineer',
      company: 'Botmatic Solution Pvt LTD',
      period: '2025 - Present',
      description: 'Designing and deploying intelligent systems that automate complex data workflows. Managing the full AI lifecycle from extraction to model deployment to enhance business decision-making.',
      current: true
    },
    {
      role: 'Data Analyst',
      company: 'Claim My Shares',
      period: 'FEB 2025 - JULY 2025',
      description: 'Leveraged Python and SQL to automate reporting processes and analyze financial datasets, directly contributing to the recovery of unclaimed assets through data-driven insights.',
      current: false
    },
    {
      role: 'Freelance Data Analyst',
      company: 'PayTC',
      period: '2023 - 2025',
      description: 'Engineered custom BI solutions and automated data pipelines for fintech clients. Utilized statistical analysis to drive business strategy and optimize database performance.',
      current: false
    },
    {
      role: 'Graduate Engineer AI Trainee',
      company: 'Bharat Forge Ltd.',
      period: '2023 - 2023',
      description: 'Supported the development of predictive maintenance models using machine learning, focusing on industrial automation and sensor data analysis.',
      current: false
    },
    {
      role: 'Esports Analyst Intern',
      company: 'One Esport',
      period: 'Summer 2022',
      description: 'Developed performance indexing algorithms using game telemetry data. Applied statistical modeling to optimize team strategies and player rankings.',
      current: false
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <h2 className="text-2xl font-bold text-white mb-8">Career <span className="text-indigo-400">Journey</span></h2>

      <div className="relative space-y-8 pl-6 md:pl-0">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-0 w-px bg-slate-800 -translate-x-1/2 hidden md:block"></div>
        <div className="absolute left-0 top-4 bottom-0 w-px bg-slate-800 md:hidden"></div>

        {experiences.map((exp, index) => (
          <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Timeline Dot */}
            <div className="absolute left-[-24px] md:left-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 -translate-x-1/2 top-6 z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                {exp.current && <div className="absolute inset-0 animate-ping rounded-full bg-indigo-400 opacity-75"></div>}
            </div>

            {/* Content Card */}
            <div className="md:w-1/2 md:px-8">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-indigo-500/30 transition-colors relative group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                  {exp.current && (
                    <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                      Current
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-slate-400 mb-4 text-sm">
                  <Building2 size={14} />
                  <span className="font-medium">{exp.company}</span>
                  <span className="mx-1 text-slate-600">•</span>
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
                
                <p className="text-slate-300 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </div>

            {/* Empty spacer for the other side */}
            <div className="md:w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;