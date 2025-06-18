import type { Price } from '@commercetools/platform-sdk';
import type { PriceTransformed } from '@/shared/api/ecommerce-api/model/types/types';

import { MOCK_PRICE } from '@/shared/api/ecommerce-api/model/data/constants';

import { calculatePriceDecimals } from '@/shared/lib/helpers/number/calculatePriceDecimals';

export function transformProductPrice(priceObj: null | Price | undefined): PriceTransformed {
  if (!priceObj) {
    return MOCK_PRICE;
  }

  const { value, discounted: discountedObj } = priceObj;

  const { centAmount, fractionDigits, currencyCode } = value;
  const { centAmount: centAmountDiscounted } = discountedObj ? discountedObj.value : { centAmount: 0 };

  const price = calculatePriceDecimals(centAmount, fractionDigits);
  const discount = centAmountDiscounted ? Math.round(100 - (centAmountDiscounted / centAmount) * 100) : 0;
  const discountedPrice = centAmountDiscounted ? calculatePriceDecimals(centAmountDiscounted, fractionDigits) : 0;

  return {
    price,
    discount,
    fractionDigits,
    discountedPrice,
    currencyCode
  };
}
