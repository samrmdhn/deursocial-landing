import NavBar from '@/components/NavBar';
import Hero from '@/components/sections/Hero';
import AppShowcase from '@/components/sections/AppShowcase';
import WhyAndFeatures from '@/components/sections/WhyAndFeatures';
import FAQ from '@/components/sections/FAQ';
import DownloadCTA from '@/components/sections/DownloadCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div style={{ fontFamily: 'NimbusSan, sans-serif', color: '#F4F2EC', background: '#0B0B0B', width: '100%', overflowX: 'hidden' }}>
      {/* Video hero wrapper — video covers NavBar + Hero */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(100%)',
            zIndex: 0,
          }}
        >
          <source src="https://videos.pexels.com/video-files/26744649/11999035_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <NavBar />
          <Hero />
        </div>
      </div>
      <main>
        <AppShowcase />
        <WhyAndFeatures />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
