'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Zap, Activity, LayoutGrid, Link2 } from 'lucide-react';

const methods = [
    {
        id: 'bolt',
        name: 'BOLT™',
        title: 'Business Optimization & Lightning Transformation',
        icon: Zap,
        duration: '90 Days',
        desc: 'From zero to Minimum Viable Operating Model in 30 days. Quick wins by week 2. ROI by week 8.',
        phases: ['Break It Open (Weeks 1–2)', 'Outrageous Outcomes (Weeks 3–4)', 'Lift-Off (Weeks 5–8)', 'Tether & Transfer (Weeks 9–12)']
    },
    {
        id: 'surge',
        name: 'SURGE™',
        title: 'Strategic Unified Rapid Growth Execution',
        icon: Activity,
        duration: '60 Days',
        desc: 'Take what works and scale it enterprise-wide. Four waves of compounding momentum.',
        phases: ['Foundation', 'Acceleration', 'Scale', 'Sustain']
    },
    {
        id: 'grid',
        name: 'GRID™',
        title: 'Governance, Rewire, Instrument, Deploy',
        icon: LayoutGrid,
        duration: '90 Days',
        desc: 'Architect a complete Target Operating Model across 10 architecture blocks, then deploy.',
        phases: ['Govern', 'Reveal', 'Invent', 'Deploy']
    },
    {
        id: 'fuse',
        name: 'FUSE™',
        title: 'Fast Unified System Enablement',
        icon: Link2,
        duration: '10–180 Days',
        desc: 'Navigate M&A with confidence. From operational due diligence through post-merger integration.',
        phases: ['Forensics', 'Unify', 'Synergize', 'Execute']
    }
];

export default function Methods() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>('.method-card');
            cards.forEach((card, i) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        delay: i * 0.15,
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
        <section id="methods" ref={containerRef} className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto bg-paper">
            <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <h2 className="font-drama italic text-[clamp(2.5rem,5vw,4.5rem)] text-black leading-[1.05] max-w-2xl">
                    Four Methods.<br />One Outcome.
                </h2>
                <p className="font-heading text-[1.125rem] leading-[1.6] text-charcoal max-w-md">
                    A precision-engineered execution system. Not another consulting methodology that leaves you with a 200-page report and a prayer.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {methods.map((method) => {
                    const Icon = method.icon;
                    return (
                        <div
                            key={method.id}
                            className="method-card group bg-black text-off-white p-8 md:p-10 rounded-3xl-custom border border-charcoal hover:border-signal-red/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(230,59,46,0.15)] flex flex-col h-full"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="bg-charcoal p-4 rounded-2xl">
                                    <Icon size={32} className="text-signal-red" />
                                </div>
                                <div className="font-mono text-[0.8125rem] tracking-widest uppercase bg-charcoal/50 px-4 py-2 rounded-full border border-charcoal">
                                    {method.duration}
                                </div>
                            </div>

                            <h3 className="font-heading font-bold text-2xl mb-2 text-off-white">{method.name} — {method.title}</h3>
                            <p className="font-heading text-[1.125rem] leading-[1.6] text-off-white/70 mb-10 flex-1">
                                {method.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {method.phases.map((phase, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-mid-grey bg-charcoal/30 px-3 py-1.5 rounded-full border border-charcoal/50">
                                            <span className="text-signal-red mr-1.5">{method.name.charAt(0) === 'B' ? method.name.charAt(i) : i + 1}</span> {phase}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
