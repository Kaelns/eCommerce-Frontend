import type { AutocompleteOptions } from '@/entities/user/model/types/user.types';

import dayjs from 'dayjs';

import getMaxDate from '@/shared/lib/utils/dates/getMaxDate';
import getMinDate from '@/shared/lib/utils/dates/getMinDate';

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
