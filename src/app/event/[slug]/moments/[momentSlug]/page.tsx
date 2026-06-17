import type { Metadata } from 'next';
import DeepLinkRedirect from '@/components/DeepLinkRedirect';

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function EventMomentPage({ params }: { params: Promise<{ slug: string; momentSlug: string }> }) {
  const { slug, momentSlug } = await params;
  return <DeepLinkRedirect deepLink={`deursocial://event/${slug}/moments/${momentSlug}`} />;
}
