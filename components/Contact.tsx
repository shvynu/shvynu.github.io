import React from 'react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Side: Info */}
          <div className="p-8 md:p-12 bg-indigo-900/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-indigo-200 mb-8 leading-relaxed">
              I'm always open to discussing new AI projects, automation ideas, or opportunities to be part of an amazing team.
            </p>

            <div className="space-y-6">
              <a href="mailto:anusikdar2002@gmail.com" className="flex items-center gap-4 text-white group">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-medium group-hover:text-indigo-300 transition-colors">anusikdar2002@gmail.com</span>
              </a>
              
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/anurag-sikdar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-1"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/anuragsikdar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#333] hover:text-white transition-all hover:-translate-y-1"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1DA1F2] hover:text-white transition-all hover:-translate-y-1"
                  title="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-8 md:p-12 bg-slate-900">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-slate-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-slate-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-slate-500"
                  placeholder="Let's build something intelligent..."
                />
              </div>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium py-3 rounded-lg transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="text-center pt-8 border-t border-slate-800">
        <p className="text-slate-500 text-sm">© 2025 Anurag Sikdar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;