'use client';

import { motion } from 'framer-motion';
import { Bot, Smartphone, Brain, BarChart3, Zap, Palette } from 'lucide-react';

const services = [
  { icon: Bot, title: 'Telegram Bot', desc: 'Умные боты для продаж и поддержки' },
  { icon: Smartphone, title: 'Mini App', desc: 'Полноценные приложения внутри Telegram' },
  { icon: Brain, title: 'AI Assistant', desc: 'Чат-боты с искусственным интеллектом' },
  { icon: BarChart3, title: 'CRM', desc: 'Системы управления клиентами' },
  { icon: Zap, title: 'Automation', desc: 'Автоматизация бизнес-процессов' },
  { icon: Palette, title: 'UI/UX', desc: 'Премиальный дизайн и анимации' },
];

export default function Services() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold">Что мы создаём</h2>
      <p className="text-sm text-purple-200/50 mb-4">Выберите тип решения для вашего бизнеса</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="service-card group"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition-colors group-hover:bg-purple-500/20">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-white">{service.title}</h3>
            <p className="text-sm text-purple-200/50">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
