export const SLIDER_MIN_DISTANCE = 10;
export const SLIDER_STEP = 10;

export enum Filters {
  CATEGORY = 'Category',
  COLOR = 'Color',
  PRICE = 'Price'
}

export const FILTERS_ORDER = [Filters.CATEGORY, Filters.PRICE, Filters.COLOR];

export enum FiltersSort {
  NO_SORT = 'No sort',

  NAME_ASC = 'Ascending by name',
  NAME_DESC = 'Descending by name',
  PRICE_ASC = 'Ascending price',
  PRICE_DESC = 'Descending price'
}
