import type { CategoriesCollection } from '@/shared/types/types';
import type { QueryArgsProductsZod } from '@/shared/zod/ecommerce/product.schemas';
import type { ProductProjection, CategoryPagedQueryResponse, ProductProjectionPagedSearchResponse } from '@commercetools/platform-sdk';

import { LIMIT_ON_PAGE } from '@/services/ecommerce-api/data/constants';
import { ecommerceApi } from '@/services/ecommerce-api/rtk-query/ecommerceApi.slice';
import { convertCategories } from '@/services/ecommerce-api/helpers/products/convertCategories';

const productsPath = '/products';

export const productApi = ecommerceApi
  .enhanceEndpoints({
    addTagTypes: ['Products', 'ProductByKey']
  })
  .injectEndpoints({
    endpoints: (build) => ({
      // TODO Prefetch
      getProducts: build.query<ProductProjectionPagedSearchResponse, QueryArgsProductsZod | void>({
        providesTags: ['Products'],
        query: (queryArgs) => ({
          url: productsPath,
          params: {
            limit: LIMIT_ON_PAGE,
            ...queryArgs
          }
        })
      }),
      getProductByKey: build.query<ProductProjection, string>({
        providesTags: (key) => [{ key, type: 'ProductByKey' }],
        query: (key) => `${productsPath}/${key}`
      }),
      getCategories: build.query<CategoriesCollection, void>({
        query: () => `${productsPath}/categories`,
        transformResponse: (response: CategoryPagedQueryResponse) => {
          const categories = response.results;
          return convertCategories(categories);
        }
      })

      // fetchCategoryProducts
    }),
    overrideExisting: 'throw'
  });
