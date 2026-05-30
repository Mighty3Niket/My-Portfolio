import React from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, Terminal, Globe, ArrowRight, ExternalLink } from 'lucide-react';

export const Projects = () => {
    const projects = [
        {
            title: "OmniLink Enterprise",
            desc: "A multi-tenant SaaS infrastructure processing over 1M monthly transactions with sub-100ms latency.",
            tags: ["ASP.NET CORE", "AZURE CLOUD"],
            image: "https://picsum.photos/seed/omnilink/1200/800",
            colSpan: "md:col-span-8",
            height: "min-h-[450px]"
        },
        {
            title: "Umbraco Portal",
            desc: "Custom headless CMS implementation for luxury automotive brands.",
            icon: <LayoutGrid className="text-on-primary-container" size={40} />,
            colSpan: "md:col-span-4",
            height: "min-h-[450px]",
            isIcon: true
        },
        {
            title: "C# Source Generators",
            desc: "Open source toolkit for optimizing high-frequency trading bots.",
            icon: <Terminal className="text-zinc-500" size={32} />,
            colSpan: "md:col-span-5",
            height: "min-h-[350px]",
            isTool: true
        },
        {
            title: "Microservice Mesh",
            desc: "Designing resilient communication patterns for distributed .NET systems using RabbitMQ and gRPC.",
            icon: <Globe className="text-secondary" size={24} />,
            image: "https://picsum.photos/seed/mesh/800/600",
            colSpan: "md:col-span-7",
            height: "min-h-[350px]",
            isMesh: true
        }
    ];

    return (
        <section id="projects" className="mb-32">
            <div className="flex items-end justify-between mb-16">
                <div>
                    <h2 className="text-4xl font-headline font-extrabold tracking-tighter text-on-surface uppercase">Selected Works</h2>
                    <p className="text-on-surface-variant mt-2">Precision engineered digital solutions.</p>
                </div>
                <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/10" />
                <span className="text-primary font-mono text-sm">01 / 04</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 45, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className={`${p.colSpan} ${p.height} group relative overflow-hidden rounded-2xl liquid-glass p-8 flex flex-col ${p.isIcon ? 'items-center justify-center text-center' : 'justify-end'}`}
                    >
                        {p.image && (
                            <div className="absolute top-0 left-0 w-full h-full -z-10 transition-transform duration-700 group-hover:scale-105">
                                <div className="w-full h-full bg-gradient-to-t from-surface to-transparent opacity-80 absolute inset-0" />
                                <img alt={p.title} className={`w-full h-full object-cover ${p.isMesh ? 'opacity-30 grayscale hover:grayscale-0' : ''}`} src={p.image} referrerPolicy="no-referrer" />
                            </div>
                        )}

                        {p.isIcon && (
                            <>
                                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/40 to-tertiary/40 flex items-center justify-center mb-6 shadow-2xl">
                                    {p.icon}
                                </div>
                                <h3 className="text-2xl font-headline font-extrabold text-on-surface mb-2">{p.title}</h3>
                                <p className="text-on-surface-variant text-sm mb-6">{p.desc}</p>
                                <button className="text-primary text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:gap-4 transition-all">
                                    Case Study <ArrowRight size={14} />
                                </button>
                            </>
                        )}

                        {p.isTool && (
                            <>
                                <div className="flex justify-between items-start mb-auto">
                                    {p.icon}
                                    <div className="p-2 rounded-full border border-white/10 text-on-surface">
                                        <ExternalLink size={14} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-headline font-extrabold text-on-surface mb-1">{p.title}</h3>
                                    <p className="text-zinc-500 text-sm">{p.desc}</p>
                                </div>
                            </>
                        )}

                        {p.isMesh && (
                            <div className="max-w-xs">
                                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
                                    {p.icon}
                                </div>
                                <h3 className="text-2xl font-headline font-extrabold text-on-surface mb-2">{p.title}</h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        )}

                        {!p.isIcon && !p.isTool && !p.isMesh && (
                            <div className="relative z-10">
                                <div className="flex gap-2 mb-4">
                                    {p.tags?.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[9px] uppercase font-bold tracking-tighter">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-headline font-extrabold text-on-surface mb-2">{p.title}</h3>
                                <p className="text-on-surface-variant max-w-md line-clamp-2">{p.desc}</p>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
