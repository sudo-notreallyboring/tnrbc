'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const heroSection = document.getElementById('hero-section');
        if (!heroSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsScrolled(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(heroSection);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <nav
                className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] md:w-auto md:min-w-[700px] rounded-full px-6 py-3 flex items-center justify-between ${isScrolled
                    ? 'bg-paper/70 backdrop-blur-xl text-black border border-light-border shadow-lg'
                    : 'bg-transparent text-off-white border border-transparent'
                    }`}
            >
                <Link href="/" className="font-heading font-bold uppercase tracking-[-0.04em] text-lg">
                    NOT REALLY BORING
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6 font-heading text-[0.8125rem] uppercase tracking-wide">
                        <Link href="#methods" className="hover:-translate-y-[1px] transition-transform">Methods</Link>
                        <Link href="#results" className="hover:-translate-y-[1px] transition-transform">Results</Link>
                        <Link href="#philosophy" className="hover:-translate-y-[1px] transition-transform">Philosophy</Link>
                        <Link href="/wiki" className="hover:-translate-y-[1px] transition-transform">Wiki</Link>
                    </div>

                    <a
                        href="https://booking.akiflow.com/not-really-boring-70ed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden bg-signal-red text-off-white rounded-full px-6 py-2 text-sm font-heading font-medium transition-transform duration-300 hover:scale-[1.03] outline-none focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:ring-offset-2"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                    >
                        <span className="relative z-10">Book a Briefing</span>
                        <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden block p-2"
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Open Menu"
                >
                    <Menu size={24} />
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black z-[100] text-off-white flex flex-col items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
                aria-hidden={!mobileMenuOpen}
            >
                <button
                    className="absolute top-8 right-8 p-2"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close Menu"
                >
                    <X size={32} />
                </button>

                <div className="flex flex-col gap-8 text-center font-heading text-3xl uppercase tracking-tighter">
                    <Link href="#methods" onClick={() => setMobileMenuOpen(false)}>Methods</Link>
                    <Link href="#results" onClick={() => setMobileMenuOpen(false)}>Results</Link>
                    <Link href="#philosophy" onClick={() => setMobileMenuOpen(false)}>Philosophy</Link>
                    <Link href="/wiki" onClick={() => setMobileMenuOpen(false)}>Wiki</Link>
                </div>

                <a
                    href="https://booking.akiflow.com/not-really-boring-70ed"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-12 bg-signal-red text-off-white rounded-full px-8 py-4 text-lg font-heading font-medium"
                >
                    Book a Briefing
                </a>
            </div>
        </>
    );
}
