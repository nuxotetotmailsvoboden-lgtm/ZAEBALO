'use client';

import { FUNCTIONS_LIST } from '@/lib/constants';

interface Props {
  functions: string[];
  toggleFunction: (fn: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function StepFunctions({ functions, toggleFunction, onNext, onPrev }: Props) {
  return (
    <div>
      <h3 className="text-lg font-semibold">Шаг 2. Функции</h3>
      <p className="text-sm text-purple-200/50 mb-4">Отметьте нужные возможности</p>
      <div className="flex flex-wrap gap-2">
        {FUNCTIONS_LIST.map((fn) => (
          <button
            key={fn}
            onClick={() => toggleFunction(fn)}
            className={`px-3 py-1.5 rounded-xl border transition text-sm ${
              functions.includes(fn)
                ? 'bg-purple-500/20 border-purple-500 text-white'
                : 'bg-white/5 border-white/10 text-purple-200/70 hover:bg-white/10'
            }`}
          >
            {fn}
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
