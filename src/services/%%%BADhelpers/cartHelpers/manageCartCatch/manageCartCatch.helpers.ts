import type { MyCartUpdateAction } from '@commercetools/platform-sdk';
import { ManageCart } from '@/services/%%%BADhelpers/cartHelpers/manageCartCatch/manageCartCatch.interface';

export function createAction(
  action: ManageCart,
  id: string,
  quantity?: number,
  coupon?: string
): MyCartUpdateAction | null {
  switch (action) {
    case ManageCart.INCREMENT:
      return {
        action,
        productId: id,
        quantity: quantity ?? 1
      };
    case ManageCart.DECREMENT:
      return {
        action,
        lineItemId: id,
        quantity: quantity ?? 1
      };
    case ManageCart.DELETE:
      return {
        action: ManageCart.DECREMENT,
        lineItemId: id
      };
    case ManageCart.DISCOUNT:
      return {
        action: ManageCart.DISCOUNT,
        code: coupon ?? ''
      };
    default:
  }
  return null;
}
