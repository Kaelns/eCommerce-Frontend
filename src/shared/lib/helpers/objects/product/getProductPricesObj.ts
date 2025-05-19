import type { Price } from '@commercetools/platform-sdk';
import type { PriceConverted } from '@/shared/model/types';

import { getProductPrice } from '@/shared/lib/helpers/objects/product/getProductPrice';

export function getProductPricesObj(prices: Price[]) {
  return prices.reduce<Record<string, PriceConverted>>((acc, priceObj) => {
    acc[priceObj.country ?? priceObj.value.currencyCode] = getProductPrice(priceObj);
    return acc;
  }, {});
}
