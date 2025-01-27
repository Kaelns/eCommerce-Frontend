import { MAX_AGE } from '@/shared/zod/%%%BADvalidation/data/validation.constants';

export default function getMinDate(): Date {
  const today = new Date();
  today.setFullYear(today.getFullYear() - MAX_AGE);
  return today;
}
