/* eslint-disable no-param-reassign */
import type { LineItem } from '@commercetools/platform-sdk';
import type { ICartProducts } from '@/shared/types/types';
import { convertToLightCartProduct } from '@/services/ecommerce/helpers/products/convertToLightCartProduct';

export function convertToLightCartProducts(products: LineItem[]): ICartProducts {
  return products.reduce<ICartProducts>((basketProducts, product) => {
    const data = convertToLightCartProduct(product);
    basketProducts[data.id] = data;
    return basketProducts;
  }, {});
}
