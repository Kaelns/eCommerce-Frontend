import type { Colors, QueryProductsArgs } from '@/entities/product/model/product.types';
import type { TermFacetResult, ProductProjection, ProductProjectionPagedSearchResponse } from '@commercetools/platform-sdk';

import { ecommerceApi } from '@/shared/api/ecommerce-api';

import { ProductConsts } from '@/entities/product/model/product.constants';
import { queryArgsProductProps } from '@/entities/product/lib/helpers/queryArgsProductProps';

const productsPath = '/products';

export const productApi = ecommerceApi
  .enhanceEndpoints({
    addTagTypes: ['Products', 'ProductByKey']
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getProducts: build.query<ProductProjectionPagedSearchResponse, QueryProductsArgs | void>({
        providesTags: ['Products'],
        query: (queryArgs) => ({
          url: productsPath,
          params: {
            limit: ProductConsts.LIMIT_ON_PAGE,
            ...queryArgs
          }
        })
      }),
      getProductByKey: build.query<ProductProjection, string>({
        providesTags: (key) => [{ key, type: 'ProductByKey' }],
        query: (key) => `${productsPath}/${key}`
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
