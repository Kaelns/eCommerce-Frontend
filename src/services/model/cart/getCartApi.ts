import { cartSlice } from '@/pages/BasketPage/cart.slice';
import type { IAppThunk } from '@/store/redux';

export const getCartApi =
  (): IAppThunk =>
  async (dispatch, _, { api }) => {
    const cart = await api.cart.getCart();
    if (cart) {
      dispatch(cartSlice.actions.setCartAction(cart));
    } else {
      dispatch(cartSlice.actions.resetCartAction());
    }
  };
