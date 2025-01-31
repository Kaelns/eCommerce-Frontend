import { USER_MAX_AGE } from '@/services/ecommerce-api/data/constants';

export default function getMinDate(): Date {
  const today = new Date();
  today.setFullYear(today.getFullYear() - USER_MAX_AGE);
  return today;
}
