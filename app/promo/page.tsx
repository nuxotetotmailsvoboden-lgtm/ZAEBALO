'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { useHaptic } from '@/hooks/useTelegram';
import { useUser } from '@/context/UserContext';

const promos = [
  {
    id: 'start10',
    title: 'Стартовый бонус',
    code: 'START10',
    description: 'Скидка 10% на первый заказ',
    discount: '10%',
    expires: '31.12.2026',
    color: 'from-purple-500 to-pink-500',
    icon: '🚀',
    active: true,
  },
  {
    id: 'summer25',
    title: 'Летняя распродажа',
    code: 'SUMMER25',
    description: 'Скидка 25% на все боты до конца лета',
    discount: '25%',
    expires: '31.08.2026',
    color: 'from-orange-500 to-yellow-500',
    icon: '☀️',
    active: true,
  },
  {
    id: 'referral',
    title: 'Реферальная программа',
    code: 'REFERRAL',
    description: 'Приведи друга и получи 15 000 ₽ на бонусный счёт',
    discount: '15 000 ₽',
    expires: 'бессрочно',
    color: 'from-green-500 to-emerald-500',
    icon: '👥',
    active: true,
  },
  {
    id: 'social',
    title: 'Бонус за подписку',
    code: 'SOCIAL',
    description: 'Подпишись на наш Telegram-канал и получи 5% скидку',
    discount: '5%',
    expires: 'бессрочно',
    color: 'from-blue-500 to-cyan-500',
    icon: '📱',
    active: true,
  },
  {
    id: 'expired',
    title: 'Новогодний бонус',
    code: 'NEWYEAR',
    description: 'Скидка 50% на все боты в январе',
    discount: '50%',
    expires: '31.01.2026',
    color: 'from-red-500 to-rose-500',
    icon: '🎄',
    active: false,
  },
];

export default function PromoPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const router = useRouter();
  const { impact } = useHaptic();
  const { user } = useUser();

  const handleCopyCode = (code: string, id: string) => {
    impact('medium');
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const activePromos = promos.filter((p) => p.active);
  const expiredPromos = promos.filter((p) => !p.active);

  return (
    <div className="max-w-2xl mx-auto px-4 pb-20">
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4"
      >
        <h1 className="text-2xl font-bold">Акции и бонусы</h1>
        <p className="text-sm text-purple-200/50 mb-4">
          Промокоды, скидки и подарки для наших клиентов
        </p>

        {/* Активные акции */}
        <div className="space-y-4 mb-6">
          {activePromos.map((promo) => (
            <motion.div
              key={promo.id}
              whileHover={{ scale: 1.01 }}
              className={`glass p-4 border-l-4 border-transparent hover:border-purple-500/50 transition-all`}
              style={{ borderColor: promo.active ? 'rgb(168,85,247)' : 'transparent' }}
            >
              <div className="flex items-start gap-3">
                <div className={`text-3xl bg-gradient-to-br ${promo.color} rounded-xl p-2 text-white`}>
                  {promo.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">{promo.title}</h3>
                    <span className={`text-sm font-bold bg-gradient-to-r ${promo.color} bg-clip-text text-transparent`}>
                      {promo.discount}
                    </span>
                  </div>
                  <p className="text-sm text-purple-200/60 mt-0.5">{promo.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-purple-200/30">До: {promo.expires}</span>
                    <button
                      onClick={() => handleCopyCode(promo.code, promo.id)}
                      className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-white/10 transition"
                    >
                      {copiedId === promo.id ? '✅ Скопирован!' : `📋 ${promo.code}`}
                    </button>
                  </div>
                  {user && (
                    <button
                      onClick={() => {
                        impact('medium');
                        router.push('/constructor');
                      }}
                      className="mt-2 btn-primary text-xs py-1 px-3"
                    >
                      Применить
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Истёкшие акции */}
        {expiredPromos.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-purple-200/50 mb-2">Истёкшие акции</h3>
            <div className="space-y-2 opacity-50">
              {expiredPromos.map((promo) => (
                <div
                  key={promo.id}
                  className="glass p-3 flex items-center gap-3"
                >
                  <span className="text-2xl">{promo.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-white">{promo.title}</span>
                      <span className="text-xs text-red-400">❌ истекла</span>
                    </div>
                    <p className="text-xs text-purple-200/50">{promo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Блок с реферальной программой */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 glass p-4 border border-purple-500/20"
        >
          <h3 className="font-semibold flex items-center gap-2">
            <span>🤝</span> Приведи друга и заработай
          </h3>
          <p className="text-sm text-purple-200/60 mt-1">
            Получи 15 000 ₽ на бонусный счёт за каждого привлечённого клиента
          </p>
          {user ? (
            <button
              onClick={() => {
                impact('medium');
                navigator.clipboard.writeText(`Привет! Используй мой реферальный код: NOVA-${user.id}`);
                alert('✅ Реферальная ссылка скопирована!');
              }}
              className="btn-primary text-xs py-1.5 px-4 mt-2"
            >
              🎁 Получить реферальную ссылку
            </button>
          ) : (
            <p className="text-xs text-purple-200/30 mt-1">Авторизуйтесь, чтобы получить реферальную ссылку</p>
          )}
        </motion.div>
      </motion.div>

      <BottomNavigation />
    </div>
  );
}
