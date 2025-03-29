import type { Cart, DiscountCodeState } from '@commercetools/platform-sdk';

import { calculateDiscountPercent } from '@/shared/lib/utils';

export function getCartPromocodeData(cart: Cart) {
  const discountInMoney = cart.discountOnTotalPrice?.discountedAmount?.centAmount ?? 0;

  const discountCodesRefs = cart.discountCodes
    .filter((discountCodeInfo) => discountCodeInfo.state === ('MatchesCart' satisfies DiscountCodeState))
    .map(({ discountCode }) => discountCode);

  const discount = calculateDiscountPercent(cart.totalPrice.centAmount, discountInMoney);
  const isPromocode = discountCodesRefs.length > 0;
  const isDirectDiscount = cart.directDiscounts.length > 0;

  return { isPromocode, isDirectDiscount, discount, discountCodesRefs, discountInMoney };
}
