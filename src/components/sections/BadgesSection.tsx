const ALL_BADGES = [
  { emoji: '🏆', label: 'First Show',   color: '#F59E0B', unlocked: true },
  { emoji: '🎵', label: 'Night Owl',    color: '#7C5CFC', unlocked: true },
  { emoji: '⚡', label: 'Front Row',    color: '#3B82F6', unlocked: true },
  { emoji: '🔥', label: 'Three-peat',   color: '#EF4444', unlocked: true },
  { emoji: '🎸', label: 'Rock Solid',   color: '#10B981', unlocked: false },
  { emoji: '🌙', label: 'Midnight',     color: '#6366F1', unlocked: false },
  { emoji: '📸', label: 'Shutter',      color: '#EC4899', unlocked: false },
  { emoji: '🎤', label: 'Front Stage',  color: '#F97316', unlocked: false },
];

function Badge({ badge }: { badge: typeof ALL_BADGES[0] }) {
  return (
    <div
      className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all duration-200 hover:-translate-y-1"
      style={{
        background: badge.unlocked ? `${badge.color}18` : 'rgba(255,255,255,0.03)',
        border: `1px solid ${badge.unlocked ? `${badge.color}35` : 'rgba(255,255,255,0.07)'}`,
        opacity: badge.unlocked ? 1 : 0.4,
      }}
    >
      <span className="text-2xl" style={{ filter: badge.unlocked ? 'none' : 'grayscale(1)' }}>
        {badge.emoji}
      </span>
      <span className="text-[10px] font-bold tracking-wide text-center px-1 leading-tight"
        style={{ color: badge.unlocked ? badge.color : 'rgba(255,255,255,0.25)' }}>
        {badge.label}
      </span>
      {badge.unlocked && (
        <div className="w-1 h-1 rounded-full" style={{ background: badge.color }} />
      )}
    </div>
  );
}

export default function BadgesSection() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* text */}
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(245,158,11,0.8)' }}>
              03 / Badges
            </span>
            <h2 className="font-black leading-tight tracking-tight text-white" style={{ fontSize: 'clamp(2.5rem,4vw,4rem)' }}>
              Collect<br />every show.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.75', maxWidth: '26rem' }}>
              Every concert you attend earns you an exclusive badge. Build your passport, flex your history, and show the world every show you&apos;ve been to.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {[
                { icon: '🎟️', text: 'Attend a concert → earn a unique badge' },
                { icon: '📖', text: 'Your passport grows with every check-in' },
                { icon: '✨', text: 'Rare badges for special achievements' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-base shrink-0">{item.icon}</span>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* badge grid */}
          <div className="relative">
            <div className="absolute inset-0 -m-8 rounded-full blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.07), transparent 70%)' }} />
            <div className="grid grid-cols-4 gap-3">
              {ALL_BADGES.map(b => <Badge key={b.label} badge={b} />)}
            </div>
            <p className="text-center text-xs mt-4" style={{ color: 'rgba(255,255,255,0.2)' }}>
              4 unlocked · 4 locked · more at every show
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
