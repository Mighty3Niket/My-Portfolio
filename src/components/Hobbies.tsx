import React from 'react';
import { motion } from 'motion/react';

export const Hobbies = () => {
    return (
        <section className="mb-32">
            <h2 className="text-[10px] font-headline uppercase tracking-[0.4em] text-zinc-500 mb-12 text-center">Beyond the Terminal</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                {/* Sports Card (Occupies Columns 1-2, Rows 1-2) */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="md:col-span-2 md:row-span-2 liquid-glass rounded-2xl overflow-hidden relative group cursor-pointer"
                >
                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-50" src="/images/sports.png" referrerPolicy="no-referrer" />
                    <div className="absolute bottom-6 left-6 z-10">
                        <span className="text-[10px] font-mono text-primary uppercase mb-2 block">Passion 01</span>
                        <h3 className="text-2xl font-bold">Sports (Cricket & Football)</h3>
                    </div>
                </motion.div>

                {/* Gaming Card (Occupies Columns 3-4, Row 1) */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="md:col-span-2 liquid-glass rounded-2xl overflow-hidden relative group cursor-pointer"
                >
                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-50" src="/images/gaming.png" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-xl font-bold text-on-surface">Gaming</h3>
                    </div>
                </motion.div>

                {/* Travelling Card (Occupies Columns 3-4, Row 2) */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="md:col-span-2 liquid-glass rounded-2xl overflow-hidden relative group cursor-pointer"
                >
                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-50" src="/images/travel.png" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-xl font-bold text-on-surface">Travelling</h3>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
