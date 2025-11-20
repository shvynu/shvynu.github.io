import React from 'react';
import { ExternalLink, Github, BarChart2, TrendingUp, Gamepad2 } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Investor Behavior Analysis',
      subtitle: 'NLP & Sentiment Engine',
      desc: 'An interactive dashboard analyzing stock market trends. Uses NLP to parse investor sentiment from news sources to provide demographic insights.',
      tech: ['Tableau', 'Python NLP', 'SQL'],
      icon: <BarChart2 size={32} className="text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-900/20'
    },
    {
      title: 'Predictive Supply Chain',
      subtitle: 'Sales Forecasting Model',
      desc: 'Developed a time-series model in Python (Prophet/ARIMA) to predict product sales with 92% accuracy, directly optimizing inventory management.',
      tech: ['Python', 'Scikit-learn', 'Time Series'],
      icon: <TrendingUp size={32} className="text-indigo-400" />,
      color: 'from-indigo-500/20 to-blue-900/20'
    },
    {
      title: 'Esports Performance Index',
      subtitle: 'Real-time Ranker',
      desc: 'Created a composite score to rank player performance using in-game API data. Visualized correlations between APM and win-rates.',
      tech: ['Pandas', 'Seaborn', 'Matplotlib'],
      icon: <Gamepad2 size={32} className="text-purple-400" />,
      color: 'from-purple-500/20 to-pink-900/20'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Featured <span className="text-indigo-400">Projects</span></h2>
          <p className="text-slate-400">Showcasing AI innovation and data storytelling.</p>
        </div>
        <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
          View GitHub <ExternalLink size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col">
            
            {/* Card Header / Graphic */}
            <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative z-10 p-4 bg-slate-900/50 rounded-full backdrop-blur-md border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4">
                <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">{project.subtitle}</p>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{project.title}</h3>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {project.desc}
              </p>

              <div className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-800">
                   <button className="flex-1 py-2 rounded-lg bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                     <Github size={16} /> Code
                   </button>
                   <button className="flex-1 py-2 rounded-lg bg-indigo-600/20 text-indigo-300 text-sm font-medium hover:bg-indigo-600/30 transition-colors flex items-center justify-center gap-2 border border-indigo-500/20">
                     <ExternalLink size={16} /> Demo
                   </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;