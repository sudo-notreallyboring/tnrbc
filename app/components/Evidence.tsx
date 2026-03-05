'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const metrics = [
    { val: '3–5x', context: 'Within 6 months', id: 'm1' },
    { val: '60–90', suffix: ' Days', context: 'Typical payback period', id: 'm2' },
    { prefix: '$', val: '2.5', suffix: 'M', context: 'Average annual value created', id: 'm3' },
    { val: '95', suffix: '%', context: 'Team engagement by Week 4', id: 'm4' },
    { val: '50–70', suffix: '%', context: 'Reduction achieved', id: 'm5' },
    { val: '80', suffix: '%+', context: 'Digital adoption in target teams', id: 'm6' },
];

export default function Evidence() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>('.evidence-card');
            cards.forEach((card, i) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: i * 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            toggleActions: 'play none none none',
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="results" ref={containerRef} className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto bg-paper">
            <div className="mb-20 text-center">
                <h2 className="font-drama italic text-[clamp(3.5rem,6vw,5.5rem)] text-black leading-[1.05]">
                    The Numbers Don&apos;t Lie
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {metrics.map((metric, i) => (
                    <div
                        key={i}
                        className="evidence-card bg-off-white border border-light-border rounded-3xl-custom p-10 md:p-14 flex flex-col justify-center shadow-sm relative overflow-hidden group hover:border-charcoal/30 transition-colors"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-signal-red origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

                        <div className="font-mono font-bold text-[clamp(3rem,5vw,4.5rem)] leading-none text-signal-red mb-6 tracking-tight flex items-baseline">
                            {metric.prefix}<span id={metric.id}>{metric.val}</span>{metric.suffix}
                        </div>

                        <p className="font-mono text-[0.875rem] md:text-[1rem] uppercase tracking-widest text-mid-grey">
                            {metric.context}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
