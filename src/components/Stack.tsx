import React from 'react';
import { motion } from 'motion/react';
import {
    CsIcon,
    NetIcon,
    UmbracoIcon,
    AzureIcon,
    SqlIcon,
    ReactIcon,
    TsIcon,
    TailwindIcon
} from './StackIcons';

export const Stack = () => {
    const tools = [
        { name: "C# Language", icon: <CsIcon /> },
        { name: ".NET Core", icon: <NetIcon /> },
        { name: "Umbraco CMS", icon: <UmbracoIcon /> },
        { name: "Azure Services", icon: <AzureIcon /> },
        { name: "SQL Server", icon: <SqlIcon /> },
        { name: "React.js", icon: <ReactIcon /> },
        { name: "TypeScript", icon: <TsIcon /> },
        { name: "Tailwind CSS", icon: <TailwindIcon /> }
    ];

    // Triple the array for seamless infinite marquee loop on ultra-wide screens
    const marqueeItems = [...tools, ...tools, ...tools];

    return (
        <section id="stack" className="mb-32 overflow-hidden">
            <h2 className="text-[10px] font-headline uppercase tracking-[0.4em] text-zinc-500 mb-12 text-center">The Engine Room</h2>
            
            <div className="relative w-full flex items-center">
                {/* Left/Right fading edges for professional studio depth */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
                
                <div className="flex gap-6 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] py-4">
                    {marqueeItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8, borderColor: 'rgba(198, 191, 255, 0.4)', boxShadow: '0 0 25px rgba(198, 191, 255, 0.15)' }}
                            className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md transition-all duration-300 select-none cursor-pointer"
                        >
                            <div className="flex-shrink-0">
                                {item.icon}
                            </div>
                            <span className="text-sm font-semibold tracking-wide text-on-surface font-headline">
                                {item.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
