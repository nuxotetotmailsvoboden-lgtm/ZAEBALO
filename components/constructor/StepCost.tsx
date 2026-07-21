'use client';

import { useState } from 'react';
import { ProjectType, DesignType } from '@/types';
import { calculateTotal } from '@/utils/priceCalculator';
import { submitRequest } from '@/services/api';
import { useUser } from '@/context/UserContext';

interface Props {
  projectType: ProjectType;
  functions: string[];
  design: DesignType;
  description: string;
  setDescription: (d: string) => void;
  onPrev: () => void;
  showToast: (msg: string) => void;
  haptic: (style: 'light' | 'medium' | 'heavy') => void;
  router: any;
}

export default function StepCost({
  projectType,
  functions,
  design,
  description,
  setDescription,
  onPrev,
  showToast,
  haptic,
  router,
}: Props) {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const total = calculateTotal(projectType, functions, design);

  const handleSubmit = async () => {
    if (!user) {
      showToast('❌ Ошибка: пользователь не определён');
      return;
    }
    setLoading(true);
    try {
      const payload = {
        type: projectType,
        functions,
        design,
        description: description.trim() || 'Без описания',
        cost: total,
        user,
        timestamp: new Date().toISOString(),
      };
      const result = await submitRequest(payload);
      if (result.success) {
        haptic('medium');
        showToast('✅ Заявка отправлена! Мы свяжемся с вами.');
        router.push('/');
      } else {
        showToast('❌ Ошибка: ' + (result.error || 'попробуйте позже'));
      }
    } catch (e: any) {
      showToast('❌ Ошибка сети: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">Шаг 4. Стоимость и заявка</h3>
      <div className="space-y-2 text-sm mt-3">
        <div className="flex justify-between py-1 border-b border-white/5">
          <span>Базовый бот</span>
          <span className="font-medium">40 000 ₽</span>
        </div>
        <div className="flex justify-between py-1 border-b border-white/5">
          <span>Функции ({functions.length})</span>
          <span className="font-medium">{calculateTotal(projectType, functions, 'Light') - 40000} ₽</span>
        </div>
        <div className="flex justify-between py-1 border-b border-white/5">
          <span>Дизайн ({design})</span>
          <span className="font-medium">{total - calculateTotal(projectType, functions, 'Light')} ₽</span>
        </div>
        <div className="flex justify-between py-1 border-b border-white/5 text-purple-300">
          <span>Срок</span>
          <span className="font-medium">от {Math.max(3, 5 + Math.floor(functions.length / 3))} дней</span>
        </div>
        <div className="flex justify-between pt-3 text-lg font-bold">
          <span>Итого</span>
          <span className="neon-text">{total.toLocaleString()} ₽</span>
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm text-purple-200/60 block mb-1">Описание проекта</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder:text-purple-200/30 focus:outline-none focus:border-purple-500/50 transition resize-none"
          placeholder="Расскажите о вашей идее..."
        />
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={onPrev} className="btn-ghost">← Назад</button>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn-primary disabled:opacity-50"
        >
          {loading ? 'Отправка...' : '📨 Отправить заявку'}
        </button>
      </div>
    </div>
  );
}
