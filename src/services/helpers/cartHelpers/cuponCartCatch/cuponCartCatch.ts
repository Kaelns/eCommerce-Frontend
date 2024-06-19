import { eCommerceAPI } from '@/services/ECommerceAPI';
import { createAction } from '@/services/helpers/cartHelpers/manageCartCatch/manageCartCatch.helpers';
import { IDeleteCartReturn } from '@/services/helpers/cartHelpers/deleteCartCatch/deleteCartCatch.interface';
import { ManageCart } from '@/services/helpers/cartHelpers/manageCartCatch/manageCartCatch.interface';

export async function aplyCuponCartCatch(
  action: ManageCart,
  token: string,
  coupon: string
): Promise<IDeleteCartReturn> {
  try {
    const currentCart = await eCommerceAPI.getCart(token);
    if (!currentCart.id) {
      throw new Error('No cart with this id');
    }
    const { id: cardId, version } = currentCart;
    const actionObj = createAction(action, cardId, undefined, coupon);
    if (!actionObj) {
      throw new Error('Something bad with action type');
    }
    await eCommerceAPI.updateCart(token, cardId, version, actionObj);
    return { error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    }
  }
  return { error: 'Something went wrong' };
}
