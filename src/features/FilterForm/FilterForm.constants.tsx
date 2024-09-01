export const SLIDER_MIN_DISTANCE = 10;
export const SLIDER_STEP = 10;

export enum Filters {
  CATEGORY = 'Category',
  PRICE = 'Price',
  COLOR = 'Color'
}

export const filtersOrder = [Filters.CATEGORY, Filters.PRICE, Filters.COLOR];

export const FilterColors = {
  White: '#FFF',
  Orange: '#ff9800',
  Pink: '#ed4b82',
  Silver: '#C0C0C0',
  Brown: '#3e2723',
  Gold: '#ffc107',
  Tan: '#D2B48C',
  Purple: '#9c27b0',
  Green: '#2e7d32',
  Blue: '#0288d1',
  Gray: '#9e9e9e',
  Black: '#000'
};

export const FilterColorsState = {
  White: false,
  Orange: false,
  Pink: false,
  Silver: false,
  Brown: false,
  Gold: false,
  Tan: false,
  Purple: false,
  Green: false,
  Blue: false,
  Gray: false,
  Black: false
};
