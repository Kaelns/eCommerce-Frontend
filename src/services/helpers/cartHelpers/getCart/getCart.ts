import { Cart } from '@commercetools/platform-sdk';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { MOCK_CART } from '@/services/helpers/cartHelpers/getCart/getCart.constants';

export async function getCart(token: string): Promise<Cart> {
  return token ? eCommerceAPI.getCart(token) : MOCK_CART;
}
