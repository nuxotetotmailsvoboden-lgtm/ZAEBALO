'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileStats from '@/components/profile/ProfileStats';
import { useUser } from '@/context/UserContext';
import { useHaptic } from '@/hooks/useTelegram';

export default function ProfilePage() {
  const { user, isAdmin } = useUser();
  const router = useRouter();
  const { impact } = useHaptic();

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto px-4 pb-20">
        <Header />
        <div className="mt-10 text-center">Загрузка...</div>
        <BottomNavigation />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 pb-20">
      <Header />
      <div className="mt-4">
        <ProfileHeader user={user} isAdmin={isAdmin} />
        <ProfileStats user={user} />
        <button
          onClick={() => { impact('light'); router.push('/'); }}
          className="w-full mt-4 btn-secondary text-center"
        >
          ← На главную
        </button>
      </div>
      <BottomNavigation />
    </div>
  );
}
