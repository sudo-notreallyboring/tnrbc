'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Zap, Activity, LayoutGrid, Link2, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { philosophyPrinciples } from '../data';
import { methodSections } from './MethodContent';

const sidebarItems = [
  {
    section: 'Getting Started',
    items: [
      { href: '/wiki', label: 'Overview', icon: BookOpen },
    ],
  },
  {
    section: 'Methods',
    items: [
      { href: '/wiki/bolt', label: 'BOLT', subtitle: 'Business Optimization & Lightning Transformation', icon: Zap, color: 'text-wiki-accent-amber', dotColor: 'bg-wiki-accent-amber' },
      { href: '/wiki/surge', label: 'SURGE', subtitle: 'Strategic Unified Rapid Growth Execution', icon: Activity, color: 'text-wiki-accent-green', dotColor: 'bg-wiki-accent-green' },
      { href: '/wiki/grid', label: 'GRID', subtitle: 'Govern, Reveal, Invent, Deploy', icon: LayoutGrid, color: 'text-wiki-accent-purple', dotColor: 'bg-wiki-accent-purple' },
      { href: '/wiki/fuse', label: 'FUSE', subtitle: 'Fast Unified System Enablement', icon: Link2, color: 'text-wiki-accent-blue', dotColor: 'bg-wiki-accent-blue' },
    ],
  },
];

function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Set<string>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.add(id);
          } else {
            visibleSections.delete(id);
          }
          // Pick the first visible section in document order
          const first = sectionIds.find((s) => visibleSections.has(s));
          setActiveId(first ?? null);
        },
        { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return activeId;
}

export default function WikiSidebar() {
  const pathname = usePathname();
  const isMethodPage = pathname.startsWith('/wiki/') && pathname !== '/wiki';
  const activeSectionId = useActiveSection(
    isMethodPage ? methodSections.map((s) => s.id) : []
  );

  return (
    <aside className="hidden lg:block w-[260px] shrink-0 border-r border-wiki-border">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-6 px-4">
        {sidebarItems.map((group) => (
          <div key={group.section} className="mb-6">
            <div className="text-[11px] font-heading font-bold uppercase tracking-widest text-wiki-text-tertiary px-3 mb-2">
              {group.section}
            </div>
            <div className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-heading transition-all duration-150',
                        isActive
                          ? 'bg-wiki-surface-2 text-wiki-text'
                          : 'text-wiki-text-secondary hover:text-wiki-text hover:bg-wiki-surface'
                      )}
                    >
                      {'dotColor' in item ? (
                        <div className={cn('w-2 h-2 rounded-full shrink-0', item.dotColor)} />
                      ) : (
                        <Icon size={14} className="shrink-0 text-wiki-text-tertiary" />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium">{item.label}</div>
                        {'subtitle' in item && (
                          <div className="text-[11px] text-wiki-text-tertiary truncate mt-0.5">
                            {item.subtitle}
                          </div>
                        )}
                      </div>
                      {isActive && <ChevronRight size={12} className="text-wiki-text-tertiary" />}
                    </Link>

                    {/* In-page section nav for active method page */}
                    {isActive && isMethodPage && (
                      <div className="ml-5 mt-1 mb-2 pl-3 border-l border-wiki-border-subtle">
                        {methodSections.map((section) => (
                          <a
                            key={section.id}
                            href={`#${section.id}`}
                            className={cn(
                              'block py-1 px-2 text-xs font-heading rounded transition-colors',
                              activeSectionId === section.id
                                ? 'text-wiki-text bg-wiki-surface'
                                : 'text-wiki-text-tertiary hover:text-wiki-text-secondary'
                            )}
                          >
                            {section.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Philosophy section — links to overview page */}
        <div className="border-t border-wiki-border pt-6 mt-6">
          <div className="text-[11px] font-heading font-bold uppercase tracking-widest text-wiki-text-tertiary px-3 mb-2">
            Philosophy
          </div>
          <div className="px-3 flex flex-col gap-2">
            {philosophyPrinciples.map((principle) => (
              <Link
                key={principle.name}
                href="/wiki#philosophy"
                className="text-xs text-wiki-text-tertiary font-mono hover:text-wiki-text-secondary transition-colors"
              >
                {principle.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
