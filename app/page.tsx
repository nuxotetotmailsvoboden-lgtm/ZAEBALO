'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  TrendingUp, 
  Clock, 
  Users, 
  Zap, 
  Smartphone, 
  Bot, 
  Brain,
  BarChart,
  Palette,
  ArrowRight,
  Star
} from 'lucide-react';
import { useUser } from '@/context/UserContext';
import { useHaptic } from '@/hooks/useTelegram';
import { cn } from '@/lib/utils';

// Компоненты
const GlassCard = ({ children, className, ...props }: any) => (
  <div className={cn("glass p-6 md:p-8", className)} {...props}>
    {children}
  </div>
);

export default function HomePage() {
  const router = useRouter();
  const { user, isAdmin } = useUser();
  const { impact } = useHaptic();

  const stats = [
    { number: '200+', label: 'готовых решений', icon: <Sparkles className="w-5 h-5 text-purple-400" /> },
    { number: '1000+', label: 'довольных клиентов', icon: <Users className="w-5 h-5 text-purple-400" /> },
    { number: '50+', label: 'функций в боте', icon: <Zap className="w-5 h-5 text-purple-400" /> },
    { number: '24/7', label: 'поддержка', icon: <Clock className="w-5 h-5 text-purple-400" /> },
  ];

  const services = [
    { icon: <Bot className="w-8 h-8" />, title: 'Telegram Bot', desc: 'Умные боты для продаж и поддержки' },
    { icon: <Smartphone className="w-8 h-8" />, title: 'Mini App', desc: 'Полноценные приложения внутри Telegram' },
    { icon: <Brain className="w-8 h-8" />, title: 'AI Assistant', desc: 'Чат-боты с искусственным интеллектом' },
    { icon: <BarChart className="w-8 h-8" />, title: 'CRM', desc: 'Системы управления клиентами' },
    { icon: <Zap className="w-8 h-8" />, title: 'Automation', desc: 'Автоматизация бизнес-процессов' },
    { icon: <Palette className="w-8 h-8" />, title: 'UI/UX', desc: 'Премиальный дизайн и анимации' },
  ];

  const features = [
    { icon: '💎', title: 'Индивидуальный подход', desc: 'Разрабатываем решение под ваш бизнес' },
    { icon: '⚡', title: 'Быстрые сроки', desc: 'От 3 дней до готового продукта' },
    { icon: '🛡️', title: 'Гарантия и безопасность', desc: 'Ваши данные под надёжной защитой' },
    { icon: '🔄', title: 'Поддержка 24/7', desc: 'Помогаем после запуска' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 pb-24">
      {/* ===== HERO ===== */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden mt-4"
      >
        <GlassCard className="relative">
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
          
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-purple-300 mb-4">
                <Sparkles className="w-4 h-4" />
                Telegram Mini App
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                Создаём <span className="neon-text neon-glow">продающих ботов</span>
                <br />
                для вашего бизнеса
              </h1>
              
              <p className="text-base md:text-lg text-purple-200/70 mt-4 max-w-md leading-relaxed">
                Автоматизация, продажи, рост — в одном Telegram-приложении. 
                Выберите решение за 5 минут.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                <button
                  onClick={() => { impact('medium'); router.push('/constructor'); }}
                  className="btn-primary group"
                >
                  🚀 Начать
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => { impact('light'); }}
                  className="btn-secondary"
                >
                  ▶ Смотреть демо
                </button>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border border-purple-500/20 flex items-center justify-center text-7xl animate-float">
                🤖
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.section>

      {/* ===== STATS ===== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6"
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="flex items-center justify-center gap-1">
              {stat.icon}
              <span className="text-2xl md:text-3xl font-bold neon-text">{stat.number}</span>
            </div>
            <div className="text-xs text-purple-200/50 mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.section>

      {/* ===== SERVICES ===== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10"
      >
        <h2 className="text-2xl font-bold">Что мы создаём</h2>
        <p className="text-sm text-purple-200/50 mb-4">Выберите решение для вашего бизнеса</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {services.map((service, idx) => (
            <div key={idx} className="service-card group">
              <div className="text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-semibold text-sm">{service.title}</h3>
              <p className="text-xs text-purple-200/50 mt-1">{service.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ===== WHY US ===== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10"
      >
        <h2 className="text-2xl font-bold">Почему NOVA</h2>
        <p className="text-sm text-purple-200/50 mb-4">Преимущества работы с нами</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((feature, idx) => (
            <div key={idx} className="glass p-4 flex items-start gap-4 hover:border-purple-500/20 transition">
              <span className="text-2xl">{feature.icon}</span>
              <div>
                <h4 className="font-semibold text-sm">{feature.title}</h4>
                <p className="text-xs text-purple-200/50">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ===== CTA ===== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10"
      >
        <GlassCard className="text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5" />
          <div className="relative">
            <h3 className="text-xl md:text-2xl font-bold">Готовы запустить свой бот?</h3>
            <p className="text-purple-200/60 mt-1">Начните прямо сейчас — заполните конструктор за 5 минут</p>
            <button
              onClick={() => { impact('medium'); router.push('/constructor'); }}
              className="btn-primary mt-5"
            >
              🔥 Заказать проект
            </button>
          </div>
        </GlassCard>
      </motion.section>

      {/* ===== ADMIN BADGE ===== */}
      {isAdmin && (
        <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-sm text-purple-300 text-center">
          👑 Вы админ. Все заявки будут приходить в ваш Telegram.
        </div>
      )}
    </div>
  );
}
