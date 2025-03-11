import type { SearchTextQueryArgKey } from '@/shared/model/types';

export interface ConvertSearchReturn {
  fuzzy?: boolean;
  fuzzyLevel?: number;
  [x: SearchTextQueryArgKey]: string | undefined;
}
