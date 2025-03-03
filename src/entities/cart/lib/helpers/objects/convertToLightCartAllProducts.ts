/* eslint-disable no-param-reassign */
import type { LineItem } from '@commercetools/platform-sdk';
import type { CartProducts } from '@/entities/cart/model/types/cart.types';

import { convertToLightCartProduct } from '@/entities/cart/lib/helpers/objects/convertToLightCartProduct';

export function convertToLightCartAllProducts(products: LineItem[]): CartProducts {
  return products.reduce<CartProducts>((basketProducts, product) => {
    const data = convertToLightCartProduct(product);
    basketProducts[data.productId] = data;
    return basketProducts;
  }, {});
}
