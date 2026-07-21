'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import StepIndicator from '@/components/constructor/StepIndicator';
import StepType from '@/components/constructor/StepType';
import StepFunctions from '@/components/constructor/StepFunctions';
import StepDesign from '@/components/constructor/StepDesign';
import StepCost from '@/components/constructor/StepCost';
import { useConstructor } from '@/hooks/useConstructor';
import { useToast } from '@/hooks/useToast';
import { useHaptic } from '@/hooks/useTelegram';

export default function ConstructorPage() {
  const constructor = useConstructor();
  const { step, nextStep, prevStep } = constructor;
  const { show } = useToast();
  const { impact } = useHaptic();
  const router = useRouter();

  const renderStep = () => {
    switch (step) {
      case 0: return <StepType {...constructor} onNext={nextStep} />;
      case 1: return <StepFunctions {...constructor} onNext={nextStep} onPrev={prevStep} />;
      case 2: return <StepDesign {...constructor} onNext={nextStep} onPrev={prevStep} />;
      case 3: return <StepCost {...constructor} onPrev={prevStep} showToast={show} haptic={impact} router={router} />;
      default: return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 pb-20">
      <Header />
      <div className="mt-4">
        <StepIndicator currentStep={step} totalSteps={4} />
        <div className="glass p-5 md:p-7 mt-2">
          {renderStep()}
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}
