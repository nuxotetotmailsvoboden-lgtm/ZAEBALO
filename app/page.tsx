'use client';

import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Services from '@/components/home/Services';
import WhyUs from '@/components/home/WhyUs';
import CTA from '@/components/home/CTA';
import { useUser } from '@/context/UserContext';

export default function HomePage() {
  const { isAdmin } = useUser();

  return (
    <div className="max-w-2xl mx-auto px-4 pb-20">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <CTA />
      {isAdmin && (
        <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-sm text-purple-300 text-center">
          👑 Вы админ. Все заявки будут приходить в ваш Telegram.
        </div>
      )}
      <BottomNavigation />
    </div>
  );
}
