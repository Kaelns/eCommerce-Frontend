import type { SrcsetPxAsc } from '@/entities/product/model/product.types';

export const ProductConsts = {
  NO_CATEGORY: 'no-category',
  NO_CATEGORY_NAME: 'No category',

  MIN_MONEY: 0,
  MAX_MONEY: 5000,

  LIMIT_ON_PAGE: 18,
  MONEY_SYMBOL: '$',

  FRACTION_DIGITS: 2,
  FRACTION_DOZENS: 10 ** 2
} as const;

export const SRCSET_API: SrcsetPxAsc = [
  ['-small', '150w'],
  ['-medium', '400w'],
  ['-large', '1024w'] // actual postfix = 700px, but there are no larger sizes except original
] as const;
