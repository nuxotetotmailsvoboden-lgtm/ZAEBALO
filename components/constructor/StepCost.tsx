'use client';

import { useState } from 'react';

const prices = {
  'Базовый бот (Интернет-магазин)': 40000,
  'Регистрация': 10000,
  'Каталог товаров/услуг': 20000,
  'Оплата (Kaspi Pay)': 20000,
  'Доставка': 15000,
  'AI / ChatGPT': 25000,
  'CRM система': 20000,
  'Бонусная система': 15000,
};

export default function StepCost({ selectedFunctions, onPrev, onSubmit }) {
  const [promo, setPromo] = useState('');
  const [applied, setApplied] = useState(false);

  const total = 40000 + selectedFunctions.length * 10000;
  const finalTotal = applied ? total - 15000 : total;

  return (
    <div>
      <h3 className="text-lg font-semibold">3. Расчёт стоимости</h3>
      <p className="text-sm text-purple-200/50 mb-3">Итоговая стоимость вашего бота</p>
      
      <div className="space-y-1 text-sm">
        {Object.entries(prices).map(([name, price]) => (
          <div key={name} className="flex justify-between py-1 border-b border-white/5">
            <span>{name}</span>
            <span>{price.toLocaleString()} ₽</span>
          </div>
        ))}
        {selectedFunctions.map((fn) => (
          <div key={fn} className="flex justify-between py-1 border-b border-white/5 text-purple-300">
            <span>{fn}</span>
            <span>+ {Math.floor(Math.random() * 10000 + 5000).toLocaleString()} ₽</span>
          </div>
        ))}
      </div>

      {/* Промокод */}
      <div className="mt-4 p-3 bg-white/5 rounded-xl">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
            placeholder="Промокод"
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white"
          />
          <button
            onClick={() => setApplied(true)}
            className="bg-purple-600 text-white px-4 py-1.5 rounded-lg text-sm"
          >
            Применить
          </button>
        </div>
        {applied && (
          <div className="mt-1 text-xs text-purple-300 flex justify-between">
            <span>Скидка по промокоду</span>
            <span>- 15 000 ₽</span>
          </div>
        )}
      </div>

      {/* Итого */}
      <div className="mt-4 flex justify-between text-lg font-bold">
        <span>Итого</span>
        <div>
          {applied && <span className="text-purple-400 line-through text-sm mr-2">{total.toLocaleString()} ₽</span>}
          <span className="text-purple-400">{finalTotal.toLocaleString()} ₽</span>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={onPrev} className="text-purple-200/70 text-sm">← Назад</button>
        <button onClick={onSubmit} className="bg-purple-600 text-white px-6 py-2 rounded-xl text-sm">
          Оформить заявку
        </button>
      </div>
    </div>
  );
}
