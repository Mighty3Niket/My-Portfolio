import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] mb-32 pt-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full glass-orb blur-3xl opacity-30 animate-pulse" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 space-y-6"
            >
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                    Architect of the Midnight Hour
                </div>
                <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-[0.9] text-on-surface">
                    Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-secondary">Ecosystems</span><br />
                    in the Dark.
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-on-surface-variant font-light tracking-wide opacity-80 mt-8">
                    Engineering high-performance <span className="text-on-surface font-medium">.NET</span> systems and premium <span className="text-on-surface font-medium">Umbraco</span> digital experiences.
                </p>
                <div className="flex items-center justify-center gap-6 pt-12">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-full bg-primary text-surface font-bold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(198,191,255,0.3)]"
                    >
                        Explore My Work
                    </motion.a>
                    <motion.button
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                        className="px-8 py-4 rounded-full border border-white/10 font-bold text-xs tracking-widest uppercase text-on-surface"
                    >
                        Resume.pdf
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};
