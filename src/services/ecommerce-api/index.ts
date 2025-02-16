import { authApi, usersApi, productApi } from '@/services/ecommerce-api/rtk-query';

export { convertSortQueryArgs } from '@/services/ecommerce-api/helpers/general/convertFilterToQueryArgs/helpers';
export { convertFilterToQueryArgs } from '@/services/ecommerce-api/helpers/general/convertFilterToQueryArgs/convertFilterToQueryArgs';

export { MOCK_CART } from '@/services/ecommerce-api/data/mocks';
export { queryArgsProductProps } from '@/services/ecommerce-api/helpers/products/queryArgsProductProps';
export { ecommerceApi as ecommerceApiSlice } from '@/services/ecommerce-api/rtk-query/ecommerceApi.slice';

export {
  COUNTRY,
  LANGUAGE,
  SRCSET_API,
  PROMOCODES,
  MONEY_SYMBOL,
  LIMIT_ON_PAGE,
  FRACTION_DIGITS,
  FRACTION_DOZENS
} from '@/services/ecommerce-api/data/constants';

export { authApi, usersApi, productApi };
export const { useStartSessionQuery } = authApi;
export const { useCheckIsUserExistByEmailMutation } = usersApi;
export const { useGetCategoriesQuery, useGetProductsQuery, useGetProductColorsQuery } = productApi;
// export const { useCheckIsUserExistByEmailMutation } = usersApi;
