import type { Metadata } from 'next';
import DeepLinkRedirect from '@/components/DeepLinkRedirect';

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function EventPostPage({ params }: { params: Promise<{ slug: string; postSlug: string }> }) {
  const { slug, postSlug } = await params;
  return <DeepLinkRedirect deepLink={`deursocial://event/${slug}/posts/${postSlug}`} />;
}
