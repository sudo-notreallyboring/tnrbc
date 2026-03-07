import type { Metadata } from 'next';
import LicensePageClient from './LicensePageClient';

export const metadata: Metadata = {
  title: 'License — Methodology Wiki | Not Really Boring',
  description:
    'The Not Really Boring Company methodology license. All methodologies are licensed under Creative Commons Attribution 4.0 International (CC BY 4.0).',
  openGraph: {
    title: 'License — Methodology Wiki',
    description:
      'The Not Really Boring Company methodology license — CC BY 4.0.',
    url: 'https://notreallyboring.com/wiki/license',
    siteName: 'Not Really Boring',
    type: 'article',
  },
};

export default function LicensePage() {
  return <LicensePageClient />;
}
