/* eslint-disable no-param-reassign */
import type { LineItem } from '@commercetools/platform-sdk';
import type { CartProducts } from '@/shared/types/types';
import { convertToLightCartProduct } from '@/services/ecommerce-api/helpers/cart/convertToLightCartProduct';

export function convertToLightCartAllProducts(products: LineItem[]): CartProducts {
  return products.reduce<CartProducts>((basketProducts, product) => {
    const data = convertToLightCartProduct(product);
    basketProducts[data.id] = data;
    return basketProducts;
  }, {});
}
