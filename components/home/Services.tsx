const services = [
  { icon: '🤖', title: 'Telegram Bot', desc: 'Умные боты для продаж и поддержки' },
  { icon: '📱', title: 'Mini App', desc: 'Полноценные приложения внутри Telegram' },
  { icon: '🧠', title: 'AI Assistant', desc: 'Чат-боты с искусственным интеллектом' },
  { icon: '📊', title: 'CRM', desc: 'Системы управления клиентами' },
  { icon: '⚡', title: 'Automation', desc: 'Автоматизация бизнес-процессов' },
  { icon: '🎨', title: 'UI/UX', desc: 'Премиальный дизайн и анимации' },
];

export default function Services() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold">Что мы создаём</h2>
      <p className="text-sm text-purple-200/50 mb-4">Выберите тип решения для вашего бизнеса</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {services.map((s) => (
          <div key={s.title} className="glass p-4 hover:border-purple-500/30 transition">
            <div className="text-3xl">{s.icon}</div>
            <h3 className="font-semibold mt-1">{s.title}</h3>
            <p className="text-xs text-purple-200/50">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
