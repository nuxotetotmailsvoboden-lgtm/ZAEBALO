'use client';

import { usePathname, useRouter } from 'next/navigation';

const items = [
  { key: 'home', label: 'Главная', icon: '🏠', path: '/' },
  { key: 'bots', label: 'Боты', icon: '🤖', path: '/bots' },
  { key: 'calculate', label: 'Рассчитать', icon: '📊', path: '/constructor' },
  { key: 'portfolio', label: 'Портфолио', icon: '📁', path: '/portfolio' },
  { key: 'profile', label: 'Кабинет', icon: '👤', path: '/profile' },
];

export default function BottomNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a0f] border-t border-white/10 px-2 py-1 flex justify-around items-center h-16 z-50">
      {items.map((item) => {
        const active = pathname === item.path;
        return (
          <button
            key={item.key}
            onClick={() => router.push(item.path)}
            className={`flex flex-col items-center gap-0.5 text-xs ${
              active ? 'text-purple-400' : 'text-gray-500'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
