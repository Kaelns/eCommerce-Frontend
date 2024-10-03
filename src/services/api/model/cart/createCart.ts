import { ClientResponse, Cart, MyCartDraft } from '@commercetools/platform-sdk';
import { apiClient } from '@/services/api/ApiClient';

// TODO Change cartDraft
const INIT_CART_DRAFT = {
  currency: 'USD',
  country: 'US'
};

export async function createCart(cartDraft: MyCartDraft = INIT_CART_DRAFT): Promise<ClientResponse<Cart>> {
  return apiClient.getApiRootToken().me().carts().post({ body: cartDraft }).execute();
}
