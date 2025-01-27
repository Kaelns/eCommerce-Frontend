import type { LineItem } from '@commercetools/platform-sdk';
import type { CartProducts } from '@/shared/types/types';

export function calculateProductsQuantity(products: CartProducts | LineItem[]): number {
  const arrToReduce = Array.isArray(products) ? products : Object.values(products);
  const finalQuantity = arrToReduce.reduce((acc, productData) => acc + productData.quantity, 0);
  return +finalQuantity.toFixed(0);
}
