'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const elementsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!elementsRef.current) return;
            const elements = elementsRef.current.children;

            gsap.from(elements, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: 'power3.out',
                delay: 0.2 // Small delay for initial load
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="hero-section"
            ref={containerRef}
            className="relative h-[100dvh] w-full flex items-end pl-8 md:pl-16 lg:pl-24 pb-16 md:pb-24 overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.jpg"
                    alt="Brutalist architecture"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                {/* Gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, var(--black) 0%, rgba(17, 17, 17, 0.8) 30%, transparent 70%)' }}
                />
            </div>

            <div ref={elementsRef} className="relative z-10 max-w-4xl text-left flex flex-col gap-4 mx-auto md:mx-0 items-center md:items-start text-center md:text-left">
                <h1 className="flex flex-col">
                    <span className="font-heading font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-off-white uppercase tracking-[-0.04em] leading-[1.1]">
                        Execute the
                    </span>
                    <span className="font-drama italic text-[clamp(4rem,8vw,9rem)] text-off-white tracking-[-0.02em] leading-[0.95]">
                        Transformation.
                    </span>
                </h1>

                <p className="font-heading text-lg md:text-[1.125rem] text-off-white/80 max-w-xl leading-[1.6]">
                    Strategy without velocity is expensive theatre. We deliver 90-day transformations with ROI by week 8. No exceptions.
                </p>

                <Link
                    href="#contact"
                    className="mt-4 group relative overflow-hidden bg-signal-red text-off-white rounded-full px-8 py-4 font-heading font-medium text-lg transition-transform duration-300 hover:scale-[1.03] outline-none focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:ring-offset-2 w-fit"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Schedule Executive Briefing
                        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </span>
                    <span className="absolute inset-0 bg-off-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
                    <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-75 ease-out z-0"></span>
                </Link>
            </div>
        </section>
    );
}
