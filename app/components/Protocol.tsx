'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const steps = [
    {
        num: '01',
        title: 'Break It Open',
        desc: 'We don\'t study problems — we attack them. In 14 days, we crack open your operations through blitz interviews, floor-walks, and data raids. Our Value Radar™ identifies $3–5M in hidden upside. By Friday of week 2, you have a battle plan and quick wins locked and loaded.',
    },
    {
        num: '02',
        title: 'Ship Outrageous Outcomes',
        desc: 'Theory is cheap. Results are currency. We deploy 2–3 high-impact wins that deliver measurable value in 14 days or less. Cycle times drop 30%. Error rates plummet 40%. Every Friday becomes Demo Day — real improvements, real metrics, real momentum.',
    },
    {
        num: '03',
        title: 'Scale & Transfer',
        desc: 'Winners scale. We take what works and multiply it across teams, systems, and value streams. By week 8: 25–35% efficiency gains locked. By week 12: your teams are certified, governance is embedded, and you own a self-sustaining transformation engine. Not a dependency on consultants.',
    }
];

function Animations({ index }: { index: number }) {
    if (index === 0) {
        return (
            <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] opacity-80 animate-spin-slow">
                    <circle cx="50" cy="50" r="10" stroke="var(--signal-red)" strokeWidth="0.5" fill="none" className="opacity-40" />
                    <circle cx="50" cy="50" r="20" stroke="var(--signal-red)" strokeWidth="0.5" fill="none" className="opacity-60" />
                    <circle cx="50" cy="50" r="30" stroke="var(--signal-red)" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-spin-reverse-slow" />
                    <circle cx="50" cy="50" r="40" stroke="var(--signal-red)" strokeWidth="0.5" fill="none" className="opacity-30" />
                    <path d="M50 50 L50 10 A40 40 0 0 1 90 50 Z" fill="var(--signal-red)" className="opacity-10 animate-radar-sweep origin-center" />
                </svg>
            </div>
        );
    }
    if (index === 1) {
        const dots = Array.from({ length: 100 });
        return (
            <div className="w-full h-full bg-black flex items-center justify-center p-8 relative overflow-hidden">
                <div className="grid grid-cols-10 gap-x-4 gap-y-4 w-full aspect-square relative z-0">
                    {dots.map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-charcoal m-auto animate-dot-active" style={{ animationDelay: `${(i % 10) * 0.1}s` }}></div>
                    ))}
                </div>
                <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-signal-red z-10 shadow-[0_0_15px_rgba(230,59,46,0.8)] animate-laser-scan"></div>
            </div>
        );
    }
    if (index === 2) {
        return (
            <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden relative">
                <svg viewBox="0 0 200 100" className="w-full h-[50%]">
                    <path
                        d="M 0,50 L 40,50 L 50,20 L 60,80 L 70,50 L 130,50 L 140,20 L 150,80 L 160,50 L 200,50"
                        stroke="var(--signal-red)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-ekg-path"
                        pathLength="100"
                    />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black animate-ekg-mask"></div>
            </div>
        );
    }
    return null;
}

export default function Protocol() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Only apply complex scroll pinning on non-mobile devices (>= 768px)
        if (window.innerWidth < 768) return;

        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                // Target everything except the last card
                if (index < cardsRef.current.length - 1) {
                    ScrollTrigger.create({
                        trigger: card,
                        start: "top top",
                        endTrigger: cardsRef.current[cardsRef.current.length - 1],
                        end: "bottom bottom",
                        pin: true,
                        pinSpacing: false,
                        id: `pin-${index}`
                    });

                    // Animation for when next card comes into view
                    const nextCard = cardsRef.current[index + 1];
                    if (nextCard) {
                        gsap.to(card, {
                            scale: 0.92,
                            filter: "blur(16px)",
                            opacity: 0.4,
                            ease: "none",
                            scrollTrigger: {
                                trigger: nextCard,
                                start: "top bottom",
                                end: "top top",
                                scrub: true,
                            }
                        });
                    }
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full bg-paper pb-12 md:pb-0">
            {steps.map((step, index) => (
                <div
                    key={index}
                    ref={(el) => { cardsRef.current[index] = el; }}
                    className="protocol-card min-h-screen w-full flex items-center justify-center p-4 md:p-8"
                >
                    <div className="bg-off-white rounded-[3rem] border border-light-border shadow-xl w-full max-w-[1400px] h-full min-h-[85vh] flex flex-col md:flex-row overflow-hidden absolute-mobile-reset">
                        <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center">
                            <div className="font-mono font-bold text-[clamp(4rem,10vw,8rem)] leading-[0.8] text-signal-red mb-8">
                                {step.num}
                            </div>
                            <h2 className="font-heading font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.0] text-black mb-6">
                                {step.title}
                            </h2>
                            <p className="font-heading text-[1.125rem] md:text-[1.25rem] leading-[1.6] text-charcoal max-w-lg">
                                {step.desc}
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 bg-black min-h-[40vh] md:min-h-full border-t md:border-t-0 md:border-l border-light-border/20">
                            <Animations index={index} />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
