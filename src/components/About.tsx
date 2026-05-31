import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
    return (
        <section id="about" className="pt-28 mb-32">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="liquid-glass rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
            >
                <div className="flex-1 space-y-8 relative z-10">
                    <h2 className="text-7xl md:text-9xl font-headline font-extrabold tracking-tighter text-on-surface">
                        Hello<span className="text-primary">|</span>
                    </h2>
                    <p className="text-2xl md:text-4xl text-on-surface leading-tight font-light">
                        I'm <span className="font-bold text-primary">Triniket</span>, a Software Engineer specializing in <span className="text-secondary italic">high-performance .NET architectures</span> and premium digital ecosystems.
                    </p>
                    <div className="space-y-4 text-on-surface-variant max-w-xl text-lg opacity-70">
                        <p>Over the past decade, I've focused on transforming complex technical challenges into elegant, resilient systems that scale.</p>
                        <p>I enjoy building architectures that bring clarity to big data and help enterprises make mission-critical decisions in real-time.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                    <img
                        alt="Portrait"
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
                        src="https://picsum.photos/seed/julian-portrait/800/1000"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent" />
                </div>
            </motion.div>
        </section>
    );
};
