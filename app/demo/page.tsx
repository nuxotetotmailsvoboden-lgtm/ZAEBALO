'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { useHaptic } from '@/hooks/useTelegram';

// Данные демо-ботов
const demoBots = [
  {
    id: 'shop',
    name: 'Интернет-магазин',
    icon: '🛍️',
    description: 'Попробуйте полноценный магазин с каталогом, корзиной и оплатой',
    steps: ['Каталог', 'Корзина', 'Оформить заказ', 'Мои заказы'],
    demo: true,
  },
  {
    id: 'beauty',
    name: 'Салон красоты',
    icon: '💇‍♀️',
    description: 'Тест-драйв системы онлайн-записи с календарём и напоминаниями',
    steps: ['Услуги', 'Мастера', 'Запись', 'Мои записи'],
    demo: true,
  },
  {
    id: 'food',
    name: 'Доставка еды',
    icon: '🍕',
    description: 'Попробуйте заказать еду с трекингом доставки в реальном времени',
    steps: ['Меню', 'Корзина', 'Оплата', 'Трекинг'],
    demo: true,
  },
  {
    id: 'fitness',
    name: 'Фитнес-клуб',
    icon: '💪',
    description: 'Тест системы расписания, абонементов и онлайн-оплаты',
    steps: ['Расписание', 'Абонементы', 'Запись', 'Личный кабинет'],
    demo: true,
  },
];

export default function DemoPage() {
  const [activeBot, setActiveBot] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  const { impact } = useHaptic();

  const selectedBot = demoBots.find((b) => b.id === activeBot);

  const handleBotSelect = (botId: string) => {
    impact('medium');
    setActiveBot(botId);
    setCurrentStep(0);
  };

  const handleNextStep = () => {
    if (selectedBot && currentStep < selectedBot.steps.length - 1) {
      impact('light');
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      impact('light');
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 pb-20">
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4"
      >
        <h1 className="text-2xl font-bold">Демо-боты</h1>
        <p className="text-sm text-purple-200/50 mb-4">
          Попробуйте ботов вживую перед заказом
        </p>

        {!activeBot ? (
          // Список демо-ботов
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {demoBots.map((bot) => (
              <motion.div
                key={bot.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleBotSelect(bot.id)}
                className="glass p-4 cursor-pointer hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{bot.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white">{bot.name}</h3>
                    <p className="text-sm text-purple-200/60 mt-1">
                      {bot.description}
                    </p>
                    <button className="mt-3 btn-primary text-xs py-1.5 px-3">
                      Открыть демо
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Демо-плеер
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => {
                  impact('light');
                  setActiveBot(null);
                }}
                className="text-purple-300 hover:text-white text-sm"
              >
                ← Назад к списку
              </button>
              <span className="text-sm text-purple-200/50">
                {currentStep + 1} / {selectedBot?.steps.length}
              </span>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-3">{selectedBot?.icon}</div>
              <h3 className="text-xl font-bold">{selectedBot?.name}</h3>
              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl mb-2">
                  {['📋', '🛒', '📦', '📊'][currentStep % 4]}
                </div>
                <p className="text-lg font-semibold">
                  {selectedBot?.steps[currentStep]}
                </p>
                <p className="text-sm text-purple-200/50 mt-1">
                  Шаг {currentStep + 1} из {selectedBot?.steps.length}
                </p>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={handlePrevStep}
                  disabled={currentStep === 0}
                  className="btn-secondary text-sm py-1.5 px-4 disabled:opacity-30"
                >
                  ← Назад
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={currentStep === (selectedBot?.steps.length || 0) - 1}
                  className="btn-primary text-sm py-1.5 px-4"
                >
                  Далее →
                </button>
              </div>

              {currentStep === (selectedBot?.steps.length || 0) - 1 && (
                <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-sm text-purple-300">
                  🎉 Демо завершено! Хотите такой же бот для бизнеса?
                  <button
                    onClick={() => {
                      impact('medium');
                      router.push('/constructor');
                    }}
                    className="block mx-auto mt-2 btn-primary text-xs py-1.5 px-4"
                  >
                    Рассчитать стоимость
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>

      <BottomNavigation />
    </div>
  );
}
