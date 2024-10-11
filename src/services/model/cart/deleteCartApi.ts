import type { IAppThunk } from '@/store/redux';
import { cartSlice } from '@/pages/BasketPage/cart.slice';
import { alertSliceActions } from '@/features/AlertText/alert.slice';
import { Severity } from '@/shared/constants';

export const deleteCartApi =
  (): IAppThunk =>
  async (dispatch, _, { api }) => {
    try {
      const currentCart = await api.cart.getCart();
      if (!currentCart || !currentCart.id) {
        throw new Error('No cart with this id');
      }
      const { id: cardId, version } = currentCart;
      await api.cart.deleteCart(cardId, version);
      const cart = await api.cart.createCart();
      dispatch(cartSlice.actions.setCartAction(cart));
      dispatch(alertSliceActions.showAlertAction({ message: 'The cart was successfully cleared' }));
      dispatch(cartSlice.actions.deletionSignalAction());
    } catch (err) {
      if (!(err instanceof Error)) {
        return;
      }
      dispatch(alertSliceActions.showAlertAction({ message: err.message, severity: Severity.ERROR }));
    }
  };

// deleteCartCatch(): Promise<IDeleteCartReturn> {
//   try {
//     const currentCart = await getCart();
//     if (!currentCart || !currentCart.id) {
//       throw new Error('No cart with this id');
//     }
//     const { id: cardId, version } = currentCart;
//     await api.cart.deleteCart(cardId, version);
//     await api.cart.createCart();
//     return { error: '' };
//   } catch (err) {
//     if (err instanceof Error) {
//       return { error: err.message };
//     }
//   }
//   return { error: 'Something went wrong' };
// }
