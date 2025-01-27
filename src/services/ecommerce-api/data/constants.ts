import type { SrcsetPxAsc } from '@/shared/types/types';

export const COUNTRY = 'US';
export const LANGUAGE = 'en-US';

export const MONEY_SYMBOL = '$';
export const LIMIT_ON_PAGE = 18;
export const FRACTION_DIGITS = 2;
export const FRACTION_DOZENS = 10 ** FRACTION_DIGITS;

export const PROMOCODES = ['minus10', 'minus15'];

export const SRCSET_API: SrcsetPxAsc = [
  ['-small', '150w'],
  ['-medium', '400w'],
  ['-large', '1024w'] // actual postfix = 700px, but there are no larger sizes except original
] as const;
