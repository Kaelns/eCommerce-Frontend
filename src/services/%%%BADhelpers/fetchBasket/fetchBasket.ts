import type { LineItem } from '@commercetools/platform-sdk';
import { getCart } from '@/services/helpers/cartHelpers/getCart/getCart';

interface IBasketResponce {
  basket: LineItem[];
  discount: number;
  isDiscounted: boolean;
}

export const INIT_BASKET: IBasketResponce = {
  basket: [],
  discount: 0,
  isDiscounted: false
};

export async function fetchBasket(): Promise<IBasketResponce> {
  const cart = await getCart();
  if (!cart) {
    return INIT_BASKET;
  }
  const {
    lineItems,
    totalPrice: { centAmount },
    discountOnTotalPrice,
    discountCodes
  } = cart;
  const discountInMoney = discountOnTotalPrice?.discountedAmount?.centAmount ?? 0;
  const discount = Math.round((discountInMoney / (centAmount + discountInMoney)) * 100);

  return {
    basket: lineItems,
    discount,
    isDiscounted: !!discountCodes.length
  };
}
