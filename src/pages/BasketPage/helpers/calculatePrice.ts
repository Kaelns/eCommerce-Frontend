import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';

export function calculatePrice(products: IBasketProducts): number {
  const finalPrice = Object.values(products).reduce((acc, productData) => {
    const { discountedPrice, price, quantity } = productData;
    const calcPrice = (discountedPrice ?? price) * quantity;
    return acc + calcPrice;
  }, 0);
  return +finalPrice.toFixed(2);
}
