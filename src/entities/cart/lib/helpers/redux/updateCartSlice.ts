import type { Cart } from '@commercetools/platform-sdk';
import type { CartLight } from '@/entities/cart/model/types/cart.types';

import { isEqual } from 'lodash';

import { convertCart } from '@/entities/cart/lib/helpers/objects/convertCart';

export function updateCartSlice(cart: Cart, cartLight: CartLight) {
  const newLightCart = convertCart(cart);
  const isEqualProducts = isEqual(cartLight.products, newLightCart.products);

  return {
    ...newLightCart,
    // * To avoid unnecessary re-renders
    products: (isEqualProducts ? cartLight : newLightCart).products,
    productsIds: (isEqualProducts ? cartLight : newLightCart).productsIds
  };
}
