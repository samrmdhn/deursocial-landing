import { Users, MapPin, Award, Camera, CalendarDays } from 'lucide-react';

/* ─── small reusable card wrapper ─── */
function Card({
  children,
  className = '',
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: string;
}) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden p-6 flex flex-col ${className}`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        ...(accent ? { boxShadow: `inset 0 0 80px ${accent}` } : {}),
      }}
    >
      {children}
    </div>
  );
}

/* ─── Groups card ─── */
function GroupsCard() {
  const members = [
    { color: '#6366f1', label: 'A' },
    { color: '#8b5cf6', label: 'B' },
    { color: '#3b82f6', label: 'C' },
    { color: '#06b6d4', label: 'D' },
    { color: '#10b981', label: 'E' },
  ];

  return (
    <Card className="min-h-64" accent="rgba(99,102,241,0.06)">
      {/* top glow */}
      <div className="absolute top-0 left-0 w-full h-32 rounded-t-3xl"
        style={{ background: 'radial-gradient(ellipse at 30% 0%, rgba(99,102,241,0.15), transparent 70%)' }} />

      {/* label */}
      <div className="flex items-center gap-2 mb-auto relative z-10">
        <div className="w-7 h-7 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)' }}>
          <Users size={14} className="text-indigo-400" />
        </div>
        <span className="text-xs font-semibold text-white/40 tracking-wider uppercase">Groups</span>
      </div>

      {/* avatar cluster */}
      <div className="flex items-center -space-x-2 my-6 relative z-10">
        {members.map((m) => (
          <div
            key={m.label}
            className="w-10 h-10 rounded-full border-2 border-[#050505] flex items-center justify-center text-xs font-bold text-white"
            style={{ background: m.color }}
          >
            {m.label}
          </div>
        ))}
        <div className="w-10 h-10 rounded-full border-2 border-[#050505] flex items-center justify-center text-xs font-semibold"
          style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}>
          +12
        </div>
      </div>

      {/* concert pill */}
      <div className="relative z-10 inline-flex items-center gap-2 rounded-full px-3 py-1.5 w-fit mb-4"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs text-white/60 font-medium">18 people going · Voltwave 2025</span>
      </div>

      <div className="relative z-10">
        <h3 className="text-white font-bold text-xl leading-tight mb-1">Find your crew</h3>
        <p className="text-white/35 text-sm leading-relaxed">
          Create or join a group for any show. Coordinate before, during, and after the concert.
        </p>
      </div>
    </Card>
  );
}

/* ─── Check-in Maps card ─── */
function CheckInCard() {
  const dots = [
    { x: '30%', y: '40%', size: 10, opacity: 1, pulse: true },
    { x: '55%', y: '30%', size: 7, opacity: 0.6, pulse: false },
    { x: '70%', y: '55%', size: 7, opacity: 0.6, pulse: false },
    { x: '45%', y: '65%', size: 6, opacity: 0.4, pulse: false },
    { x: '20%', y: '60%', size: 6, opacity: 0.4, pulse: false },
  ];

  return (
    <Card className="min-h-64" accent="rgba(16,185,129,0.04)">
      <div className="absolute top-0 left-0 w-full h-32 rounded-t-3xl"
        style={{ background: 'radial-gradient(ellipse at 70% 0%, rgba(16,185,129,0.12), transparent 70%)' }} />

      <div className="flex items-center gap-2 mb-4 relative z-10">
        <div className="w-7 h-7 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.3)' }}>
          <MapPin size={14} className="text-emerald-400" />
        </div>
        <span className="text-xs font-semibold text-white/40 tracking-wider uppercase">Check-in Maps</span>
      </div>

      {/* mini map viz */}
      <div className="relative h-32 mb-4 rounded-2xl overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
        {/* grid lines */}
        {[20, 40, 60, 80].map(y => (
          <div key={y} className="absolute w-full h-px" style={{ top: `${y}%`, background: 'rgba(255,255,255,0.04)' }} />
        ))}
        {[20, 40, 60, 80].map(x => (
          <div key={x} className="absolute h-full w-px" style={{ left: `${x}%`, background: 'rgba(255,255,255,0.04)' }} />
        ))}
        {/* dots */}
        {dots.map((d, i) => (
          <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: d.x, top: d.y }}>
            <div
              className={d.pulse ? 'animate-pulse' : ''}
              style={{
                width: d.size, height: d.size,
                borderRadius: '50%',
                background: `rgba(16,185,129,${d.opacity})`,
                boxShadow: d.pulse ? '0 0 8px rgba(16,185,129,0.5)' : 'none',
              }}
            />
          </div>
        ))}
        {/* venue label */}
        <div className="absolute bottom-2 right-2 rounded-lg px-2 py-1"
          style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.25)' }}>
          <span className="text-emerald-400 text-[10px] font-bold">VENUE</span>
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-white font-bold text-xl leading-tight mb-1">See who&apos;s there</h3>
        <p className="text-white/35 text-sm leading-relaxed">
          Scan the venue QR, verify your location, and appear on the live check-in map.
        </p>
      </div>
    </Card>
  );
}

/* ─── Badges card ─── */
function BadgesCard() {
  const badges = [
    { color: '#6366f1', label: '01', name: 'First Show' },
    { color: '#8b5cf6', label: '02', name: 'Night Owl' },
    { color: '#f59e0b', label: '03', name: 'Front Row' },
    { color: '#ec4899', label: '04', name: 'Repeat Fan' },
  ];

  return (
    <Card className="min-h-48 sm:col-span-2 flex-row flex-wrap gap-6" accent="rgba(245,158,11,0.04)">
      <div className="absolute top-0 left-0 w-full h-32 rounded-t-3xl"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.10), transparent 70%)' }} />

      <div className="relative z-10 flex flex-col gap-3 flex-1 min-w-48">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.3)' }}>
            <Award size={14} className="text-amber-400" />
          </div>
          <span className="text-xs font-semibold text-white/40 tracking-wider uppercase">Badges</span>
        </div>

        <div>
          <h3 className="text-white font-bold text-xl leading-tight mb-1">Earn at every show</h3>
          <p className="text-white/35 text-sm leading-relaxed max-w-xs">
            Collect exclusive badges from each event. Build your passport and show the world you were there.
          </p>
        </div>
      </div>

      {/* badge grid */}
      <div className="relative z-10 grid grid-cols-2 gap-3 shrink-0">
        {badges.map((b) => (
          <div key={b.label}
            className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center gap-1"
            style={{
              background: `${b.color}18`,
              border: `1px solid ${b.color}35`,
              transform: 'rotate(-3deg)',
            }}>
            <span className="text-lg">🎵</span>
            <span className="text-[9px] font-bold tracking-widest opacity-60" style={{ color: b.color }}>
              {b.name.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─── Moments + Events small cards ─── */
function MomentsCard() {
  return (
    <Card className="min-h-40" accent="rgba(139,92,246,0.04)">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.3)' }}>
          <Camera size={14} className="text-violet-400" />
        </div>
        <span className="text-xs font-semibold text-white/40 tracking-wider uppercase">Moments</span>
      </div>
      <h3 className="text-white font-bold text-lg leading-tight mb-1">Share the vibe</h3>
      <p className="text-white/35 text-sm">Post photos & videos directly to your concert community.</p>
    </Card>
  );
}

function EventsCard() {
  return (
    <Card className="min-h-40" accent="rgba(59,130,246,0.04)">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.3)' }}>
          <CalendarDays size={14} className="text-blue-400" />
        </div>
        <span className="text-xs font-semibold text-white/40 tracking-wider uppercase">Events</span>
      </div>
      <h3 className="text-white font-bold text-lg leading-tight mb-1">Discover shows</h3>
      <p className="text-white/35 text-sm">Browse upcoming concerts and follow the events you love.</p>
    </Card>
  );
}

/* ─── main export ─── */
export default function FeatureBento() {
  return (
    <section className="relative z-10 px-5 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08))' }} />
          <span className="text-xs text-white/25 font-medium tracking-widest uppercase">Features</span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(255,255,255,0.08))' }} />
        </div>

        {/* bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <GroupsCard />
          <CheckInCard />
          <BadgesCard />
          <MomentsCard />
          <EventsCard />
        </div>
      </div>
    </section>
  );
}
