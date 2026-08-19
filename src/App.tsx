/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import {
    Navbar,
    Hero,
    About,
    Projects,
    Experience,
    Testimonials,
    Hobbies,
    Stack,
    CTA,
    MobileNav,
    Footer
} from './components';

export default function App() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.substring(1);
            const timer = setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div className="min-h-screen relative">
            <div className="mesh-gradient" />
            <Navbar />
            <main className="max-w-7xl mx-auto px-6">
                <About />
                <Hero />
                <Projects />
                <Experience />
                <Testimonials />
                <Hobbies />
                <Stack />
                <CTA />
            </main>
            <Footer />
            <MobileNav />
        </div>
    );
}
