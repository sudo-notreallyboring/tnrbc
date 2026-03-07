import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Methodology Wiki — Not Really Boring',
  description:
    'Explore the Not Really Boring methodology system: BOLT, SURGE, GRID, and FUSE. Four precision-engineered methods for business transformation, scaling, operating model design, and M&A integration.',
  openGraph: {
    title: 'Methodology Wiki — Not Really Boring',
    description:
      'The complete guide to BOLT, SURGE, GRID, and FUSE — four methods that deliver transformation, not recommendations.',
    url: 'https://notreallyboring.com/wiki',
    siteName: 'Not Really Boring',
    type: 'website',
  },
};

export default function WikiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wiki-root min-h-screen bg-wiki-bg text-wiki-text">
      {children}
    </div>
  );
}
