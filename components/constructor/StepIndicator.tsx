export default function StepIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div
          key={i}
          className={`h-2 rounded-full transition-all ${
            i === currentStep ? 'w-8 bg-purple-500' : i < currentStep ? 'w-2 bg-purple-300/40' : 'w-2 bg-white/10'
          }`}
        />
      ))}
    </div>
  );
}
