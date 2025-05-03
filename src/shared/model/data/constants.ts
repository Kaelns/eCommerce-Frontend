import dayjs from 'dayjs';

import { getMaxDate, getMinDate } from '@/shared/lib/utils';

export const BADGE_FONT_SIZE = '1.1rem';

// * Day Js
export const DATE_DASH_FORMAT = 'YYYY-MM-DD';
export const MAX_DATE_DASH = dayjs(getMaxDate()).format(DATE_DASH_FORMAT);
export const MAX_DATE = dayjs(getMaxDate());
export const MIN_DATE = dayjs(getMinDate());
