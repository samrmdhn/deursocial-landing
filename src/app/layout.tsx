import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'deursocial — A Place for Music, Community, Scene',
  description: 'Build your concert crew, check in at the venue, and collect a badge from every show you go to — never go alone again.',
  openGraph: {
    title: 'deursocial — A Place for Music, Community, Scene',
    description: 'Build your concert crew, check in at the venue, and collect a badge from every show you go to — never go alone again.',
    url: 'https://deursocial.com',
    siteName: 'deursocial',
    images: [{ url: 'https://deursocial.com/icon.png', width: 512, height: 512, alt: 'deursocial' }],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
