'use client';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, ArrowRight, Compass, Users, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Method } from '../data';
import PhaseTimeline from './PhaseTimeline';

function Section({
  title,
  icon: Icon,
  children,
  delay = 0,
}: {
  title: string;
  icon: typeof CheckCircle2;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="scroll-mt-24"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon size={18} className="text-wiki-text-tertiary" />
        <h2 className="font-heading font-bold text-xl text-wiki-text">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

export default function MethodContent({ method }: { method: Method }) {
  return (
    <div className="flex flex-col gap-12">
      {/* Overview */}
      <Section title="Overview" icon={Compass}>
        <p className="text-sm text-wiki-text-secondary leading-[1.8] max-w-3xl">
          {method.overview}
        </p>
      </Section>

      {/* When to Use */}
      <Section title="When to Use" icon={AlertCircle} delay={0.05}>
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
      <Section title="Key Principles" icon={Lightbulb} delay={0.1}>
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
      <Section title="Phases" icon={ArrowRight} delay={0.15}>
        <PhaseTimeline
          phases={method.phases}
          accentColor={method.accentColor}
          accentColorClass={method.accentColorClass}
        />
      </Section>

      {/* Outcomes */}
      <Section title="Expected Outcomes" icon={CheckCircle2} delay={0.2}>
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
      <Section title="Ideal For" icon={Users} delay={0.25}>
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
      <Section title="Connected Methods" icon={ArrowRight} delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {method.connectionTo.map((conn) => {
            const methodColors: Record<string, { color: string; name: string }> = {
              bolt: { color: '#F59E0B', name: 'BOLT' },
              surge: { color: '#22C55E', name: 'SURGE' },
              grid: { color: '#A855F7', name: 'GRID' },
              fuse: { color: '#4C8BF5', name: 'FUSE' },
            };
            const target = methodColors[conn.method];
            return (
              <Link
                key={conn.method}
                href={`/wiki/${conn.method}`}
                className="group bg-wiki-surface rounded-lg border border-wiki-border-subtle p-4 hover:border-wiki-border transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: target.color }}
                  />
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
  );
}
