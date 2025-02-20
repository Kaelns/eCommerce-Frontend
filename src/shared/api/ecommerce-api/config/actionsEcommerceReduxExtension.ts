import type { BodyUserCredentials } from '@/entities/user/model/types/user.schemas';

import { authApi } from '@/entities/auth/api/authApi';

export const actionsEcommerceReduxExtension = {
  startSession: () => authApi.endpoints.startSession.initiate(),
  signUpUser: (arg: BodyUserCredentials) => authApi.endpoints.signUpUser.initiate(arg),
  loginUser: (email: string, password: string) => authApi.endpoints.loginUser.initiate({ email, password }),
  logoutUser: () => authApi.endpoints.logoutUser.initiate(),
  restoreUserWithRefreshToken: () => authApi.endpoints.restoreUserWithRefreshToken.initiate(),
  checkLoginStatus: () => authApi.endpoints.checkLoginStatus.initiate()
};
