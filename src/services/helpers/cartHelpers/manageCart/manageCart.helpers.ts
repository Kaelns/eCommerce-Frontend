import { MyCartUpdateAction } from '@commercetools/platform-sdk';
import { ManageCart } from '@/services/helpers/cartHelpers/manageCart/manageCart.interface';

export function createAction(action: ManageCart, id: string): MyCartUpdateAction | null {
  switch (action) {
    case ManageCart.ADD:
      return {
        action,
        productId: id,
        quantity: 1
      };
    case ManageCart.REMOVE:
      return {
        action,
        lineItemId: id,
        quantity: 1
      };
    case ManageCart.DELETE:
      return {
        action: ManageCart.REMOVE,
        lineItemId: id
      };
    default:
  }
  return null;
}
