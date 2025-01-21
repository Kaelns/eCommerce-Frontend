import type { ICartProducts } from '@/shared/types/types';
import { FRACTION_DIGITS } from '@/services/ecommerce';

export function calculatePrice(products: ICartProducts): number {
  const finalPrice = Object.values(products).reduce((acc, productData) => {
    const { discountedPrice, price, quantity } = productData;
    const calcPrice = (discountedPrice || price) * quantity;
    return acc + calcPrice;
  }, 0);
  return +finalPrice.toFixed(FRACTION_DIGITS);
}
