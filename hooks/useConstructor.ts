'use client';

import { useState } from 'react';
import { ProjectType, DesignType } from '@/types';
import { FUNCTIONS_LIST, DESIGN_LIST, PROJECT_TYPES } from '@/lib/constants';

export function useConstructor() {
  const [step, setStep] = useState(0);
  const [projectType, setProjectType] = useState<ProjectType>('Telegram Bot');
  const [functions, setFunctions] = useState<string[]>([]);
  const [design, setDesign] = useState<DesignType>('Light');
  const [description, setDescription] = useState('');

  const toggleFunction = (fn: string) => {
    if (functions.includes(fn)) {
      setFunctions(functions.filter(f => f !== fn));
    } else {
      setFunctions([...functions, fn]);
    }
  };

  const nextStep = () => setStep(Math.min(step + 1, 3));
  const prevStep = () => setStep(Math.max(step - 1, 0));

  return {
    step,
    setStep,
    projectType,
    setProjectType,
    functions,
    toggleFunction,
    design,
    setDesign,
    description,
    setDescription,
    nextStep,
    prevStep,
  };
}
