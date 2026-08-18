import React from 'react';
import { Home, Code2, Layers, MessageSquare } from 'lucide-react';
import { handleSmoothScroll } from '../utils/scroll';

export const MobileNav = () => {

    return (
        <nav className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-4 px-4 py-2 bg-zinc-900/40 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl min-w-[320px]">
            {[
                { icon: <Home size={20} />, label: "Home", href: "/", id: "" },
                { icon: <Code2 size={20} />, label: "Projects", href: "/projects", id: "projects" },
                { icon: <Layers size={20} />, label: "Layers", href: "/experience", id: "experience" },
                { icon: <MessageSquare size={20} />, label: "Message", href: "/contact", id: "contact" }
            ].map((item, i) => (
                <a
                    key={i}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    className={`flex flex-col items-center justify-center flex-1 p-3 rounded-full transition-all ${i === 0 ? 'bg-primary/10 text-primary' : 'text-zinc-500 hover:text-zinc-200'}`}
                >
                    {item.icon}
                    <span className="text-[8px] font-medium tracking-wide mt-1 uppercase">{item.label}</span>
                </a>
            ))}
        </nav>
    );
};
