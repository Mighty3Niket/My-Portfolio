import React from 'react';
import { motion } from 'motion/react';

export const CTA = () => {
    return (
        <section id="contact" className="rounded-[2.5rem] overflow-hidden liquid-glass border border-white/5 p-12 md:p-24 text-center relative mb-32">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent -z-10" />
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <h2 className="text-4xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9]">
                    Ready to build the <br /><span className="text-primary italic">next evolution?</span>
                </h2>
                <p className="text-on-surface-variant max-w-xl mx-auto mb-12 text-lg opacity-70">
                    Currently accepting select engineering roles and architectural consultations.
                </p>
                <motion.a
                    href="mailto:hello@esunny.maiti@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-10 py-5 rounded-full bg-primary text-surface font-black text-xs tracking-widest uppercase shadow-[0_0_40px_rgba(198,191,255,0.2)] cursor-pointer"
                >
                    Initiate Contact
                </motion.a>
            </motion.div>
        </section>
    );
};
