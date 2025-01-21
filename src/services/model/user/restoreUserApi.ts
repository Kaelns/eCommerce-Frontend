import { logoutUserApi } from '@/services/model/user/logoutUserApi';
import { AuthTokensKeys } from '@/shared/data/constants';
import { authSliceActions } from '@/shared/slices/auth.slice';
import type { IAppThunk } from '@/app/store';

export const restoreUserApi =
  (): IAppThunk =>
  async (dispatch, _, { api }) => {
    const authToken = localStorage.getItem(AuthTokensKeys.USER_TOKEN) ?? '';
    const refreshAuthToken = localStorage.getItem(AuthTokensKeys.USER_REFRESH_TOKEN) ?? undefined;
    if (!authToken) {
      dispatch(logoutUserApi());
      return;
    }
    const newToken = await api.user.restoreLoggedUser(authToken, refreshAuthToken);
    if (newToken !== null) {
      const { token, refreshToken } = newToken;
      dispatch(authSliceActions.loginAuthAction({ authToken: token, refreshAuthToken: refreshToken ?? '' }));
    } else {
      dispatch(logoutUserApi());
    }
  };
