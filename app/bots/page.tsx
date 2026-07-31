'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { useHaptic } from '@/hooks/useTelegram';

// Данные ботов — можно потом вынести в отдельный файл
const allBots = [
  {
    id: 1,
    name: 'Интернет-магазин',
    category: 'Магазины',
    icon: '🛍️',
    description: 'Полноценный каталог, корзина, оплата, доставка, история заказов.',
    tags: ['Оплата', 'Доставка', 'Каталог'],
    price: 'от 90 000 ₽',
    demo: '/demo/shop',
  },
  {
    id: 2,
    name: 'Салон красоты',
    category: 'Услуги',
    icon: '💇‍♀️',
    description: 'Онлайн-запись, календарь, напоминания, прайс-лист, отзывы.',
    tags: ['Запись', 'Календарь', 'Уведомления'],
    price: 'от 70 000 ₽',
    demo: '/demo/beauty',
  },
  {
    id: 3,
    name: 'Доставка еды',
    category: 'Доставка',
    icon: '🍕',
    description: 'Меню, корзина, оплата, отслеживание заказа, рейтинг курьеров.',
    tags: ['Меню', 'Трекинг', 'Оплата'],
    price: 'от 120 000 ₽',
    demo: '/demo/food',
  },
  {
    id: 4,
    name: 'Недвижимость',
    category: 'Другое',
    icon: '🏠',
    description: 'Каталог объектов, фильтры, избранное, заявки на просмотр.',
    tags: ['Каталог', 'Фильтры', 'Заявки'],
    price: 'от 100 000 ₽',
    demo: '/demo/realty',
  },
  {
    id: 5,
    name: 'Образование',
    category: 'Услуги',
    icon: '📚',
    description: 'Расписание, онлайн-запись, личный кабинет, уведомления об уроках.',
    tags: ['Расписание', 'Запись', 'Личный кабинет'],
    price: 'от 80 000 ₽',
    demo: '/demo/edu',
  },
  {
    id: 6,
    name: 'Автосервис',
    category: 'Услуги',
    icon: '🔧',
    description: 'Запись по услугам, прайс-лист, напоминания, история ремонтов.',
    tags: ['Запись', 'Прайс', 'История'],
    price: 'от 75 000 ₽',
    demo: '/demo/auto',
  },
  {
    id: 7,
    name: 'Кафе и рестораны',
    category: 'Доставка',
    icon: '🍽️',
    description: 'Меню, бронирование столиков, доставка, акции, отзывы.',
    tags: ['Меню', 'Бронирование', 'Доставка'],
    price: 'от 85 000 ₽',
    demo: '/demo/cafe',
  },
  {
    id: 8,
    name: 'Фитнес',
    category: 'Услуги',
    icon: '💪',
    description: 'Расписание занятий, абонементы, онлайн-оплата, личный кабинет.',
    tags: ['Расписание', 'Абонементы', 'Оплата'],
    price: 'от 95 000 ₽',
    demo: '/demo/fitness',
  },
];

const categories = ['Все', 'Магазины', 'Услуги', 'Доставка', 'Другое'];

export default function BotsPage() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const router = useRouter();
  const { impact } = useHaptic();

  const filteredBots =
    activeCategory === 'Все'
      ? allBots
      : allBots.filter((bot) => bot.category === activeCategory);

  return (
    <div className="max-w-2xl mx-auto px-4 pb-20">
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4"
      >
        <h1 className="text-2xl font-bold">Готовые боты</h1>
        <p className="text-sm text-purple-200/50 mb-4">
          Выберите готовое решение для вашего бизнеса
        </p>

        {/* Фильтры по категориям */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                impact('light');
                setActiveCategory(cat);
              }}
              className={`px-4 py-1.5 rounded-full border text-sm transition ${
                activeCategory === cat
                  ? 'bg-purple-500/20 border-purple-500 text-white'
                  : 'bg-white/5 border-white/10 text-purple-200/70 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Список ботов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="wait">
            {filteredBots.map((bot) => (
              <motion.div
                key={bot.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass p-4 hover:border-purple-500/30 transition-all cursor-pointer"
                onClick={() => {
                  impact('light');
                  // Можно открыть страницу бота или демо
                  router.push(bot.demo);
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="text-4xl">{bot.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{bot.name}</h3>
                    <p className="text-sm text-purple-200/60 mt-1 line-clamp-2">
                      {bot.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {bot.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-white/5 px-2 py-0.5 rounded-full border border-white/5 text-purple-200/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm font-medium text-purple-300">
                        {bot.price}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          impact('medium');
                          router.push(bot.demo);
                        }}
                        className="btn-secondary text-xs py-1 px-3"
                      >
                        Демо
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredBots.length === 0 && (
          <div className="text-center text-purple-200/50 mt-8">
            Нет ботов в этой категории
          </div>
        )}
      </motion.div>

      <BottomNavigation />
    </div>
  );
}
