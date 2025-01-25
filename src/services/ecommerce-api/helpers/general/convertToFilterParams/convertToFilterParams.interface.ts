import { LANGUAGE } from '@/services/constants';
import type { convertToFilterParams } from '@/services/ecommerce/helpers/general/convertToFilterParams/convertToFilterParams';

export const PROPERTY = `text.${LANGUAGE}`;

export interface IConvertSearchReturn {
  [PROPERTY]?: string;
  fuzzy?: boolean;
  fuzzyLevel?: number;
}

export type IConvertToFilter = typeof convertToFilterParams;
