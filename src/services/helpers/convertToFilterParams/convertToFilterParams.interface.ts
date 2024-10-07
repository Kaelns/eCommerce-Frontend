import { LANGUAGE } from '@/services/ECommerceInitApi.constants';
import { convertToFilterParams } from '@/services/helpers/convertToFilterParams/convertToFilterParams';

export const PROPERTY = `text.${LANGUAGE}`;

export interface IConvertSearchReturn {
  [PROPERTY]?: string;
  fuzzy?: boolean;
  fuzzyLevel?: number;
}

export type IConvertToFilter = typeof convertToFilterParams;
