'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const stmt1Words = "Most consultancies focus on: six-month discovery, 300-page decks, junior teams learning on your dime, recommendations without implementation, and a 30% success rate.".split(' ');

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const stmt1Ref = useRef<HTMLParagraphElement>(null);
    const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const stmt2Ref = useRef<HTMLParagraphElement>(null);
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax Background
            gsap.to(parallaxRef.current, {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            });

            // Statement 1 Reveal
            const words = wordRefs.current.filter(Boolean);
            words.forEach((word, i) => {
                gsap.fromTo(word,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: i * 0.05,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: stmt1Ref.current,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        }
                    }
                );
            });

            // Statement 2 Punch in
            gsap.fromTo(stmt2Ref.current,
                { y: 40, opacity: 0, scale: 1.02 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: stmt2Ref.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const principles = [
        "DEMO OR DIDN'T HAPPEN",
        "SMALL BETS, SHORT LOOPS",
        "VALUE BEFORE VANITY",
        "TEACH WHILE DOING",
        "FRICTION DIES PUBLICLY"
    ];

    return (
        <section id="philosophy" ref={containerRef} className="relative w-full bg-black py-32 md:py-48 overflow-hidden z-10 border-y border-charcoal">
            <div
                ref={parallaxRef}
                className="absolute inset-0 z-0 h-[130%] -top-[15%] opacity-[0.08]"
            >
                <Image
                    src="/images/concrete-texture.jpg"
                    alt="Raw concrete texture"
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-20">

                <p
                    ref={stmt1Ref}
                    className="font-heading text-xl md:text-2xl text-mid-grey leading-[1.6] max-w-3xl"
                >
                    {stmt1Words.map((word, i) => (
                        <span
                            key={i}
                            ref={(el) => { wordRefs.current[i] = el; }}
                            className="inline-block"
                        >
                            {word}&nbsp;
                        </span>
                    ))}
                </p>

                <p
                    ref={stmt2Ref}
                    className="font-drama italic text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] text-off-white tracking-[-0.02em]"
                >
                    We focus on: deployed changes, visible value by week 4, and a 100% execution <span className="text-signal-red">success</span> rate.
                </p>

            </div>

            <div className="relative z-10 w-full mt-32 border-t border-charcoal pt-8 px-6 md:px-12 overflow-hidden flex justify-center">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-12 items-center text-center">
                    {principles.map((principle, index) => (
                        <div key={index} className="flex items-center gap-6 md:gap-12">
                            <span className="font-mono text-[0.75rem] font-bold text-mid-grey uppercase tracking-[0.1em] whitespace-nowrap">
                                {principle}
                            </span>
                            {index < principles.length - 1 && (
                                <div className="w-1.5 h-1.5 rounded-full bg-signal-red"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
