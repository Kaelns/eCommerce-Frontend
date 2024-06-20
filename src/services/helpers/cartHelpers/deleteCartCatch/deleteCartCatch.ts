import { eCommerceAPI } from '@/services/ECommerceAPI';
import { IDeleteCartReturn } from '@/services/helpers/cartHelpers/deleteCartCatch/deleteCartCatch.interface';
import { getCart } from '@/services/helpers/cartHelpers/getCart/getCart';

export async function deleteCartCatch(token: string): Promise<IDeleteCartReturn> {
  try {
    const currentCart = await getCart(token);
    if (!currentCart || !currentCart.id) {
      throw new Error('No cart with this id');
    }
    const { id: cardId, version } = currentCart;
    await eCommerceAPI.deleteCart(token, cardId, version);
    await eCommerceAPI.createCart(token);
    return { error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    }
  }
  return { error: 'Something went wrong' };
}
