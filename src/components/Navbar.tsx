import React from 'react';
import { Terminal, Mail } from 'lucide-react';

export const Navbar = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl border-b border-white/5">
            <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
                <div className="text-xl font-black tracking-tighter text-primary font-headline uppercase">
                    TRINIKET.DEV
                </div>
                <nav className="hidden md:flex items-center gap-8 font-headline tracking-tight font-extrabold uppercase text-xs">
                    {['About', 'Projects', 'Experience', 'Stack', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-on-surface-variant hover:text-on-surface transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full hover:bg-white/5 transition-all text-primary">
                        <Terminal size={20} />
                    </button>
                    <button className="p-2 rounded-full hover:bg-white/5 transition-all text-primary">
                        <Mail size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
};
