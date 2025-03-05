import type {
  MyCartAddDiscountCodeAction,
  MyCartAddLineItemAction,
  MyCartRemoveLineItemAction,
  MyCartUpdateAction
} from '@commercetools/platform-sdk';

import { CartUpdateActionTypes } from '@/entities/cart/model/data/cart.enums';

interface Setting {
  [CartUpdateActionTypes.INCREMENT]: {
    quantity: number;
    productId: string;

    lineItemId?: undefined;
    promocode?: undefined;
  };

  [CartUpdateActionTypes.DECREMENT]: {
    lineItemId: string;
    quantity: number | undefined;

    productId?: undefined;
    promocode?: undefined;
  };

  [CartUpdateActionTypes.DELETE]: {
    lineItemId: string;

    quantity?: undefined;
    productId?: undefined;
    promocode?: undefined;
  };

  [CartUpdateActionTypes.PROMOCODE]: {
    promocode: string;

    quantity?: undefined;
    productId?: undefined;
    lineItemId?: undefined;
  };
}

export function createCartUpdateAction<T extends CartUpdateActionTypes>(
  action: T,
  { lineItemId, productId, quantity, promocode }: Setting[T]
): MyCartUpdateAction | undefined {
  switch (action) {
    case CartUpdateActionTypes.INCREMENT:
      return {
        action,
        productId,
        quantity: quantity ?? 1
      } satisfies MyCartAddLineItemAction;
    case CartUpdateActionTypes.DECREMENT:
      return {
        action,
        lineItemId,
        quantity: quantity ?? 1
      } satisfies MyCartRemoveLineItemAction;

    case CartUpdateActionTypes.DELETE:
      return {
        action: CartUpdateActionTypes.DECREMENT,
        lineItemId
      } satisfies MyCartRemoveLineItemAction;
    case CartUpdateActionTypes.PROMOCODE:
      return {
        action: CartUpdateActionTypes.PROMOCODE,
        code: promocode ?? ''
      } satisfies MyCartAddDiscountCodeAction;
  }
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
