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

/* ── Montage cards ── */
function GroupMCard() {
  return (
    <div style={{ background: '#18181B', borderRadius: 16, border: '1px solid rgba(255,255,255,0.10)', overflow: 'hidden', minWidth: 260 }}>
      <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 11 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>Indie Kids BDG</span>
          <span style={{ background: 'rgba(74,222,128,0.12)', color: '#4ade80', borderRadius: 100, padding: '5px 11px', fontSize: 11, fontWeight: 700 }}>Joined</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18" /><rect x="3" y="4" width="18" height="18" rx="2" /></svg>
          <span style={{ color: '#a78bfa', fontSize: 11, fontWeight: 600 }}>Synchronize Fest</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            Bandung
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></svg>
            11/20
          </span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 26, height: 26, borderRadius: 999, background: '#EC4899', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>D</span>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11, fontWeight: 600 }}>Dimas</div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 9 }}>Creator</div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <span style={{ width: 24, height: 24, borderRadius: 999, background: '#3B82F6', border: '2px solid #18181B', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>A</span>
          <span style={{ width: 24, height: 24, borderRadius: 999, background: '#10B981', border: '2px solid #18181B', marginLeft: -8, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>N</span>
          <span style={{ width: 24, height: 24, borderRadius: 999, background: 'rgba(255,255,255,0.1)', border: '2px solid #18181B', marginLeft: -8, color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>+7</span>
        </div>
      </div>
    </div>
  );
}

function PostMCard() {
  return (
    <div style={{ background: '#0F0F12', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', padding: 13, minWidth: 260 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <span style={{ width: 32, height: 32, borderRadius: 999, background: '#7C5CFC', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>R</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>rynaaa</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#3b82f6" stroke="#0F0F12" strokeWidth="2"><path d="M12 2l2.4 1.8 3 .2.2 3L19.4 12l-1.8 2.4-.2 3-3 .2L12 19.4 9.6 17.6l-3-.2-.2-3L4.6 12l1.8-2.4.2-3 3-.2z" /><path d="m9 12 2 2 4-4" stroke="#fff" fill="none" /></svg>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>We The Fest</span>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginLeft: 'auto' }}>2h</span>
        </div>
      </div>
      <p style={{ margin: '9px 0 10px', fontSize: 13, lineHeight: 1.45, color: '#fff' }}>front row tonight 🔥 who else is here??</p>
      <div style={{ height: 92, borderRadius: 10, background: 'linear-gradient(135deg, #3B1D6E 0%, #7C5CFC 55%, #EC4899 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 75% 70%, rgba(255,255,255,0.25), transparent 35%)' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 11, color: 'rgba(255,255,255,0.55)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12 }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="1.6"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" /></svg>
          <span style={{ color: '#ef4444' }}>248</span>
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
          31
        </span>
      </div>
    </div>
  );
}

function EventMCard() {
  return (
    <div style={{ borderRadius: 14, overflow: 'hidden', background: '#18181B', border: '1px solid rgba(255,255,255,0.08)', minWidth: 260 }}>
      <div style={{ height: 104, background: 'linear-gradient(135deg, #1e3a8a 0%, #7C5CFC 100%)', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 0%, rgba(255,255,255,0.25), transparent 55%)' }} />
        <div style={{ position: 'absolute', top: 9, left: 9, display: 'flex', gap: 6 }}>
          <span style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(74,222,128,0.4)', color: '#4ade80', fontSize: 9, fontWeight: 700, padding: '3px 8px', borderRadius: 99 }}>UPCOMING</span>
          <span style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,140,0,0.4)', color: '#ffa94d', fontSize: 9, fontWeight: 700, padding: '3px 8px', borderRadius: 99 }}>🔥 Trending</span>
        </div>
      </div>
      <div style={{ padding: 11, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-0.02em', color: '#fff' }}>Soundrenaline 2025</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'rgba(255,255,255,0.55)', fontSize: 11 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
          GWK Cultural Park, Bali
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'rgba(255,255,255,0.55)', fontSize: 11 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M8 2v4M16 2v4M3 10h18" /><rect x="3" y="4" width="18" height="18" rx="2" /></svg>
          Sep 6–7, 2025
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
          <div style={{ display: 'flex' }}>
            <span style={{ width: 18, height: 18, borderRadius: 999, background: '#F59E0B', border: '1px solid #18181B' }} />
            <span style={{ width: 18, height: 18, borderRadius: 999, background: '#EC4899', border: '1px solid #18181B', marginLeft: -6 }} />
            <span style={{ width: 18, height: 18, borderRadius: 999, background: '#10B981', border: '1px solid #18181B', marginLeft: -6 }} />
          </div>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>12.4k followers</span>
        </div>
      </div>
    </div>
  );
}

function PassportMCard() {
  return (
    <div style={{ background: '#7C5CFC', borderRadius: 5, padding: '9px 9px 13px', boxShadow: '0 18px 40px rgba(0,0,0,0.5)', minWidth: 200 }}>
      <div style={{ height: 96, borderRadius: 2, overflow: 'hidden', background: 'linear-gradient(160deg, #12061f 0%, #4c1d95 60%, #db2777 120%)', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 18%, rgba(255,255,255,0.4), transparent 45%), radial-gradient(circle at 18% 80%, rgba(255,255,255,0.18), transparent 40%)' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', height: 16, margin: '0 -9px' }}>
        <span style={{ width: 9, height: 16, borderTopRightRadius: 9, borderBottomRightRadius: 9, background: '#0B0B0B' }} />
        <span style={{ flex: 1, height: 1.5, backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0 5px, transparent 5px 11px)' }} />
        <span style={{ width: 9, height: 16, borderTopLeftRadius: 9, borderBottomLeftRadius: 9, background: '#0B0B0B' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '0 2px' }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>We The Fest</div>
          <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.3px' }}>Jul 19, 2025</div>
        </div>
        <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>#7</span>
      </div>
    </div>
  );
}

const CARD_COMPONENTS = [GroupMCard, PostMCard, EventMCard, PassportMCard];

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
