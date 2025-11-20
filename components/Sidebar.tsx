import React from 'react';
import { Section } from '../types';
import { 
  LayoutDashboard, 
  User, 
  Cpu, 
  Briefcase, 
  FolderGit2, 
  Mail, 
  Terminal,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, isMobileOpen, setIsMobileOpen }) => {
  
  const navItems = [
    { id: Section.HOME, label: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: Section.ABOUT, label: 'About Me', icon: <User size={20} /> },
    { id: Section.SKILLS, label: 'Tech Stack', icon: <Cpu size={20} /> },
    { id: Section.EXPERIENCE, label: 'Journey', icon: <Briefcase size={20} /> },
    { id: Section.PROJECTS, label: 'Projects', icon: <FolderGit2 size={20} /> },
    { id: Section.CONTACT, label: 'Connect', icon: <Mail size={20} /> },
  ];

  const handleNavClick = (section: Section) => {
    setActiveSection(section);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 h-full bg-slate-900 border-r border-slate-800 z-50 transition-transform duration-300 ease-in-out
        w-64 md:translate-x-0 flex flex-col
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Terminal className="text-white" size={24} />
          </div>
          <div>
            <h1 className="font-bold text-white text-lg tracking-tight">ANURAG.AI</h1>
            <p className="text-xs text-slate-400">Engineer Dashboard</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                ${activeSection === item.id 
                  ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-600/20 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'}
              `}
            >
              <span className={activeSection === item.id ? 'text-indigo-400' : 'text-slate-500'}>
                {item.icon}
              </span>
              {item.label}
              {activeSection === item.id && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
              )}
            </button>
          ))}
        </nav>

        {/* Footer/Status */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/50">
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">System Online</span>
            </div>
            <p className="text-[10px] text-slate-500">v2.5.0 • Last Start: Feb 2025</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;