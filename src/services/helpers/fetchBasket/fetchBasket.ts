import { eCommerceAPI } from '@/services/ECommerceAPI';
import { getToken } from '@/services/helpers/cartHelpers/getToken';
import { IBasketResponce } from '@/services/helpers/fetchBasket/fetchBasket.interface';

export async function fetchBasket(): Promise<IBasketResponce> {
  // Todo: discount
  const token = getToken();
  const { lineItems } = await eCommerceAPI.getCart(token);
  return { basket: lineItems, amount: lineItems.length };
}
