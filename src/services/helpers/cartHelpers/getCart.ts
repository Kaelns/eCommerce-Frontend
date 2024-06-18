import { Cart } from '@commercetools/platform-sdk';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { getToken } from '@/services/helpers/cartHelpers/getToken';

export async function getCart(): Promise<Cart> {
  const token = getToken();
  return eCommerceAPI.getCart(token);
}
