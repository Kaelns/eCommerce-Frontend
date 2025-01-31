import type { convertToFilterParams } from '@/services/ecommerce-api/helpers/general/convertToFilterParams/convertToFilterParams';

import { LANGUAGE } from '@/services/ecommerce-api/data/constants';

export const PROPERTY = `text.${LANGUAGE}`;

export interface IConvertSearchReturn {
  fuzzy?: boolean;
  [PROPERTY]?: string;
  fuzzyLevel?: number;
}

export type IConvertToFilter = typeof convertToFilterParams;
