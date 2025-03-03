import type { LineItem } from '@commercetools/platform-sdk';
import type { CartProducts } from '@/entities/cart/model/types/cart.types';

export function calculateProductsQuantity(products: CartProducts | LineItem[]): number {
  const arrToReduce = Array.isArray(products) ? products : Object.values(products);
  const finalQuantity = arrToReduce.reduce((acc, productData) => acc + productData.quantity, 0);
  return +finalQuantity.toFixed(0);
}
