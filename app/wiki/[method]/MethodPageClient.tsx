'use client';
import { notFound } from 'next/navigation';
import WikiNav from '../components/WikiNav';
import WikiSidebar from '../components/WikiSidebar';
import MethodHero from '../components/MethodHero';
import MethodContent from '../components/MethodContent';
import { methods } from '../data';

export default function MethodPageClient({ methodId }: { methodId: string }) {
  const method = methods.find((m) => m.id === methodId);
  if (!method) notFound();

  return (
    <>
      <WikiNav />
      <div className="flex pt-16">
        <WikiSidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
            <MethodHero method={method} />
            <div className="mt-12 border-t border-wiki-border pt-12">
              <MethodContent method={method} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
