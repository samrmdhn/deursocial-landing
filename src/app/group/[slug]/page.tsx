import type { Metadata } from 'next';
import DeepLinkRedirect from '@/components/DeepLinkRedirect';

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function GroupPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DeepLinkRedirect deepLink={`deursocial://group/${slug}`} />;
}
