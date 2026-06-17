import Link from 'next/link';

const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? 'https://play.google.com/store/apps/details?id=com.deursocial.app';

export function StoreButtons({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const py = size === 'lg' ? 'py-3.5 px-6' : 'py-3 px-5';

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Link
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center gap-3 bg-white text-black font-semibold rounded-2xl ${py} text-sm hover:bg-white/90 active:scale-[0.98] transition-all duration-150 shadow-lg shadow-white/10`}
      >
        <GooglePlayIcon />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-normal opacity-60">Get it on</span>
          <span>Google Play</span>
        </span>
      </Link>

      <button
        disabled
        className={`flex items-center gap-3 bg-white/6 text-white/25 font-semibold rounded-2xl ${py} text-sm cursor-not-allowed border border-white/8 relative overflow-hidden`}
        title="Coming soon on App Store"
      >
        <AppleIcon />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-normal opacity-70">Coming soon</span>
          <span>App Store</span>
        </span>
      </button>
    </div>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      <path d="M3.18 23.76c.3.17.64.24.99.2l12.5-11.96L13 8.37 3.18 23.76zm17.16-10.98L17.5 11.2l-3.64 3.5 3.64 3.48 2.86-1.62a1.74 1.74 0 0 0 0-3.02v.04zM3 1.24C2.7 1.55 2.5 2 2.5 2.6v18.8c0 .6.2 1.05.5 1.36L13 12 3 1.24zm10.82 10.76L4.17.24C3.82.2 3.48.27 3.18.44L13.82 12z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.04 1.19-2.02 3.56.03 2.81 2.47 3.74 2.5 3.75-.03.07-.39 1.37-1.23 2.31zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
