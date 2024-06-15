import { LIMIT_ON_PAGE } from '@/services/ECommerceInitApi.constants';

export function convertToMaxPages(productAmount: number): number {
  return Math.ceil(productAmount / LIMIT_ON_PAGE);
}
