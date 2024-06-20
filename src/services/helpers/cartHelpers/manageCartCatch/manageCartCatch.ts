import { eCommerceAPI } from '@/services/ECommerceAPI';
import { findBasketProductId } from '@/services/helpers/cartHelpers/findBasketProductId';
import { getCart } from '@/services/helpers/cartHelpers/getCart/getCart';
import { createAction } from '@/services/helpers/cartHelpers/manageCartCatch/manageCartCatch.helpers';
import {
  ManageCart,
  IManageCartReturn
} from '@/services/helpers/cartHelpers/manageCartCatch/manageCartCatch.interface';

export async function manageCartCatch(
  action: ManageCart,
  id: string,
  token: string,
  quantity?: number
): Promise<IManageCartReturn> {
  try {
    const currentCart = await getCart(token);
    let cart = currentCart;
    if (!currentCart || !currentCart.id) {
      cart = await eCommerceAPI.createCart(token);
    }
    const { id: cardId, version } = cart;
    const actionObj = createAction(action, id, quantity);
    if (!actionObj) {
      throw new Error('Something bad with action type');
    }
    const responce = await eCommerceAPI.updateCart(token, cardId, version, actionObj);
    const lineItemId = action === ManageCart.INCREMENT ? findBasketProductId(responce.body.lineItems, id) : '';
    return { error: '', lineItemId };
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message, lineItemId: '' };
    }
  }
  return { error: 'Something went wrong', lineItemId: '' };
}
