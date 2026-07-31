'use client';

const types = [
  'Интернет-магазин',
  'Салон красоты',
  'Доставка еды',
  'Недвижимость',
  'Образование',
  'Автосервис',
  'Кафе и рестораны',
  'Фитнес',
  'Другое',
];

export default function StepType({ selected, setSelected, onNext }) {
  return (
    <div>
      <h3 className="text-lg font-semibold">1. Выберите тип бота</h3>
      <p className="text-sm text-purple-200/50 mb-3">Выберите форму вашего бизнеса</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setSelected(type)}
            className={`px-3 py-2 rounded-xl border text-sm transition ${
              selected === type
                ? 'bg-purple-500/20 border-purple-500 text-white'
                : 'bg-white/5 border-white/10 text-purple-200/70 hover:bg-white/10'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={onNext} className="bg-purple-600 text-white px-6 py-2 rounded-xl text-sm">
          Далее →
        </button>
      </div>
    </div>
  );
}
