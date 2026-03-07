'use client';
import { motion } from 'motion/react';
import { Scale, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import WikiNav from '../components/WikiNav';
import WikiSidebar from '../components/WikiSidebar';

const licensedWorks = [
  { name: 'The Not Really Boring Method™', desc: 'End-to-end transformation system' },
  { name: 'BOLT™', desc: 'Break It Open, Lift-Off, Tether — 30-day rapid execution methodology' },
  { name: 'SURGE™', desc: '12-week operating model acceleration framework' },
  { name: 'GRID™', desc: 'Target operating model design and governance methodology' },
  { name: 'FUSE™', desc: 'Triage, integration, and M&A readiness framework' },
  { name: 'The Transformation Bible', desc: 'Comprehensive execution framework and playbooks' },
];

const permissions = [
  { label: 'Share', desc: 'Copy and redistribute the material in any medium or format, for any purpose, including commercially.' },
  { label: 'Adapt', desc: 'Remix, transform, and build upon the material for any purpose, including commercially.' },
];

const conditions = [
  { label: 'Attribution', desc: 'You must give appropriate credit to The Not Really Boring Company (notreallyboring.com), provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests The Not Really Boring Company endorses you or your use.' },
  { label: 'No additional restrictions', desc: 'You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.' },
];

const notices = [
  'The names "The Not Really Boring Company," "BOLT," "SURGE," "GRID," "FUSE," and "The Transformation Bible" are trademarks of The Not Really Boring Company. This license does not grant permission to use these trademarks except as required for reasonable attribution.',
  'This license does not affect any rights you may have under applicable exceptions and limitations to copyright, such as fair use or fair dealing.',
  'No warranties are given. The material is provided "as-is" without any guarantees of accuracy, completeness, or fitness for a particular purpose.',
];

export default function LicensePageClient() {
  return (
    <>
      <WikiNav />
      <div className="flex pt-16">
        <WikiSidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm font-heading text-wiki-text-tertiary mb-8">
                <Link href="/wiki" className="hover:text-wiki-text-secondary transition-colors">Wiki</Link>
                <ChevronRight size={12} />
                <span className="text-wiki-text">License</span>
              </nav>

              {/* Hero */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl border border-wiki-border bg-wiki-surface-2">
                  <Scale size={28} className="text-wiki-text-secondary" />
                </div>
                <div>
                  <h1 className="font-heading font-bold text-2xl md:text-3xl text-wiki-text">
                    Methodology License
                  </h1>
                  <p className="text-sm text-wiki-text-tertiary font-heading">
                    Creative Commons Attribution 4.0 International (CC BY 4.0)
                  </p>
                </div>
              </div>

              <p className="text-base text-wiki-text-secondary leading-[1.8] max-w-2xl mb-4">
                © 2025 The Not Really Boring Company (notreallyboring.com). All rights reserved.
              </p>
            </motion.div>

            <div className="mt-12 border-t border-wiki-border pt-12 flex flex-col gap-12">
              {/* Licensed Works */}
              <motion.section
                id="licensed-works"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="scroll-mt-24"
              >
                <h2 className="font-heading font-bold text-xl text-wiki-text mb-4">Licensed Works</h2>
                <p className="text-sm text-wiki-text-secondary leading-relaxed mb-4">
                  This license applies to the following proprietary methodologies, frameworks, and associated documentation — including all associated concepts, frameworks, processes, templates, toolkits, playbooks, and documentation.
                </p>
                <div className="space-y-2">
                  {licensedWorks.map((work) => (
                    <div
                      key={work.name}
                      className="bg-wiki-surface rounded-lg border border-wiki-border-subtle p-4 flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-signal-red mt-2 shrink-0" />
                      <div>
                        <span className="font-heading font-bold text-sm text-wiki-text">{work.name}</span>
                        <span className="text-sm text-wiki-text-tertiary ml-2">— {work.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* License Terms */}
              <motion.section
                id="license-terms"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="scroll-mt-24"
              >
                <h2 className="font-heading font-bold text-xl text-wiki-text mb-4">License Terms</h2>
                <p className="text-sm text-wiki-text-secondary leading-relaxed mb-6">
                  This work is licensed under the <strong className="text-wiki-text">Creative Commons Attribution 4.0 International License</strong> (CC BY 4.0).
                </p>

                <div className="mb-6">
                  <h3 className="text-xs font-heading font-bold text-wiki-text uppercase tracking-wider mb-3">You are free to</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {permissions.map((perm) => (
                      <div
                        key={perm.label}
                        className="bg-wiki-surface rounded-lg border border-wiki-border-subtle p-4"
                      >
                        <div className="font-heading font-bold text-sm text-wiki-accent-green mb-1">{perm.label}</div>
                        <p className="text-xs text-wiki-text-secondary leading-relaxed">{perm.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-heading font-bold text-wiki-text uppercase tracking-wider mb-3">Under the following terms</h3>
                  <div className="space-y-3">
                    {conditions.map((cond) => (
                      <div
                        key={cond.label}
                        className="bg-wiki-surface rounded-lg border border-wiki-border-subtle p-4"
                      >
                        <div className="font-heading font-bold text-sm text-wiki-accent-amber mb-1">{cond.label}</div>
                        <p className="text-xs text-wiki-text-secondary leading-relaxed">{cond.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Required Attribution */}
              <motion.section
                id="attribution"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="scroll-mt-24"
              >
                <h2 className="font-heading font-bold text-xl text-wiki-text mb-4">Required Attribution</h2>
                <p className="text-sm text-wiki-text-secondary leading-relaxed mb-4">
                  When using, referencing, or adapting any of the above methodologies, please include the following attribution:
                </p>
                <div className="bg-wiki-surface rounded-xl border border-wiki-border-subtle p-5 mb-4">
                  <p className="text-sm text-wiki-text-secondary leading-relaxed italic border-l-2 border-wiki-accent-blue pl-4">
                    Based on work by <strong className="text-wiki-text">The Not Really Boring Company</strong> (notreallyboring.com), licensed under{' '}
                    <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-wiki-accent-blue hover:underline">
                      CC BY 4.0
                    </a>.
                  </p>
                </div>
                <p className="text-sm text-wiki-text-secondary leading-relaxed mb-4">
                  For derivative works or adaptations, please also include:
                </p>
                <div className="bg-wiki-surface rounded-xl border border-wiki-border-subtle p-5">
                  <p className="text-sm text-wiki-text-secondary leading-relaxed italic border-l-2 border-wiki-accent-purple pl-4">
                    Adapted from [METHOD NAME] by <strong className="text-wiki-text">The Not Really Boring Company</strong> (notreallyboring.com), licensed under{' '}
                    <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-wiki-accent-blue hover:underline">
                      CC BY 4.0
                    </a>. This adaptation is not endorsed by or affiliated with The Not Really Boring Company.
                  </p>
                </div>
              </motion.section>

              {/* Notices */}
              <motion.section
                id="notices"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="scroll-mt-24"
              >
                <h2 className="font-heading font-bold text-xl text-wiki-text mb-4">Notices</h2>
                <div className="space-y-3">
                  {notices.map((notice, i) => (
                    <div
                      key={i}
                      className="bg-wiki-surface rounded-lg border border-wiki-border-subtle p-4 flex items-start gap-3"
                    >
                      <span className="font-mono text-xs font-bold text-wiki-text-tertiary mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm text-wiki-text-secondary leading-relaxed">{notice}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Full Legal Text */}
              <motion.section
                id="full-text"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="scroll-mt-24"
              >
                <h2 className="font-heading font-bold text-xl text-wiki-text mb-4">Full Legal Text</h2>
                <div className="bg-wiki-surface rounded-xl border border-wiki-border-subtle p-6">
                  <p className="text-sm text-wiki-text-secondary leading-relaxed mb-4">
                    The full legal text of the Creative Commons Attribution 4.0 International License is available at:
                  </p>
                  <a
                    href="https://creativecommons.org/licenses/by/4.0/legalcode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-heading font-medium text-wiki-accent-blue hover:underline"
                  >
                    creativecommons.org/licenses/by/4.0/legalcode
                    <ExternalLink size={12} />
                  </a>
                </div>

                <p className="text-sm text-wiki-text-tertiary leading-relaxed mt-6 italic">
                  For questions about licensing, commercial partnerships, or implementation support, contact The Not Really Boring Company at{' '}
                  <Link href="/" className="text-wiki-accent-blue hover:underline">notreallyboring.com</Link>.
                </p>
              </motion.section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
