import type { Metadata } from 'next';
import { Space_Grotesk, DM_Serif_Display, Space_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-drama',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Not Really Boring — Transformation, Delivered.',
  description: 'Management consulting that delivers 20–35% efficiency gains in 90 days. Proven methods, senior teams, guaranteed ROI by week 8.',
  keywords: 'business transformation, management consulting, operational excellence, digital transformation, target operating model, execution consulting, ROI consulting, Barcelona consultancy',
  openGraph: {
    title: 'Not Really Boring — Transformation, Delivered.',
    description: 'The management consultancy that swapped PowerPoint therapy for measurable momentum.',
    url: 'https://notreallyboring.com',
    siteName: 'Not Really Boring',
    type: 'website',
    images: [
      {
        url: 'https://notreallyboring.com/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Not Really Boring — Transformation, Delivered.',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${dmSerifDisplay.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
