import { categoriesApi } from '@/entities/categories/api/categoriesApi';

export * from '@/entities/categories/model/categories.mock.ts';
export * from '@/entities/categories/model/categories.types.ts';
export * from '@/entities/categories/lib/helpers/categories.queryArgs.ts';

export { categoriesApi };
export const { useGetCategoriesQuery } = categoriesApi;
