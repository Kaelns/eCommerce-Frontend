import { ClientResponse, CustomerPagedQueryResponse } from '@commercetools/platform-sdk';
import { apiClient } from '@/services/api/ApiClient';

export async function getUserByEmail(customerEmail: string): Promise<ClientResponse<CustomerPagedQueryResponse>> {
  return apiClient
    .getApiRoot()
    .customers()
    .get({
      queryArgs: {
        where: `email="${customerEmail}"`
      }
    })
    .execute();
}
