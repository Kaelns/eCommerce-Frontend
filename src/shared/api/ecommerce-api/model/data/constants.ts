import type { SrcsetInPx } from '@/shared/api/ecommerce-api/model/types/types';

export const COUNTRY = 'US';
export const LANGUAGE = 'en-US';

export const SRCSET: SrcsetInPx = [
  ['-small', '150w'],
  ['-medium', '400w'],
  ['-large', '1024w'] // actual postfix = 700px, but there are no larger srcset sizes except original 2k+ resolution
] as const;

export const MOCK_PRICE = {
  price: 0,
  discount: 0,
  fractionDigits: 0,
  discountedPrice: 0,
  currencyCode: 'USD'
};
