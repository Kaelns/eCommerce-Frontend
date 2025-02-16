import type { BodyUserCredentials } from '@/shared/zod/ecommerce/user.schemas';

import { authApi } from '@/services/ecommerce-api/rtk-query/model/authApi';

export const actionsEcommerceReduxExtension = {
  startSession: () => authApi.endpoints.startSession.initiate(),
  signUpUser: (arg: BodyUserCredentials) => authApi.endpoints.signUpUser.initiate(arg),
  loginUser: (email: string, password: string) => authApi.endpoints.loginUser.initiate({ email, password }),
  logoutUser: () => authApi.endpoints.logoutUser.initiate(),
  restoreUserWithRefreshToken: () => authApi.endpoints.restoreUserWithRefreshToken.initiate(),
  checkLoginStatus: () => authApi.endpoints.checkLoginStatus.initiate()
};
