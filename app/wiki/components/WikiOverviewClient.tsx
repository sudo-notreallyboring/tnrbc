'use client';
import { motion } from 'motion/react';
import { BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import WikiNav from './WikiNav';
import WikiSidebar from './WikiSidebar';
import OverviewCards from './OverviewCards';
import { philosophyPrinciples } from '../data';

const MethodologyFlow = dynamic(() => import('./MethodologyFlow'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[420px] rounded-xl border border-wiki-border bg-wiki-surface flex items-center justify-center">
      <span className="text-sm text-wiki-text-tertiary font-mono">Loading diagram...</span>
    </div>
  ),
});

export default function WikiOverviewClient() {
  return (
    <>
      <WikiNav />
      <div className="flex pt-16">
        <WikiSidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-wiki-surface-2 border border-wiki-border">
                  <BookOpen size={22} className="text-wiki-text-secondary" />
                </div>
                <div>
                  <h1 className="font-heading font-bold text-2xl md:text-3xl text-wiki-text">
                    Methodology Wiki
                  </h1>
                  <p className="text-sm text-wiki-text-tertiary font-heading">
                    The Not Really Boring execution system
                  </p>
                </div>
              </div>

              <p className="text-base text-wiki-text-secondary leading-[1.8] max-w-2xl">
                Four precision-engineered methods that deliver transformation, not recommendations.
                Each method is designed for a specific business context — from rapid operational improvement
                to enterprise-wide scaling, operating model architecture, and M&A integration.
              </p>
            </motion.div>

            {/* Methodology System Diagram */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-2 mb-4">
                <h2 className="font-heading font-bold text-lg text-wiki-text">
                  How the Methods Connect
                </h2>
              </div>
              <p className="text-sm text-wiki-text-tertiary mb-6 max-w-xl">
                The four methods form an integrated system. Click any node to explore that methodology in detail.
              </p>
              <MethodologyFlow />
            </motion.section>

            {/* Method Cards */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mb-16"
            >
              <h2 className="font-heading font-bold text-lg text-wiki-text mb-6">
                The Four Methods
              </h2>
              <OverviewCards />
            </motion.section>

            {/* Philosophy */}
            <motion.section
              id="philosophy"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="font-heading font-bold text-lg text-wiki-text mb-2">
                Operating Philosophy
              </h2>
              <p className="text-sm text-wiki-text-tertiary mb-6 max-w-xl">
                Five principles that govern every engagement, every method, every deliverable.
              </p>
              <div className="space-y-3">
                {philosophyPrinciples.map((principle, i) => (
                  <motion.div
                    key={principle.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="bg-wiki-surface rounded-xl border border-wiki-border-subtle p-5 hover:border-wiki-border transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs font-bold text-signal-red mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-heading font-bold text-sm text-wiki-text mb-1">
                          {principle.name}
                        </h3>
                        <p className="text-sm text-wiki-text-tertiary leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="rounded-xl border border-wiki-border bg-wiki-surface-2 p-8 text-center"
            >
              <h2 className="font-heading font-bold text-xl text-wiki-text mb-2">
                Ready to deploy?
              </h2>
              <p className="text-sm text-wiki-text-tertiary mb-6 max-w-md mx-auto">
                Every engagement starts with a 30-minute executive briefing. No slides, no pitch — just a conversation about your transformation goals.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-signal-red text-off-white font-heading font-medium text-sm hover:bg-signal-red/90 transition-colors"
              >
                Schedule Executive Briefing
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}
