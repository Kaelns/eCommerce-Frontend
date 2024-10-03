import { MyCustomerUpdate, ClientResponse, Customer } from '@commercetools/platform-sdk';
import { apiClient } from '@/services/api/ApiClient';

export async function updateUserData(body: MyCustomerUpdate): Promise<ClientResponse<Customer>> {
  return apiClient.getApiRootToken().me().post({ body }).execute();
}
