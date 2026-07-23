'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useHaptic } from '@/hooks/useTelegram';

export default function Hero() {
  const router = useRouter();
  const { impact } = useHaptic();

  return (
    <section className="relative mt-4 overflow-hidden rounded-3xl glass p-8 md:p-12">
      {/* Glow-эффект */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative flex flex-col items-center text-center md:flex-row md:text-left gap-8">
        {/* Текстовая часть */}
        <div className="flex-1 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300 border border-purple-500/20">
              ⚡ Telegram Mini App
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold leading-tight tracking-tight"
          >
            Создаём <span className="neon-text neon-glow">продающих ботов</span>
            <br />
            для вашего бизнеса
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-purple-200/70 max-w-md mx-auto md:mx-0"
          >
            Автоматизация, продажи, рост — в одном Telegram-приложении.
            Выберите решение под ваш бизнес за 5 минут.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <button
              onClick={() => {
                impact('medium');
                router.push('/constructor');
              }}
              className="btn-primary"
            >
              🚀 Начать
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                impact('light');
                // Демо-режим
              }}
              className="btn-secondary"
            >
              <Play className="h-4 w-4" />
              Смотреть демо
            </button>
          </motion.div>
        </div>

        {/* Иллюстрация (3D-стиль) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-shrink-0"
        >
          <div className="relative h-48 w-48 md:h-56 md:w-56">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 blur-xl" />
            <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-purple-500/20 bg-white/5 text-7xl backdrop-blur-sm">
              🤖
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
