const steps = [
  {
    num: '01',
    title: 'Download the app',
    desc: 'Get deursocial free on Google Play. App Store coming soon.',
  },
  {
    num: '02',
    title: 'Join or create a group',
    desc: 'Find a concert, then build or join a group with people going to the same show.',
  },
  {
    num: '03',
    title: 'Go to the show',
    desc: 'Scan the QR at the door, check-in, and earn your passport stamp.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative z-10 px-6 py-24">
      {/* subtle divider */}
      <div className="max-w-4xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-24" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="shrink-0 lg:w-48">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30">How it works</span>
            <h2 className="mt-3 text-3xl font-black text-white leading-tight">Three<br />easy<br />steps.</h2>
          </div>

          <div className="flex-1 flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex gap-6 pb-10 last:pb-0">
                {/* vertical connector */}
                {i < steps.length - 1 && (
                  <div className="absolute left-5 top-11 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent" />
                )}

                {/* number bubble */}
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10"
                  style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)' }}>
                  <span className="text-blue-400 text-xs font-black">{step.num}</span>
                </div>

                <div className="pt-1.5">
                  <h3 className="text-white font-bold text-base mb-1">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mt-24" />
      </div>
    </section>
  );
}
