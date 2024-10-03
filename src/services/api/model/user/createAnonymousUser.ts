import { TokenStore } from '@commercetools/sdk-client-v2';
import { apiClient } from '@/services/api/ApiClient';

export async function createAnonymousUser(): Promise<TokenStore> {
  await apiClient.getApiRootAnonym().get().execute();
  return apiClient.getTokenCache();
}
