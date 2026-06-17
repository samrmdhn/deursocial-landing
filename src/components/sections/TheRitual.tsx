'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const METHOD = [
  { t: 'Group up.', d: 'Spin up a group for any show, invite your friends, and plan the whole night together in one place.' },
  { t: 'Show up.', d: 'Coordinate meetup spots, travel and timing right inside the app — nobody gets left behind.' },
  { t: 'Check in.', d: 'Scan the venue QR. GPS confirms you are actually there. No faking it, ever.' },
  { t: 'Collect the badge.', d: 'Every verified show drops an exclusive numbered badge straight into your passport.' },
  { t: 'Keep the receipts.', d: 'Your passport grows with every gig. Flex the history, relive the whole run.' },
];

function CountUp({ target, label }: { target: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  const fmt = useCallback((n: number) => Math.round(n).toLocaleString('en-US'), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const dur = 1500;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / dur);
              const e = 1 - Math.pow(1 - p, 3);
              el.textContent = fmt(target * e);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, fmt]);

  return (
    <div>
      <div
        style={{
          fontSize: 'clamp(48px, 6vw, 88px)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        <span ref={ref}>0</span>
      </div>
      <div
        style={{
          marginTop: 10,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.16em',
          textTransform: 'uppercase' as const,
          color: 'rgba(244,242,236,0.45)',
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function TheRitual() {
  const [open, setOpen] = useState(-1);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? -1 : i));

  return (
    <section id="ritual" style={{ background: '#0B0B0B', color: '#F4F2EC' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(58px, 7vw, 110px) clamp(20px, 5vw, 56px)',
          width: '100%',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
            gap: 'clamp(28px, 4vw, 56px)',
            alignItems: 'center',
            marginBottom: 'clamp(40px, 5vw, 64px)',
          }}
        >
          <div>
            <h2
              style={{
                margin: '0 0 22px',
                fontWeight: 900,
                fontSize: 'clamp(48px, 8vw, 124px)',
                lineHeight: 0.88,
                letterSpacing: '-0.045em',
              }}
            >
              The
              <br />
              Ritual.
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                fontWeight: 500,
                lineHeight: 1.45,
                maxWidth: '32ch',
                color: 'rgba(244,242,236,0.6)',
              }}
            >
              For people who&apos;d rather be at the show than scrolling about it. Five steps, on repeat.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: 'clamp(180px, 24vw, 250px)',
                height: 'clamp(180px, 24vw, 250px)',
              }}
            >
              <div style={{ width: '100%', height: '100%', animation: 'ds-spin 20s linear infinite' }}>
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <defs>
                    <path id="ds-circ" d="M50,50 m-39,0 a39,39 0 1,1 78,0 a39,39 0 1,1 -78,0" />
                  </defs>
                  <text fontFamily="NimbusSan" fontSize="7.4" fontWeight="800" letterSpacing="2.1" fill="#F4F2EC">
                    <textPath href="#ds-circ" startOffset="0">
                      A PLACE FOR MUSIC · COMMUNITY · SCENE ·{' '}
                    </textPath>
                  </text>
                </svg>
              </div>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: 'clamp(56px, 7vw, 78px)',
                    height: 'clamp(56px, 7vw, 78px)',
                    borderRadius: 999,
                    background: '#F4F2EC',
                    color: '#0B0B0B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(20px, 2.6vw, 28px)',
                    paddingLeft: 4,
                  }}
                >
                  ▸
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div style={{ borderTop: '1px solid rgba(244,242,236,0.18)' }}>
          {METHOD.map((item, idx) => (
            <div
              key={idx}
              onClick={() => toggle(idx)}
              style={{ borderBottom: '1px solid rgba(244,242,236,0.18)', cursor: 'pointer' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 20,
                  padding: 'clamp(20px, 2.4vw, 30px) 0',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 'clamp(16px, 2.5vw, 36px)',
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: 'rgba(244,242,236,0.4)',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span
                    style={{
                      fontSize: 'clamp(24px, 3vw, 42px)',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.t}
                  </span>
                </div>
                <span
                  style={{
                    flexShrink: 0,
                    width: 42,
                    height: 42,
                    borderRadius: 999,
                    border: '1px solid rgba(244,242,236,0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    fontWeight: 300,
                    lineHeight: 1,
                    transform: open === idx ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  +
                </span>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: open === idx ? '1fr' : '0fr',
                  transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <p
                    style={{
                      margin: 0,
                      padding: '0 0 clamp(22px, 2.6vw, 32px) clamp(30px, 5vw, 70px)',
                      fontSize: 'clamp(16px, 1.5vw, 19px)',
                      fontWeight: 400,
                      lineHeight: 1.55,
                      maxWidth: '60ch',
                      color: 'rgba(244,242,236,0.6)',
                    }}
                  >
                    {item.d}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 28,
            marginTop: 'clamp(56px, 7vw, 100px)',
          }}
        >
          <CountUp target={2400} label="Active groups" />
          <CountUp target={51200} label="Crew members" />
          <CountUp target={184000} label="Shows logged" />
        </div>
      </div>
    </section>
  );
}
