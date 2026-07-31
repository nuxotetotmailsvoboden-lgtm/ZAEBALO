'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { useUser } from '@/context/UserContext';

export default function HomePage() {
  const router = useRouter();
  const { isAdmin } = useUser();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white px-4 pb-24">
      <Header />

      {/* Hero — как на картинке */}
      <section className="mt-6 text-center">
        <h1 className="text-3xl font-bold">
          Создаём <span className="text-purple-400">Telegram-ботов</span>
        </h1>
        <p className="text-lg text-purple-300/70 mt-1">Которые работают вместо сотрудников</p>
        <p className="text-sm text-purple-200/50 mt-1 max-w-xs mx-auto">
          Автоматизируйте бизнес-процессы, увеличивайте продажи и экономьте время с помощью умных ботов
        </p>
        <div className="flex justify-center gap-3 mt-5">
          <button
            onClick={() => router.push('/constructor')}
            className="bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm shadow-lg"
          >
            Рассчитать стоимость
          </button>
          <button className="bg-white/10 text-white px-6 py-2.5 rounded-xl text-sm border border-white/10">
            Смотреть демо
          </button>
        </div>
      </section>

      {/* Готовые решения — 4 плитки */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Готовые решения</h2>
        <p className="text-sm text-purple-200/50 mb-3">Выберите готового бота для вашего бизнеса</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: '📁', title: 'Портфолио', desc: 'Наши работы и кейсы', path: '/portfolio' },
            { icon: '⭐', title: 'Отзывы клиентов', desc: 'Реальные отзывы и результаты', path: '/reviews' },
            { icon: '🤖', title: 'Демо-боты', desc: 'Попробуйте ботов вживую', path: '/demo' },
            { icon: '🎁', title: 'Акции и бонусы', desc: 'Промокоды, скидки и подарки', path: '/promo' },
          ].map((item) => (
            <div
              key={item.title}
              onClick={() => router.push(item.path)}
              className="bg-white/5 rounded-xl p-3 cursor-pointer hover:bg-white/10 transition"
            >
              <div className="text-2xl">{item.icon}</div>
              <div className="font-medium text-sm mt-1">{item.title}</div>
              <div className="text-xs text-purple-200/50">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Статистика */}
      <section className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { number: '200+', label: 'готовых решений' },
          { number: '1000+', label: 'довольных клиентов' },
          { number: '50+', label: 'функций в боте' },
          { number: '24/7', label: 'поддержка' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/5 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-purple-400">{stat.number}</div>
            <div className="text-xs text-purple-200/50">{stat.label}</div>
          </div>
        ))}
      </section>

      {isAdmin && (
        <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-sm text-purple-300 text-center">
          👑 Вы админ.
        </div>
      )}

      <BottomNavigation />
    </div>
  );
}
