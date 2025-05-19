import type { SrcsetInPx } from '@/shared/model/types';

export const BADGE_FONT_SIZE = '1.1rem';

// * Day Js
export const DATE_DASH_FORMAT = 'YYYY-MM-DD';

// * Ecommerce

export const SRCSET: SrcsetInPx = [
  ['-small', '150w'],
  ['-medium', '400w'],
  ['-large', '1024w'] // actual postfix = 700px, but there are no larger srcset sizes except original 2k+ resolution
] as const;
