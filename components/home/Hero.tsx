'use client';

import { useRouter } from 'next/navigation';
import { useHaptic } from '@/hooks/useTelegram';

export default function Hero() {
  const router = useRouter();
  const { impact } = useHaptic();

  return (
    <section className="mt-4 glass p-6 md:p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Создаём <span className="neon-text">продающих ботов</span> для бизнеса
      </h1>
      <p className="text-purple-200/70 mt-2 text-lg">
        Автоматизация, продажи, рост — в одном Telegram-приложении.
      </p>
      <div className="flex flex-wrap gap-3 mt-6">
        <button
          onClick={() => { impact('medium'); router.push('/constructor'); }}
          className="btn-primary"
        >
          🚀 Начать
        </button>
        <button
          onClick={() => { impact('light'); }}
          className="btn-secondary"
        >
          ▶ Смотреть демо
        </button>
      </div>
    </section>
  );
}
