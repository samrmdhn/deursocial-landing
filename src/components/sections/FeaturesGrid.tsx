'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

/* ── Check-in button cycling states ── */
const CHECK_STATES = [
  { label: 'Check in', sub: "You're at the venue — tap to verify", bg: '#F4F2EC', color: '#0B0B0B', glowOn: 0, glow: 'rgba(244,242,236,0.5)' },
  { label: 'Verifying location…', sub: 'Matching GPS to Gelora Bung Karno', bg: '#F4F2EC', color: '#0B0B0B', glowOn: 0.35, glow: 'rgba(244,242,236,0.6)' },
  { label: "Checked in · You're #7", sub: 'Badge dropped into your passport ✦', bg: '#4ade80', color: '#06281a', glowOn: 0.6, glow: 'rgba(74,222,128,0.7)' },
];

function QrIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3M21 14v.01M14 21h.01M21 21v.01M17 21h.01M21 17h.01" />
    </svg>
  );
}

function CheckmarkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Spinner() {
  return (
    <span
      style={{
        display: 'inline-block',
        width: 14,
        height: 14,
        borderRadius: 999,
        border: '2px solid rgba(11,11,11,0.3)',
        borderTopColor: '#0B0B0B',
        animation: 'ds-spin 0.7s linear infinite',
      }}
    />
  );
}

/* ── Card 1: Find your crew ── */
function CrewCard() {
  return (
    <div style={{ width: '100%', maxWidth: 300, background: '#18181B', borderRadius: 16, border: '1px solid rgba(255,255,255,0.10)', overflow: 'hidden' }}>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 13 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: '20px' }}>Metalheads Jaksel</span>
          <span style={{ background: '#F4F2EC', color: '#0B0B0B', borderRadius: 100, padding: '7px 16px', fontSize: 12, fontWeight: 700 }}>Join</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18" /><rect x="3" y="4" width="18" height="18" rx="2" /></svg>
          <span style={{ color: '#a78bfa', fontSize: 12, fontWeight: 600 }}>Download Festival 2025</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>Jakarta
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></svg>18/24
          </span>
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 9px', borderRadius: 99 }}>18+</span>
          <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 9px', borderRadius: 99 }}>Verified only</span>
        </div>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: '18px' }}>Meet at gate 3 by 6pm. We&apos;re heading to the pit together — loud, sweaty, worth it.</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 30, height: 30, borderRadius: 999, background: '#7C5CFC', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>R</span>
          <div style={{ lineHeight: 1.15 }}>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: 600 }}>Rangga</div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10 }}>Creator</div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          {[{ c: '#3B82F6', l: 'A', d: 0.2 }, { c: '#10B981', l: 'N', d: 0.34 }, { c: '#F59E0B', l: 'S', d: 0.48 }].map((a, i) => (
            <span key={i} style={{ width: 28, height: 28, borderRadius: 999, background: a.c, border: '2px solid #18181B', marginLeft: i > 0 ? -8 : 0, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, animation: `ds-pop 0.5s ease both`, animationDelay: `${a.d}s` }}>{a.l}</span>
          ))}
          <span style={{ width: 28, height: 28, borderRadius: 999, background: 'rgba(255,255,255,0.08)', border: '2px solid #18181B', marginLeft: -8, color: 'rgba(255,255,255,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, animation: 'ds-pop 0.5s ease both', animationDelay: '0.62s' }}>+14</span>
        </div>
      </div>
    </div>
  );
}

/* ── Card 2: Check-in map ── */
function CheckInCard({ checkState }: { checkState: number }) {
  const cs = CHECK_STATES[checkState % 3];
  const icons = [<QrIcon key="qr" />, <Spinner key="spin" />, <CheckmarkIcon key="check" />];

  return (
    <div style={{ width: '100%', maxWidth: 300, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#0c0c0e' }}>
      {/* Map */}
      <div style={{ position: 'relative', height: 196, background: 'radial-gradient(circle at 50% 42%, #14241c 0%, #0c0c0e 70%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div style={{ position: 'absolute', top: '-10%', left: '18%', width: 3, height: '130%', background: 'rgba(255,255,255,0.06)', transform: 'rotate(18deg)' }} />
        <div style={{ position: 'absolute', top: '30%', left: '-10%', width: '130%', height: 7, background: 'rgba(255,255,255,0.05)', transform: 'rotate(-7deg)' }} />
        {/* Stadium */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%) rotate(-12deg)', width: 138, height: 92 }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid rgba(74,222,128,0.55)', background: 'rgba(74,222,128,0.08)' }} />
          <div style={{ position: 'absolute', inset: 12, borderRadius: '50%', border: '1.5px solid rgba(74,222,128,0.35)' }} />
          <div style={{ position: 'absolute', inset: 30, borderRadius: '50%', background: 'rgba(74,222,128,0.18)', border: '1px solid rgba(74,222,128,0.3)' }} />
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: 10, fontWeight: 800, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.85)', textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>GBK</div>
        {/* Pins */}
        <svg style={{ position: 'absolute', top: '22%', left: '70%' }} width="15" height="15" viewBox="0 0 24 24" fill="rgba(124,92,252,0.85)" stroke="#0c0c0e" strokeWidth="1.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /></svg>
        <svg style={{ position: 'absolute', top: '66%', left: '26%' }} width="13" height="13" viewBox="0 0 24 24" fill="rgba(236,72,153,0.8)" stroke="#0c0c0e" strokeWidth="1.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /></svg>
        {/* You-are-here */}
        <div style={{ position: 'absolute', top: '56%', left: '47%', transform: 'translate(-50%,-50%)' }}>
          <span style={{ position: 'absolute', left: '50%', top: '50%', width: 30, height: 30, margin: '-15px 0 0 -15px', borderRadius: 999, background: 'rgba(74,222,128,0.4)', animation: 'ds-ring 1.8s ease-out infinite' }} />
          <span style={{ position: 'relative', display: 'block', width: 14, height: 14, borderRadius: 999, background: '#4ade80', border: '2px solid #0c0c0e', boxShadow: '0 0 10px rgba(74,222,128,0.8)' }} />
        </div>
        {/* Venue chip */}
        <div style={{ position: 'absolute', left: 10, top: 10, display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.12)', padding: '6px 10px', borderRadius: 99, backdropFilter: 'blur(4px)' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#fff' }}>Gelora Bung Karno</span>
        </div>
      </div>
      {/* Check-in button */}
      <div style={{ padding: 14 }}>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', inset: 0, borderRadius: 13, background: cs.glow, opacity: cs.glowOn, filter: 'blur(9px)', transition: 'opacity 0.4s ease' }} />
          <button
            style={{
              position: 'relative',
              width: '100%',
              border: 'none',
              cursor: 'pointer',
              borderRadius: 13,
              padding: 14,
              fontFamily: 'Archivo, sans-serif',
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: '0.01em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 9,
              background: cs.bg,
              color: cs.color,
              transition: 'background 0.4s ease, color 0.4s ease',
            }}
          >
            <span style={{ display: 'inline-flex' }}>{icons[checkState % 3]}</span>
            {cs.label}
          </button>
        </div>
        <p style={{ margin: '9px 2px 0', fontSize: 11, color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>{cs.sub}</p>
      </div>
    </div>
  );
}

/* ── Card 3: Badge medallion ── */
function BadgeCard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '10px 0' }}>
      <div style={{ position: 'relative', width: 168, height: 168, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Rotating dashed ring */}
        <svg style={{ position: 'absolute', inset: 0, animation: 'ds-spin 22s linear infinite' }} width="168" height="168" viewBox="0 0 168 168" fill="none">
          <circle cx="84" cy="84" r="80" stroke="rgba(244,242,236,0.22)" strokeWidth="1.5" strokeDasharray="3 7" />
        </svg>
        {/* Counter-rotating slogan ring */}
        <div style={{ position: 'absolute', inset: 8, animation: 'ds-spin 26s linear infinite reverse' }}>
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <defs><path id="ds-badge-ring" d="M50,50 m-39,0 a39,39 0 1,1 78,0 a39,39 0 1,1 -78,0" /></defs>
            <text fontFamily="Archivo" fontSize="7.4" fontWeight="800" letterSpacing="2.2" fill="rgba(244,242,236,0.4)">
              <textPath href="#ds-badge-ring" startOffset="0">A PLACE FOR MUSIC · COMMUNITY · SCENE · </textPath>
            </text>
          </svg>
        </div>
        {/* Medallion */}
        <div style={{ width: 112, height: 112, borderRadius: 999, background: 'radial-gradient(circle at 50% 32%, #1c1c20 0%, #0c0c0e 100%)', border: '1.5px solid rgba(244,242,236,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 2px 14px rgba(255,255,255,0.06), 0 16px 36px rgba(0,0,0,0.5)' }}>
          <Image src="/deursocial-logo.png" alt="deursocial" width={74} height={74} style={{ width: 74, height: 'auto', display: 'block' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(244,242,236,0.08)', border: '1px solid rgba(244,242,236,0.16)', borderRadius: 99, padding: '7px 16px' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: '0.02em', color: '#F4F2EC' }}>User #7</span>
        </span>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(244,242,236,0.4)' }}>7th to check in</span>
      </div>
    </div>
  );
}

/* ── Main Features Grid ── */
export default function FeaturesGrid() {
  const [checkState, setCheckState] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCheckState((s) => (s + 1) % 3), 1900);
    return () => clearInterval(timer);
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="features"
      ref={sectionRef}
      style={{ background: '#070708', color: '#F4F2EC', position: 'relative', overflow: 'hidden' }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(40px, 5vw, 72px) clamp(20px, 5vw, 56px) clamp(60px, 8vw, 116px)',
          width: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: 16,
            borderBottom: '1px solid rgba(244,242,236,0.14)',
            paddingBottom: 18,
            marginBottom: 'clamp(30px, 4vw, 54px)',
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>What you get</span>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.45 }}>Three things</span>
        </div>

        {/* Giant bleeding background type */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '0.04em',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 0,
          }}
        >
          {['JOIN\u00a0THE\u00a0SCENE', 'NEVER\u00a0GO\u00a0ALONE', 'COLLECT\u00a0EVERY\u00a0SHOW'].map((t) => (
            <span
              key={t}
              style={{
                display: 'block',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                fontWeight: 700,
                fontSize: 'clamp(74px, 14vw, 220px)',
                lineHeight: 0.94,
                letterSpacing: '-0.05em',
                color: 'rgba(244,242,236,0.045)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Three feature cards */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: 'clamp(18px, 2.2vw, 30px)',
            alignItems: 'stretch',
          }}
        >
          {/* Card 1 */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, background: '#0F0F12', border: '1px solid rgba(244,242,236,0.1)', borderRadius: 22, padding: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CrewCard />
            </div>
            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: 'clamp(20px, 2.1vw, 26px)', fontWeight: 800, letterSpacing: '-0.02em' }}>Find your crew</div>
              <p style={{ margin: '6px 0 0', fontSize: 14, lineHeight: 1.45, color: 'rgba(244,242,236,0.55)' }}>Create or join a group for any show and sort the whole night out together.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, background: '#0F0F12', border: '1px solid rgba(244,242,236,0.1)', borderRadius: 22, padding: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckInCard checkState={checkState} />
            </div>
            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: 'clamp(20px, 2.1vw, 26px)', fontWeight: 800, letterSpacing: '-0.02em' }}>Prove you were there</div>
              <p style={{ margin: '6px 0 0', fontSize: 14, lineHeight: 1.45, color: 'rgba(244,242,236,0.55)' }}>Scan the venue QR — GPS confirms you&apos;re really there before it counts.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, background: '#0F0F12', border: '1px solid rgba(244,242,236,0.1)', borderRadius: 22, padding: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BadgeCard />
            </div>
            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: 'clamp(20px, 2.1vw, 26px)', fontWeight: 800, letterSpacing: '-0.02em' }}>Collect every show</div>
              <p style={{ margin: '6px 0 0', fontSize: 14, lineHeight: 1.45, color: 'rgba(244,242,236,0.55)' }}>Each verified check-in drops a numbered badge into your passport.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
