import type { Metadata } from 'next';
import DeepLinkRedirect from '@/components/DeepLinkRedirect';

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function ProfilePage({
  params,
  searchParams,
}: {
  params: Promise<{ username: string }>;
  searchParams: Promise<{ passport?: string }>;
}) {
  const { username } = await params;
  const { passport } = await searchParams;
  const deepLink = `deursocial://profile/${username}${passport ? `?passport=${passport}` : ''}`;
  return <DeepLinkRedirect deepLink={deepLink} />;
}
