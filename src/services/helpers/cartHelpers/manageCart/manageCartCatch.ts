import { eCommerceAPI } from '@/services/ECommerceAPI';
import { getToken } from '@/services/helpers/cartHelpers/getToken';
import { createAction } from '@/services/helpers/cartHelpers/manageCart/manageCart.helpers';
import { ManageCart } from '@/services/helpers/cartHelpers/manageCart/manageCart.interface';

export async function manageCartCatch(action: ManageCart, id: string): Promise<string> {
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
    await eCommerceAPI.updateCart(token, cardId, version, actionObj);
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
  }
  return '';
}
