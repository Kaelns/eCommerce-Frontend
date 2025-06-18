import type { Price } from '@commercetools/platform-sdk';
import type { PriceTransformed } from '@/shared/api/ecommerce-api/model/types/types';

import { transformProductPrice } from '@/shared/api/ecommerce-api/lib/helpers/product/transformProductPrice';

export function mapTransformedProductPrices(prices: Price[]) {
  return prices.reduce<Record<string, PriceTransformed>>((acc, priceObj) => {
    acc[priceObj.country ?? priceObj.value.currencyCode] = transformProductPrice(priceObj);
    return acc;
  }, {});
}
