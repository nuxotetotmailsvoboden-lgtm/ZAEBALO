'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useHaptic } from '@/hooks/useTelegram';

const items = [
  { key: 'home', label: 'Главная', icon: '🏠', path: '/' },
  { key: 'constructor', label: 'Конструктор', icon: '⚙️', path: '/constructor' },
  { key: 'portfolio', label: 'Портфолио', icon: '📁', path: '/portfolio' },
  { key: 'profile', label: 'Профиль', icon: '👤', path: '/profile' },
];

export default function BottomNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { impact } = useHaptic();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a0f]/85 backdrop-blur-2xl border-t border-white/5 py-1 px-2 flex justify-around items-center h-[72px] z-50">
      {items.map((item) => {
        const active = pathname === item.path;
        return (
          <button
            key={item.key}
            onClick={() => { impact('light'); router.push(item.path); }}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all relative ${
              active ? 'text-purple-400' : 'text-[#706a80] hover:text-purple-300/70'
            }`}
          >
            <span className="text-2xl leading-none">{item.icon}</span>
            <span className="text-[10px] font-medium">{item.label}</span>
            {active && <span className="absolute -top-1 w-5 h-1 bg-purple-500 rounded-full" />}
          </button>
        );
      })}
    </nav>
  );
}
