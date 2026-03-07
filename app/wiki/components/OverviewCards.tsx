'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';
import { methods } from '../data';
import { methodIcons } from '../icons';

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {methods.map((method, i) => {
        const Icon = methodIcons[method.id];
        return (
          <motion.div
            key={method.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link
              href={`/wiki/${method.id}`}
              className="group block h-full rounded-xl border border-wiki-border-subtle bg-wiki-surface p-6 transition-all duration-300 hover:border-wiki-border-hover hover:bg-wiki-surface-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="p-2.5 rounded-xl border"
                  style={{
                    backgroundColor: `${method.accentColor}08`,
                    borderColor: `${method.accentColor}20`,
                  }}
                >
                  <Icon size={22} style={{ color: method.accentColor }} />
                </div>
                <div className="flex items-center gap-1.5 text-wiki-text-tertiary font-mono text-xs">
                  <Clock size={11} />
                  {method.duration}
                </div>
              </div>

              <h3 className="font-heading font-bold text-lg text-wiki-text mb-1.5 group-hover:underline decoration-1 underline-offset-4">
                {method.name}
                <span className="text-wiki-text-secondary font-normal text-sm ml-2">
                  {method.fullName}
                </span>
              </h3>

              <p className="text-sm text-wiki-text-tertiary leading-relaxed mb-4">
                {method.tagline}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {method.phases.map((phase, j) => (
                  <span
                    key={j}
                    className="px-2 py-0.5 rounded text-[10px] font-mono text-wiki-text-tertiary bg-wiki-bg border border-wiki-border-subtle"
                  >
                    {phase.shortName}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-heading" style={{ color: method.accentColor }}>
                Explore method
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
