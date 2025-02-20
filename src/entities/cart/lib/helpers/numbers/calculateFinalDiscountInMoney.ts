import { ProductConsts } from '@/entities/product';

export function calculateFinalDiscountInMoney(finalPrice: number, discount: number): number {
  const price = (finalPrice * (100 - discount)) / 100;
  return +price.toFixed(ProductConsts.FRACTION_DIGITS);
}
