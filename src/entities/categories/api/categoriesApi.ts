import type { CategoriesCollection } from '@/entities/categories';
import type { CategoryPagedQueryResponse } from '@commercetools/platform-sdk';

import { convertCategories } from '@/entities/product/lib/helpers/objects/convertCategories';

import { ecommerceApi } from '@/shared/api/ecommerce-api/ecommerceApi.slice';

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
