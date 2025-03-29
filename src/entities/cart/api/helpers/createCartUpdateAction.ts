import type {
  MyCartUpdateAction,
  DiscountCodeReference,
  MyCartAddLineItemAction,
  MyCartRemoveLineItemAction,
  MyCartAddDiscountCodeAction,
  MyCartRemoveDiscountCodeAction
} from '@commercetools/platform-sdk';

import { CartUpdateActionTypes } from '@/entities/cart/model/data/cart.enums';
import { isDiscountCodeReference } from '@/entities/cart/model/types/cart.guards';

interface Setting {
  [CartUpdateActionTypes.INCREMENT]: {
    productId: string;
    quantityToChange?: number;

    promocode?: undefined;
    discountCode?: undefined;
    cartProductLineId?: undefined;
  };

  [CartUpdateActionTypes.DECREMENT]: {
    cartProductLineId: string;
    quantityToChange?: number;

    productId?: undefined;
    promocode?: undefined;
    discountCode?: undefined;
  };

  [CartUpdateActionTypes.DELETE]: {
    cartProductLineId: string;

    productId?: undefined;
    promocode?: undefined;
    discountCode?: undefined;
    quantityToChange?: undefined;
  };

  [CartUpdateActionTypes.ADD_PROMOCODE]: {
    promocode: string;

    productId?: undefined;
    discountCode?: undefined;
    quantityToChange?: undefined;
    cartProductLineId?: undefined;
  };

  [CartUpdateActionTypes.REMOVE_PROMOCODE]: {
    discountCode: DiscountCodeReference;

    promocode?: undefined;
    productId?: undefined;
    quantityToChange?: undefined;
    cartProductLineId?: undefined;
  };
}

export function createCartUpdateAction<T extends CartUpdateActionTypes>(
  action: T,
  { cartProductLineId, productId, quantityToChange, promocode, discountCode }: Setting[T]
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
    case CartUpdateActionTypes.ADD_PROMOCODE:
      return {
        action: CartUpdateActionTypes.ADD_PROMOCODE,
        code: promocode ?? ''
      } satisfies MyCartAddDiscountCodeAction;
    case CartUpdateActionTypes.REMOVE_PROMOCODE:
      return isDiscountCodeReference(discountCode)
        ? ({
            action: CartUpdateActionTypes.REMOVE_PROMOCODE,
            discountCode
          } satisfies MyCartRemoveDiscountCodeAction)
        : undefined;
  }
}
