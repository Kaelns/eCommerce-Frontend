import { USER_MIN_AGE } from '@/entities/user';

export function getMaxDate(): Date {
  const today = new Date();
  today.setFullYear(today.getFullYear() - USER_MIN_AGE);
  return today;
}
