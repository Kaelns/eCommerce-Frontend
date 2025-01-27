import { LANGUAGE } from '@/services/ecommerce-api/data/constants';
import type { convertToFilterParams } from '@/services/ecommerce-api/helpers/general/convertToFilterParams/convertToFilterParams';

export const PROPERTY = `text.${LANGUAGE}`;

export interface IConvertSearchReturn {
  [PROPERTY]?: string;
  fuzzy?: boolean;
  fuzzyLevel?: number;
}

export type IConvertToFilter = typeof convertToFilterParams;
