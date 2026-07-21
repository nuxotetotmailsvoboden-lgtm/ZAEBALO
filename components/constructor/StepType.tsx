'use client';

import { ProjectType } from '@/types';
import { PROJECT_TYPES } from '@/lib/constants';

interface Props {
  projectType: ProjectType;
  setProjectType: (t: ProjectType) => void;
  onNext: () => void;
}

export default function StepType({ projectType, setProjectType, onNext }: Props) {
  return (
    <div>
      <h3 className="text-lg font-semibold">Шаг 1. Тип проекта</h3>
      <p className="text-sm text-purple-200/50 mb-4">Выберите основное направление</p>
      <div className="flex flex-wrap gap-2">
        {PROJECT_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setProjectType(type)}
            className={`px-4 py-2 rounded-xl border transition ${
              projectType === type
                ? 'bg-purple-500/20 border-purple-500 text-white'
                : 'bg-white/5 border-white/10 text-purple-200/70 hover:bg-white/10'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <button onClick={onNext} className="btn-primary">Далее →</button>
      </div>
    </div>
  );
}
