import { queryArgsProductProps } from '@/shared/api/ecommerce-api';

// Todo: create builder for query args and put to shared api

export const queryArgsByCategory = (categoryId: string, limit = 3) => ({
  'filter.query': queryArgsProductProps.filterQuery.categoryId(categoryId),
  limit
});
