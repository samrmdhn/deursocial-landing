'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { MapPin, QrCode, Award } from 'lucide-react';

export default function CheckInFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();
  const go = inView || !!reduced;

  const steps = [
    {
      icon: <QrCode size={15} />,
      color: '#6366f1',
      title: 'Scan the QR',
      desc: 'Point your camera at the QR code posted at the venue entrance.',
    },
    {
      icon: <MapPin size={15} />,
      color: '#10b981',
      title: 'Location verified',
      desc: 'We confirm you\'re actually at the venue — no faking it.',
    },
    {
      icon: <Award size={15} />,
      color: '#f59e0b',
      title: 'Badge unlocked',
      desc: 'A permanent badge drops into your passport. You were there.',
    },
  ];

  return (
    <section ref={ref} className="relative z-10 px-6 py-24">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* text side */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/25 block mb-4">
              The Check-in Experience
            </span>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight text-white">
              Prove you<br />were there.
            </h2>
          </div>

          <p className="text-white/40 text-base leading-relaxed max-w-sm">
            Deursocial check-in uses QR scanning and live location to verify your attendance and reward you with an exclusive badge.
          </p>

          <div className="flex flex-col gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={reduced ? false : { opacity: 0, x: -16 }}
                animate={go ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.14, duration: 0.45 }}
                className="flex items-start gap-4"
              >
                <div
                  className="mt-0.5 w-8 h-8 rounded-xl shrink-0 flex items-center justify-center"
                  style={{ background: `${s.color}20`, border: `1px solid ${s.color}40`, color: s.color }}
                >
                  {s.icon}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-0.5">{s.title}</p>
                  <p className="text-white/35 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* phone side */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full"
              style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.12), transparent 70%)' }} />
          </div>

          <div className="relative w-52 h-[430px] rounded-[42px] overflow-hidden"
            style={{ background: '#0c0c0e', border: '1.5px solid rgba(255,255,255,0.1)', boxShadow: '0 32px 64px rgba(0,0,0,0.6)' }}>

            {/* notch */}
            <div className="absolute top-0 inset-x-0 flex justify-center pt-0 z-20">
              <div className="w-28 h-7 rounded-b-3xl flex items-center justify-center gap-2"
                style={{ background: '#0c0c0e', border: '1px solid rgba(255,255,255,0.06)', borderTop: 'none' }}>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <div className="w-10 h-1 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="h-full flex flex-col items-center justify-center gap-6 px-4 pt-10 pb-6">

              {/* QR scanner */}
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={go ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center gap-2.5 w-full"
              >
                <div className="text-[10px] font-semibold tracking-widest text-white/25 uppercase">Scan to check-in</div>
                <div className="relative w-36 h-36 rounded-2xl flex items-center justify-center overflow-hidden"
                  style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.25)' }}>
                  {/* corners */}
                  {[
                    'top-1.5 left-1.5 border-t-2 border-l-2',
                    'top-1.5 right-1.5 border-t-2 border-r-2',
                    'bottom-1.5 left-1.5 border-b-2 border-l-2',
                    'bottom-1.5 right-1.5 border-b-2 border-r-2',
                  ].map((cls, i) => (
                    <span key={i} className={`absolute w-5 h-5 border-indigo-400 rounded-sm ${cls}`} style={{ borderColor: '#6366f1' }} />
                  ))}
                  {/* moving scan line */}
                  <motion.div
                    animate={reduced ? {} : { y: ['-52px', '52px', '-52px'] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-x-2"
                    style={{ height: 1, background: 'linear-gradient(to right, transparent, #6366f1, transparent)' }}
                  />
                  <QrCode size={48} className="text-white/10" />
                </div>
              </motion.div>

              {/* location badge */}
              <motion.div
                initial={reduced ? false : { opacity: 0, scale: 0.85 }}
                animate={go ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.1, type: 'spring', stiffness: 300 }}
                className="flex items-center gap-2 rounded-full px-4 py-2"
                style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-[11px] font-semibold tracking-wide">You&apos;re at the venue ✓</span>
              </motion.div>

              {/* badge unlock */}
              <motion.div
                initial={reduced ? false : { opacity: 0, scale: 1.4, rotate: -18 }}
                animate={go ? { opacity: 1, scale: 1, rotate: -6 } : {}}
                transition={{ delay: 2.0, type: 'spring', stiffness: 200, damping: 14 }}
                className="relative w-20 h-20 rounded-2xl flex flex-col items-center justify-center"
                style={{
                  background: 'rgba(245,158,11,0.12)',
                  border: '2px solid rgba(245,158,11,0.35)',
                }}
              >
                <span className="text-2xl">🏆</span>
                <span className="text-[9px] font-black tracking-[0.15em] mt-0.5"
                  style={{ color: 'rgba(245,158,11,0.8)' }}>UNLOCKED</span>
                {/* ripple */}
                <motion.div
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={go && !reduced ? { scale: 1.7, opacity: 0 } : {}}
                  transition={{ delay: 2.3, duration: 0.7 }}
                  className="absolute inset-0 rounded-2xl"
                  style={{ border: '1px solid rgba(245,158,11,0.3)' }}
                />
              </motion.div>

            </div>

            {/* home bar */}
            <div className="absolute bottom-2 inset-x-0 flex justify-center">
              <div className="w-24 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
