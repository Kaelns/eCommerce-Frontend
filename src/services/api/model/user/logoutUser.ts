import { TokenStore } from '@commercetools/sdk-client-v2';
import { createCart } from '@/services/api/model/cart/createCart';
import { createAnonymousUser } from '@/services/api/model/user/createAnonymousUser';

export async function logoutUser(): Promise<TokenStore> {
  const anonToken = await createAnonymousUser();
  await createCart();
  return anonToken;
}
