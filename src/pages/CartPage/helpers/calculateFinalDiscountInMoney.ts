import { FRACTION_DIGITS } from '@/services/ecommerce';

export function calculateFinalDiscountInMoney(finalPrice: number, discount: number): number {
  const price = (finalPrice * (100 - discount)) / 100;
  return +price.toFixed(FRACTION_DIGITS);
}
