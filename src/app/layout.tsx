import type { Metadata } from 'next';
import './globals.css';

const BASE_URL = 'https://deursocial.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'deursocial — A Place for Music Community Scene',
    template: '%s | deursocial',
  },
  description:
    'Never go to a festival alone again. Find your concert crew, check in at the venue, and collect a passport stamp from every show. Cari barengan konser, check-in di venue, kumpulkan passport dari setiap show.',

  keywords: [
    'concert social app',
    'festival friends app',
    'music community',
    'festival passport',
    'concert check-in',
    'live music app',
    'find concert friends',
    'festival crew',
    'music events Jakarta',
    'concert badge collection',
    'deursocial',
    'live music community',
    'concert group app',
    'festival check-in app',
    'music passport app',
    'cari barengan konser',
    'cari teman konser',
    'nonton konser bareng',
    'komunitas musik',
    'aplikasi festival musik',
    'konser Jakarta',
  ],

  authors: [{ name: 'deursocial', url: BASE_URL }],
  creator: 'deursocial',
  publisher: 'deursocial',
  applicationName: 'deursocial',
  category: 'Music & Entertainment',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '1024x1024' }],
    apple: [{ url: '/icon.png', type: 'image/png', sizes: '1024x1024' }],
  },

  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'deursocial',
    title: 'deursocial — A Place for Music Community Scene',
    description:
      'Never go to a festival alone again. Find your crew, check in at the venue, and collect a passport stamp from every show. Cari barengan konser, nonton bareng, kumpulkan passport.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'deursocial — A Place for Music Community Scene',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@deursocial',
    creator: '@deursocial',
    title: 'deursocial — A Place for Music Community Scene',
    description:
      'Never go to a festival alone again. Find your crew, check in at the venue, and collect a passport stamp from every show. Cari barengan konser, nonton bareng, kumpulkan passport.',
    images: ['/og-image.png'],
  },

  other: {
    'theme-color': '#0B0B0B',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'deursocial',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
