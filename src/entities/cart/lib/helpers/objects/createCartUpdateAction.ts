import type {
  MyCartUpdateAction,
  MyCartAddLineItemAction,
  MyCartRemoveLineItemAction,
  MyCartAddDiscountCodeAction
} from '@commercetools/platform-sdk';

import { CartUpdateActionTypes } from '@/entities/cart/model/data/cart.enums';

interface Setting {
  [CartUpdateActionTypes.INCREMENT]: {
    quantity: number;
    productId: string;

    promocode?: undefined;
    lineItemId?: undefined;
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
