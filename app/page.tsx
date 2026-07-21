'use client';

import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { useUser } from '@/context/UserContext';

export default function HomePage() {
  const { user, isAdmin } = useUser();

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 pb-20">
        <Header />

        {/* Главный блок */}
        <section className="mt-4 glass p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Создаём <span className="neon-text">продающих ботов</span>
          </h1>
          <p className="text-purple-200/70 mt-2 text-lg">
            Автоматизация, продажи, рост — в одном Telegram-приложении.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-purple-500/30 hover:scale-105 transition">
              🚀 Начать
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition">
              ▶ Смотреть демо
            </button>
          </div>

          {isAdmin && (
            <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-sm text-purple-300">
              👑 Вы админ. Управление появится позже.
            </div>
          )}
        </section>

        {/* Статистика (заглушка) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {['200+ решений', '1000+ клиентов', '50+ функций', '24/7 поддержка'].map((item) => (
            <div key={item} className="glass p-3 text-center">
              <div className="text-xl font-bold neon-text">{item.split(' ')[0]}</div>
              <div className="text-xs text-purple-200/50">{item.split(' ').slice(1).join(' ')}</div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </>
  );
}
