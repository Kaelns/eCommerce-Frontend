import { FILTER_COLORS } from '@/shared/data/constants';

export const MIN_MONEY = 0;
export const MAX_MONEY = 5000;
export const NO_CATEGORY = 'no-category';
export const SLIDER_MIN_DISTANCE = 10;
export const SLIDER_STEP = 10;

export enum Filters {
  CATEGORY = 'Category',
  COLOR = 'Color',
  PRICE = 'Price'
}

export const FILTERS_ORDER = [Filters.CATEGORY, Filters.PRICE, Filters.COLOR];

export enum Sort {
  NO_SORT = 'No sort',

  NAME_ASC = 'Ascending by name',
  NAME_DESC = 'Descending by name',
  PRICE_ASC = 'Ascending price',
  PRICE_DESC = 'Descending price'
}

export const FILTER_COLORS_STATE = Object.fromEntries(Object.entries(FILTER_COLORS).map(([key]) => [key, false])) as Record<
  keyof typeof FILTER_COLORS,
  boolean
>;

export { FILTER_COLORS };
