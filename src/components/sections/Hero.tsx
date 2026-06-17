'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const WORDS = ['Music Community', 'Festival Friends', 'Concert Passports', 'Badge Collection'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const wordShift = `-${(wordIndex * 100) / WORDS.length}%`;

  return (
    <section style={{ background: 'transparent', minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        .wg-0,.wg-1,.wg-2,.wg-3 { -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }
        .wg-0 { background-image: linear-gradient(90deg, #fff 0%, #fff 25%, #0ea5e9 60%, #0369a1 100%); }
        .wg-1 { background-image: linear-gradient(90deg, #fff 0%, #fff 25%, #ff6b35 60%, #e02020 100%); }
        .wg-2 { background-image: linear-gradient(90deg, #fff 0%, #fff 25%, #22c55e 60%, #14532d 100%); }
        .wg-3 { background-image: linear-gradient(90deg, #fff 0%, #fff 25%, #a855f7 60%, #6d28d9 100%); }
      `}</style>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 56px)',
          width: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* headline */}
        <div style={{ padding: 'clamp(16px, 3vh, 40px) 0 clamp(14px, 2.5vh, 32px)' }}>
          <p
            style={{
              margin: '0 0 6px',
              fontSize: 'clamp(22px, 3.2vw, 44px)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: 'rgba(244,242,236,0.5)',
            }}
          >
            A Place for
          </p>
          <div
            style={{
              height: '1.22em',
              overflow: 'hidden',
              fontWeight: 900,
              fontSize: 'clamp(44px, 9vw, 120px)',
              lineHeight: 1.22,
              letterSpacing: '-0.05em',
              clipPath: 'inset(3px 0 0 0)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                transform: `translateY(${wordShift})`,
                transition: 'transform 0.7s cubic-bezier(0.7, 0, 0.2, 1)',
                willChange: 'transform',
              }}
            >
              {WORDS.map((w, i) => (
                <span key={w} style={{ display: 'block', height: '1.22em', lineHeight: 1.22, whiteSpace: 'nowrap' }}>
                  <span className={`wg-${i}`}>
                    {w}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 28,
              flexWrap: 'wrap' as const,
              marginTop: 'clamp(20px, 2.5vh, 36px)',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 'clamp(17px, 1.6vw, 21px)',
                fontWeight: 500,
                lineHeight: 1.4,
                maxWidth: '38ch',
                color: 'rgba(244,242,236,0.85)',
              }}
            >
              Build your concert crew, check in at the venue, and collect a badge from every show
              you go to — never go alone again.
            </p>
            <a
              href="#get"
              style={{
                flexShrink: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '16px 30px',
                border: '1.5px solid #F4F2EC',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 700,
                color: '#F4F2EC',
                background: 'transparent',
                textDecoration: 'none',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#0B0B0B';
                e.currentTarget.style.background = '#F4F2EC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#F4F2EC';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Get the app →
            </a>
          </div>
        </div>

        {/* store buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap' as const,
            padding: 'clamp(14px, 2vh, 22px) 0',
            borderTop: '1px solid rgba(244,242,236,0.12)',
          }}
        >
          <a href="#" style={{ display: 'block', transition: 'transform 0.15s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
            <Image
              src="/googleplay.svg"
              alt="Get it on Google Play"
              width={180}
              height={58}
              style={{ height: 'clamp(48px, 5vw, 58px)', width: 'auto', display: 'block', borderRadius: 11 }}
            />
          </a>
          <a href="#" style={{ display: 'block', transition: 'transform 0.15s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
            <Image
              src="/appstore.svg"
              alt="Download on the App Store"
              width={180}
              height={58}
              style={{ height: 'clamp(48px, 5vw, 58px)', width: 'auto', display: 'block', borderRadius: 11 }}
            />
          </a>
        </div>
      </div>

      {/* marquee */}
      <div
        style={{
          borderTop: '1px solid rgba(244,242,236,0.2)',
          borderBottom: '1px solid rgba(244,242,236,0.2)',
          overflow: 'hidden',
          padding: '16px 0',
          background: 'rgba(0,0,0,0.35)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'ds-marquee 32s linear infinite',
            willChange: 'transform',
          }}
        >
          {[0, 1].map((i) => (
            <span
              key={i}
              style={{
                fontSize: 'clamp(14px, 1.4vw, 17px)',
                fontWeight: 700,
                whiteSpace: 'nowrap' as const,
              }}
            >
              Concerts&nbsp;&nbsp;✦&nbsp;&nbsp;Festivals&nbsp;&nbsp;✦&nbsp;&nbsp;Groups&nbsp;&nbsp;✦&nbsp;&nbsp;Check-ins&nbsp;&nbsp;✦&nbsp;&nbsp;Badges&nbsp;&nbsp;✦&nbsp;&nbsp;Live
              shows&nbsp;&nbsp;✦&nbsp;&nbsp;Your crew&nbsp;&nbsp;✦&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
