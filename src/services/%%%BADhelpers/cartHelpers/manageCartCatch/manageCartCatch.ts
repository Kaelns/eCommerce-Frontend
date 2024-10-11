import { api } from '@/services/api/Api';
import { findBasketProductId } from '@/services/ecommerce/helpers/cart/findBasketProductId';
import { getCart } from '@/services/helpers/cartHelpers/getCart/getCart';
import { createAction } from '@/services/%%%BADhelpers/cartHelpers/manageCartCatch/manageCartCatch.helpers';
import type { IManageCartReturn } from '@/services/%%%BADhelpers/cartHelpers/manageCartCatch/manageCartCatch.interface';
import { ManageCart } from '@/services/%%%BADhelpers/cartHelpers/manageCartCatch/manageCartCatch.interface';

export async function manageCartCatch(
  action: ManageCart,
  id: string,
  token: string,
  quantity?: number
): Promise<IManageCartReturn> {
  try {
    const currentCart = await getCart();
    let cart = currentCart;
    if (!cart || !cart.id) {
      cart = await api.cart.createCart();
    }
    const { id: cardId, version } = cart;
    const actionObj = createAction(action, id, quantity);
    if (!actionObj) {
      throw new Error('Something bad with action type');
    }
    const responce = await api.cart.updateCart(cardId, version, actionObj);
    const lineItemId = action === ManageCart.INCREMENT ? findBasketProductId(responce.body.lineItems, id) : '';
    return { error: '', lineItemId };
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message, lineItemId: '' };
    }
  }
  return { error: 'Something went wrong', lineItemId: '' };
}
