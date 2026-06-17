'use client';

import { useRef } from 'react';

const STATEMENTS = [
  {
    num: '01',
    title: 'Concerts hit harder with people who care as much as you do.',
    desc: 'Find people who love the same artists, plan the night together, and share the adrenaline.',
  },
  {
    num: '02',
    title: 'Plan the night together, split the ride, and find each other in the crowd.',
    desc: 'Coordinate meetup spots, carpool, and stay connected at the venue — nobody gets left behind.',
  },
  {
    num: '03',
    title: 'And every show you survive together becomes a story you keep.',
    desc: 'Each check-in drops a badge. Your passport grows. The memories stay forever.',
  },
  {
    num: '04',
    title: 'No more scrolling alone — be part of the scene.',
    desc: 'Groups, posts, events, and a live feed that actually matters to people who show up.',
  },
  {
    num: '05',
    title: 'Built for people who live for live music.',
    desc: 'Not another generic social app. This is made by concert-goers, for concert-goers.',
  },
];



export default function WhyDeursocial() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section style={{ background: '#0B0B0B', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(56px, 7vw, 100px) clamp(20px, 5vw, 56px) 0',
          width: '100%',
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: 'clamp(32px, 4vw, 56px)' }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase' as const,
              color: 'rgba(244,242,236,0.5)',
            }}
          >
            Why deursocial
          </span>
          <h2
            style={{
              margin: '16px 0 18px',
              fontWeight: 900,
              fontSize: 'clamp(36px, 6vw, 80px)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
            }}
          >
            Built for people
            <br />
            who live for live.
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              fontWeight: 500,
              lineHeight: 1.45,
              maxWidth: '44ch',
              color: 'rgba(244,242,236,0.6)',
            }}
          >
            Here&apos;s why concert-goers switch to deursocial. Scroll to see what makes us different.
          </p>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: 'clamp(16px, 2vw, 28px)',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          paddingLeft: 'clamp(20px, 5vw, 56px)',
          paddingRight: 'clamp(20px, 5vw, 56px)',
          paddingBottom: 'clamp(40px, 5vw, 64px)',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className="hide-scrollbar"
      >
        {STATEMENTS.map((stmt, i) => (
          <div
            key={i}
            style={{
              flex: '0 0 clamp(320px, 38vw, 460px)',
              scrollSnapAlign: 'start',
              background: '#0F0F12',
              border: '1px solid rgba(244,242,236,0.1)',
              borderRadius: 22,
              padding: 'clamp(24px, 3vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 24,
              minHeight: 340,
            }}
          >
            <div>
              <div
                style={{
                  fontWeight: 900,
                  fontSize: 'clamp(48px, 7vw, 88px)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                  fontVariantNumeric: 'tabular-nums',
                  color: 'rgba(244,242,236,0.15)',
                  marginBottom: 20,
                }}
              >
                {stmt.num}
              </div>
              <h3
                style={{
                  margin: 0,
                  fontWeight: 800,
                  fontSize: 'clamp(20px, 2.4vw, 30px)',
                  lineHeight: 1.12,
                  letterSpacing: '-0.02em',
                  maxWidth: '20ch',
                }}
              >
                {stmt.title}
              </h3>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                lineHeight: 1.55,
                color: 'rgba(244,242,236,0.5)',
              }}
            >
              {stmt.desc}
            </p>
          </div>
        ))}

        {/* Final card with montage previews */}
        <div
          style={{
            flex: '0 0 clamp(320px, 38vw, 460px)',
            scrollSnapAlign: 'start',
            background: 'linear-gradient(135deg, rgba(124,92,252,0.12) 0%, rgba(59,130,246,0.08) 100%)',
            border: '1px solid rgba(124,92,252,0.2)',
            borderRadius: 22,
            padding: 'clamp(24px, 3vw, 36px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            minHeight: 340,
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase' as const,
              color: 'rgba(244,242,236,0.5)',
            }}
          >
            All in one app
          </span>
          <h3
            style={{
              margin: 0,
              fontWeight: 900,
              fontSize: 'clamp(22px, 3vw, 36px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Groups, posts, events &amp; a passport.
          </h3>
          <a
            href="#features"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 24px',
              border: '1.5px solid #F4F2EC',
              borderRadius: 999,
              fontSize: 13,
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
            See features ↓
          </a>
        </div>
      </div>

      {/* Scroll indicator bar */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 56px) clamp(40px, 5vw, 64px)',
        }}
      >
        <div style={{ display: 'flex', gap: 6 }}>
          {[...Array(STATEMENTS.length + 1)].map((_, i) => (
            <span
              key={i}
              style={{
                height: 3,
                flex: 1,
                borderRadius: 99,
                background: 'rgba(244,242,236,0.15)',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
              onClick={() => {
                if (scrollRef.current) {
                  const cards = scrollRef.current.children;
                  if (cards[i]) {
                    (cards[i] as HTMLElement).scrollIntoView({
                      behavior: 'smooth',
                      block: 'nearest',
                      inline: 'start',
                    });
                  }
                }
              }}
            />
          ))}
        </div>
      </div>


      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
