'use client';
import { motion } from 'motion/react';
import { Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { Method } from '../data';
import { methodIcons } from '../icons';

export default function MethodHero({ method }: { method: Method }) {
  const Icon = methodIcons[method.id];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.07] blur-[100px] rounded-full"
        style={{ background: method.accentColor }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10"
      >
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm font-heading text-wiki-text-tertiary mb-8">
          <Link href="/wiki" className="hover:text-wiki-text-secondary transition-colors">Wiki</Link>
          <ChevronRight size={12} />
          <Link href="/wiki" className="hover:text-wiki-text-secondary transition-colors">Methods</Link>
          <ChevronRight size={12} />
          <span className={method.accentColorClass}>{method.name}</span>
        </nav>

        {/* Icon + badge */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className="p-3 rounded-xl border"
            style={{
              backgroundColor: `${method.accentColor}10`,
              borderColor: `${method.accentColor}30`,
            }}
          >
            <Icon size={28} style={{ color: method.accentColor }} />
          </div>
          <div className="flex items-center gap-3">
            <span
              className="px-3 py-1 rounded-full text-xs font-mono font-bold border"
              style={{
                color: method.accentColor,
                borderColor: `${method.accentColor}30`,
                backgroundColor: `${method.accentColor}08`,
              }}
            >
              {method.name}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-wiki-text-tertiary font-mono">
              <Clock size={12} />
              {method.duration}
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-wiki-text leading-[1.1] mb-4 max-w-2xl">
          {method.fullName}
        </h1>

        {/* Tagline */}
        <p className="text-lg text-wiki-text-secondary font-heading leading-relaxed max-w-xl">
          {method.tagline}
        </p>

        {/* Acronym breakdown */}
        <div className="flex flex-wrap gap-2 mt-6">
          {method.acronymBreakdown.map((word, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span
                className="font-mono font-bold text-sm"
                style={{ color: method.accentColor }}
              >
                {word.charAt(0)}
              </span>
              <span className="text-sm text-wiki-text-secondary font-heading">{word}</span>
              {i < method.acronymBreakdown.length - 1 && (
                <span className="text-wiki-text-tertiary mx-1">/</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
