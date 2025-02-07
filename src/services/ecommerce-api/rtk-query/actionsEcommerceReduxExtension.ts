import type { BodyUserCredentials } from '@/shared/zod/ecommerce/user.schemas';

import { authApi } from '@/services/ecommerce-api/rtk-query/model/authApi';

import { store } from '@/app';

export const actionsEcommerceReduxExtension = {
  startSession: () => store.dispatch(authApi.endpoints.startSession.initiate()),
  signUpUser: (arg: BodyUserCredentials) => store.dispatch(authApi.endpoints.signUpUser.initiate(arg)),
  loginUser: (email: string, password: string) => store.dispatch(authApi.endpoints.loginUser.initiate({ email, password })),
  logoutUser: () => store.dispatch(authApi.endpoints.logoutUser.initiate()),
  restoreUserWithRefreshToken: () => store.dispatch(authApi.endpoints.restoreUserWithRefreshToken.initiate()),
  checkLoginStatus: () => store.dispatch(authApi.endpoints.checkLoginStatus.initiate())
};
