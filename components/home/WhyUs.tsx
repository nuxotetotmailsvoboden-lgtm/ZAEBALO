const reasons = [
  { icon: '💎', title: 'Индивидуальный подход', desc: 'Разрабатываем под ваш бизнес' },
  { icon: '⚡', title: 'Быстрые сроки', desc: 'От 3 дней до готового продукта' },
  { icon: '🛡️', title: 'Гарантия и безопасность', desc: 'Ваши данные под защитой' },
  { icon: '🔄', title: 'Поддержка 24/7', desc: 'Помогаем после запуска' },
];

export default function WhyUs() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold">Почему NOVA</h2>
      <p className="text-sm text-purple-200/50 mb-4">Преимущества работы с нами</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {reasons.map((r) => (
          <div key={r.title} className="glass p-4 flex items-start gap-4">
            <span className="text-2xl">{r.icon}</span>
            <div>
              <h4 className="font-semibold">{r.title}</h4>
              <p className="text-xs text-purple-200/50">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
