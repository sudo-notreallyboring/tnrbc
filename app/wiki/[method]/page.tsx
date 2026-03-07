import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { methods } from '../data';
import { methodMeta } from '../metadata';
import MethodPageClient from './MethodPageClient';

type Props = {
  params: Promise<{ method: string }>;
};

const validIds = methods.map((m) => m.id);

export async function generateStaticParams() {
  return validIds.map((method) => ({ method }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { method: methodId } = await params;
  const meta = methodMeta[methodId];
  if (!meta) return {};
  return {
    title: `${meta.name} — ${meta.fullName} | Not Really Boring Wiki`,
    description: meta.tagline + ' ' + meta.overview.slice(0, 140) + '...',
    openGraph: {
      title: `${meta.name} — ${meta.fullName}`,
      description: meta.tagline,
      url: `https://notreallyboring.com/wiki/${methodId}`,
      siteName: 'Not Really Boring',
      type: 'article',
    },
  };
}

export default async function MethodPage({ params }: Props) {
  const { method: methodId } = await params;
  if (!validIds.includes(methodId)) notFound();
  return <MethodPageClient methodId={methodId} />;
}
