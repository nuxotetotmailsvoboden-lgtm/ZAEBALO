'use client';

import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { useHaptic } from '@/hooks/useTelegram';

export default function Header() {
  const { user } = useUser();
  const router = useRouter();
  const { impact } = useHaptic();

  return (
    <header className="flex items-center justify-between py-4 px-2">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/20">
          N
        </div>
        <span className="text-xl font-bold tracking-tight text-white">NOVA</span>
        {user && (
          <span className="text-xs text-purple-300/50 bg-white/5 px-2 py-0.5 rounded-full">
            {user.username || user.first_name}
          </span>
        )}
      </div>
      <button
        onClick={() => { impact('light'); router.push('/profile'); }}
        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:bg-white/10 transition"
      >
        👤
      </button>
    </header>
  );
}
