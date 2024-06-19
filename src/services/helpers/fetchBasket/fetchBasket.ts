import { getCart } from '@/services/helpers/cartHelpers/getCart/getCart';
import { IBasketResponce } from '@/services/helpers/fetchBasket/fetchBasket.interface';

export async function fetchBasket(token: string): Promise<IBasketResponce> {
  // Todo: discount
  const { lineItems } = await getCart(token);
  return { basket: lineItems, amount: lineItems.length };
}
