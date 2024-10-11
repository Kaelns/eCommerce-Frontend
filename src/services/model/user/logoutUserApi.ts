import { cartSlice } from '@/pages/BasketPage/cart.slice';
import type { IAppThunk } from '@/store/redux';

export const logoutUserApi =
  (): IAppThunk =>
  async (dispatch, _, { api }) => {
    await api.user.createAnonymousUser();
    const cart = await api.cart.createCart();
    dispatch(cartSlice.actions.setCartAction(cart));
  };
