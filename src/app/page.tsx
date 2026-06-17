import NavBar from '@/components/NavBar';
import Hero from '@/components/sections/Hero';
import AppShowcase from '@/components/sections/AppShowcase';
import WhyAndFeatures from '@/components/sections/WhyAndFeatures';
import FAQ from '@/components/sections/FAQ';
import DownloadCTA from '@/components/sections/DownloadCTA';
import Footer from '@/components/sections/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://deursocial.com/#website',
      url: 'https://deursocial.com',
      name: 'deursocial',
      description:
        'The social app for live music fans — find your concert crew, check in at the venue, and collect a passport stamp from every show.',
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://deursocial.com/?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://deursocial.com/#organization',
      name: 'deursocial',
      url: 'https://deursocial.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://deursocial.com/deursocial-logo.png',
        width: 920,
        height: 249,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+62-898-8887-229',
        email: 'mindeursocial@gmail.com',
        contactType: 'customer support',
        areaServed: 'ID',
        availableLanguage: ['Indonesian', 'English'],
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jakarta',
        addressCountry: 'ID',
      },
      sameAs: [],
    },
    {
      '@type': 'MobileApplication',
      '@id': 'https://deursocial.com/#app',
      name: 'deursocial',
      description:
        'Never go to a festival alone again. Find your concert crew, check in at the venue, and collect a passport badge from every live music show you attend.',
      applicationCategory: 'SocialNetworkingApplication',
      operatingSystem: ['iOS', 'Android'],
      installUrl: 'https://play.google.com/store/apps/details?id=com.deursocial.app',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      author: { '@id': 'https://deursocial.com/#organization' },
      featureList: [
        'Find concert friends and crew',
        'Festival group coordination',
        'Venue check-in with GPS verification',
        'Concert passport badge collection',
        'Live music event discovery',
        'Community posts and moments',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://deursocial.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is deursocial?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'deursocial is a social app built for live music fans. It lets you find concert friends, coordinate festival groups, check in at venues, and collect a passport stamp from every show you attend.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is deursocial free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, deursocial is free to download and use on both iOS and Android.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the concert check-in work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Scan the QR code at the venue entrance. deursocial verifies your GPS location to confirm you are actually at the event, then logs your attendance and drops a unique passport stamp in your collection.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a festival passport in deursocial?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A festival passport is your personal collection of check-in badges — one for every show you attend. Each badge is exclusive to the event and date, so your passport becomes a permanent record of your live music history.',
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
