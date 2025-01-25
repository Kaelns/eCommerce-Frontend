import type { ICartProducts } from '@/shared/types/types';
import { manageCartCatch } from '@/services/%%%BADhelpers/cartHelpers/manageCartCatch/manageCartCatch';
import { ManageCart } from '@/services/%%%BADhelpers/cartHelpers/manageCartCatch/manageCartCatch.interface';

//  FIXME
export async function postQuantity(prevBasketProd: ICartProducts, basketProd: ICartProducts, token: string): Promise<string> {
  let error = '';
  const prevKeys = Object.keys(prevBasketProd);

  prevKeys.every(async (productId) => {
    const prevProduct = prevBasketProd[productId];
    const currentProduct = basketProd[productId];
    const { lineId } = prevProduct;
    if (!currentProduct) {
      ({ error } = await manageCartCatch(ManageCart.DELETE, prevBasketProd[productId].lineId, token));
    }
    if (currentProduct && prevProduct.quantity !== currentProduct.quantity) {
      const quantityToChange = prevProduct.quantity - currentProduct.quantity;
      if (quantityToChange > 0) {
        ({ error } = await manageCartCatch(ManageCart.DECREMENT, lineId, token, quantityToChange));
      } else {
        ({ error } = await manageCartCatch(ManageCart.INCREMENT, productId, token, Math.abs(quantityToChange)));
      }
    }
    if (error) {
      return true;
    }
    return false;
  });

  return error;
}
