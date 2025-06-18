export * from '@/shared/api/ecommerce-api/model/types/types';
export * from '@/shared/api/ecommerce-api/model/data/constants';

export { ecommerceApi } from '@/shared/api/ecommerce-api/ecommerceApi.slice';
export { RTKQueryError } from '@/shared/api/ecommerce-api/model/types/RTKQueryError';
export { createSrcSet } from '@/shared/api/ecommerce-api/lib/helpers/image/createSrcSet';
export { getErrorMessage } from '@/shared/api/ecommerce-api/lib/helpers/core/getErrorMessage';
export { queryArgsProductProps } from '@/shared/api/ecommerce-api/lib/helpers/product/queryArgsProductProps';
export { mapTransformedProductPrices } from '@/shared/api/ecommerce-api/lib/helpers/product/mapTransformedProductPrices';
