import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import { Section } from './types';

function App() {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case Section.HOME: return <Hero setActiveSection={setActiveSection} />;
      case Section.ABOUT: return <About />;
      case Section.SKILLS: return <Skills />;
      case Section.EXPERIENCE: return <Experience />;
      case Section.PROJECTS: return <Projects />;
      case Section.CONTACT: return <Contact />;
      default: return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200 font-sans overflow-x-hidden">
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-30 px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-white tracking-tight">ANURAG.AI</div>
        <button 
          onClick={() => setIsMobileOpen(true)}
          className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
        >
          <Menu size={24} />
        </button>
      </div>

      <div className="flex">
        {/* Sidebar Navigation */}
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        />

        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 min-h-screen p-4 md:p-8 lg:p-12 pt-20 md:pt-8 max-w-7xl mx-auto w-full">
          
          {/* Top Status Bar (Desktop Only) */}
          <header className="hidden md:flex justify-between items-center mb-8 pb-4 border-b border-slate-800/50">
             <div>
               <h2 className="text-xl font-semibold text-white capitalize">
                 {activeSection.toLowerCase().replace('_', ' ')}
               </h2>
               <p className="text-sm text-slate-500">Dashboard / {activeSection.charAt(0) + activeSection.slice(1).toLowerCase()}</p>
             </div>
             <div className="flex items-center gap-4">
                <div className="text-right hidden lg:block">
                  <p className="text-sm font-medium text-white">Anurag Sikdar</p>
                  <p className="text-xs text-slate-500">AI Engineer</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 p-[2px]">
                   <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden">
                      {/* Profile Image in Header */}
                      <img 
                        src="/profile.jpg" 
                        alt="Profile" 
                        className="w-full h-full object-cover opacity-90"
                        onError={(e) => {
                           (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Anurag+Sikdar&background=0D8ABC&color=fff';
                        }} 
                      />
                   </div>
                </div>
             </div>
          </header>

          {/* Dynamic Content */}
          <div className="relative">
            {renderSection()}
          </div>
          
        </main>
      </div>

      {/* AI Assistant Widget */}
      <AIChat />
    </div>
  );
}

export default App;