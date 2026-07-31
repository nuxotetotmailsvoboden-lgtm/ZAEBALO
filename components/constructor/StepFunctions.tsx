'use client';

const functions = [
  'Регистрация',
  'Личный кабинет',
  'Каталог товаров/услуг',
  'Онлайн-запись',
  'Оплата (Kaspi Pay)',
  'Доставка',
  'История заказов',
  'Уведомления в Telegram',
  'Рассылка сообщений',
  'CRM система',
];

export default function StepFunctions({ selected, toggle, onNext, onPrev }) {
  return (
    <div>
      <h3 className="text-lg font-semibold">2. Выберите функции</h3>
      <p className="text-sm text-purple-200/50 mb-3">Отметьте нужные функции для вашего бота</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {functions.map((fn) => (
          <button
            key={fn}
            onClick={() => toggle(fn)}
            className={`px-3 py-2 rounded-xl border text-sm text-left transition ${
              selected.includes(fn)
                ? 'bg-purple-500/20 border-purple-500 text-white'
                : 'bg-white/5 border-white/10 text-purple-200/70 hover:bg-white/10'
            }`}
          >
            {fn}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={onPrev} className="text-purple-200/70 text-sm">← Назад</button>
        <button onClick={onNext} className="bg-purple-600 text-white px-6 py-2 rounded-xl text-sm">Далее →</button>
      </div>
    </div>
  );
}
