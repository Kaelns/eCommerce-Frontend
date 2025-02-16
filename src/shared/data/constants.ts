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
