import { TokenStore } from '@commercetools/sdk-client-v2';
import { ICreateUserParams } from '@/services/ECommerceInitApi.interface';
import { apiClient } from '@/services/api/ApiClient';
import { filterUndefinedProperties } from '@/utils/filterUndefinedProperties';

export async function createUser(params: ICreateUserParams /* , token: string */): Promise<TokenStore> {
  const customerData: ICreateUserParams = filterUndefinedProperties(params);
  const oldToken = apiClient.getTokenCache().token;
  const responce = await apiClient.getApiRoot().customers().post({ body: customerData }).execute();
  // TODO remove log
  console.log('CreateUser result', responce, oldToken, apiClient.getTokenCache().token);
  return apiClient.getTokenCache();
}
