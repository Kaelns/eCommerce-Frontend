import { eCommerceAPI } from '@/services/ECommerceAPI';
import { findBasketProductId } from '@/services/helpers/cartHelpers/findBasketProductId';
import { getToken } from '@/services/helpers/cartHelpers/getToken';
import { createAction } from '@/services/helpers/cartHelpers/manageCart/manageCart.helpers';
import { IManageCartReturn, ManageCart } from '@/services/helpers/cartHelpers/manageCart/manageCart.interface';

export async function manageCartCatch(action: ManageCart, id: string): Promise<IManageCartReturn> {
  try {
    const token = getToken();
    const currentCart = await eCommerceAPI.getCart(token);
    let cart = currentCart;
    if (!currentCart) {
      cart = await eCommerceAPI.createCart(token);
    }
    const { id: cardId, version } = cart;
    const actionObj = createAction(action, id);
    if (!actionObj) {
      throw new Error('Something bad with action type');
    }
    const responce = await eCommerceAPI.updateCart(token, cardId, version, actionObj);
    const lineItemId = action === ManageCart.ADD ? findBasketProductId(responce.body.lineItems, id) : '';
    return { error: '', lineItemId };
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message, lineItemId: '' };
    }
  }
  return { error: 'Something went wrong', lineItemId: '' };
}
