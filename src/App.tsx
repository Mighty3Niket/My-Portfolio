/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
