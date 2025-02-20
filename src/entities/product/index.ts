import { productApi } from '@/entities/product/api/productApi';

export { queryArgsProductProps } from '@/entities/product/lib/helpers/queryArgsProductProps';

export * from '@/entities/product/model/product.types.ts';
export * from '@/entities/product/model/product.constants.ts';

export { productApi };
export const { useGetProductsQuery, useGetProductColorsQuery } = productApi;
