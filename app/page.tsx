import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientMarquee from './components/ClientMarquee';
import StatsBar from './components/StatsBar';
import Features from './components/Features';
import Methods from './components/Methods';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Evidence from './components/Evidence';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-paper overflow-x-hidden selection:bg-signal-red selection:text-off-white">
      <Navbar />
      <Hero />
      <ClientMarquee />
      <StatsBar />
      <Features />
      <Methods />
      <Philosophy />
      <Protocol />
      <Evidence />
      <FinalCTA />
      <Footer />
    </main>
  );
}
