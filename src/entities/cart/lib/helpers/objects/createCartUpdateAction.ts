import type { MyCartUpdateAction } from '@commercetools/platform-sdk';

import { CartUpdateActionTypes } from '@/entities/cart/model/data/cart.enums';

export function createCartUpdateAction<T extends CartUpdateActionTypes>(
  action: T,
  id: string,
  { quantity, coupon }: { quantity?: number; coupon: T extends CartUpdateActionTypes.DISCOUNT ? string : undefined }
): MyCartUpdateAction | null {
  switch (action) {
    case CartUpdateActionTypes.DECREMENT:
      return {
        action,
        lineItemId: id,
        quantity: quantity ?? 1
      };
    case CartUpdateActionTypes.DELETE:
      return {
        action: CartUpdateActionTypes.DECREMENT,
        lineItemId: id
      };
    case CartUpdateActionTypes.DISCOUNT:
      return {
        action: CartUpdateActionTypes.DISCOUNT,
        code: coupon ?? ''
      };
    case CartUpdateActionTypes.INCREMENT:
      return {
        action,
        productId: id,
        quantity: quantity ?? 1
      };
    default:
  }
  return null;
}

//  TODO to update already existing cart product we need his lineItemId

// export async function manageCartCatch(
//   action: ManageCart,
//   id: string,
//   token: string,
//   quantity?: number
// ): Promise<IManageCartReturn> {
//   try {
//     const currentCart = await getCart();
//     let cart = currentCart;
//     if (!cart || !cart.id) {
//       cart = await api.cart.createCart();
//     }
//     const { id: cardId, version } = cart;
//     const actionObj = createAction(action, id, quantity);
//     if (!actionObj) {
//       throw new Error('Something bad with action type');
//     }
//     const responce = await api.cart.updateCart(cardId, version, actionObj);
//     const lineItemId = action === ManageCart.INCREMENT ? findBasketProductId(responce.body.lineItems, id) : '';
//     return { error: '', lineItemId };
//   } catch (err) {
//     if (err instanceof Error) {
//       return { error: err.message, lineItemId: '' };
//     }
//   }
//   return { error: 'Something went wrong', lineItemId: '' };
// }
