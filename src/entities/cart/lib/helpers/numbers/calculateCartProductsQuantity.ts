import type { LineItem } from '@commercetools/platform-sdk';
import type { CartLightAllProducts } from '@/entities/cart/model/types/cart.types';

import { round } from 'lodash';

export function calculateCartProductsQuantity(products: CartLightAllProducts | LineItem[]): number {
  const arrToReduce = Array.isArray(products) ? products : Object.values(products);
  const finalQuantity = arrToReduce.reduce((acc, productData) => acc + productData.quantity, 0);
  return round(finalQuantity, 0);
}
