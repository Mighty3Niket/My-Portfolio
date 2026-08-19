import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const GREETINGS = [
    "Hello",        // English
    "नमस्ते",       // Hindi
    "নমস্কার",      // Bengali
    "Hola",         // Spanish
    "Bonjour",      // French
    "Hallo",        // German
    "Ciao",         // Italian
    "Hej",          // Swedish
    "你好",         // Chinese
    "こんにちは"     // Japanese
];

const getGraphemes = (text: string): string[] => {
    if (typeof Intl !== 'undefined' && (Intl as any).Segmenter) {
        const segmenter = new (Intl as any).Segmenter(undefined, { granularity: 'grapheme' });
        return Array.from(segmenter.segment(text), (segment: any) => segment.segment);
    }
    return Array.from(text);
};

export const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        const currentWord = GREETINGS[currentIndex];

        const handleTyping = () => {
            const currentGraphemes = getGraphemes(currentWord);
            const displayedGraphemes = getGraphemes(displayedText);
            const displayedCount = displayedGraphemes.length;

            if (!isDeleting) {
                if (displayedCount === currentGraphemes.length) {
                    // Pause before deleting
                    timer = setTimeout(() => setIsDeleting(true), 2200);
                    return;
                }
                // Type next character
                setDisplayedText(currentGraphemes.slice(0, displayedCount + 1).join(''));
            } else {
                if (displayedCount === 0) {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % GREETINGS.length);
                    return;
                }
                // Delete character
                setDisplayedText(currentGraphemes.slice(0, displayedCount - 1).join(''));
            }

            const speed = isDeleting ? 60 : 120;
            timer = setTimeout(handleTyping, speed);
        };

        timer = setTimeout(handleTyping, isDeleting ? 60 : 120);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentIndex]);

    return (
        <section id="about" className="pt-28 mb-32">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="liquid-glass rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
            >
                <div className="flex-1 space-y-8 relative z-10">
                    <h2 className="text-6xl sm:text-7xl md:text-9xl font-headline font-extrabold tracking-tighter text-on-surface h-[1.2em] flex items-center">
                        <span>{displayedText}</span>
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
                            className="text-primary ml-1"
                        >
                            |
                        </motion.span>
                    </h2>
                    <p className="text-2xl md:text-4xl text-on-surface leading-tight font-light">
                        I'm <span className="font-bold text-primary">Triniket</span>, a Software Engineer specializing in <span className="text-secondary italic">high-performance .NET architectures</span> and premium digital ecosystems.
                    </p>
                    <div className="space-y-4 text-on-surface-variant max-w-xl text-lg opacity-70">
                        <p>I focus on translating complex backend requirements into elegant, high-throughput services and modern cloud architectures.</p>
                        <p>I thrive on building highly performant applications with C# and .NET, optimizing database systems, and designing resilient solutions that connect complex logic with seamless user experiences.</p>
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
