'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, Menu, X, BookOpen, Zap, Activity, LayoutGrid, Link2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { href: '/wiki', label: 'Overview', icon: BookOpen },
  { href: '/wiki/bolt', label: 'BOLT', icon: Zap, color: 'text-wiki-accent-amber' },
  { href: '/wiki/surge', label: 'SURGE', icon: Activity, color: 'text-wiki-accent-green' },
  { href: '/wiki/grid', label: 'GRID', icon: LayoutGrid, color: 'text-wiki-accent-purple' },
  { href: '/wiki/fuse', label: 'FUSE', icon: Link2, color: 'text-wiki-accent-blue' },
];

export default function WikiNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-wiki-border bg-wiki-bg/80 backdrop-blur-xl">
        <div className="h-full max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Left: Back to main site + brand */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-wiki-text-secondary hover:text-wiki-text transition-colors text-sm font-heading"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">notreallyboring.com</span>
            </Link>
            <div className="w-px h-5 bg-wiki-border hidden sm:block" />
            <Link href="/wiki" className="font-heading font-bold text-sm tracking-tight text-wiki-text">
              Methodology Wiki
            </Link>
          </div>

          {/* Center: Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-heading transition-colors',
                    isActive
                      ? 'text-wiki-text'
                      : 'text-wiki-text-secondary hover:text-wiki-text hover:bg-wiki-surface'
                  )}
                >
                  <Icon size={14} className={item.color} />
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="wiki-nav-indicator"
                      className="absolute inset-0 rounded-lg bg-wiki-surface-2 -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right: CTA */}
          <div className="hidden md:block">
            <a
              href="https://booking.akiflow.com/not-really-boring-70ed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-heading font-medium px-4 py-1.5 rounded-lg bg-wiki-surface-2 text-wiki-text-secondary hover:text-wiki-text border border-wiki-border hover:border-wiki-border-hover transition-colors"
            >
              Book a Briefing
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-wiki-text-secondary hover:text-wiki-text"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-wiki-bg/95 backdrop-blur-xl flex flex-col"
          >
            <div className="h-16 px-6 flex items-center justify-between border-b border-wiki-border">
              <span className="font-heading font-bold text-sm text-wiki-text">Wiki</span>
              <button
                className="p-2 text-wiki-text-secondary hover:text-wiki-text"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 flex flex-col gap-2 p-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-xl text-lg font-heading transition-colors',
                      isActive
                        ? 'text-wiki-text bg-wiki-surface-2'
                        : 'text-wiki-text-secondary hover:text-wiki-text hover:bg-wiki-surface'
                    )}
                  >
                    <Icon size={20} className={item.color} />
                    {item.label}
                  </Link>
                );
              })}
              <div className="border-t border-wiki-border mt-4 pt-4">
                <a
                  href="https://booking.akiflow.com/not-really-boring-70ed"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-heading font-medium bg-wiki-surface-2 text-wiki-text-secondary hover:text-wiki-text border border-wiki-border hover:border-wiki-border-hover transition-colors"
                >
                  Book a Briefing
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
