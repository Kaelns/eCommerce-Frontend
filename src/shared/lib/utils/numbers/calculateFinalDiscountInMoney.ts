import { round } from 'lodash';

export function calculateFinalDiscountInMoney(finalPrice: number, discount: number, fractionDigits: number): number {
  const price = (finalPrice * (100 - discount)) / 100;
  return round(price, fractionDigits);
}
