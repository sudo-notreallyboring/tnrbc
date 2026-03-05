'use client';

const clients = [
    'Edgars',
    'Sales House',
    'Jet Stores',
    'John Orrs',
    'John Craig',
    'Stuttafords',
    'Hugo Boss',
    'MaxMara',
    'Hemmingways',
    'Perl Modes',
    'Lacoste',
    'Siemens',
    'Medscheme',
    'Liberty Life',
    'Standard Bank',
    'Investec',
    'Nedbank',
    'ABSA',
    'Rand Merchant Bank',
    'First National Bank',
    'Standard Chartered',
    'Barclays',
    'HSBC',
    'Co-Operative Bank',
    'Natwest Bank',
    'Mettle',
    'Bo Bank',
    'Renaissance Capital',
    'Credit Suisse',
    'Southern Sun',
    'Whitbread',
    'Premiere Inn',
    'Clermont Hotels',
    '11Onze Bank',
    'Reloadly',
    'Koyah Sierra',
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
    return (
        <div className="flex overflow-hidden group">
            <div
                className={`flex shrink-0 gap-4 py-2 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}
            >
                {[...clients, ...clients].map((name, i) => (
                    <span
                        key={i}
                        className="whitespace-nowrap font-heading text-[0.875rem] md:text-[1rem] uppercase tracking-widest text-charcoal bg-off-white border border-light-border rounded-full px-5 py-2.5 hover:border-signal-red/40 hover:text-black transition-colors duration-200"
                    >
                        {name}
                    </span>
                ))}
            </div>
            <div
                aria-hidden="true"
                className={`flex shrink-0 gap-4 py-2 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}
            >
                {[...clients, ...clients].map((name, i) => (
                    <span
                        key={i}
                        className="whitespace-nowrap font-heading text-[0.875rem] md:text-[1rem] uppercase tracking-widest text-charcoal bg-off-white border border-light-border rounded-full px-5 py-2.5 hover:border-signal-red/40 hover:text-black transition-colors duration-200"
                    >
                        {name}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function ClientMarquee() {
    return (
        <section className="w-full bg-paper py-12 md:py-16 border-b border-light-border overflow-hidden">
            <p className="text-center font-mono text-[0.75rem] text-mid-grey uppercase tracking-[0.2em] mb-8">
                Leaders We&apos;ve Un-Bored
            </p>
            <div className="flex flex-col gap-3">
                <MarqueeRow />
                <MarqueeRow reverse />
            </div>
        </section>
    );
}
