import { ClientResponse, CartPagedQueryResponse } from '@commercetools/platform-sdk';
import { apiClient } from '@/services/api/ApiClient';

export async function getCarts(): Promise<ClientResponse<CartPagedQueryResponse>> {
  return apiClient.getApiRootToken().me().carts().get().execute();
}
