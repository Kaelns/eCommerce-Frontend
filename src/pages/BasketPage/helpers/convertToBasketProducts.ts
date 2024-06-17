import { ProductProjection } from '@commercetools/platform-sdk';
import { useProduct } from '@/hooks/useProduct/useProduct';
import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';

export function convertToBasketProducts(products: ProductProjection[]): IBasketProducts {
  const basketProducts: IBasketProducts = {};

  products.forEach((product) => {
    const data = useProduct(product);
    basketProducts[data.id] = data;
  });

  return basketProducts;
}
