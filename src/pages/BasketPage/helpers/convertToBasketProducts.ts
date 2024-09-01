/* eslint-disable no-param-reassign */
import { LineItem } from '@commercetools/platform-sdk';
import { getLightBasketProduct } from '@/services/helpers/getLightBasketProduct';
import { IBasketProducts } from '@/shared/types';

export function convertToBasketProducts(products: LineItem[]): IBasketProducts {
  return products.reduce<IBasketProducts>((basketProducts, product) => {
    const data = getLightBasketProduct(product);
    basketProducts[data.id] = data;
    return basketProducts;
  }, {});
}
