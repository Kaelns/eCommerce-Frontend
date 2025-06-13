import type { CategoriesCollection } from '@/entities/categories';
import type { CategoryPagedQueryResponse } from '@commercetools/platform-sdk';

import { ecommerceApi } from '@/shared/api/ecommerce-api';

import { convertCategories } from '@/entities/categories/lib/helpers/convertCategories';

const productsPath = '/products';

export const categoriesApi = ecommerceApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<CategoriesCollection, void>({
      query: () => `${productsPath}/categories`,
      transformResponse: (response: CategoryPagedQueryResponse) => {
        const categories = response.results;
        return convertCategories(categories);
      }
    })
  }),
  overrideExisting: 'throw'
});
