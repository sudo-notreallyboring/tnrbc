'use client';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, Compass, Users, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Method } from '../data';
import { methods } from '../data';
import { methodIcons } from '../icons';
import PhaseTimeline from './PhaseTimeline';

export const methodSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'when-to-use', label: 'When to Use' },
  { id: 'key-principles', label: 'Key Principles' },
  { id: 'phases', label: 'Phases' },
  { id: 'expected-outcomes', label: 'Expected Outcomes' },
  { id: 'ideal-for', label: 'Ideal For' },
  { id: 'connected-methods', label: 'Connected Methods' },
];

function Section({
  id,
  title,
  icon: Icon,
  children,
  delay = 0,
}: {
  id: string;
  title: string;
  icon: typeof CheckCircle2;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="scroll-mt-24 pt-10 first:pt-0 border-t border-wiki-border-subtle first:border-t-0 md:border-t-0 md:pt-0"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon size={18} className="text-wiki-text-tertiary" />
        <h2 className="font-heading font-bold text-xl text-wiki-text">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function MethodNav({ method }: { method: Method }) {
  const currentIndex = methods.findIndex((m) => m.id === method.id);
  const prev = currentIndex > 0 ? methods[currentIndex - 1] : null;
  const next = currentIndex < methods.length - 1 ? methods[currentIndex + 1] : null;

  return (
    <div className="mt-16 pt-8 border-t border-wiki-border">
      <div className={cn('grid gap-4', prev && next ? 'grid-cols-2' : 'grid-cols-1')}>
        {prev && (
          <Link
            href={`/wiki/${prev.id}`}
            className="group flex items-center gap-4 p-5 rounded-xl border border-wiki-border-subtle bg-wiki-surface hover:border-wiki-border-hover hover:bg-wiki-surface-2 transition-all"
          >
            <ArrowLeft size={16} className="text-wiki-text-tertiary group-hover:text-wiki-text-secondary transition-colors shrink-0 group-hover:-translate-x-0.5" />
            <div className="min-w-0">
              <div className="text-[11px] font-mono text-wiki-text-tertiary uppercase tracking-wider mb-1">Previous</div>
              <div className="font-heading font-bold text-sm text-wiki-text truncate">{prev.name}</div>
              <div className="text-xs text-wiki-text-tertiary truncate">{prev.fullName}</div>
            </div>
          </Link>
        )}
        {next && (
          <Link
            href={`/wiki/${next.id}`}
            className={cn(
              'group flex items-center gap-4 p-5 rounded-xl border border-wiki-border-subtle bg-wiki-surface hover:border-wiki-border-hover hover:bg-wiki-surface-2 transition-all',
              !prev && 'ml-auto'
            )}
          >
            <div className="min-w-0 flex-1 text-right">
              <div className="text-[11px] font-mono text-wiki-text-tertiary uppercase tracking-wider mb-1">Next</div>
              <div className="font-heading font-bold text-sm text-wiki-text truncate">{next.name}</div>
              <div className="text-xs text-wiki-text-tertiary truncate">{next.fullName}</div>
            </div>
            <ArrowRight size={16} className="text-wiki-text-tertiary group-hover:text-wiki-text-secondary transition-colors shrink-0 group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default function MethodContent({ method }: { method: Method }) {
  return (
    <div>
      <div className="flex flex-col gap-12">
        {/* Overview */}
        <Section id="overview" title="Overview" icon={Compass}>
          <p className="text-sm text-wiki-text-secondary leading-[1.8] max-w-3xl">
            {method.overview}
          </p>
        </Section>

        {/* When to Use */}
        <Section id="when-to-use" title="When to Use" icon={AlertCircle} delay={0.05}>
          <div className="bg-wiki-surface rounded-xl border border-wiki-border-subtle p-5">
            <ul className="space-y-3">
              {method.whenToUse.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-wiki-text-secondary">
                  <div
                    className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-mono font-bold"
                    style={{
                      backgroundColor: `${method.accentColor}15`,
                      color: method.accentColor,
                    }}
                  >
                    {i + 1}
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Key Principles */}
        <Section id="key-principles" title="Key Principles" icon={Lightbulb} delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {method.keyPrinciples.map((principle, i) => (
              <div
                key={i}
                className="bg-wiki-surface rounded-lg border border-wiki-border-subtle p-4 flex items-start gap-3"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: method.accentColor }}
                />
                <span className="text-sm text-wiki-text-secondary leading-relaxed">{principle}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Phases */}
        <Section id="phases" title="Phases" icon={ArrowRight} delay={0.15}>
          <PhaseTimeline
            phases={method.phases}
            accentColor={method.accentColor}
            accentColorClass={method.accentColorClass}
          />
        </Section>

        {/* Outcomes */}
        <Section id="expected-outcomes" title="Expected Outcomes" icon={CheckCircle2} delay={0.2}>
          <div className="bg-wiki-surface rounded-xl border border-wiki-border-subtle p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {method.outcomes.map((outcome, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-wiki-text-secondary">
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 shrink-0"
                    style={{ color: method.accentColor }}
                  />
                  <span className="leading-relaxed">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Ideal For */}
        <Section id="ideal-for" title="Ideal For" icon={Users} delay={0.25}>
          <div className="flex flex-wrap gap-2">
            {method.idealFor.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg text-xs font-heading text-wiki-text-secondary bg-wiki-surface border border-wiki-border-subtle"
              >
                {item}
              </span>
            ))}
          </div>
        </Section>

        {/* Connections */}
        <Section id="connected-methods" title="Connected Methods" icon={ArrowRight} delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {method.connectionTo.map((conn) => {
              const targetMethod = methods.find((m) => m.id === conn.method);
              const target = targetMethod
                ? { color: targetMethod.accentColor, name: targetMethod.name }
                : { color: '#5C5C5F', name: conn.method.toUpperCase() };
              const TargetIcon = methodIcons[conn.method];
              return (
                <Link
                  key={conn.method}
                  href={`/wiki/${conn.method}`}
                  className="group bg-wiki-surface rounded-lg border border-wiki-border-subtle p-4 hover:border-wiki-border-hover hover:bg-wiki-surface-2 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {TargetIcon && (
                      <TargetIcon size={14} style={{ color: target.color }} className="shrink-0" />
                    )}
                    <span
                      className="font-mono text-xs font-bold group-hover:underline"
                      style={{ color: target.color }}
                    >
                      {target.name}
                    </span>
                    <ArrowRight size={10} className="text-wiki-text-tertiary group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-xs text-wiki-text-tertiary leading-relaxed">
                    {conn.relationship}
                  </p>
                </Link>
              );
            })}
          </div>
        </Section>
      </div>

      {/* Previous / Next navigation */}
      <MethodNav method={method} />
    </div>
  );
}
