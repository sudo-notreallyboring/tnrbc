'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const stats = [
    { target: 35, prefix: '20–', suffix: '%', label: 'Efficiency Gains' },
    { target: 8, prefix: 'Week ', suffix: '', label: 'ROI Guaranteed' },
    { target: 100, prefix: '', suffix: '%', label: 'Execution Success Rate' },
    { target: 50, prefix: '', suffix: '+', label: 'Transformations Delivered' },
];

export default function StatsBar() {
    const containerRef = useRef<HTMLDivElement>(null);
    const valueRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top 85%',
                once: true,
                onEnter: () => {
                    stats.forEach((stat, index) => {
                        const el = valueRefs.current[index];
                        if (!el) return;

                        const obj = { val: 0 };
                        gsap.to(obj, {
                            val: stat.target,
                            duration: 2,
                            ease: 'power2.out',
                            onUpdate: () => {
                                el.innerText = `${stat.prefix}${Math.round(obj.val)}${stat.suffix}`;
                            }
                        });
                    });
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full bg-black py-12 md:py-0 border-y border-charcoal relative z-10">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 md:divide-x divide-charcoal">
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center justify-center py-10 md:py-14 px-4 text-center">
                        <div
                            ref={(el) => { valueRefs.current[i] = el; }}
                            className="font-mono font-bold text-[3.5rem] tracking-tight leading-[1.0] text-signal-red mb-4"
                        >
                            {stat.prefix}0{stat.suffix}
                        </div>
                        <div className="font-mono text-[0.8125rem] text-mid-grey uppercase tracking-widest leading-[1.4]">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
