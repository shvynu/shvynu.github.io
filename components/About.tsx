import React from 'react';
import { MapPin, Briefcase, GraduationCap, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Bio Card */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            About <span className="text-indigo-400">Me</span>
          </h2>
          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              I thrive on bridging the gap between raw data and actionable intelligence. My journey began in engineering and evolved into a dedicated career in <span className="text-white font-semibold">Artificial Intelligence</span>, where I leverage my problem-solving skills to tackle real-world challenges.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Currently at <span className="text-indigo-400 font-medium">Botmatic Solution</span>, I specialize as an AI Engineer, designing and deploying intelligent systems that automate complex data workflows and enhance decision-making. I am proficient across the full AI lifecycle — from data extraction and preprocessing to model development, evaluation, and deployment.
            </p>
            <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border-l-4 border-indigo-500">
              <p className="italic text-slate-400">
                "I don't just analyze the past; I engineer models that predict the future and automate the present."
              </p>
            </div>
          </div>
        </div>

        {/* Personal Details Card */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="w-full aspect-square rounded-xl bg-gradient-to-b from-slate-700 to-slate-900 mb-6 flex items-end justify-center overflow-hidden relative group">
               {/* Use local image 'profile.jpg' */}
               <img 
                 src="/profile.jpg" 
                 alt="Anurag Sikdar" 
                 className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                 onError={(e) => {
                   // Fallback if image not found
                   (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop';
                 }}
               />
               <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
               <h3 className="relative z-10 text-2xl font-bold text-white mb-4 drop-shadow-md">Anurag Sikdar</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={18} className="text-indigo-400" />
                <span>Pune, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Briefcase size={18} className="text-indigo-400" />
                <span>AI Engineer @ Botmatic</span>
              </div>
               <div className="flex items-center gap-3 text-slate-300">
                <GraduationCap size={18} className="text-indigo-400" />
                <span>3.2 Years Experience</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={18} className="text-indigo-400" />
                <a href="mailto:anusikdar2002@gmail.com" className="text-sm hover:text-indigo-400 transition-colors">anusikdar2002@gmail.com</a>
              </div>
            </div>

            <button className="w-full mt-6 bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg border border-slate-700 transition-colors font-medium text-sm">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;