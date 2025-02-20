import type { CartProducts } from '@/shared/model/types/types';

import { ProductConsts } from '@/entities/product';

export function calculatePrice(products: CartProducts): number {
  const finalPrice = Object.values(products).reduce((acc, productData) => {
    const { discountedPrice, price, quantity } = productData;
    const calcPrice = (discountedPrice || price) * quantity;
    return acc + calcPrice;
  }, 0);
  return +finalPrice.toFixed(ProductConsts.FRACTION_DIGITS);
}
