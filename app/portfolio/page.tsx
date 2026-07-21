'use client';

import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import ProjectCard from '@/components/portfolio/ProjectCard';

const projects = [
  { title: 'Flower Shop', desc: 'Интернет-магазин цветов с оплатой и доставкой', tags: ['Telegram Bot', 'Оплата', 'Доставка'], emoji: '🌸' },
  { title: 'Food Delivery', desc: 'Доставка еды с каталогом и трекингом', tags: ['Mini App', 'Карта', 'Push'], emoji: '🍕' },
  { title: 'Beauty Salon', desc: 'Онлайн-запись с календарём и напоминаниями', tags: ['Бронирование', 'CRM', 'Уведомления'], emoji: '💇' },
  { title: 'Fitness Club', desc: 'Клубная система с расписанием и абонементами', tags: ['Подписки', 'Календарь', 'AI'], emoji: '🏋️' },
];

export default function PortfolioPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pb-20">
      <Header />
      <h2 className="text-xl font-bold mt-4">Портфолио</h2>
      <p className="text-sm text-purple-200/50 mb-4">Наши работы и кейсы</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
      <BottomNavigation />
    </div>
  );
}
