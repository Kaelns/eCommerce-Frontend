import type { CartProducts } from '@/shared/types/types';

import { FRACTION_DIGITS } from '@/services/ecommerce-api';

export function calculatePrice(products: CartProducts): number {
  const finalPrice = Object.values(products).reduce((acc, productData) => {
    const { discountedPrice, price, quantity } = productData;
    const calcPrice = (discountedPrice || price) * quantity;
    return acc + calcPrice;
  }, 0);
  return +finalPrice.toFixed(FRACTION_DIGITS);
}
