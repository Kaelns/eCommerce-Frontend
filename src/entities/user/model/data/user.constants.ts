import type { Currencies } from '@/shared/model/types';

import dayjs from 'dayjs';

import { getMaxDate, getMinDate } from '@/shared/lib/utils';
import { DATE_DASH_FORMAT } from '@/shared/model/data';

export const USER_INIT_COUNTRY = 'US';
export const USER_INIT_LANGUAGE = 'en-US';
export const USER_INIT_CURRENCY: Currencies = 'USD';

export const USER_MIN_AGE = 13;
export const USER_MAX_AGE = 100;

export const USER_MAX_DATE = dayjs(getMaxDate(USER_MIN_AGE));
export const USER_MAX_DATE_DASH = USER_MAX_DATE.format(DATE_DASH_FORMAT);
export const USER_MIN_DATE = dayjs(getMinDate(USER_MAX_AGE));
