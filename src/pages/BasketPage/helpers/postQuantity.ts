import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';
import { ManageCart } from '@/services/helpers/cartHelpers/manageCart/manageCart.interface';
import { manageCartCatch } from '@/services/helpers/cartHelpers/manageCart/manageCartCatch';

export async function postQuantity(prevBasketProd: IBasketProducts, basketProd: IBasketProducts): Promise<string> {
  let error = '';
  const prevKeys = Object.keys(prevBasketProd);

  prevKeys.every(async (productId) => {
    const prevProduct = prevBasketProd[productId];
    const currentProduct = basketProd[productId];
    const { lineId } = prevProduct;
    if (!currentProduct) {
      ({ error } = await manageCartCatch(ManageCart.DELETE, prevBasketProd[productId].lineId));
    }
    if (prevProduct.quantity !== currentProduct.quantity) {
      const quantityToChange = prevProduct.quantity - currentProduct.quantity;
      if (quantityToChange > 0) {
        ({ error } = await manageCartCatch(ManageCart.DECREMENT, lineId, quantityToChange));
      } else {
        ({ error } = await manageCartCatch(ManageCart.INCREMENT, productId, Math.abs(quantityToChange)));
      }
    }
    if (error) {
      return true;
    }
    return false;
  });

  return error;
}
