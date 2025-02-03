import type { EcommerceExtendedQuery } from '@/services/ecommerce-api/rtk-query/types/types';

import { baseQuery } from '@/services/ecommerce-api/rtk-query/config/baseQuery';
import { serializeError } from '@/services/ecommerce-api/rtk-query/helpers/serializeError';
import { restoreUserAndRequery } from '@/services/ecommerce-api/rtk-query/config/extendedQuery/helpers/restoreUserAndRequery';
import { setIsLoggedAfterQuery } from '@/services/ecommerce-api/rtk-query/config/extendedQuery/helpers/setIsLoggedAfterQuery';

import { HttpStatus, AlertAPIText, AlertSeverity } from '@/shared/data/enums';

// TODO Check functionality

/**
 * baseQueryExtended dispatch doesn't uses actions from slices to avoid errors with circular dependencies like:
 * "Can't use rootReducer before initialization"
 */
export const extendedQuery: EcommerceExtendedQuery = async (args, queryApi, extraOptions) => {
  let result = await baseQuery(args, queryApi, extraOptions);

  switch (result?.error?.status) {
    case HttpStatus.FORBIDDEN:
      queryApi.dispatch({ type: 'alert/showAlertAction', payload: { message: AlertAPIText.USER_FORBIDDEN_ERROR, severity: AlertSeverity.ERROR } });
      break;
    case HttpStatus.INTERNAL_SERVER_ERROR:
      queryApi.dispatch({ type: 'alert/showAlertAction', payload: { message: AlertAPIText.SERVER_ERROR, severity: AlertSeverity.ERROR } });
      break;
    case HttpStatus.UNAUTHORIZED: {
      const newResult = await restoreUserAndRequery(args, queryApi, extraOptions);
      if (newResult && !newResult.error) {
        result = newResult;
      } else {
        queryApi.dispatch({ type: 'auth/setIsLoggedAuthAction', payload: { isLogged: false } });
        queryApi.dispatch({
          type: 'alert/showAlertAction',
          payload: { message: AlertAPIText.USER_UNAUTHORIZED_ERROR, severity: AlertSeverity.ERROR }
        });
      }
      break;
    }
    default:
  }

  setIsLoggedAfterQuery(queryApi);

  if (import.meta.env.PROD) {
    console.log('Responce ', '\n', result.data);
  }

  return result.error ? { ...result, error: serializeError(result?.error) } : result;
};
