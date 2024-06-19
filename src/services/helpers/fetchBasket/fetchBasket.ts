import { getCart } from '@/services/helpers/cartHelpers/getCart/getCart';
import { IBasketResponce } from '@/services/helpers/fetchBasket/fetchBasket.interface';

export async function fetchBasket(token: string): Promise<IBasketResponce> {
  // Todo: discount
  const {
    lineItems,
    totalPrice: { centAmount },
    discountOnTotalPrice,
    discountCodes
  } = await getCart(token);
  const discountInMoney = discountOnTotalPrice?.discountedAmount?.centAmount ?? 0;
  const discount = Math.round((discountInMoney / (centAmount + discountInMoney)) * 100);

  return {
    basket: lineItems,
    discount,
    isDiscounted: !!discountCodes.length
  };
}
