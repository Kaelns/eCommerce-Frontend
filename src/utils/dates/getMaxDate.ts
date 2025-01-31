import { USER_MIN_AGE } from '@/services/ecommerce-api/data/constants';

export default function getMaxDate(): Date {
  const today = new Date();
  today.setFullYear(today.getFullYear() - USER_MIN_AGE);
  return today;
}
