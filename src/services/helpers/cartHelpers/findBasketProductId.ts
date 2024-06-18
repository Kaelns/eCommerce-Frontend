import { LineItem } from '@commercetools/platform-sdk';

export function findBasketProductId(basketProducts: LineItem[], productId: string): string {
  const foundProduct = basketProducts.find((product) => product.productId === productId);
  return foundProduct?.id ?? '';
}
