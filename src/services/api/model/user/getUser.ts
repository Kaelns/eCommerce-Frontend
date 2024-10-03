import { ClientResponse, Customer } from '@commercetools/platform-sdk';
import { apiClient } from '@/services/api/ApiClient';

export async function getUser(): Promise<ClientResponse<Customer>> {
  return apiClient.getApiRootToken().me().get().execute();
}
