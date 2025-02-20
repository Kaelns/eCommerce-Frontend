import { USER_MAX_AGE } from '@/entities/user';

export default function getMinDate(): Date {
  const today = new Date();
  today.setFullYear(today.getFullYear() - USER_MAX_AGE);
  return today;
}
