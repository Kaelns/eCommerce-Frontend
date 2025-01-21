import { cartSlice } from '@/pages/CartPage/cart.slice';
import type { IAppThunk } from '@/app/store';

export const logoutUserApi =
  (): IAppThunk =>
  async (dispatch, _, { api }) => {
    await api.user.createAnonymousUser();
    const cart = await api.cart.createCart();
    dispatch(cartSlice.actions.setCartAction(cart));
  };
