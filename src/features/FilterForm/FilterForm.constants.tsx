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
  Beige: '#F5F5DC',
  Black: '#000',
  Blue: '#0288d1',
  Brown: '#8b4513',
  Gold: '#ffc107',
  Gray: '#9e9e9e',
  Green: '#2e7d32',
  Orange: '#ff9800',
  Pink: '#ed4b82',
  Purple: '#9c27b0',
  Red: '#ff0000',
  Silver: '#C0C0C0',
  Transparent: 'transparent',
  Tan: '#D2B48C'
};

export const FilterColorsState = {
  White: false,
  Beige: false,
  Black: false,
  Blue: false,
  Brown: false,
  Gold: false,
  Gray: false,
  Green: false,
  Orange: false,
  Pink: false,
  Purple: false,
  Red: false,
  Silver: false,
  Transparent: false,
  Tan: false
};
