import type { SrcsetPxAsc } from '@/entities/product/model/product.types';

export const ProductConsts = {
  MIN_MONEY: 0,
  MAX_MONEY: 5000,

  LIMIT_ON_PAGE: 18
} as const;

export const SRCSET_API: SrcsetPxAsc = [
  ['-small', '150w'],
  ['-medium', '400w'],
  ['-large', '1024w'] // actual postfix = 700px, but there are no larger sizes except original
] as const;
