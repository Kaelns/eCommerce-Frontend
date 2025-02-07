import type { SearchTextQueryArgKey } from '@/shared/types/types';

export interface ConvertSearchReturn {
  fuzzy?: boolean;
  fuzzyLevel?: number;
  [x: SearchTextQueryArgKey]: string | undefined;
}
