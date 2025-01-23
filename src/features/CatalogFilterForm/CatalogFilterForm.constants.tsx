export const SLIDER_MIN_DISTANCE = 10;
export const SLIDER_STEP = 10;

export enum Filters {
  PRICE = 'Price',
  COLOR = 'Color',
  CATEGORY = 'Category'
}

export const FILTERS_ORDER = [Filters.CATEGORY, Filters.PRICE, Filters.COLOR];

export const FILTER_COLORS = {
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
} as const;

export const FILTER_COLORS_STATE = Object.fromEntries(Object.entries(FILTER_COLORS).map(([key]) => [key, false])) as Record<
  keyof typeof FILTER_COLORS,
  boolean
>;
