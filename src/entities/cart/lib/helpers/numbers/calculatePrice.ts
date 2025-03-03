import type { CartProducts } from '@/entities/cart/model/types/cart.types';

export function calculatePrice(products: CartProducts, language: string): number {
  const fractionDigits = products[0].pricesObj[language].fractionDigits;

  const finalPrice = Object.values(products).reduce((acc, productData) => {
    const { discountedPrice, price } = productData.pricesObj[language];
    const calcPrice = (discountedPrice || price) * productData.quantity;
    return acc + calcPrice;
  }, 0);
  return +finalPrice.toFixed(fractionDigits);
}
