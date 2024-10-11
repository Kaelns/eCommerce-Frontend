import { FRACTION_DIGITS } from '@/services/constants';

export function calculateDiscounted(finalPrice: number, discount: number): number {
  const price = (finalPrice * (100 - discount)) / 100;
  return +price.toFixed(FRACTION_DIGITS);
}
