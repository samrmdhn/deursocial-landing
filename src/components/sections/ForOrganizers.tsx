'use client';

import { useState, useEffect } from 'react';

const CYCLE_MS = 5000;
const CARD_VW  = 55;   // each card = 55vw
const CARD_GAP = 14;   // px gap

// center card[i]: translateX = 22.5vw - i*(55vw + 14px)
function trackX(i: number) {
  return `calc(22.5vw - ${i * CARD_VW}vw - ${i * CARD_GAP}px)`;
}

/* ── sparkle svg ── */
function Spark({ size = 14, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" style={style}>
      <path d="M8 0 9.2 6.8 16 8 9.2 9.2 8 16 6.8 9.2 0 8 6.8 6.8Z" />
    </svg>
  );
}

/* ── animated content A: follower feed ── */
const FEED = [
  { dot: '#f59e0b', text: 'Rina S. started following',  time: '2m'  },
  { dot: '#4ade80', text: '8 new followers today',       time: ''    },
  { dot: '#60a5fa', text: 'Dimas joined your group',     time: '12m' },
  { dot: '#f472b6', text: 'Trending in Jakarta',         time: 'Now' },
];
function FeedAnim() {
  return (
    <>
      <style>{`@keyframes fi{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}`}</style>
      {FEED.map((item, i) => (
        <div key={item.text} style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '7px 0',
          borderBottom: i < FEED.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
          opacity: 0, animation: `fi 0.4s ease ${0.15 + i * 0.3}s forwards`,
        }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: item.dot, flexShrink: 0 }} />
          <span style={{ fontSize: 12, color: 'rgba(244,242,236,0.6)', flex: 1 }}>{item.text}</span>
          {item.time && <span style={{ fontSize: 10, color: 'rgba(244,242,236,0.25)' }}>{item.time}</span>}
        </div>
      ))}
    </>
  );
}

/* ── animated content B: metric bars ── */
const MBARS = [
  { label: 'Followers',  val: '2,841', pct: 84, color: '#F4F2EC' },
  { label: 'Check-ins',  val: '1,203', pct: 56, color: '#60a5fa' },
  { label: 'Conversion', val: '42%',   pct: 42, color: '#f59e0b' },
];
function BarsAnim() {
  const [on, setOn] = useState(false);
  useEffect(() => { const id = requestAnimationFrame(() => setOn(true)); return () => cancelAnimationFrame(id); }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
      {MBARS.map((b, i) => (
        <div key={b.label}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <span style={{ fontSize: 11, color: 'rgba(244,242,236,0.4)' }}>{b.label}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: b.color }}>{b.val}</span>
          </div>
          <div style={{ height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 99 }}>
            <div style={{ height: '100%', borderRadius: 99, background: b.color, width: on ? `${b.pct}%` : '0%', transition: `width 900ms cubic-bezier(0.4,0,0.2,1) ${i * 160}ms` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── animated content C: growth bars ── */
const GV = [0.1, 0.22, 0.38, 0.51, 0.64, 0.78, 0.88, 1.0];
function GrowthAnim() {
  const [on, setOn] = useState(false);
  useEffect(() => { const id = requestAnimationFrame(() => setOn(true)); return () => cancelAnimationFrame(id); }, []);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 56, marginBottom: 6 }}>
        {GV.map((v, i) => (
          <div key={i} style={{
            flex: 1, borderRadius: '3px 3px 2px 2px',
            background: i === GV.length - 1 ? '#4ade80' : 'rgba(74,222,128,0.2)',
            height: on ? `${v * 100}%` : '3px',
            transition: `height 700ms cubic-bezier(0.4,0,0.2,1) ${i * 55}ms`,
          }} />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 9, color: 'rgba(244,242,236,0.2)' }}>8 months ago</span>
        <span style={{ fontSize: 9, color: '#4ade80', fontWeight: 700 }}>Today</span>
      </div>
    </div>
  );
}

/* ── card data ── */
const CARDS = [
  {
    id: 0,
    stat: '2,841',
    statLabel: 'event followers',
    headline: 'Fans follow you —\nnot just the ticket.',
    desc: 'Your organizer page builds a real following. Every future show lands directly in their feed.',
    color: '#f59e0b', rgb: '245,158,11', activeBg: '#120d00',
    Content: FeedAnim,
  },
  {
    id: 1,
    stat: '42%',
    statLabel: 'follower → check-in conversion',
    headline: 'Close sponsors\nwith real numbers.',
    desc: 'GPS-verified attendance, demographics, and traffic — all in a one-click PDF your sponsors actually want.',
    color: '#60a5fa', rgb: '96,165,250', activeBg: '#00101f',
    Content: BarsAnim,
  },
  {
    id: 2,
    stat: '↑2,721',
    statLabel: 'new followers since first show',
    headline: 'Every show\ngrows the next.',
    desc: 'Check-in moments and shared passports spread your events to audiences who haven\'t heard of you yet.',
    color: '#4ade80', rgb: '74,222,128', activeBg: '#00120a',
    Content: GrowthAnim,
  },
];

export default function ForOrganizers() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const id = setInterval(() => {
      const p = Math.min((Date.now() - start) / CYCLE_MS, 1);
      setProgress(p);
      if (p >= 1) { clearInterval(id); setActive((a) => (a + 1) % CARDS.length); }
    }, 16);
    return () => clearInterval(id);
  }, [active]);

  return (
    <section style={{ background: '#0B0B0B', color: '#F4F2EC', borderTop: '1px solid rgba(244,242,236,0.06)' }}>
      <style>{`@keyframes fo-spin{to{transform:rotate(360deg)}}`}</style>

      {/* ── header ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(64px,8vw,110px) clamp(20px,5vw,40px) clamp(44px,6vw,72px)' }}>
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f59e0b' }}>
          For Event Organizers
        </span>
        <h2 style={{ margin: '14px 0 0', fontWeight: 900, fontSize: 'clamp(38px,6vw,74px)', lineHeight: 0.95, letterSpacing: '-0.04em' }}>
          Your audience<br />lives here.
        </h2>
      </div>

      {/* ── carousel ── */}
      <div style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          gap: CARD_GAP,
          transform: trackX(active),
          transition: 'transform 0.65s cubic-bezier(0.4,0,0.2,1)',
          willChange: 'transform',
        }}>
          {CARDS.map((card) => {
            const isActive = active === card.id;
            const Content = card.Content;
            return (
              <div
                key={card.id}
                onClick={() => setActive(card.id)}
                style={{
                  width: `${CARD_VW}vw`,
                  minWidth: 280,
                  flexShrink: 0,
                  borderRadius: 28,
                  border: `1px solid ${isActive ? `rgba(${card.rgb},0.35)` : 'rgba(255,255,255,0.06)'}`,
                  background: isActive ? card.activeBg : '#090909',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'background 0.55s ease, border-color 0.55s ease',
                  userSelect: 'none',
                }}
              >
                {/* ── top: visual zone (like photo area in ref) ── */}
                <div style={{
                  height: 'clamp(180px, 22vw, 280px)',
                  position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}>
                  {/* radial glow */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `radial-gradient(ellipse at 50% 60%, rgba(${card.rgb},${isActive ? 0.18 : 0.04}) 0%, transparent 70%)`,
                    transition: 'background 0.55s ease',
                  }} />
                  {/* corner glow blob */}
                  <div style={{
                    position: 'absolute', top: -40, right: -40, width: 200, height: 200,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, rgba(${card.rgb},${isActive ? 0.2 : 0.03}), transparent 70%)`,
                    filter: 'blur(30px)',
                    transition: 'background 0.55s ease',
                  }} />

                  {/* big stat */}
                  <div style={{
                    fontSize: 'clamp(52px,8vw,112px)', fontWeight: 900,
                    letterSpacing: '-0.06em', lineHeight: 1,
                    color: isActive ? card.color : 'rgba(244,242,236,0.1)',
                    transition: 'color 0.55s ease',
                    position: 'relative', zIndex: 1,
                    textShadow: isActive ? `0 0 80px rgba(${card.rgb},0.5)` : 'none',
                  }}>
                    {card.stat}
                  </div>

                  {/* sparkles */}
                  {isActive && (
                    <>
                      <Spark size={15} style={{ position: 'absolute', top: '22%', left: '14%', color: card.color, opacity: 0.65, animation: 'fo-spin 7s linear infinite' }} />
                      <Spark size={9}  style={{ position: 'absolute', bottom: '20%', right: '16%', color: card.color, opacity: 0.4, animation: 'fo-spin 5s linear infinite reverse' }} />
                      <Spark size={6}  style={{ position: 'absolute', top: '50%', right: '30%', color: card.color, opacity: 0.3, animation: 'fo-spin 9s linear infinite' }} />
                    </>
                  )}
                </div>

                {/* thin separator */}
                <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', flexShrink: 0 }} />

                {/* ── bottom: text + animated content ── */}
                <div style={{ flex: 1, padding: 'clamp(20px,2.8vw,32px)', display: 'flex', flexDirection: 'column' }}>

                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12, color: isActive ? `rgba(${card.rgb},0.8)` : 'rgba(244,242,236,0.18)', transition: 'color 0.55s ease' }}>
                    {card.statLabel}
                  </div>

                  <h3 style={{
                    margin: '0 0 10px', fontWeight: 800,
                    fontSize: 'clamp(17px,2.2vw,26px)', lineHeight: 1.22, letterSpacing: '-0.02em',
                    color: isActive ? '#F4F2EC' : 'rgba(244,242,236,0.28)',
                    transition: 'color 0.55s ease', whiteSpace: 'pre-line',
                  }}>
                    {card.headline}
                  </h3>

                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: isActive ? 'rgba(244,242,236,0.5)' : 'rgba(244,242,236,0.15)', transition: 'color 0.55s ease' }}>
                    {card.desc}
                  </p>

                  {/* animated content */}
                  <div style={{
                    display: 'grid',
                    gridTemplateRows: isActive ? '1fr' : '0fr',
                    marginTop: isActive ? 20 : 0,
                    transition: 'grid-template-rows 0.5s cubic-bezier(0.4,0,0.2,1), margin-top 0.5s ease',
                  }}>
                    <div style={{ overflow: 'hidden' }}>
                      {isActive && <Content />}
                    </div>
                  </div>

                  {/* progress bar */}
                  <div style={{ marginTop: 'auto', paddingTop: 20, height: 2, background: 'rgba(255,255,255,0.05)', borderRadius: 99, overflow: 'hidden' }}>
                    <div style={{ height: '100%', borderRadius: 99, background: card.color, width: isActive ? `${progress * 100}%` : '0%', opacity: isActive ? 0.7 : 0, transition: 'opacity 0.4s ease' }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── nav dots ── */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, padding: 'clamp(20px,3vw,32px) 0' }}>
        {CARDS.map((card, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: active === i ? 28 : 6, height: 6, borderRadius: 3,
              background: active === i ? card.color : 'rgba(244,242,236,0.2)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'width 0.35s ease, background 0.35s ease',
            }}
          />
        ))}
      </div>

      {/* ── cta strip ── */}
      <div style={{
        maxWidth: 1200, margin: '0 auto', width: '100%',
        padding: 'clamp(16px,2.5vw,32px) clamp(20px,5vw,40px) clamp(52px,7vw,88px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', gap: 'clamp(20px,4vw,52px)', flexWrap: 'wrap' }}>
          {[
            { v: '12+',     l: 'organizer partners'     },
            { v: '100%',    l: 'GPS-verified check-ins'  },
            { v: '1-click', l: 'sponsor PDF export'      },
          ].map((s) => (
            <div key={s.l}>
              <div style={{ fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#F4F2EC', lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontSize: 11, color: 'rgba(244,242,236,0.3)', marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <a
          href="mailto:mindeursocial@gmail.com?subject=Organizer%20Partnership"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 26px', borderRadius: 14, flexShrink: 0,
            background: '#f59e0b', color: '#0B0B0B',
            fontSize: 14, fontWeight: 800, textDecoration: 'none',
            transition: 'opacity 0.15s ease, transform 0.15s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(1.02)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Partner with us →
        </a>
      </div>

    </section>
  );
}
