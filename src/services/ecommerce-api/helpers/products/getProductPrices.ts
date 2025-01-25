import type { Price } from '@commercetools/platform-sdk';
import type { IPrices } from '@/shared/types/types';
import { revealPriceDecimals } from '@/utils/revealPriceDecimals';
import { FRACTION_DIGITS } from '@/services/ecommerce-api/data/constants';

export function getProductPrices(priceObj: Price | null | undefined): IPrices {
  if (!priceObj) {
    return {
      price: 0,
      discount: 0,
      discountedPrice: 0
    };
  }

  const { value, discounted: discountedObj } = priceObj;

  const { centAmount } = value;
  const { centAmount: centAmountDis } = discountedObj ? discountedObj.value : { centAmount: 0 };

  const price = revealPriceDecimals(centAmount, FRACTION_DIGITS);
  const discount = centAmountDis ? Math.round(100 - (centAmountDis / centAmount) * 100) : 0;
  const discountedPrice = centAmountDis ? revealPriceDecimals(centAmountDis, FRACTION_DIGITS) : 0;

  return {
    price,
    discount,
    discountedPrice
  };
}
