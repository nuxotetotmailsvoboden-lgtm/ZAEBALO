'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useHaptic } from '@/hooks/useTelegram';

export default function CTA() {
  const router = useRouter();
  const { impact } = useHaptic();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10 glass p-8 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-3xl" />
      <div className="relative">
        <h3 className="text-2xl font-bold">Готовы запустить свой бот?</h3>
        <p className="text-purple-200/60 mt-2">Начните прямо сейчас — заполните конструктор за 5 минут</p>
        <button
          onClick={() => {
            impact('medium');
            router.push('/constructor');
          }}
          className="btn-primary mt-4"
        >
          🔥 Заказать проект
        </button>
      </div>
    </motion.div>
  );
}
