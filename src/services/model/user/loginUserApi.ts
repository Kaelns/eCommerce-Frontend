import { authSliceActions } from '@/store/slices/auth.slice';
import { cartSlice } from '@/pages/BasketPage/cart.slice';
import type { IAppThunk } from '@/store/redux';

export const loginUserApi =
  (email: string, password: string): IAppThunk =>
  async (dispatch, _, { api }) => {
    // TODO remove refresh and expiration
    const { token: authToken, refreshToken, expirationTime } = await api.user.loginUser(email, password);
    const cart = await api.cart.createCart();
    console.log('User', authToken, refreshToken, expirationTime);

    dispatch(authSliceActions.loginAuthAction({ authToken, refreshAuthToken: refreshToken ?? '' }));
    dispatch(cartSlice.actions.setCartAction(cart));
  };
