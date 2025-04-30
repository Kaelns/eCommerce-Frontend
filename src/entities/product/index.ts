import { productApi } from '@/entities/product/api/productApi';

export { getProductPricesObj } from '@/entities/product/lib/helpers/objects/getProductPricesObj';

export { queryArgsProductProps } from '@/entities/product/lib/helpers/queryArgsProductProps';

export * from '@/entities/product/model/product.types.ts';
export * from '@/entities/product/model/product.constants.ts';

export { productApi };
export const { useGetProductsQuery, useGetProductColorsQuery } = productApi;

export { ProductCard } from '@/entities/product/ui/ProductCard';
