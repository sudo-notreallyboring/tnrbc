'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Clock, Target, BarChart3, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Phase } from '../data';

export default function PhaseTimeline({
  phases,
  accentColor,
  accentColorClass,
}: {
  phases: Phase[];
  accentColor: string;
  accentColorClass: string;
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-px bg-wiki-border" />

      <div className="flex flex-col gap-2">
        {phases.map((phase, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <div
                className={cn(
                  'absolute left-[12px] top-[18px] w-[15px] h-[15px] rounded-full border-2 z-10 transition-colors duration-200',
                  !isExpanded && 'border-wiki-border bg-wiki-surface'
                )}
                style={isExpanded ? { borderColor: accentColor, backgroundColor: accentColor } : undefined}
              />

              {/* Phase card */}
              <div className="ml-12">
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  aria-expanded={isExpanded}
                  aria-controls={`phase-content-${i}`}
                  className={cn(
                    'w-full text-left px-5 py-4 rounded-xl border transition-all duration-200',
                    isExpanded
                      ? 'bg-wiki-surface-2 border-wiki-border'
                      : 'bg-transparent border-transparent hover:bg-wiki-surface hover:border-wiki-border-subtle'
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className={cn('font-mono text-xs font-bold', accentColorClass)}>
                          Phase {i + 1}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-wiki-text-tertiary font-mono">
                          <Clock size={10} />
                          {phase.duration}
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-wiki-text text-base">
                        {phase.name}
                      </h4>
                    </div>
                    <ChevronDown
                      size={16}
                      className={cn(
                        'text-wiki-text-tertiary transition-transform duration-200 shrink-0',
                        isExpanded && 'rotate-180'
                      )}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`phase-content-${i}`}
                      role="region"
                      aria-label={`${phase.name} details`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-2">
                        <p className="text-sm text-wiki-text-secondary leading-relaxed mb-6">
                          {phase.summary}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* Activities */}
                          <div className="bg-wiki-surface rounded-lg border border-wiki-border-subtle p-4">
                            <div className="flex items-center gap-2 mb-3">
                              <Target size={13} style={{ color: accentColor }} />
                              <span className="text-xs font-heading font-bold text-wiki-text uppercase tracking-wider">
                                Activities
                              </span>
                            </div>
                            <ul className="space-y-1.5">
                              {phase.activities.map((activity, j) => (
                                <li key={j} className="text-xs text-wiki-text-secondary leading-relaxed flex gap-2">
                                  <span className="text-wiki-text-tertiary mt-0.5 shrink-0">-</span>
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Deliverables */}
                          <div className="bg-wiki-surface rounded-lg border border-wiki-border-subtle p-4">
                            <div className="flex items-center gap-2 mb-3">
                              <FileText size={13} style={{ color: accentColor }} />
                              <span className="text-xs font-heading font-bold text-wiki-text uppercase tracking-wider">
                                Deliverables
                              </span>
                            </div>
                            <ul className="space-y-1.5">
                              {phase.deliverables.map((del, j) => (
                                <li key={j} className="text-xs text-wiki-text-secondary leading-relaxed flex gap-2">
                                  <span className="text-wiki-text-tertiary mt-0.5 shrink-0">-</span>
                                  {del}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Key Metrics */}
                          <div className="bg-wiki-surface rounded-lg border border-wiki-border-subtle p-4">
                            <div className="flex items-center gap-2 mb-3">
                              <BarChart3 size={13} style={{ color: accentColor }} />
                              <span className="text-xs font-heading font-bold text-wiki-text uppercase tracking-wider">
                                Key Metrics
                              </span>
                            </div>
                            <ul className="space-y-1.5">
                              {phase.metrics.map((metric, j) => (
                                <li key={j} className="text-xs text-wiki-text-secondary leading-relaxed flex gap-2">
                                  <span className="text-wiki-text-tertiary mt-0.5 shrink-0">-</span>
                                  {metric}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
