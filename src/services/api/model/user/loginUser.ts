import { TokenStore, UserAuthOptions } from '@commercetools/sdk-client-v2';
import { apiClient } from '@/services/api/ApiClient';

export async function loginUser(email: string, password: string): Promise<TokenStore> {
  const userAuthOptions: UserAuthOptions = { username: email, password };
  await apiClient
    .getApiRootUser(userAuthOptions)
    .me()
    .login()
    .post({
      body: {
        email,
        password,
        activeCartSignInMode: 'MergeWithExistingCustomerCart'
      }
    })
    .execute();
  return apiClient.getTokenCache();
}
