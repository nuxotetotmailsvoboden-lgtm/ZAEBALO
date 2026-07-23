'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Headphones, Sparkles } from 'lucide-react';

const reasons = [
  { icon: Sparkles, title: 'Индивидуальный подход', desc: 'Разрабатываем под ваш бизнес' },
  { icon: Zap, title: 'Быстрые сроки', desc: 'От 3 дней до готового продукта' },
  { icon: Shield, title: 'Гарантия и безопасность', desc: 'Ваши данные под защитой' },
  { icon: Headphones, title: 'Поддержка 24/7', desc: 'Помогаем после запуска' },
];

export default function WhyUs() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold">Почему NOVA</h2>
      <p className="text-sm text-purple-200/50 mb-4">Преимущества работы с нами</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass p-4 flex items-start gap-4 hover:border-purple-500/20 transition-all"
          >
            <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400">
              <reason.icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white">{reason.title}</h4>
              <p className="text-sm text-purple-200/50">{reason.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
