import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-black text-off-white rounded-t-[4rem] px-8 md:px-16 pt-24 pb-8 md:pb-12 border-t border-charcoal -mt-8 relative z-20">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">

                    {/* Column 1 - Brand */}
                    <div className="flex flex-col">
                        <h2 className="font-heading font-bold uppercase tracking-[-0.04em] text-2xl lg:text-3xl mb-4 text-off-white">
                            NOT REALLY BORING
                        </h2>
                        <p className="font-heading italic text-mid-grey text-[1.125rem] mb-6">
                            &quot;Where Strategy Gets Legs.&trade;&quot;
                        </p>
                        <p className="font-mono text-charcoal text-[0.875rem] uppercase tracking-widest mt-auto max-w-[200px] leading-relaxed">
                            Barcelona Innovation Hub. Delivering Globally.
                        </p>
                    </div>

                    {/* Column 2 - Methods */}
                    <div className="flex flex-col">
                        <h3 className="font-mono text-[0.8125rem] text-charcoal uppercase tracking-widest mb-8">Methods</h3>
                        <ul className="flex flex-col gap-4 font-heading text-[1.125rem] text-off-white/80">
                            <li><Link href="#methods" className="hover:text-signal-red inline-block hover:translate-x-1 transition-all duration-300">BOLT™</Link></li>
                            <li><Link href="#methods" className="hover:text-signal-red inline-block hover:translate-x-1 transition-all duration-300">SURGE™</Link></li>
                            <li><Link href="#methods" className="hover:text-signal-red inline-block hover:translate-x-1 transition-all duration-300">GRID™</Link></li>
                            <li><Link href="#methods" className="hover:text-signal-red inline-block hover:translate-x-1 transition-all duration-300">FUSE™</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 - Company */}
                    <div className="flex flex-col">
                        <h3 className="font-mono text-[0.8125rem] text-charcoal uppercase tracking-widest mb-8">Company</h3>
                        <ul className="flex flex-col gap-4 font-heading text-[1.125rem] text-off-white/80">
                            <li><Link href="#philosophy" className="hover:text-signal-red inline-block hover:translate-x-1 transition-all duration-300">Philosophy</Link></li>
                            <li><Link href="#results" className="hover:text-signal-red inline-block hover:translate-x-1 transition-all duration-300">Results</Link></li>
                            <li><Link href="#contact" className="hover:text-signal-red inline-block hover:translate-x-1 transition-all duration-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 - Connect */}
                    <div className="flex flex-col">
                        <h3 className="font-mono text-[0.8125rem] text-charcoal uppercase tracking-widest mb-8">Connect</h3>
                        <ul className="flex flex-col gap-4 font-heading text-[1.125rem] text-off-white/80">
                            <li><a href="mailto:transform@notreallyboring.com" className="hover:text-signal-red transition-colors">transform@notreallyboring.com</a></li>
                            <li className="text-mid-grey">Barcelona, Spain</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-charcoal flex flex-col-reverse md:flex-row justify-between items-center gap-6">
                    <div className="font-mono text-[0.75rem] text-mid-grey uppercase tracking-widest">
                        © {new Date().getFullYear()} The Not Really Boring Company SL
                    </div>
                    <div className="flex items-center gap-3 bg-charcoal/30 px-4 py-2 rounded-full border border-charcoal">
                        <div className="w-2 h-2 rounded-full bg-[#27AE60] flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-[#27AE60] rounded-full animate-ping opacity-75"></div>
                        </div>
                        <span className="font-mono text-[0.75rem] text-[#27AE60] uppercase tracking-widest">
                            System Operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
