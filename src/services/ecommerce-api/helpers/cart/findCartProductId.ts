import type { LineItem } from '@commercetools/platform-sdk';

export function findCartProductId(cartProducts: LineItem[], productId: string): string {
  const foundProduct = cartProducts.find((product) => product.productId === productId);
  return foundProduct?.id ?? '';
}
