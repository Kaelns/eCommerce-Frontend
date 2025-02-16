import type { CategoriesCollection } from '@/shared/types/types';
import type { Colors } from '@/services/ecommerce-api/rtk-query/types/types';
import type { QueryArgsProductsZod } from '@/shared/zod/ecommerce/product.schemas';
import type {
  TermFacetResult,
  ProductProjection,
  CategoryPagedQueryResponse,
  ProductProjectionPagedSearchResponse
} from '@commercetools/platform-sdk';

import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { LIMIT_ON_PAGE } from '@/services/ecommerce-api/data/constants';
import { ecommerceApi } from '@/services/ecommerce-api/rtk-query/ecommerceApi.slice';
import { convertCategories } from '@/services/ecommerce-api/helpers/products/convertCategories';
import { queryArgsProductProps } from '@/services/ecommerce-api/helpers/products/queryArgsProductProps';

import { selectStateAny } from '@/shared/redux/helpers';

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
      }),
      getProductColors: build.query<Colors | null, string>({
        providesTags: ['Products'],
        query: (language) => ({
          url: productsPath,
          params: {
            limit: 0,
            facet: queryArgsProductProps.filterQuery.colorsKey(language)
          }
        }),
        transformResponse: (response: ProductProjectionPagedSearchResponse, _meta: unknown, language: string) => {
          const facetsResponce = response.facets[queryArgsProductProps.filterQuery.colorsKey(language)] as TermFacetResult;
          if (!facetsResponce?.terms?.length) {
            return null;
          }
          return facetsResponce.terms.reduce<Colors>((acc, term) => {
            const colorValue = term.term as string;
            const [colorName, colorHex] = colorValue.split(':');
            acc[colorName] = { value: colorValue, hex: colorHex };
            return acc;
          }, {});
        }
      })
    }),
    overrideExisting: 'throw'
  });
//  FIXME delete if not used

export const selectGetCategories = createDraftSafeSelector(
  [selectStateAny],
  (state) => productApi.endpoints.getCategories.select()(state).data
);
