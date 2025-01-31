import type { CartProducts } from '@/shared/types/types';
import type { LineItem } from '@commercetools/platform-sdk';

export function calculateProductsQuantity(products: CartProducts | LineItem[]): number {
  const arrToReduce = Array.isArray(products) ? products : Object.values(products);
  const finalQuantity = arrToReduce.reduce((acc, productData) => acc + productData.quantity, 0);
  return +finalQuantity.toFixed(0);
}
