import type { SearchTextQueryArgKey } from '@/shared/api/ecommerce-api';

export interface ConvertSearchReturn {
  fuzzy?: boolean;
  fuzzyLevel?: number;
  [x: SearchTextQueryArgKey]: string | undefined;
}
