import { queryArgsProductProps } from '@/entities/product';

export const queryArgsByCategory = (categoryId: string, limit = 3) => ({
  'filter.query': queryArgsProductProps.filterQuery.categoryId(categoryId),
  limit
});
