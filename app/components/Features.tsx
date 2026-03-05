'use client';
import { useEffect, useState, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { MousePointer2 } from 'lucide-react';

const shufflerCards = [
    { title: '2-Week Diagnostic', text: 'We X-ray your organization and identify $3–5M in hidden value.' },
    { title: 'Live by Week 3', text: 'Real improvements deployed. Not a deck. A demo.' },
    { title: 'Scaled by Week 8', text: '25–35% efficiency gains locked. $1.5M+ savings realized.' },
];

const typewriterMessages = [
    '>> Senior practitioner assigned. 10+ years exp. No juniors.',
    '>> Value Radar™ scan complete. $4.2M upside identified.',
    '>> Demo Friday: cycle time reduced 31%. Before/after live.',
    '>> Momentum Score: 9.2/10. Proceeding to Lift-Off phase.',
    '>> Capability transfer initiated. Your team owns the engine.'
];

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function DiagnosticShuffler() {
    const [cards, setCards] = useState(shufflerCards);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards((prev) => {
                const newCards = [...prev];
                const last = newCards.pop()!;
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-full min-h-[220px] flex items-center justify-center p-6 mt-4">
            {cards.map((card, i) => {
                return (
                    <div
                        key={card.title}
                        className={`absolute w-full max-w-[280px] bg-white border border-light-border rounded-xl p-5 shadow-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]`}
                        style={{
                            zIndex: i,
                            transform: `translateY(${(2 - i) * -12}px) scale(${1 - (2 - i) * 0.05})`,
                            opacity: 1 - (2 - i) * 0.2,
                        }}
                    >
                        <div className="font-heading font-bold text-sm mb-1">{card.title}</div>
                        <div className="font-heading text-xs text-mid-grey">{card.text}</div>
                    </div>
                );
            })}
        </div>
    );
}

function TelemetryTypewriter() {
    const [text, setText] = useState('');
    const [msgIndex, setMsgIndex] = useState(0);

    useEffect(() => {
        let currentText = '';
        const fullText = typewriterMessages[msgIndex];
        let i = 0;

        const typeInterval = setInterval(() => {
            currentText += fullText.charAt(i);
            setText(currentText);
            i++;
            if (i >= fullText.length) {
                clearInterval(typeInterval);
                setTimeout(() => {
                    setMsgIndex((prev) => (prev + 1) % typewriterMessages.length);
                    setText('');
                }, 2000);
            }
        }, 50);

        return () => clearInterval(typeInterval);
    }, [msgIndex]);

    return (
        <div className="h-full min-h-[220px] bg-black text-off-white p-6 rounded-t-2xl-custom md:rounded-t-none md:rounded-tl-2xl-custom md:rounded-tr-2xl-custom relative overflow-hidden font-mono text-xs leading-relaxed flex items-center">
            <div className="absolute top-4 right-4 flex items-center gap-2 text-[10px] text-mid-grey tracking-widest">
                <span>LIVE FEED</span>
                <div className="w-1.5 h-1.5 rounded-full bg-signal-red animate-pulse"></div>
            </div>
            <div>
                <span className="text-signal-red mr-2">{'>'}</span>
                {text}
                <span className="inline-block w-2 h-3 bg-signal-red ml-1 animate-pulse align-middle"></span>
            </div>
        </div>
    );
}

function CursorProtocolScheduler() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const lockBtnRef = useRef<HTMLDivElement>(null);
    const dayRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeDay, setActiveDay] = useState<number | null>(null);

    useEffect(() => {
        let activeDayIndex = 3; // Start with Wednesday

        const ctx = gsap.context(() => {
            if (!cursorRef.current || !lockBtnRef.current || dayRefs.current.length === 0) return;

            const runSequence = () => {
                const targetDay = dayRefs.current[activeDayIndex];
                if (!targetDay) return;

                const tl = gsap.timeline({
                    onComplete: () => {
                        activeDayIndex = (activeDayIndex + 1) % 7;
                        setTimeout(runSequence, 500);
                    }
                });

                tl.set(cursorRef.current, { opacity: 0, scale: 1, x: 100, y: 150 })
                    .to(cursorRef.current, { opacity: 1, duration: 0.3 })
                    // Move to day
                    .to(cursorRef.current, {
                        x: targetDay.offsetLeft + 10,
                        y: targetDay.offsetTop + 10,
                        duration: 0.8,
                        ease: "power2.inOut"
                    })
                    // Press day
                    .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                    .call(() => setActiveDay(activeDayIndex))
                    .to(cursorRef.current, { scale: 1, duration: 0.1 })
                    // Move to Lock Button
                    .to(cursorRef.current, {
                        x: lockBtnRef.current!.offsetLeft + 40,
                        y: lockBtnRef.current!.offsetTop + 15,
                        duration: 0.8,
                        ease: "power2.inOut",
                        delay: 0.2
                    })
                    // Press lock button
                    .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                    .to(lockBtnRef.current, { scale: 0.95, duration: 0.1 }, "<")
                    .to(cursorRef.current, { scale: 1, duration: 0.1 })
                    .to(lockBtnRef.current, { scale: 1, duration: 0.1 }, "<")
                    // Fade out
                    .to(cursorRef.current, { opacity: 0, duration: 0.3, delay: 0.2 })
                    .call(() => setActiveDay(null));
            };

            runSequence();
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="h-full min-h-[220px] p-6 flex flex-col items-center justify-center relative bg-paper/30">
            <div className="flex gap-2 mb-8 relative z-10 w-full justify-center">
                {days.map((d, i) => (
                    <div
                        key={i}
                        ref={(el) => { dayRefs.current[i] = el; }}
                        className={`w-8 h-8 rounded shrink-0 flex items-center justify-center font-mono text-xs transition-colors duration-200 ${activeDay === i ? 'bg-signal-red text-off-white' : 'bg-white border border-light-border text-charcoal'
                            }`}
                    >
                        {d}
                    </div>
                ))}
            </div>

            <div
                ref={lockBtnRef}
                className="px-6 py-2 bg-charcoal text-off-white font-mono text-xs rounded-full relative z-10 transition-transform"
            >
                Lock Value
            </div>

            <div
                ref={cursorRef}
                className="absolute top-0 left-0 z-20 pointer-events-none opacity-0 drop-shadow-md text-black"
            >
                <MousePointer2 fill="white" size={24} />
            </div>
        </div>
    );
}

export default function Features() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>('.feature-card');
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
        <section ref={containerRef} className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto bg-paper">
            <div className="mb-16 text-center">
                <h2 className="font-drama italic text-[clamp(2.5rem,5vw,4.5rem)] text-black leading-[1.05]">
                    Why Leaders Choose Us
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Card 1 */}
                <div className="feature-card flex flex-col bg-off-white border border-light-border rounded-2xl-custom overflow-hidden shadow-sm">
                    <div className="flex-1 border-b border-light-border bg-paper/20">
                        <DiagnosticShuffler />
                    </div>
                    <div className="p-8 h-[40%] min-h-[180px] flex flex-col justify-center">
                        <h3 className="font-heading font-bold text-[1.5rem] leading-[1.2] mb-3 text-black">
                            Execution Over Analysis
                        </h3>
                        <p className="font-heading text-[1.125rem] leading-[1.6] text-charcoal">
                            We start doing, not planning. Your transformation begins day one.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="feature-card flex flex-col bg-off-white border border-light-border rounded-2xl-custom overflow-hidden shadow-sm">
                    <div className="flex-1 border-b border-light-border">
                        <TelemetryTypewriter />
                    </div>
                    <div className="p-8 h-[40%] min-h-[180px] flex flex-col justify-center">
                        <h3 className="font-heading font-bold text-[1.5rem] leading-[1.2] mb-3 text-black">
                            Senior-Only Teams
                        </h3>
                        <p className="font-heading text-[1.125rem] leading-[1.6] text-charcoal">
                            No learning on your dime. Every practitioner brings 10+ years of battle-tested experience.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="feature-card flex flex-col bg-off-white border border-light-border rounded-2xl-custom overflow-hidden shadow-sm">
                    <div className="flex-1 border-b border-light-border">
                        <CursorProtocolScheduler />
                    </div>
                    <div className="p-8 h-[40%] min-h-[180px] flex flex-col justify-center">
                        <h3 className="font-heading font-bold text-[1.5rem] leading-[1.2] mb-3 text-black">
                            Value-Locked Results
                        </h3>
                        <p className="font-heading text-[1.125rem] leading-[1.6] text-charcoal">
                            ROI by Week 8. Quick wins fund the journey. Every phase delivers measurable value.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
