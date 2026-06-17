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
    <section style={{ background: '#0B0B0B' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(28px, 4vw, 52px) clamp(20px, 5vw, 56px) 0',
          width: '100%',
        }}
      >
        {/* headline */}
        <div style={{ padding: 'clamp(40px, 6vw, 84px) 0 clamp(34px, 4vw, 56px)' }}>
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
              {WORDS.map((w) => (
                <span key={w} style={{ display: 'block', height: '1.22em', lineHeight: 1.22, whiteSpace: 'nowrap' }}>
                  {w}
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
              marginTop: 'clamp(30px, 4vw, 52px)',
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
            padding: 'clamp(18px, 2.5vw, 28px) 0',
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
          background: '#0B0B0B',
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
