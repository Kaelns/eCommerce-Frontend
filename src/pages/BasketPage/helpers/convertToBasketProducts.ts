import { LineItem } from '@commercetools/platform-sdk';
import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';
import { useBasketProducts } from '@/pages/BasketPage/components/hooks/useBasketProducts/useBasketProducts';

export function convertToBasketProducts(products: LineItem[]): IBasketProducts {
  const basketProducts: IBasketProducts = {};

  products.forEach((product) => {
    const data = useBasketProducts(product);
    basketProducts[data.id] = data;
  });

  return basketProducts;
}
