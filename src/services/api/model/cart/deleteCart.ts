import { ClientResponse } from '@commercetools/platform-sdk';
import { apiClient } from '@/services/api/ApiClient';

export async function deleteCart(cartId: string, cartVersion: number): Promise<ClientResponse> {
  return apiClient
    .getApiRootToken()
    .carts()
    .withId({ ID: cartId })
    .delete({
      queryArgs: {
        version: cartVersion
      }
    })
    .execute();
}
