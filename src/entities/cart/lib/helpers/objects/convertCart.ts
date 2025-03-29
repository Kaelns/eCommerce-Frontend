import type { Cart } from '@commercetools/platform-sdk';
import type { CartLight, CartLightAllProducts } from '@/entities/cart/model/types/cart.types';

import { getCartPromocodeData } from '@/entities/cart/lib/helpers/objects/getCartPromocodeData';
import { convertToLightCartProduct } from '@/entities/cart/lib/helpers/objects/convertToLightCartProduct';
import { calculateCartProductsQuantity } from '@/entities/cart/lib/helpers/numbers/calculateCartProductsQuantity';

export function convertCart(cart: Cart): CartLight {
  const { isPromocode, discountCodesRefs } = getCartPromocodeData(cart);

  const productsQuantity = calculateCartProductsQuantity(cart.lineItems);

  const products = cart.lineItems.reduce<CartLightAllProducts>((cartProducts, product) => {
    const data = convertToLightCartProduct(product);
    cartProducts[data.productId] = data;
    return cartProducts;
  }, {});

  return {
    id: cart.id,
    version: cart.version,
    products,
    productsIds: Object.keys(products),
    productsQuantity,
    isPromocode,
    discountCodesRefs
  };
}
