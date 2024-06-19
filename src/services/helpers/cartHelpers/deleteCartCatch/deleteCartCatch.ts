import { eCommerceAPI } from '@/services/ECommerceAPI';
import { IDeleteCartReturn } from '@/services/helpers/cartHelpers/deleteCartCatch/deleteCartCatch.interface';

export async function deleteCartCatch(token: string): Promise<IDeleteCartReturn> {
  try {
    const currentCart = await eCommerceAPI.getCart(token);
    if (!currentCart.id) {
      throw new Error('No cart with this id');
    }
    const { id: cardId, version } = currentCart;
    await eCommerceAPI.deleteCart(token, cardId, version);
    return { error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    }
  }
  return { error: 'Something went wrong' };
}
