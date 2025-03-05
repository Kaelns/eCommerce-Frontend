import type { Cart } from '@commercetools/platform-sdk';

import { calculateDiscountPercent } from '@/shared/lib/utils/numbers/calculateDiscountPercent';

export function getCartPromocodeData(cart: Cart) {
  const discountInMoney = cart.discountOnTotalPrice?.discountedAmount?.centAmount ?? 0;

  const discount = calculateDiscountPercent(cart.totalPrice.centAmount, discountInMoney);
  const isPromocode = cart.discountCodes.length > 0 || cart.directDiscounts.length > 0;

  return { isPromocode, discount, discountInMoney };
}
