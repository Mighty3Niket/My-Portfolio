import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Code, Layers, Terminal } from 'lucide-react';

const THEME_VARIANTS = {
    primary: {
        textColor: "text-primary",
        borderColor: "border-primary/30",
        glowColor: "group-hover:shadow-[0_0_30px_rgba(198,191,255,0.15)] group-hover:border-primary/30"
    },
    secondary: {
        textColor: "text-secondary",
        borderColor: "border-secondary/30",
        glowColor: "group-hover:shadow-[0_0_30px_rgba(191,197,229,0.15)] group-hover:border-secondary/30"
    },
    tertiary: {
        textColor: "text-tertiary",
        borderColor: "border-tertiary/30",
        glowColor: "group-hover:shadow-[0_0_30px_rgba(197,192,255,0.15)] group-hover:border-tertiary/30"
    }
} as const;

const EXPERIENCES = [
    {
        role: "Software Engineer",
        company: "Geotech Infoservices Private Limited",
        period: "JUL 2026 — PRESENT",
        desc: "Spearheaded cloud migration strategies on Azure and led the transformation of legacy monolithic systems into scalable, highly resilient microservices using ASP.NET Core and gRPC.",
        variant: "primary" as const,
        icon: Cpu,
        logo: "/images/geotech-logo.svg",
        tech: ["Azure", "ASP.NET Core", "gRPC", "Microservices", "Docker"]
    },
    {
        role: "Trainee Software Engineer",
        company: "Geotech Infoservices Private Limited",
        period: "AUG 2025 — JUN 2026",
        desc: "Assisted in migrating legacy codebases, optimized database queries, and implemented robust unit and integration testing frameworks for .NET applications.",
        variant: "secondary" as const,
        icon: Code,
        logo: "/images/geotech-logo.svg",
        tech: [".NET Core", "SQL Server", "Unit Testing", "Web APIs"]
    },
    {
        role: "Software Engineer Intern",
        company: "Geotech Infoservices Private Limited",
        period: "JAN 2025 — JUL 2025",
        desc: "Developed and maintained custom CMS systems, built headless content architectures using Umbraco, and optimized frontend assets for global brands.",
        variant: "tertiary" as const,
        icon: Layers,
        logo: "/images/geotech-logo.svg",
        tech: ["Umbraco CMS", "C#", "React", "TypeScript"]
    },
    {
        role: "Software Developer Intern",
        company: "National Informatics Centre (NIC)",
        period: "JUL 2024 — NOV 2024",
        desc: "Designed performance-critical C# Source Generators and optimized distributed data processing pipelines to improve government e-governance portal latency.",
        variant: "primary" as const,
        icon: Terminal,
        logo: "/images/nic-logo.svg",
        tech: ["C#", "Source Generators", "Algorithms", "Data Processing"]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="mb-32">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-4xl font-headline font-extrabold tracking-tighter text-on-surface uppercase">The Journey</h2>
                <div className="h-[1px] flex-grow bg-white/10" />
            </div>

            <div className="relative max-w-4xl mx-auto space-y-12">
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-white/10 to-transparent md:-translate-x-1/2" />

                {EXPERIENCES.map((exp, i) => {
                    const IconComponent = exp.icon;
                    const isReverse = i % 2 === 1;
                    const theme = THEME_VARIANTS[exp.variant];
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: -45, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                            className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center pl-16 md:pl-0 w-full group ${isReverse ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className={`hidden md:block w-1/2 ${isReverse ? 'text-left pl-12' : 'text-right pr-12'}`}>
                                <span className="text-primary font-mono text-sm font-semibold">{exp.period}</span>
                            </div>
                            <div className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full z-10 flex items-center justify-center bg-surface/90 border-2 ${theme.borderColor} ${theme.textColor} group-hover:scale-110 group-hover:bg-surface transition-all duration-300 backdrop-blur-md ${theme.glowColor.split(' ')[0]}`}>
                                <IconComponent size={20} className="transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <div className="w-full md:w-1/2 md:px-12">
                                <div className={`liquid-glass p-6 rounded-2xl transition-all duration-500 border border-white/10 ${theme.glowColor} ${isReverse ? 'md:text-right md:items-end' : 'md:text-left md:items-start'} flex flex-col`}>
                                    <span className="md:hidden block text-primary font-mono text-xs mb-1 font-semibold">{exp.period}</span>
                                    
                                    <div className={`flex items-start justify-between w-full mb-3 gap-4 ${isReverse ? 'md:flex-row-reverse' : ''}`}>
                                        <div className={`flex flex-col ${isReverse ? 'md:items-end md:text-right text-left items-start' : 'items-start text-left'}`}>
                                            <h3 className="text-xl font-bold text-on-surface tracking-tight">{exp.role}</h3>
                                            <p className={`${theme.textColor} text-xs font-semibold tracking-wider uppercase`}>{exp.company}</p>
                                        </div>
                                        <div className="flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                                            <img
                                                src={exp.logo}
                                                alt=""
                                                className="h-7 w-auto max-w-[110px] object-contain"
                                            />
                                        </div>
                                    </div>

                                    <p className={`text-on-surface-variant text-sm leading-relaxed mb-4 ${isReverse ? 'md:text-right' : 'md:text-left'}`}>{exp.desc}</p>
                                    <div className={`flex flex-wrap gap-2 ${isReverse ? 'md:justify-end' : 'md:justify-start'}`}>
                                        {exp.tech.map((t, idx) => (
                                            <span key={idx} className="text-[10px] font-mono font-bold tracking-tight px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-on-surface-variant/80 hover:text-on-surface hover:bg-white/10 transition-colors duration-200">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
