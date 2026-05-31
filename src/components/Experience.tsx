import React from 'react';
import { motion } from 'motion/react';

export const Experience = () => {
    const experiences = [
        {
            role: "Trainee Software Engineer",
            company: "Geotech Infoservices Private Limited",
            period: "AUG 2025 — PRESENT",
            desc: "Early-stage employee focused on Azure cloud migrations and monolithic refactoring to microservices.",
            color: "bg-primary",
            textColor: "text-primary"
        },
        {
            role: "Software Engineer Intern",
            company: "Geotech Infoservices Private Limited",
            period: "JAN 2025 — JUL 2025",
            desc: "Delivering award-winning Umbraco implementations for luxury automotive and fashion brands globally.",
            color: "bg-secondary",
            textColor: "text-secondary",
            reverse: true
        },
        {
            role: "Software Developer Intern",
            company: "National Informatics Centre (NIC)",
            period: "JUL 2024 — NOV 2024",
            desc: "Pioneering distributed .NET systems processing high-frequency trading data for European markets.",
            color: "bg-tertiary",
            textColor: "text-tertiary"
        }
    ];

    return (
        <section id="experience" className="mb-32">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-4xl font-headline font-extrabold tracking-tighter text-on-surface uppercase">The Journey</h2>
                <div className="h-[1px] flex-grow bg-white/10" />
            </div>

            <div className="relative max-w-4xl mx-auto space-y-12">
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-white/10 to-transparent" />

                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -45, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                        className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${exp.reverse ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className={`hidden md:block w-1/2 ${exp.reverse ? 'text-left pl-12' : 'text-right pr-12'}`}>
                            <span className="text-primary font-mono text-sm">{exp.period}</span>
                        </div>
                        <div className={`absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full ${exp.color} shadow-[0_0_15px_rgba(198,191,255,0.8)] z-10`} />
                        <div className="w-full md:w-1/2 md:px-12">
                            <div className={`liquid-glass p-6 rounded-2xl ${exp.reverse ? 'md:text-right' : ''}`}>
                                <h3 className="text-xl font-bold text-on-surface">{exp.role}</h3>
                                <p className={`${exp.textColor} text-xs font-semibold mb-3`}>{exp.company}</p>
                                <p className="text-on-surface-variant text-sm leading-relaxed">{exp.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
