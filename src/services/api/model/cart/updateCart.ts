import { MyCartUpdateAction, ClientResponse, Cart } from '@commercetools/platform-sdk';
import { apiClient } from '@/services/api/ApiClient';

export async function updateCart(
  cartId: string,
  version: number,
  actionObj: MyCartUpdateAction
): Promise<ClientResponse<Cart>> {
  return apiClient
    .getApiRootToken()
    .me()
    .carts()
    .withId({ ID: cartId })
    .post({
      body: {
        version,
        actions: [actionObj]
      }
    })
    .execute();
}
