import React, { useState, useEffect } from 'react';
import { Section } from '../types';
import { ArrowRight, Code, Brain, Database, Zap } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["AI Engineer", "Automation Developer", "LLM Specialist", "Data Strategist"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 p-8 md:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for AI Projects
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Anurag Sikdar</span>
          </h1>
          
          <div className="h-12 flex items-center">
             <p className="text-xl md:text-2xl text-slate-400 font-light">
               I am an <span className="text-white font-semibold border-b-2 border-cyan-500/50 transition-all duration-500">{texts[textIndex]}</span>
             </p>
          </div>

          <p className="mt-6 text-slate-300 text-lg max-w-2xl leading-relaxed">
            A results-driven AI Engineer with 3+ years of experience, specialized in architecting Generative AI solutions, deploying LLMs, and building autonomous systems that transform complex data into intelligent action.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button 
              onClick={() => setActiveSection(Section.PROJECTS)}
              className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setActiveSection(Section.CONTACT)}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 px-6 py-3 rounded-lg font-medium transition-all"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Stats / Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Years Experience', value: '3.2 Years', icon: <Zap className="text-amber-400" />, color: 'from-amber-500/20 to-orange-500/5' },
          { label: 'Projects Delivered', value: '12+', icon: <Code className="text-emerald-400" />, color: 'from-emerald-500/20 to-teal-500/5' },
          { label: 'AI Models Deployed', value: '8+', icon: <Brain className="text-indigo-400" />, color: 'from-indigo-500/20 to-purple-500/5' },
          { label: 'Automation Accuracy', value: '92%', icon: <Database className="text-cyan-400" />, color: 'from-cyan-500/20 to-blue-500/5' },
        ].map((stat, index) => (
          <div key={index} className={`bg-slate-900/50 border border-slate-800 rounded-xl p-6 relative overflow-hidden group hover:border-slate-700 transition-all`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              </div>
              <div className="p-2 bg-slate-800 rounded-lg border border-slate-700 text-slate-300">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Tech Marquee (Simulated) */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Technical Expertise</h3>
        <div className="flex flex-wrap gap-3">
          {['Llama', 'Google AI Studio', 'Python', 'Scikit-learn', 'AWS', 'Docker', 'SQL', 'NLP', 'Tableau'].map((tech) => (
             <span key={tech} className="px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono hover:bg-indigo-900/20 hover:text-indigo-300 hover:border-indigo-500/30 cursor-default transition-colors">
               {tech}
             </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;