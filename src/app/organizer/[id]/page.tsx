import type { Metadata } from 'next';
import DeepLinkRedirect from '@/components/DeepLinkRedirect';

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function OrganizerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <DeepLinkRedirect deepLink={`deursocial://organizer/${id}`} />;
}
