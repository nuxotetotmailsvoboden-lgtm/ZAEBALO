'use client';

import { DesignType } from '@/types';
import { DESIGN_LIST } from '@/lib/constants';

interface Props {
  design: DesignType;
  setDesign: (d: DesignType) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function StepDesign({ design, setDesign, onNext, onPrev }: Props) {
  return (
    <div>
      <h3 className="text-lg font-semibold">Шаг 3. Дизайн</h3>
      <p className="text-sm text-purple-200/50 mb-4">Выберите стиль оформления</p>
      <div className="flex flex-wrap gap-2">
        {DESIGN_LIST.map((d) => (
          <button
            key={d}
            onClick={() => setDesign(d)}
            className={`px-4 py-2 rounded-xl border transition ${
              design === d
                ? 'bg-purple-500/20 border-purple-500 text-white'
                : 'bg-white/5 border-white/10 text-purple-200/70 hover:bg-white/10'
            }`}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <button onClick={onPrev} className="btn-ghost">← Назад</button>
        <button onClick={onNext} className="btn-primary">Далее →</button>
      </div>
    </div>
  );
}
