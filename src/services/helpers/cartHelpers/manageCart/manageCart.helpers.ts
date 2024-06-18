import { MyCartUpdateAction } from '@commercetools/platform-sdk';
import { ManageCart } from '@/services/helpers/cartHelpers/manageCart/manageCart.interface';

export function createAction(action: ManageCart, id: string, quantity?: number): MyCartUpdateAction | null {
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
    default:
  }
  return null;
}
