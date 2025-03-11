import type {
  MyCartUpdateAction,
  MyCartAddLineItemAction,
  MyCartRemoveLineItemAction,
  MyCartAddDiscountCodeAction
} from '@commercetools/platform-sdk';

import { CartUpdateActionTypes } from '@/entities/cart/model/data/cart.enums';

interface Setting {
  [CartUpdateActionTypes.INCREMENT]: {
    productId: string;
    quantityToChange?: number;

    promocode?: undefined;
    cartProductLineId?: undefined;
  };

  [CartUpdateActionTypes.DECREMENT]: {
    cartProductLineId: string;
    quantityToChange?: number;

    productId?: undefined;
    promocode?: undefined;
  };

  [CartUpdateActionTypes.DELETE]: {
    cartProductLineId: string;

    productId?: undefined;
    promocode?: undefined;
    quantityToChange?: undefined;
  };

  [CartUpdateActionTypes.PROMOCODE]: {
    promocode: string;

    productId?: undefined;
    quantityToChange?: undefined;
    cartProductLineId?: undefined;
  };
}

export function createCartUpdateAction<T extends CartUpdateActionTypes>(
  action: T,
  { cartProductLineId, productId, quantityToChange, promocode }: Setting[T]
): MyCartUpdateAction | undefined {
  switch (action) {
    case CartUpdateActionTypes.INCREMENT:
      return {
        action,
        productId,
        quantity: quantityToChange ?? 1
      } satisfies MyCartAddLineItemAction;
    case CartUpdateActionTypes.DECREMENT:
      return {
        action,
        lineItemId: cartProductLineId,
        quantity: quantityToChange ?? 1
      } satisfies MyCartRemoveLineItemAction;

    case CartUpdateActionTypes.DELETE:
      return {
        action: CartUpdateActionTypes.DECREMENT,
        lineItemId: cartProductLineId
      } satisfies MyCartRemoveLineItemAction;
    case CartUpdateActionTypes.PROMOCODE:
      return {
        action: CartUpdateActionTypes.PROMOCODE,
        code: promocode ?? ''
      } satisfies MyCartAddDiscountCodeAction;
  }
}
