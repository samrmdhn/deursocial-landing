'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { PassportMCard } from './AppShowcase';

export default function CheckInSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduced = useReducedMotion();
  const go = inView || !!reduced;

  return (
    <section ref={ref} className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* phone visual */}
          <div className="relative flex justify-center order-last lg:order-first">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.08), transparent 70%)' }} />
            </div>

            <div
              className="relative w-64 h-[480px] rounded-[44px] overflow-hidden flex flex-col"
              style={{ background: '#050508', border: '1.5px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}
            >
              {/* notch */}
              <div className="flex justify-center pt-3 pb-1 shrink-0">
                <div className="w-28 h-6 rounded-full" style={{ background: '#000', border: '1px solid rgba(255,255,255,0.06)' }} />
              </div>

              <div className="flex-1 flex flex-col gap-3 px-4 pt-2 pb-4">

                {/* Camera / QR scanner — matches checkin.tsx */}
                <motion.div
                  initial={reduced ? false : { opacity: 0 }}
                  animate={go ? { opacity: 1 } : {}}
                  transition={{ delay: 0.15 }}
                  className="relative flex-1 rounded-2xl overflow-hidden"
                  style={{ background: '#000', minHeight: 140 }}
                >
                  {/* Floating header (matches app header) */}
                  <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-3 py-2.5"
                    style={{ background: 'rgba(0,0,0,0.5)' }}>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </div>
                    <p className="text-white font-bold text-[11px]">Scan Event QR</p>
                    <div className="w-5 h-5" />
                  </div>

                  {/* QR scan frame — corner brackets, matches app's overlay */}
                  <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: 16 }}>
                    <div className="relative" style={{ width: 110, height: 110 }}>
                      {/* TL */}
                      <span className="absolute top-0 left-0" style={{ width: 20, height: 20, borderTop: '2.5px solid #fff', borderLeft: '2.5px solid #fff' }} />
                      {/* TR */}
                      <span className="absolute top-0 right-0" style={{ width: 20, height: 20, borderTop: '2.5px solid #fff', borderRight: '2.5px solid #fff' }} />
                      {/* BL */}
                      <span className="absolute bottom-0 left-0" style={{ width: 20, height: 20, borderBottom: '2.5px solid #fff', borderLeft: '2.5px solid #fff' }} />
                      {/* BR */}
                      <span className="absolute bottom-0 right-0" style={{ width: 20, height: 20, borderBottom: '2.5px solid #fff', borderRight: '2.5px solid #fff' }} />

                      {/* Scan line */}
                      <motion.div
                        animate={reduced ? {} : { y: ['-42px', '42px', '-42px'] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute left-0 right-0 h-px"
                        style={{ background: 'linear-gradient(to right, transparent, #10B981, transparent)', top: '50%' }}
                      />
                    </div>
                  </div>

                  {/* Hint text */}
                  <motion.p
                    initial={reduced ? false : { opacity: 0 }}
                    animate={go ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-3 left-0 right-0 text-center text-[9px]"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    Point at the event QR code
                  </motion.p>
                </motion.div>

                {/* Location verified chip (matches app's GPS confirmation) */}
                <motion.div
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  animate={go ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1, type: 'spring', stiffness: 300 }}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 shrink-0"
                  style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <div>
                    <p className="text-emerald-400 text-[10px] font-bold">You&apos;re at the venue</p>
                    <p className="text-[9px]" style={{ color: 'rgba(255,255,255,0.3)' }}>Jiexpo · Kemayoran, Jakarta</p>
                  </div>
                </motion.div>

                {/* Passport stamp — same PassportMCard as AppShowcase & other sections */}
                <motion.div
                  initial={reduced ? false : { opacity: 0, scale: 0.88, y: 14 }}
                  animate={go ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: 1.9, type: 'spring', stiffness: 180, damping: 16 }}
                  className="shrink-0"
                  style={{ rotate: '2deg' } as React.CSSProperties}
                >
                  <PassportMCard title="Java Jazz Fest" date="Mar 2, 2025" rank="42" />
                </motion.div>

              </div>

              <div className="flex justify-center pb-2 shrink-0">
                <div className="w-24 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
              </div>
            </div>
          </div>

          {/* text */}
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(16,185,129,0.8)' }}>
              02 / Check-in
            </span>
            <h2 className="font-black leading-tight tracking-tight text-white" style={{ fontSize: 'clamp(2.5rem,4vw,4rem)' }}>
              Prove you<br />were there.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.75', maxWidth: '26rem' }}>
              Scan the QR code at the entrance. We verify your GPS location, confirm you&apos;re actually at the venue, and log your attendance permanently.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              {[
                { step: '01', title: 'Scan venue QR', desc: 'Open deursocial and point your camera at the event QR code.' },
                { step: '02', title: 'GPS verified', desc: 'Location check confirms you\'re at the exact venue — no faking.' },
                { step: '03', title: 'Stamp drops', desc: 'An exclusive polaroid stamp lands in your passport.' },
              ].map(s => (
                <div key={s.step} className="flex items-start gap-4">
                  <div className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black"
                    style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.2)', color: '#10B981' }}>
                    {s.step}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{s.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
