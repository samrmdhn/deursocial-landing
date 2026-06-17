const GROUPS = [
  { name: 'Metalheads Jaksel', event: 'Download Festival', count: 24, colors: ['#7C5CFC','#3B82F6','#10B981','#F59E0B'] },
  { name: 'Indie Kids BDG', event: 'Resonara Fest', count: 11, colors: ['#EC4899','#F59E0B','#7C5CFC','#3B82F6'] },
  { name: 'Rock Enthusiast', event: 'Voltwave 2025', count: 18, colors: ['#10B981','#3B82F6','#7C5CFC','#EC4899'] },
];

function GroupCard({ group, dim }: { group: typeof GROUPS[0]; dim?: boolean }) {
  return (
    <div
      className="rounded-2xl p-4 flex flex-col gap-3 transition-all duration-200"
      style={{
        background: dim ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)',
        border: `1px solid ${dim ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.1)'}`,
        opacity: dim ? 0.5 : 1,
      }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white font-bold text-sm leading-tight">{group.name}</p>
          <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{group.event}</p>
        </div>
        <div className="rounded-full px-2 py-0.5"
          style={{ background: 'rgba(124,92,252,0.15)', border: '1px solid rgba(124,92,252,0.25)' }}>
          <span className="text-[10px] font-bold" style={{ color: '#7C5CFC' }}>{group.count}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-1.5">
          {group.colors.map((c, i) => (
            <div key={i} className="w-6 h-6 rounded-full border-2"
              style={{ background: c, borderColor: '#0F0F12' }} />
          ))}
          <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-[8px] font-bold"
            style={{ background: 'rgba(255,255,255,0.08)', borderColor: '#0F0F12', color: 'rgba(255,255,255,0.4)' }}>
            +{group.count - 4}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse-dot" />
          <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.35)' }}>active</span>
        </div>
      </div>
    </div>
  );
}

export default function GroupsSection() {
  return (
    <section className="relative py-28 px-6">
      {/* horizontal rule */}
      <div className="max-w-6xl mx-auto">
        <div className="h-px mb-20" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)' }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* text */}
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(124,92,252,0.8)' }}>
              01 / Groups
            </span>
            <h2 className="font-black leading-tight tracking-tight text-white" style={{ fontSize: 'clamp(2.5rem,4vw,4rem)' }}>
              Find your<br />concert crew.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.75', maxWidth: '26rem' }}>
              Every concert is better with people who care as much as you do. Create a group for any show, invite friends, coordinate logistics, and never go alone again.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 max-w-xs">
              {[
                { num: '2k+', label: 'active groups' },
                { num: '50k+', label: 'members' },
              ].map(s => (
                <div key={s.label}>
                  <p className="text-white font-black text-2xl">{s.num}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* visual */}
          <div className="relative flex flex-col gap-3">
            {/* glow */}
            <div className="absolute inset-0 -m-8 rounded-full blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(124,92,252,0.08), transparent 70%)' }} />
            {GROUPS.map((g, i) => (
              <GroupCard key={g.name} group={g} dim={i > 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
