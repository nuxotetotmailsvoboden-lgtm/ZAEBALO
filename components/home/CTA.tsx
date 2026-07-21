'use client';

import { useRouter } from 'next/navigation';
import { useHaptic } from '@/hooks/useTelegram';

export default function CTA() {
  const router = useRouter();
  const { impact } = useHaptic();

  return (
    <div className="mt-10 glass p-6 text-center">
      <h3 className="text-xl font-bold">Готовы запустить свой бот?</h3>
      <p className="text-purple-200/60 mt-1">Начните прямо сейчас — заполните конструктор за 5 минут</p>
      <button
        onClick={() => { impact('medium'); router.push('/constructor'); }}
        className="btn-primary mt-4"
      >
        🔥 Заказать проект
      </button>
    </div>
  );
}
