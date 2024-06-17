import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';

export function calculatePrice(products: IBasketProducts): number {
  return Object.values(products).reduce((acc, productData) => {
    const { discountedPrice, price } = productData;
    // Todo: multiply by  amount
    const calcPrice = discountedPrice ?? price;
    return acc + calcPrice;
  }, 0);
}
