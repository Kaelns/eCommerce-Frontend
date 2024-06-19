import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';

export function calculateQuantity(products: IBasketProducts): number {
  const finalQuantity = Object.values(products).reduce((acc, productData) => acc + productData.quantity, 0);
  return +finalQuantity.toFixed(0);
}
