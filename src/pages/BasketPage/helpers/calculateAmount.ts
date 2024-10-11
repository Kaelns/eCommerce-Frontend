import type { LineItem } from '@commercetools/platform-sdk';
import type { ICartProducts } from '@/shared/types';

export function calculateQuantity(products: ICartProducts | LineItem[]): number {
  const arrToReduce = Array.isArray(products) ? products : Object.values(products);
  const finalQuantity = arrToReduce.reduce((acc, productData) => acc + productData.quantity, 0);
  return +finalQuantity.toFixed(0);
}
