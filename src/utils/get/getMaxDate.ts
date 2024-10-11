import { MIN_AGE } from '@/features/validation/data/validation.constants';

export default function getMaxDate(): Date {
  const today = new Date();
  today.setFullYear(today.getFullYear() - MIN_AGE);
  return today;
}
