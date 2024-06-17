import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';

export function calculatePrice(products: IBasketProducts): number {
  return Object.values(products).reduce((acc, productData) => {
    const { discountedPrice, price, quantity } = productData;
    const calcPrice = (discountedPrice ?? price) * quantity;
    return acc + calcPrice;
  }, 0);
}
