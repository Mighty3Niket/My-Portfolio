import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
    const reports = [
        {
            name: "Marcus Thorne",
            role: "CTO / FinScale",
            text: "Triniket's ability to architect systems that are both robust and incredibly flexible is rare. He turned our scaling nightmare into a competitive advantage.",
            img: "https://picsum.photos/seed/marcus/100/100"
        },
        {
            name: "Elena Rossi",
            role: "Digital Director / Lumina",
            text: "The Umbraco implementation delivered by Triniket was beyond expectations. High performance, beautifully structured, and incredibly developer-friendly.",
            img: "https://picsum.photos/seed/elena/100/100"
        },
        {
            name: "Soren Lind",
            role: "Lead Engineer / NordVPC",
            text: "Deep technical knowledge combined with clear communication. Triniket is the architect you want in the room when things get complex.",
            img: "https://picsum.photos/seed/soren/100/100"
        }
    ];

    return (
        <section className="mb-32">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-headline font-extrabold tracking-tighter text-on-surface uppercase">System Reports</h2>
                <p className="text-on-surface-variant mt-2">Validated output from the collaborative mesh.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reports.map((r, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50, scale: 0.94 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="liquid-glass p-8 rounded-[2rem] border border-white/10 relative overflow-hidden"
                    >
                        <div className="flex text-primary mb-6">
                            {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-on-surface-variant italic mb-8 text-sm leading-relaxed">"{r.text}"</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden border border-white/20">
                                <img className="w-full h-full object-cover grayscale" src={r.img} alt={`Portrait of ${r.name}`} referrerPolicy="no-referrer" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-on-surface">{r.name}</div>
                                <div className="text-[10px] text-zinc-500 uppercase tracking-widest">{r.role}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
