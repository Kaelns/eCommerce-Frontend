import { LIMIT_ON_PAGE } from '@/services/ecommerce-api/data/constants';
import { convertCategories } from '@/services/ecommerce-api/helpers/products/convertCategories';
import { ecommerceApiSlice } from '@/services/ecommerce-api/redux/ecommerceApiSlice';
import type { Categories } from '@/shared/types/types';
import type { QueryArgsProducts } from '@/shared/zod/ecommerce/product.schema';
import type { CategoryPagedQueryResponse, ProductProjection, ProductProjectionPagedSearchResponse } from '@commercetools/platform-sdk';

const productsPath = '/products';

export const productApi = ecommerceApiSlice
  .enhanceEndpoints({
    addTagTypes: ['Products', 'ProductByKey']
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getProducts: build.query<ProductProjectionPagedSearchResponse, QueryArgsProducts>({
        query: (queryArgs) => ({
          url: productsPath,
          params: {
            limit: LIMIT_ON_PAGE,
            ...queryArgs
          }
        }),
        providesTags: ['Products']
      }),
      getProductByKey: build.query<ProductProjection, string>({
        query: (key) => `${productsPath}/${key}`,
        providesTags: (key) => [{ type: 'ProductByKey', key }]
      }),
      // TODO Prefetch
      getCategories: build.query<Categories, void>({
        query: () => `${productsPath}/categories`,
        transformResponse: (response: { data: CategoryPagedQueryResponse }) => {
          const categories = response.data.results;
          return convertCategories(categories);
        }
      })
    }),
    overrideExisting: 'throw'
  });
