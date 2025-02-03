import type { AutocompleteOptions } from '@/shared/types/types';

import dayjs from 'dayjs';

import getMaxDate from '@/utils/dates/getMaxDate';
import getMinDate from '@/utils/dates/getMinDate';

// * General
export const NO_CATEGORY = 'no-category';
export const NO_CATEGORY_NAME = 'No category';
export const MIN_MONEY = 0;
export const MAX_MONEY = 5000;

// * Day Js
export const DATE_DASH_FORMAT = 'YYYY-MM-DD';
export const MAX_DATE_DASH = dayjs(getMaxDate()).format(DATE_DASH_FORMAT);
export const MAX_DATE = dayjs(getMaxDate());
export const MIN_DATE = dayjs(getMinDate());

// FIXME change
export const COUNTRY_LIST: AutocompleteOptions[] = [
  { label: 'United States', code: 'US', postalCodePattern: /^[0-9]{4,5}$/gm },
  { label: 'Russia', code: 'RU', postalCodePattern: /^[0-9]{6}$/gm },
  { label: 'Belarus', code: 'BY', postalCodePattern: /^[0-9]{6}$/gm }
] as const;

// * Colors directly from ecommerceAPI
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
