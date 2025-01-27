import { authApi } from '@/services/ecommerce-api/redux/model/authApi';
import { productApi } from '@/services/ecommerce-api/redux/model/productApi';
import { usersApi } from '@/services/ecommerce-api/redux/model/usersApi';

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

export { MOCK_CART } from '@/services/ecommerce-api/data/mocks';

export { ecommerceApiSlice } from '@/services/ecommerce-api/redux/ecommerceApiSlice';

export const { useStartSessionQuery } = authApi;
export const { useCheckIsUserExistByEmailMutation } = usersApi;
export const { useGetCategoriesQuery } = productApi;
// export const { useCheckIsUserExistByEmailMutation } = usersApi;
