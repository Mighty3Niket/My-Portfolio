import React from 'react';
import { Github, Linkedin, Codepen } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-zinc-500 text-[10px] font-mono tracking-tighter uppercase">
                    © 2026 TRINIKET.DEV / Hand-coded in .NET
                </div>
                <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    <a href="#" className="hover:text-primary transition-colors flex items-center gap-1"><Github size={12} /> Github</a>
                    <a href="#" className="hover:text-primary transition-colors flex items-center gap-1"><Linkedin size={12} /> LinkedIn</a>
                </div>
                <div className="text-zinc-500 text-[10px] font-mono">
                    Based in India / Available Worldwide
                </div>
            </div>
        </footer>
    );
};
