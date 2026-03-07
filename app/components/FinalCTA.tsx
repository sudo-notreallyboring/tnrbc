'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function FinalCTA() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const children = gsap.utils.toArray<HTMLElement>('.cta-card > *');
            children.forEach((el, i) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: i * 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top 80%',
                            toggleActions: 'play none none none',
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={containerRef} className="w-full bg-paper py-32 px-4 md:px-8 flex justify-center border-b border-light-border">
            <div className="cta-card w-full max-w-[1200px] bg-signal-red text-off-white rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-off-white/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>

                <h2 className="font-drama italic text-[clamp(3.5rem,6vw,5.5rem)] leading-[1.05] tracking-tight text-off-white mb-8 relative z-10 w-full">
                    Your Transformation Starts Now
                </h2>

                <p className="font-heading text-[1.25rem] md:text-[1.5rem] leading-[1.6] max-w-3xl mb-12 relative z-10 w-full text-off-white/90">
                    Every month of delay costs you $200K+ in unrealized value. Your competitors are moving faster. The complexity only increases. But your team is ready.
                </p>

                <p className="font-mono text-[0.875rem] uppercase tracking-widest text-black/60 mb-12 relative z-10 w-full font-bold">
                    We run only 3 transformations per quarter to maintain our 100% success rate. Is one of them yours?
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full relative z-10">
                    <a href="https://booking.akiflow.com/not-really-boring-70ed" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden bg-black text-off-white rounded-full px-10 py-5 font-heading font-medium text-lg lg:text-xl transition-transform duration-300 hover:scale-[1.03] outline-none">
                        <span className="relative z-10 flex items-center gap-3">
                            Schedule Executive Briefing
                            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                        </span>
                        <span className="absolute inset-0 bg-off-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
                    </a>

                    <Link href="/wiki" className="group relative overflow-hidden bg-transparent border border-black text-black rounded-full px-10 py-5 font-heading font-medium text-lg lg:text-xl transition-transform duration-300 hover:scale-[1.03] outline-none">
                        <span className="relative z-10 flex items-center gap-3">
                            Explore the Framework
                            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                        </span>
                        <span className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
