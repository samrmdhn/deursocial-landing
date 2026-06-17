import NavBar from '@/components/NavBar';
import Hero from '@/components/sections/Hero';
import AppShowcase from '@/components/sections/AppShowcase';
import WhyAndFeatures from '@/components/sections/WhyAndFeatures';
import FAQ from '@/components/sections/FAQ';
import DownloadCTA from '@/components/sections/DownloadCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Archivo, sans-serif', color: '#F4F2EC', background: '#0B0B0B', width: '100%', overflowX: 'hidden' }}>
      <NavBar />
      <main>
        <Hero />
        <AppShowcase />
        <WhyAndFeatures />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
