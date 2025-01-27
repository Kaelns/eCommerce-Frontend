import type { AutocompleteOptions, ResponceOk } from '@/shared/types/types';
import dayjs from 'dayjs';
import getMaxDate from '@/utils/dates/getMaxDate';
import getMinDate from '@/utils/dates/getMinDate';

// * General

export const responceNotOk: ResponceOk = { ok: false };

// * Day Js
export const DATE_DASH_FORMAT = 'YYYY-MM-DD';
export const MAX_DATE_DASH = dayjs(getMaxDate()).format(DATE_DASH_FORMAT);
export const MAX_DATE = dayjs(getMaxDate());
export const MIN_DATE = dayjs(getMinDate());
export const USER_MIN_AGE = 13;
export const USER_MAX_AGE = 100;

// FIXME change
export const COUNTRY_LIST: AutocompleteOptions[] = [
  { label: 'United States', code: 'US', postalCodePattern: /^[0-9]{4,5}$/gm },
  { label: 'Russia', code: 'RU', postalCodePattern: /^[0-9]{6}$/gm },
  { label: 'Belarus', code: 'BY', postalCodePattern: /^[0-9]{6}$/gm }
];
