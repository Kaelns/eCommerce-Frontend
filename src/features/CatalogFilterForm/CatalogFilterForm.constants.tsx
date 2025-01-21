export const SLIDER_MIN_DISTANCE = 10;
export const SLIDER_STEP = 10;

export enum Filters {
  PRICE = 'Price',
  COLOR = 'Color',
  CATEGORY = 'Category'
}

export const filtersOrder = [Filters.CATEGORY, Filters.PRICE, Filters.COLOR];

export const FilterColors = {
  Red: '#ff0000',
  Tan: '#d2b48c',
  Blue: '#0288d1',
  Gold: '#ffc107',
  Gray: '#9e9e9e',
  Pink: '#ed4b82',
  White: '#ffffff',
  Beige: '#f5f5dc',
  Black: '#000000',
  Brown: '#8b4513',
  Green: '#2e7d32',
  Orange: '#ff9800',
  Purple: '#9c27b0',
  Silver: '#c0c0c0',
  Transparent: 'transparent'
};

export const FilterColorsState = {
  Tan: false,
  Red: false,
  Blue: false,
  Gold: false,
  Gray: false,
  Pink: false,
  White: false,
  Beige: false,
  Black: false,
  Brown: false,
  Green: false,
  Orange: false,
  Purple: false,
  Silver: false,
  Transparent: false
};
