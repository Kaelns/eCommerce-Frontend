import { createAction } from '@/services/%%%BADhelpers/cartHelpers/manageCartCatch/manageCartCatch.helpers';
import type { IDeleteCartReturn } from '@/services/helpers/cartHelpers/deleteCartCatch/deleteCartCatch.interface';
import type { ManageCart } from '@/services/%%%BADhelpers/cartHelpers/manageCartCatch/manageCartCatch.interface';
import { getCart } from '@/services/helpers/cartHelpers/getCart/getCart';
import { api } from '@/services/api/Api';

export async function promocodeCartCatch(
  action: ManageCart,
  token: string,
  coupon: string
): Promise<IDeleteCartReturn> {
  try {
    const currentCart = await getCart();
    if (!currentCart || !currentCart.id) {
      throw new Error('No cart with this id');
    }
    const { id: cardId, version } = currentCart;
    const actionObj = createAction(action, cardId, undefined, coupon);
    if (!actionObj) {
      throw new Error('Something bad with action type');
    }
    await api.cart.updateCart(cardId, version, actionObj);
    return { error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    }
  }
  return { error: 'Something went wrong' };
}
