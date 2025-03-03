import type { Cart } from '@commercetools/platform-sdk';

import { calculateDiscountPercent } from '@/shared/lib/utils/numbers/calculateDiscountPercent';

export function getPromocodeData(cart: Cart) {
  const { discountCodes, directDiscounts, discountOnTotalPrice } = cart;

  const discountInMoney = discountOnTotalPrice?.discountedAmount?.centAmount ?? 0;

  const discount = calculateDiscountPercent(cart.totalPrice.centAmount, discountInMoney);
  const isPromocode = discountCodes.length > 0 || directDiscounts.length > 0;

  return { isPromocode, discount, discountInMoney };
}
