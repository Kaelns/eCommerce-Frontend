import type { Price } from '@commercetools/platform-sdk';
import type { PriceConverted } from '@/shared/model/types';

import { calculatePriceDecimals } from '@/shared/lib/helpers/entities/product/number/calculatePriceDecimals';

export function getProductPrice(priceObj: null | Price | undefined): PriceConverted {
  if (!priceObj) {
    return {
      price: 0,
      discount: 0,
      fractionDigits: 0,
      discountedPrice: 0,
      currencyCode: 'USD'
    };
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
