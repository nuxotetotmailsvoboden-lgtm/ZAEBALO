import { ProjectType, DesignType } from '@/types';
import { BASE_COST, FUNC_COSTS, DESIGN_COSTS } from '@/lib/constants';

export function calculateTotal(type: ProjectType, functions: string[], design: DesignType): number {
  const base = BASE_COST;
  const funcSum = functions.reduce((acc, f) => acc + (FUNC_COSTS[f] || 0), 0);
  const designCost = DESIGN_COSTS[design] || 0;
  return base + funcSum + designCost;
}
