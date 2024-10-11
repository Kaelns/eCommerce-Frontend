/* eslint-disable no-param-reassign */
import type { LineItem } from '@commercetools/platform-sdk';
import type { ICartProducts } from '@/shared/types';
import { getLightBasketProduct } from '@/services/ecommerce/helpers/products/getLightBasketProduct';

export function convertToBasketProducts(products: LineItem[]): ICartProducts {
  return products.reduce<ICartProducts>((basketProducts, product) => {
    const data = getLightBasketProduct(product);
    basketProducts[data.id] = data;
    return basketProducts;
  }, {});
}
